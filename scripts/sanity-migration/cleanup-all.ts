/**
 * Cleanup script to delete ALL documents from Sanity
 *
 * ⚠️  WARNING: This will permanently delete ALL data in your Sanity dataset!
 * Use this to start migrations from scratch.
 *
 * Usage: npx tsx scripts/sanity-migration/cleanup-all.ts
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

// Document types to clean up
const DOCUMENT_TYPES = [
  'staff',
  'service',
  'podcast',
  'news',
  'gallery',
  'patientGuide',
  'doctorGuide',
];

async function deleteAllDocuments(docType: string): Promise<number> {
  try {
    // Fetch all document IDs of this type
    const query = `*[_type == $docType]._id`;
    const ids = await client.fetch(query, { docType });

    if (ids.length === 0) {
      console.log(`   No ${docType} documents found`);
      return 0;
    }

    console.log(`   Found ${ids.length} ${docType} document(s)`);

    // Delete in batches
    const transaction = client.transaction();
    ids.forEach((id: string) => {
      transaction.delete(id);
    });

    await transaction.commit();
    console.log(`   ✓ Deleted ${ids.length} ${docType} document(s)`);
    return ids.length;
  } catch (error) {
    console.error(`   ✗ Failed to delete ${docType} documents:`, error);
    return 0;
  }
}

async function deleteAllAssets(): Promise<number> {
  try {
    console.log('\n🖼️  Deleting unused assets (images)...');

    // Get all assets
    const assets = await client.fetch(`*[_type in ["sanity.imageAsset", "sanity.fileAsset"]]._id`);

    if (assets.length === 0) {
      console.log('   No assets found');
      return 0;
    }

    console.log(`   Found ${assets.length} asset(s)`);

    // Delete all assets
    const transaction = client.transaction();
    assets.forEach((id: string) => {
      transaction.delete(id);
    });

    await transaction.commit();
    console.log(`   ✓ Deleted ${assets.length} asset(s)`);
    return assets.length;
  } catch (error) {
    console.error('   ✗ Failed to delete assets:', error);
    return 0;
  }
}

async function cleanup() {
  console.log('🗑️  SANITY CLEANUP SCRIPT');
  console.log('================================\n');

  // Verify configuration
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
  }
  if (!process.env.SANITY_API_TOKEN) {
    throw new Error('Missing SANITY_API_TOKEN');
  }

  console.log(`Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
  console.log(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}\n`);

  console.log('⚠️  WARNING: This will delete ALL data!');
  console.log('Press Ctrl+C now to cancel...\n');

  // Wait 3 seconds to allow cancellation
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('Starting cleanup...\n');

  let totalDeleted = 0;

  // Delete all documents by type
  for (const docType of DOCUMENT_TYPES) {
    console.log(`📄 Deleting ${docType} documents...`);
    const count = await deleteAllDocuments(docType);
    totalDeleted += count;
  }

  // Delete all assets
  const assetsDeleted = await deleteAllAssets();
  totalDeleted += assetsDeleted;

  console.log('\n================================');
  console.log(`✓ Cleanup complete!`);
  console.log(`Total items deleted: ${totalDeleted}`);
  console.log('\nYou can now run migrations from scratch.');
}

cleanup()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n✗ Cleanup failed:', error);
    process.exit(1);
  });
