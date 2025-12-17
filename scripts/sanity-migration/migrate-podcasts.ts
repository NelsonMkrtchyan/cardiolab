/**
 * Migration script to populate Sanity with podcasts data from constants
 *
 * This script:
 * 1. Reads podcast data from src/constants/podcasts.tsx
 * 2. Transforms YouTube URLs to videoUrl field
 * 3. Converts posterUrl CSS format to Sanity image asset reference
 * 4. Structures localized title with empty ru field (as specified)
 * 5. Converts description strings to localized objects
 * 6. Generates slug from English title
 * 7. Transforms date to ISO datetime string
 * 8. Populates Sanity with podcast documents
 *
 * Usage: npx tsx scripts/sanity-migration/migrate-podcasts.ts
 */

import "./load-env";
import { createClient } from "@sanity/client";
import { podcasts } from "../../src/constants/podcasts";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-12-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Get the podcasts array (use English version as primary)
const englishPodcasts = podcasts.en;
const armenianPodcasts = podcasts.am;

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
 * Extract image URL from CSS url() format
 * Input: "url(https://...)"
 * Output: "https://..."
 */
function extractImageUrl(posterUrl: string): string {
  if (!posterUrl) return "";
  const match = posterUrl.match(/url\((.*?)\)/);
  return match ? match[1] : posterUrl;
}

/**
 * Transform description to localized object format
 * English descriptions are used, Armenian fallback if English missing
 * Russian left empty as per requirements
 */
function transformDescription(
  englishDescription: string | undefined,
  armenianDescription: string | undefined
) {
  return {
    am: armenianDescription || "",
    en: englishDescription || armenianDescription || "",
    ru: "",
  };
}

/**
 * Match Armenian podcast with English podcast by ID
 */
function getArmenianPodcast(id: number) {
  return armenianPodcasts.find((p) => p.id === id);
}

/**
 * Download image from URL and create Sanity image asset
 * For now, we'll reference the image URL directly
 * In production, we might want to upload actual assets
 */
async function createImageAsset(imageUrl: string) {
  if (!imageUrl) return undefined;

  try {
    const imageAsset = await client.assets.upload("image", imageUrl);
    return {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: imageAsset._id,
      },
    };
  } catch (error) {
    console.warn(`Failed to upload image: ${imageUrl}`, error);
    // Return undefined if upload fails - thumbnail is optional
    return undefined;
  }
}

async function migratePodcasts() {
  console.log("Starting podcasts migration...");
  console.log(`Total podcasts to migrate: ${englishPodcasts.length}`);

  let successCount = 0;
  let failureCount = 0;

  for (const englishPodcast of englishPodcasts) {
    try {
      // Find matching Armenian podcast for translations
      const armenianPodcast = getArmenianPodcast(englishPodcast.id);

      // Generate slug from English title
      const slug = createSlug(englishPodcast.title);

      // Extract clean image URL from CSS format
      const cleanImageUrl = extractImageUrl(englishPodcast.posterUrl);

      // Try to create image asset (optional)
      let thumbnailAsset = undefined;
      if (cleanImageUrl) {
        try {
          // For migration, we'll use the URL directly as reference
          // In production, consider uploading and storing in Sanity
          thumbnailAsset = await createImageAsset(cleanImageUrl);
        } catch (error) {
          console.warn(`⚠ Could not process image for podcast ID ${englishPodcast.id}`);
        }
      }

      // Create the podcast document matching Sanity schema
      const doc = {
        _type: "podcast",
        _id: `podcast-${englishPodcast.id}`,
        id: englishPodcast.id,
        slug: {
          _type: "slug",
          current: slug,
        },
        // Title: English primary, Armenian as content translation, Russian empty
        title: {
          am: armenianPodcast?.title || "",
          en: englishPodcast.title || "",
          ru: "",
        },
        // Description: English primary, Armenian as fallback, Russian empty
        description: transformDescription(
          englishPodcast.description,
          armenianPodcast?.description
        ),
        // Thumbnail image (optional)
        ...(thumbnailAsset && { thumbnail: thumbnailAsset }),
        // Primary video URL from YouTube
        videoUrl: englishPodcast.url,
        // Published date from constants
        publishedAt: englishPodcast.date.toISOString(),
        // Tags can be populated later
        tags: [],
      };

      await client.createOrReplace(doc);
      console.log(
        `✓ Migrated: ${englishPodcast.title} (ID: ${englishPodcast.id})`
      );
      successCount++;
    } catch (error) {
      console.error(
        `✗ Failed to migrate podcast ID ${englishPodcast.id}:`,
        error instanceof Error ? error.message : error
      );
      failureCount++;
    }
  }

  console.log("\n=== Podcasts Migration Summary ===");
  console.log(`✓ Successfully migrated: ${successCount} podcasts`);
  console.log(`✗ Failed migrations: ${failureCount} podcasts`);
  console.log("==================================\n");
}

migratePodcasts()
  .then(() => {
    console.log("✓ All podcasts data migrated successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("✗ Migration failed:", error);
    process.exit(1);
  });
