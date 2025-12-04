/**
 * Migration script to populate Sanity with staff data from constants
 *
 * Usage:
 * 1. First, create a Sanity project at https://www.sanity.io/manage
 * 2. Add NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN to .env.local
 * 3. Run: npx tsx scripts/sanity-migration/migrate-staff.ts
 */

import { createClient } from '@sanity/client';
import { staffMembers } from '../../src/constants/staff';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-12-04',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function migrateStaff() {
  console.log('Starting staff migration...');
  console.log(`Total staff members to migrate: ${staffMembers.length}`);

  for (const staff of staffMembers) {
    try {
      const doc = {
        _type: 'staff',
        _id: `staff-${staff.id}`,
        id: staff.id,
        name: staff.name,
        role: staff.role,
        category: staff.category,
        visibility: staff.visibility,
        personalInfo: staff.personalInfo,
      };

      // Note: Images will need to be uploaded manually or via Sanity's asset API
      // For now, we'll skip the image field and you can add them through the Studio

      await client.createOrReplace(doc);
      console.log(`✓ Migrated: ${staff.name.en || staff.name.am} (ID: ${staff.id})`);
    } catch (error) {
      console.error(`✗ Failed to migrate staff ID ${staff.id}:`, error);
    }
  }

  console.log('Staff migration completed!');
}

migrateStaff()
  .then(() => {
    console.log('✓ All staff data migrated successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('✗ Migration failed:', error);
    process.exit(1);
  });
