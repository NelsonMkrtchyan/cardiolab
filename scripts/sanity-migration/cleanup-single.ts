/**
 * Cleanup script to delete documents of a SPECIFIC type from Sanity
 *
 * Usage:
 *   npx tsx scripts/sanity-migration/cleanup-single.ts staff
 *   npx tsx scripts/sanity-migration/cleanup-single.ts service
 *   npx tsx scripts/sanity-migration/cleanup-single.ts gallery
 */

import './load-env';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-12-04',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const VALID_TYPES = [
  'staff',
  'service',
  'podcast',
  'news',
  'gallery',
  'patientGuide',
  'doctorGuide',
];

async function deleteDocumentsByType(docType: string): Promise<number> {
  try {
    // Fetch all document IDs of this type
    const query = `*[_type == $docType]._id`;
    const ids = await client.fetch(query, { docType });

    if (ids.length === 0) {
      console.log(`No ${docType} documents found`);
      return 0;
    }

    console.log(`Found ${ids.length} ${docType} document(s)`);
    console.log('Deleting...');

    // Delete in batches
    const transaction = client.transaction();
    ids.forEach((id: string) => {
      transaction.delete(id);
    });

    await transaction.commit();
    console.log(`✓ Successfully deleted ${ids.length} ${docType} document(s)`);
    return ids.length;
  } catch (error) {
    console.error(`✗ Failed to delete ${docType} documents:`, error);
    throw error;
  }
}

async function cleanup() {
  const docType = process.argv[2];

  if (!docType) {
    console.error('Error: Please specify a document type');
    console.log('\nUsage: npx tsx scripts/sanity-migration/cleanup-single.ts <type>');
    console.log('\nAvailable types:');
    VALID_TYPES.forEach((type) => console.log(`  - ${type}`));
    process.exit(1);
  }

  if (!VALID_TYPES.includes(docType)) {
    console.error(`Error: Invalid document type "${docType}"`);
    console.log('\nValid types:');
    VALID_TYPES.forEach((type) => console.log(`  - ${type}`));
    process.exit(1);
  }

  // Verify configuration
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
  }
  if (!process.env.SANITY_API_TOKEN) {
    throw new Error('Missing SANITY_API_TOKEN');
  }

  console.log('🗑️  SANITY CLEANUP - Single Type');
  console.log('================================\n');
  console.log(`Document Type: ${docType}`);
  console.log(`Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
  console.log(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}\n`);

  const count = await deleteDocumentsByType(docType);

  console.log('\n================================');
  console.log(`✓ Cleanup complete! Deleted ${count} document(s)`);
}

cleanup()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n✗ Cleanup failed:', error);
    process.exit(1);
  });
