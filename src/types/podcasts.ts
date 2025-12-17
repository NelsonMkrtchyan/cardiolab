/**
 * Podcasts Types
 *
 * This file defines all types related to podcasts across the system:
 * - SanityPodcast: Raw data from Sanity CMS (all locales, with image references)
 * - APIPodcastResponse: Data returned by API endpoint (single locale, localized strings)
 * - AppPodcastType: Type used throughout the app (matches API response)
 *
 * Data flow:
 * Sanity DB → getPodcasts() → API localization → AppPodcastType → Components
 */

/**
 * LocaleString - Text with multiple language versions
 * Used in Sanity for storing multilingual content
 * All fields are optional except Armenian (am) which is fallback
 */
export type LocaleString = {
  am: string;
  en?: string;
  ru?: string;
};

/**
 * PodcastDescription - Multilingual description for a podcast
 * Optional field for additional podcast information
 */
export type PodcastDescription = {
  am?: string;
  en?: string;
  ru?: string;
};

/**
 * SanityImage - Image reference from Sanity
 * Contains asset reference and optional alt text
 */
export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
};

/**
 * SanityStaffReference - Reference to a staff document
 * Used in Sanity for linking podcasts to hosts
 */
export type SanityStaffReference = {
  _ref: string;
  _type: "reference";
};

/**
 * SanityPodcast - Raw podcast data from Sanity CMS
 * This is what comes directly from Sanity before any localization
 * Contains all locales and document references
 */
export type SanityPodcast = {
  _id: string;
  id: number;
  slug: {
    _type: "slug";
    current: string;
  };
  title: LocaleString;
  description?: PodcastDescription;
  thumbnail?: SanityImage;
  videoUrl: string;
  audioUrl?: string;
  publishedAt: string;
  duration?: string;
  hosts?: SanityStaffReference[];
  tags?: string[];
};

/**
 * APIPodcastHost - Host information in podcast response
 * Simplified staff data for podcast display
 */
export type APIPodcastHost = {
  id: number;
  name: string;
  role: string;
  image?: string;
};

/**
 * APIPodcastResponse - Podcast data returned by /api/podcasts endpoint
 * This is what the frontend receives after API localization
 * Title and description are single strings (localized to requested locale)
 * Host references are resolved to actual staff data
 */
export type APIPodcastResponse = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  thumbnail?: {
    url: string;
    alt?: string;
  };
  videoUrl: string;
  audioUrl?: string;
  publishedAt: string;
  duration?: string;
  hosts?: APIPodcastHost[];
  tags?: string[];
};

/**
 * AppPodcastType - Podcast type used throughout the application
 * Alias for APIPodcastResponse - what components receive and work with
 * This is the primary type for podcast data in components
 */
export type AppPodcastType = APIPodcastResponse;

/**
 * PodcastCardProps - Props for podcast card component
 */
export interface PodcastCardProps {
  podcast: AppPodcastType;
  className?: string;
}

/**
 * PodcastListProps - Props for podcast list component
 */
export interface PodcastListProps {
  podcasts: AppPodcastType[];
  locale: string;
}

/**
 * Type Guards
 */

/**
 * Check if value is a SanityPodcast
 */
export function isSanityPodcast(value: unknown): value is SanityPodcast {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;
  return (
    typeof obj._id === "string" &&
    typeof obj.id === "number" &&
    typeof obj.slug === "object" &&
    typeof obj.title === "object" &&
    typeof obj.videoUrl === "string" &&
    typeof obj.publishedAt === "string"
  );
}

/**
 * Check if value is an AppPodcastType
 */
export function isAppPodcastType(value: unknown): value is AppPodcastType {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;
  return (
    typeof obj.id === "number" &&
    typeof obj.slug === "string" &&
    typeof obj.title === "string" &&
    typeof obj.videoUrl === "string" &&
    typeof obj.publishedAt === "string"
  );
}

/**
 * Utility Functions
 */

/**
 * Get localized value from LocaleString
 * @param content - LocaleString object
 * @param locale - Desired locale (am, en, ru)
 * @param fallback - Fallback locale if desired locale not available
 * @returns Localized string or empty string
 */
export function getLocalizedPodcastValue(
  content: LocaleString | undefined,
  locale: "am" | "en" | "ru" = "am",
  fallback: "am" | "en" | "ru" = "am"
): string {
  if (!content) return "";

  if (locale === "am") return content.am || "";
  if (locale === "en") return content.en || content.am || "";
  if (locale === "ru") return content.ru || content.en || content.am || "";

  return content.am || "";
}

/**
 * Get localized value from PodcastDescription
 * @param content - PodcastDescription object
 * @param locale - Desired locale (am, en, ru)
 * @param fallback - Fallback locale if desired locale not available
 * @returns Localized string or empty string
 */
export function getLocalizedPodcastDescription(
  content: PodcastDescription | undefined,
  locale: "am" | "en" | "ru" = "am",
  fallback: "am" | "en" | "ru" = "am"
): string {
  if (!content) return "";

  if (locale === "am") return content.am || "";
  if (locale === "en") return content.en || content.am || "";
  if (locale === "ru") return content.ru || content.en || content.am || "";

  return content.am || "";
}

/**
 * Get display title from podcast title field
 * Handles both LocaleString objects and plain strings
 * @param title - The title field (either string or LocaleString)
 * @param locale - Current locale
 * @returns Safe string value for display
 */
export function getPodcastDisplayTitle(
  title: unknown,
  locale: "am" | "en" | "ru"
): string {
  if (typeof title === "string") {
    return title;
  }

  if (title && typeof title === "object") {
    return getLocalizedPodcastValue(title as LocaleString, locale);
  }

  return "";
}

/**
 * Get display description from podcast description field
 * Handles both PodcastDescription objects and plain strings
 * @param description - The description field (either string or PodcastDescription)
 * @param locale - Current locale
 * @returns Safe string value for display
 */
export function getPodcastDisplayDescription(
  description: unknown,
  locale: "am" | "en" | "ru"
): string {
  if (typeof description === "string") {
    return description;
  }

  if (description && typeof description === "object") {
    return getLocalizedPodcastDescription(
      description as PodcastDescription,
      locale
    );
  }

  return "";
}

/**
 * Format date for display
 * @param dateString - ISO date string
 * @param locale - Locale for date formatting
 * @returns Formatted date string
 */
export function formatPodcastDate(
  dateString: string,
  locale: "am" | "en" | "ru" = "en"
): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === "am" ? "hy-AM" : locale === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Extract YouTube video ID from URL
 * @param url - YouTube URL
 * @returns Video ID or empty string
 */
export function extractYouTubeVideoId(url: string): string {
  if (!url) return "";

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return "";
}

/**
 * Generate YouTube thumbnail URL
 * @param videoUrl - YouTube URL
 * @returns Thumbnail image URL
 */
export function getYouTubeThumbnail(videoUrl: string): string {
  const videoId = extractYouTubeVideoId(videoUrl);
  if (!videoId) return "";
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
