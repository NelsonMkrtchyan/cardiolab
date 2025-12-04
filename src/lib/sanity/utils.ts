import { type Locale } from '../i18n/types';

/**
 * Helper function to get localized content from Sanity documents
 */
export function getLocalizedValue<T>(
  content: Partial<Record<Locale, T>> | undefined,
  locale: Locale,
  fallback: Locale = 'am'
): T | undefined {
  if (!content) return undefined;
  return content[locale] ?? content[fallback];
}

/**
 * Helper to format Sanity image URLs
 */
export function getImageUrl(imageUrl: string | undefined, width?: number, height?: number): string {
  if (!imageUrl) return '';

  // If already a full URL, return as is
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }

  // Build Sanity CDN URL with optional dimensions
  let url = imageUrl;
  if (width || height) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('fit', 'max');
    url = `${imageUrl}?${params.toString()}`;
  }

  return url;
}

/**
 * Convert array of strings to localized array
 */
export function getLocalizedArray(
  content: Partial<Record<Locale, string[]>> | undefined,
  locale: Locale,
  fallback: Locale = 'am'
): string[] {
  if (!content) return [];
  return content[locale] ?? content[fallback] ?? [];
}
