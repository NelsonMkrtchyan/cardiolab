/**
 * Migration script to populate Sanity with services/pricing data from constants
 *
 * Usage: npx tsx scripts/sanity-migration/migrate-services.ts
 */

import { createClient } from '@sanity/client';
import { priceList } from '../../src/constants/priceList';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-12-04',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function migrateServices() {
  console.log('Starting services migration...');
  console.log(`Total services to migrate: ${priceList.length}`);

  for (const service of priceList) {
    try {
      const slug = createSlug(service.name.en || service.name.am || '');

      // Map doctor IDs to references
      const doctorReferences = service.doctorsIds?.map((doctorId) => ({
        _type: 'reference',
        _ref: `staff-${doctorId}`,
        _key: `doctor-${doctorId}`,
      })) || [];

      const doc = {
        _type: 'service',
        _id: `service-${service.id}`,
        id: service.id,
        slug: {
          _type: 'slug',
          current: slug,
        },
        name: service.name,
        description: service.description,
        category: service.category,
        price: service.price,
        hideInServicesPage: service.hideInServicesPage || false,
        hideInPriceListPage: service.hideInPriceListPage || false,
        doneByNurses: service.doneByNurses || false,
        doctors: doctorReferences,
      };

      await client.createOrReplace(doc);
      console.log(`✓ Migrated: ${service.name.en || service.name.am} (ID: ${service.id})`);
    } catch (error) {
      console.error(`✗ Failed to migrate service ID ${service.id}:`, error);
    }
  }

  console.log('Services migration completed!');
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
