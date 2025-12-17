/**
 * Gallery Types
 *
 * This file defines all types related to galleries (images and videos) across the system:
 * - SanityGallery: Raw data from Sanity CMS (all locales, image references)
 * - APIGalleryResponse: Data returned by API endpoint (single locale, localized strings)
 * - AppGalleryType: Type used throughout the app (matches API response)
 *
 * Data flow:
 * Sanity DB → getGalleries() → API localization → AppGalleryType → Components
 */

/**
 * LocaleString - Text with multiple language versions
 * Used in Sanity for storing multilingual content
 */
export type LocaleString = {
  am: string;
  en?: string;
  ru?: string;
};

/**
 * GalleryDescription - Multilingual description for a gallery
 * Optional field for additional gallery information
 */
export type GalleryDescription = {
  am?: string;
  en?: string;
  ru?: string;
};

/**
 * Gallery type - 'images' or 'videos'
 */
export type GalleryType = 'images' | 'videos';

/**
 * SanityImage - Image reference from Sanity
 */
export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
};

/**
 * SanityImageWithCaption - Image with multilingual caption
 */
export type SanityImageWithCaption = SanityImage & {
  caption?: LocaleString;
};

/**
 * SanityVideoItem - Video item structure
 */
export type SanityVideoItem = {
  url: string;
  title: LocaleString;
  thumbnail?: SanityImage;
};

/**
 * SanityGallery - Raw gallery data from Sanity CMS
 * This is what comes directly from Sanity before any localization
 */
export type SanityGallery = {
  _id: string;
  id: number;
  slug: {
    _type: "slug";
    current: string;
  };
  title: LocaleString;
  description?: GalleryDescription;
  type: GalleryType;
  images?: SanityImageWithCaption[];
  videos?: SanityVideoItem[];
  coverImage?: SanityImage;
  order?: number;
  publishedAt?: string;
};

/**
 * APIGalleryImage - Image in gallery response
 */
export type APIGalleryImage = {
  url: string;
  caption?: string;
};

/**
 * APIGalleryVideo - Video in gallery response
 */
export type APIGalleryVideo = {
  url: string;
  title: string;
  thumbnail?: string;
};

/**
 * APIGalleryResponse - Gallery data returned by /api/galleries endpoint
 * This is what the frontend receives after API localization
 */
export type APIGalleryResponse = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  type: GalleryType;
  images?: APIGalleryImage[];
  videos?: APIGalleryVideo[];
  coverImage?: {
    url: string;
  };
  order?: number;
  publishedAt?: string;
};

/**
 * AppGalleryType - Gallery type used throughout the application
 * Alias for APIGalleryResponse - what components receive and work with
 */
export type AppGalleryType = APIGalleryResponse;

/**
 * GalleryListProps - Props for gallery list component
 */
export interface GalleryListProps {
  galleries: AppGalleryType[];
  locale: string;
  type?: GalleryType;
}

/**
 * GalleryCardProps - Props for gallery card component
 */
export interface GalleryCardProps {
  gallery: AppGalleryType;
  locale: string;
}

/**
 * Type Guards
 */

/**
 * Check if value is a valid GalleryType
 */
export function isGalleryType(value: unknown): value is GalleryType {
  return value === 'images' || value === 'videos';
}

/**
 * Check if value is a SanityGallery
 */
export function isSanityGallery(value: unknown): value is SanityGallery {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;
  return (
    typeof obj._id === "string" &&
    typeof obj.id === "number" &&
    typeof obj.slug === "object" &&
    typeof obj.title === "object" &&
    typeof obj.type === "string" &&
    isGalleryType((obj as SanityGallery).type)
  );
}

/**
 * Check if value is an AppGalleryType
 */
export function isAppGalleryType(value: unknown): value is AppGalleryType {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;
  return (
    typeof obj.id === "number" &&
    typeof obj.slug === "string" &&
    typeof obj.title === "string" &&
    typeof obj.type === "string" &&
    isGalleryType((obj as AppGalleryType).type)
  );
}

/**
 * Utility Functions
 */

/**
 * Get localized value from LocaleString
 * @param content - LocaleString object
 * @param locale - Desired locale (am, en, ru)
 * @returns Localized string or empty string
 */
export function getLocalizedGalleryValue(
  content: LocaleString | undefined,
  locale: "am" | "en" | "ru" = "am"
): string {
  if (!content) return "";

  if (locale === "am") return content.am || "";
  if (locale === "en") return content.en || content.am || "";
  if (locale === "ru") return content.ru || content.en || content.am || "";

  return content.am || "";
}

/**
 * Get localized value from GalleryDescription
 * @param content - GalleryDescription object
 * @param locale - Desired locale (am, en, ru)
 * @returns Localized string or empty string
 */
export function getLocalizedGalleryDescription(
  content: GalleryDescription | undefined,
  locale: "am" | "en" | "ru" = "am"
): string {
  if (!content) return "";

  if (locale === "am") return content.am || "";
  if (locale === "en") return content.en || content.am || "";
  if (locale === "ru") return content.ru || content.en || content.am || "";

  return content.am || "";
}

/**
 * Get display title from gallery title field
 * Handles both LocaleString objects and plain strings
 * @param title - The title field (either string or LocaleString)
 * @param locale - Current locale
 * @returns Safe string value for display
 */
export function getGalleryDisplayTitle(
  title: unknown,
  locale: "am" | "en" | "ru"
): string {
  if (typeof title === "string") {
    return title;
  }

  if (title && typeof title === "object") {
    return getLocalizedGalleryValue(title as LocaleString, locale);
  }

  return "";
}

/**
 * Get display description from gallery description field
 * @param description - The description field (either string or GalleryDescription)
 * @param locale - Current locale
 * @returns Safe string value for display
 */
export function getGalleryDisplayDescription(
  description: unknown,
  locale: "am" | "en" | "ru"
): string {
  if (typeof description === "string") {
    return description;
  }

  if (description && typeof description === "object") {
    return getLocalizedGalleryDescription(
      description as GalleryDescription,
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
export function formatGalleryDate(
  dateString: string,
  locale: "am" | "en" | "ru" = "en"
): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(
      locale === "am" ? "hy-AM" : locale === "ru" ? "ru-RU" : "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    ).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Get image caption for display
 * @param caption - Caption object or string
 * @param locale - Current locale
 * @returns Localized caption or empty string
 */
export function getGalleryCaptionDisplay(
  caption: unknown,
  locale: "am" | "en" | "ru"
): string {
  if (typeof caption === "string") {
    return caption;
  }

  if (caption && typeof caption === "object") {
    return getLocalizedGalleryValue(caption as LocaleString, locale);
  }

  return "";
}

/**
 * Get video title for display
 * @param title - Title object or string
 * @param locale - Current locale
 * @returns Localized title or empty string
 */
export function getGalleryVideoTitleDisplay(
  title: unknown,
  locale: "am" | "en" | "ru"
): string {
  if (typeof title === "string") {
    return title;
  }

  if (title && typeof title === "object") {
    return getLocalizedGalleryValue(title as LocaleString, locale);
  }

  return "";
}
