/**
 * Services and Pricing Types
 *
 * This file defines all types related to services across the system:
 * - SanityService: Raw data from Sanity CMS (all locales, with document references)
 * - APIServiceResponse: Data returned by API endpoint (single locale, localized strings)
 * - AppServiceType: Type used throughout the app (matches API response)
 *
 * Data flow:
 * Sanity DB → getAllServices() → API localization → AppServiceType → Components
 */

/**
 * ServiceCategory - Enum for service categories
 * Values use kebab-case to match Sanity schema
 */
export enum ServiceCategory {
  Consultation = "consultation",
  CardiacCare = "cardiac-care",
  Ultrasound = "ultrasound",
  DuplexScan = "duplex-scan",
  PreventiveScreening = "preventive-screening",
}
export type ServiceCategoryType =
  (typeof ServiceCategory)[keyof typeof ServiceCategory];

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
 * ServiceDescription - Multilingual description for a service
 * Optional field for additional service information
 */
export type ServiceDescription = {
  am?: string;
  en?: string;
  ru?: string;
};

/**
 * SanityStaffReference - Reference to a staff document
 * Used in Sanity for linking services to doctors
 */
export type SanityStaffReference = {
  _ref: string;
  _type: "reference";
};

/**
 * SanityService - Raw service data from Sanity CMS
 * This is what comes directly from Sanity before any localization
 * Contains all locales and document references
 */
export type SanityService = {
  _id: string;
  id: number;
  slug: string;
  name: LocaleString;
  description?: ServiceDescription;
  category: ServiceCategory;
  price: number;
  hideInServicesPage: boolean;
  hideInPriceListPage: boolean;
  doneByNurses: boolean;
  doctors?: SanityStaffReference[];
};

/**
 * APIServiceDoctor - Doctor information in service response
 * Simplified staff data for service display
 */
export type APIServiceDoctor = {
  id: number;
  name: string;
  role: string;
  image?: string;
};

/**
 * APIServiceResponse - Service data returned by /api/services endpoint
 * This is what the frontend receives after API localization
 * Name and description are single strings (localized to requested locale)
 * Doctor references are resolved to actual staff data
 */
export type APIServiceResponse = {
  id: number;
  slug: string;
  name: string;
  description?: string;
  category: ServiceCategory;
  price: number;
  hideInServicesPage: boolean;
  hideInPriceListPage: boolean;
  doneByNurses: boolean;
  doctors?: APIServiceDoctor[];
};

/**
 * AppServiceType - Service type used throughout the application
 * Alias for APIServiceResponse - what components receive and work with
 * This is the primary type for service data in components
 */
export type AppServiceType = APIServiceResponse;

/**
 * ServiceCardProps - Props for service card component
 */
export interface ServiceCardProps {
  service: AppServiceType;
  className?: string;
}

/**
 * ServiceDetailsProps - Props for service details page component
 */
export interface ServiceDetailsProps {
  service: AppServiceType;
  doctors?: APIServiceDoctor[];
}

/**
 * ServiceListProps - Props for service list component
 */
export interface ServiceListProps {
  services: AppServiceType[];
  category?: ServiceCategory;
  locale: string;
  hideHidden?: boolean;
}

/**
 * PriceListService - Service for price list display
 * Simplified version focused on pricing
 */
export interface PriceListService {
  id: number;
  name: string;
  price: number;
  category: ServiceCategory;
  doneByNurses: boolean;
}

/**
 * Type Guards
 */

/**
 * Check if value is a valid ServiceCategory
 */
export function isServiceCategory(value: unknown): value is ServiceCategory {
  return Object.values(ServiceCategory).includes(value as ServiceCategory);
}

/**
 * Check if value is a SanityService
 */
export function isSanityService(value: unknown): value is SanityService {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;
  return (
    typeof obj._id === "string" &&
    typeof obj.id === "number" &&
    typeof obj.slug === "string" &&
    typeof obj.name === "object" &&
    typeof obj.category === "string" &&
    typeof obj.price === "number"
  );
}

/**
 * Check if value is an AppServiceType
 */
export function isAppServiceType(value: unknown): value is AppServiceType {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;
  return (
    typeof obj.id === "number" &&
    typeof obj.slug === "string" &&
    typeof obj.name === "string" &&
    typeof obj.category === "string" &&
    typeof obj.price === "number"
  );
}

/**
 * Utility Functions
 */

/**
 * Get localized value from LocaleString
 * Fallback chain: Requested locale → English → Armenian → Empty string
 * @param content - LocaleString object with am, en, ru fields
 * @param locale - Desired locale (am, en, ru)
 * @param fallback - Fallback locale (default: "en")
 * @returns Localized string with fallback applied
 */
export function getLocalizedServiceValue(
  content: LocaleString | undefined,
  locale: "am" | "en" | "ru" = "am",
  fallback: "am" | "en" | "ru" = "en",
): string {
  if (!content) return "";

  // Try requested locale first
  const requestedValue = content[locale];
  if (requestedValue) return requestedValue;

  // Fall back to English
  if (content.en) return content.en;

  // Last resort: Armenian
  if (content.am) return content.am;

  return "";
}

/**
 * Get localized value from ServiceDescription
 * Fallback chain: Requested locale → English → Armenian → Empty string
 * @param content - ServiceDescription object with am, en, ru fields
 * @param locale - Desired locale (am, en, ru)
 * @param fallback - Fallback locale (default: "en")
 * @returns Localized string with fallback applied
 */
export function getLocalizedDescription(
  content: ServiceDescription | undefined,
  locale: "am" | "en" | "ru" = "am",
  fallback: "am" | "en" | "ru" = "en",
): string {
  if (!content) return "";

  // Try requested locale first
  const requestedValue = content[locale];
  if (requestedValue) return requestedValue;

  // Fall back to English
  if (content.en) return content.en;

  // Last resort: Armenian
  if (content.am) return content.am;

  return "";
}

/**
 * Get display name from service/doctor name field
 * Handles both LocaleString objects and plain strings
 * @param name - The name field (either string or LocaleString)
 * @param locale - Current locale
 * @returns Safe string value for display
 */
export function getServiceDisplayName(
  name: unknown,
  locale: "am" | "en" | "ru",
): string {
  if (typeof name === "string") {
    return name;
  }

  if (name && typeof name === "object") {
    return getLocalizedServiceValue(name as LocaleString, locale);
  }

  return "";
}

/**
 * Format price for display
 * @param price - Price in AMD
 * @param includeSymbol - Whether to include AMD symbol
 * @returns Formatted price string
 */
export function formatPrice(price: number, includeSymbol = true): string {
  const formatted = new Intl.NumberFormat("hy-AM").format(price);
  return includeSymbol ? `${formatted} ֏` : formatted;
}
