/**
 * Migration script to populate Sanity with services/pricing data from constants
 *
 * This script:
 * 1. Reads service data from src/constants/priceList.tsx
 * 2. Converts category values from camelCase to kebab-case
 * 3. Transforms doctor IDs to Sanity document references
 * 4. Converts description strings to localized objects
 * 5. Populates Sanity with service documents
 *
 * Usage: npx tsx scripts/sanity-migration/migrate-services.ts
 */

import "./load-env";
import { createClient } from "@sanity/client";
import { priceListData } from "../../src/constants/priceList";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-12-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Get the services array (same for all locales, we use en)
const services = priceListData.en;

/**
 * Convert category value from constants format to Sanity schema format
 * Constants use camelCase, Sanity schema uses kebab-case
 */
function convertCategory(
  category: string
): "consultation" | "cardiac-care" | "ultrasound" | "duplex-scan" | "preventive-screening" {
  const categoryMap: Record<string, any> = {
    consultation: "consultation",
    cardiacCare: "cardiac-care",
    ultraSound: "ultrasound",
    duplexScan: "duplex-scan",
    preventiveScreening: "preventive-screening",
  };
  return categoryMap[category] || category;
}

/**
 * Create a URL-friendly slug from text
 */
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Transform description to localized object format
 * Constants have empty string, schema expects { am, en, ru } object
 */
function transformDescription(description: string | undefined) {
  return {
    am: description || "",
    en: description || "",
    ru: "",
  };
}

async function migrateServices() {
  console.log("Starting services migration...");
  console.log(`Total services to migrate: ${services.length}`);

  let successCount = 0;
  let failureCount = 0;

  for (const service of services) {
    try {
      // Generate slug from service name (preferring English)
      const slug = createSlug(service.name.en || service.name.am || "");

      // Convert category to kebab-case format
      const category = convertCategory(service.category);

      // Transform doctor IDs to Sanity references
      // Note: No _key needed for array items in Sanity references
      const doctorReferences = service.doctorsList?.map((doctorId: number) => ({
        _type: "reference",
        _ref: `staff-${doctorId}`,
      })) || [];

      // Create the service document matching Sanity schema
      const doc = {
        _type: "service",
        _id: `service-${service.id}`,
        id: service.id,
        slug: {
          _type: "slug",
          current: slug,
        },
        // Name keeps multi-locale structure (am, en)
        // Russian (ru) will be empty since it's not in priceList
        name: {
          am: service.name.am || "",
          en: service.name.en || "",
          ru: "",
        },
        // Description transformed to localized object
        description: transformDescription(service.description),
        // Category converted from camelCase to kebab-case
        category: category,
        price: service.price,
        hideInServicesPage: service.hideInServicesPage || false,
        hideInPriceListPage: service.hideInPriceListPage || false,
        doneByNurses: service.doneByNurses || false,
        // Doctor array properly formatted as references
        doctors: doctorReferences,
      };

      await client.createOrReplace(doc);
      console.log(
        `✓ Migrated: ${service.name.en || service.name.am} (ID: ${service.id})`
      );
      successCount++;
    } catch (error) {
      console.error(
        `✗ Failed to migrate service ID ${service.id}:`,
        error instanceof Error ? error.message : error
      );
      failureCount++;
    }
  }

  console.log("\n=== Services Migration Summary ===");
  console.log(`✓ Successfully migrated: ${successCount} services`);
  console.log(`✗ Failed migrations: ${failureCount} services`);
  console.log("==================================\n");
}

migrateServices()
  .then(() => {
    console.log('✓ All services data migrated successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('✗ Migration failed:', error);
    process.exit(1);
  });
