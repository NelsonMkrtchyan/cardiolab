/**
 * Migration script to populate Sanity with gallery/image folder data
 *
 * This will migrate image galleries with external image URLs from uploadthing.
 * Images are referenced by URL and will be displayed via Sanity's image CDN.
 *
 * Usage: npx tsx scripts/sanity-migration/migrate-gallery.ts
 */

import './load-env';
import { createClient } from '@sanity/client';
import { galleryImages } from '../../src/constants/Gallery';

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

/**
 * Upload image from URL to Sanity Assets
 */
async function uploadImageFromUrl(imageUrl: string): Promise<any> {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Upload to Sanity
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      contentType,
      filename: imageUrl.split('/').pop() || 'image.jpg',
    });

    return asset;
  } catch (error) {
    console.error(`Failed to upload image ${imageUrl}:`, error);
    return null;
  }
}

async function migrateGalleries() {
  console.log('Starting gallery migration...');
  console.log(`Total galleries to migrate: ${galleryImages.length}`);
  console.log('\nNOTE: This will upload all images to Sanity (may take several minutes)');

  for (const gallery of galleryImages) {
    console.log(`\n📂 Migrating gallery: ${gallery.name.en}`);
    console.log(`   Images to upload: ${gallery.list.length}`);

    try {
      const slug = createSlug(gallery.name.en || gallery.name.am || '');

      // Upload all images for this gallery
      const uploadedImages = [];
      let successCount = 0;
      let failCount = 0;

      for (let i = 0; i < gallery.list.length; i++) {
        const img = gallery.list[i];
        process.stdout.write(`   Uploading image ${i + 1}/${gallery.list.length}... `);

        const asset = await uploadImageFromUrl(img.url);

        if (asset) {
          uploadedImages.push({
            _type: 'image',
            _key: `img-${gallery.id}-${img.id}`,
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
            caption: {
              am: `Image ${img.id}`,
              en: `Image ${img.id}`,
              ru: `Image ${img.id}`,
            },
          });
          console.log('✓');
          successCount++;
        } else {
          console.log('✗');
          failCount++;
        }
      }

      console.log(`   Upload results: ${successCount} succeeded, ${failCount} failed`);

      // Upload cover image (first image in gallery)
      console.log('   Uploading cover image...');
      const coverAsset = await uploadImageFromUrl(gallery.list[0].url);

      // Create gallery document
      const doc = {
        _type: 'gallery',
        _id: `gallery-${gallery.id}`,
        id: gallery.id,
        slug: {
          _type: 'slug',
          current: slug,
        },
        title: gallery.name,
        description: {
          am: gallery.name.am,
          en: gallery.name.en,
          ru: gallery.name.ru,
        },
        type: 'images',
        images: uploadedImages,
        coverImage: coverAsset
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: coverAsset._id,
              },
            }
          : undefined,
        order: gallery.id,
        publishedAt: gallery.date.toISOString(),
      };

      await client.createOrReplace(doc);
      console.log(`✓ Gallery "${gallery.name.en}" migrated successfully`);
    } catch (error) {
      console.error(`✗ Failed to migrate gallery ID ${gallery.id}:`, error);
    }
  }

  console.log('\n✓ Gallery migration completed!');
}

migrateGalleries()
  .then(() => {
    console.log('\n✓ All gallery data migrated successfully');
    console.log('\nNext steps:');
    console.log('1. Open Sanity Studio: http://localhost:3000/studio');
    console.log('2. Navigate to "Gallery" documents');
    console.log('3. Review the uploaded images');
    console.log('4. Add/edit captions as needed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n✗ Migration failed:', error);
    process.exit(1);
  });
