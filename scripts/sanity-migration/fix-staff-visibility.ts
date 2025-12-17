/**
 * Fix script to update visibility field in Sanity staff documents
 * Converts from boolean (visibility: true) to object structure
 * (visibility: { showInStaffPage: true, showInLandingPage: true })
 *
 * Usage:
 * npx tsx scripts/sanity-migration/fix-staff-visibility.ts
 */

import "./load-env";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-12-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function fixVisibility() {
  console.log("Starting visibility fix...");

  try {
    // Fetch all staff documents
    const staff = await client.fetch('*[_type == "staff"]');
    console.log(`Found ${staff.length} staff members to update`);

    for (const member of staff) {
      try {
        // Check if visibility is already an object (skip if already fixed)
        if (typeof member.visibility === "object" && member.visibility !== null) {
          console.log(
            `⊘ Skipped (already object): ${member.name?.en || member.name?.am || member.id}`
          );
          continue;
        }

        // Convert boolean visibility to object structure
        // Set both flags to true for existing staff (they were all visible)
        const updatedDoc = {
          ...member,
          visibility: {
            showInStaffPage: true,
            showInLandingPage: true,
          },
        };

        await client.createOrReplace(updatedDoc);
        console.log(
          `✓ Fixed: ${member.name?.en || member.name?.am} (ID: ${member.id})`
        );
      } catch (error) {
        console.error(
          `✗ Failed to update staff ID ${member.id}:`,
          error instanceof Error ? error.message : error
        );
      }
    }

    console.log("\n✓ Visibility fix completed!");
  } catch (error) {
    console.error("✗ Failed to fetch staff:", error);
    throw error;
  }
}

fixVisibility()
  .then(() => {
    console.log("✓ All visibility fields updated successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("✗ Fix failed:", error);
    process.exit(1);
  });
