/**
 * Update script to fetch and update podcast publish dates from YouTube
 *
 * This script:
 * 1. Fetches all existing podcasts from Sanity
 * 2. For each podcast, extracts the YouTube video ID
 * 3. Fetches the actual publish date from YouTube
 * 4. Updates the publishedAt field in Sanity with the correct date
 * 5. Shows before/after dates and reports how many were updated
 *
 * Usage: npm run sanity:update:podcast-dates
 */

import "./load-env";
import { createClient } from "@sanity/client";
import youtubedl from "youtube-dl-exec";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-12-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

interface Podcast {
  _id: string;
  id: number;
  title: {
    en: string;
    am: string;
  };
  videoUrl: string;
  publishedAt: string;
}

/**
 * Extract YouTube video ID from URL
 */
function extractYouTubeId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

/**
 * Fetch YouTube video metadata (including publish date)
 */
async function getYouTubePublishDate(videoUrl: string): Promise<Date | null> {
  try {
    const videoId = extractYouTubeId(videoUrl);
    if (!videoId) {
      console.warn(`Could not extract video ID from URL: ${videoUrl}`);
      return null;
    }

    const result = await youtubedl(videoUrl, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      skipDownload: true,
    });

    if (result.upload_date) {
      // YouTube upload_date is in format YYYYMMDD
      const dateStr = result.upload_date;
      const year = dateStr.substring(0, 4);
      const month = dateStr.substring(4, 6);
      const day = dateStr.substring(6, 8);
      return new Date(`${year}-${month}-${day}`);
    }

    return null;
  } catch (error) {
    console.warn(
      `Failed to fetch YouTube metadata: ${error instanceof Error ? error.message : error}`
    );
    return null;
  }
}

/**
 * Format date for display
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function updatePodcastDates() {
  console.log("Starting podcast dates update...");
  console.log("Fetching all podcasts from Sanity...\n");

  // Fetch all podcasts from Sanity
  const podcasts: Podcast[] = await client.fetch(
    `*[_type == "podcast"] | order(id asc) {
      _id,
      id,
      title,
      videoUrl,
      publishedAt
    }`
  );

  console.log(`Found ${podcasts.length} podcasts to process.\n`);

  let updatedCount = 0;
  let unchangedCount = 0;
  let failedCount = 0;
  const updates: Array<{
    id: number;
    title: string;
    oldDate: string;
    newDate: string;
  }> = [];

  for (const podcast of podcasts) {
    try {
      console.log(`\nProcessing: ${podcast.title.en} (ID: ${podcast.id})`);
      console.log(`  Current date: ${formatDate(podcast.publishedAt)}`);

      // Fetch actual published date from YouTube
      const youtubePublishDate = await getYouTubePublishDate(podcast.videoUrl);

      if (!youtubePublishDate) {
        console.log(`  ⚠ Could not fetch YouTube date, skipping...`);
        failedCount++;
        continue;
      }

      const newDateISO = youtubePublishDate.toISOString();
      console.log(`  YouTube date: ${formatDate(newDateISO)}`);

      // Check if date actually changed
      if (new Date(podcast.publishedAt).toISOString() === newDateISO) {
        console.log(`  → No change needed`);
        unchangedCount++;
        continue;
      }

      // Update the podcast document
      await client
        .patch(podcast._id)
        .set({ publishedAt: newDateISO })
        .commit();

      console.log(`  ✓ Updated successfully`);
      updatedCount++;

      updates.push({
        id: podcast.id,
        title: podcast.title.en,
        oldDate: podcast.publishedAt,
        newDate: newDateISO,
      });
    } catch (error) {
      console.error(
        `  ✗ Failed to update podcast ID ${podcast.id}:`,
        error instanceof Error ? error.message : error
      );
      failedCount++;
    }
  }

  // Summary
  console.log("\n\n=== Update Summary ===");
  console.log(`Total podcasts processed: ${podcasts.length}`);
  console.log(`✓ Successfully updated: ${updatedCount}`);
  console.log(`→ Unchanged (already correct): ${unchangedCount}`);
  console.log(`✗ Failed to update: ${failedCount}`);
  console.log("======================\n");

  // Show sample of changes
  if (updates.length > 0) {
    console.log("Sample of date changes:\n");
    const sampleSize = Math.min(5, updates.length);
    for (let i = 0; i < sampleSize; i++) {
      const update = updates[i];
      console.log(`${update.title} (ID: ${update.id})`);
      console.log(`  Before: ${formatDate(update.oldDate)}`);
      console.log(`  After:  ${formatDate(update.newDate)}`);
      console.log("");
    }

    if (updates.length > sampleSize) {
      console.log(`... and ${updates.length - sampleSize} more updates\n`);
    }
  }
}

updatePodcastDates()
  .then(() => {
    console.log("✓ Podcast dates update completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("✗ Update failed:", error);
    process.exit(1);
  });
