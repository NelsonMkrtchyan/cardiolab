/**
 * Staff and Employee Types
 *
 * This file defines all types related to staff/employees across the system:
 * - SanityStaff: Raw data from Sanity CMS (all locales)
 * - APIStaffResponse: Data returned by API endpoint (single locale, localized strings)
 * - AppStaffType: Type used throughout the app (matches API response)
 */

export enum StaffCategory {
  Medical = "medical",
  Nursing = "nursing",
  Administrative = "administrative",
}
/**
 * LocaleString - Text with multiple language versions
 * Used in Sanity for storing multilingual content
 */
export type LocaleString = {
  am: string | string[];
  en?: string | string[];
  ru?: string | string[];
};

/**
 * PersonalInfoSingleType - CV data for a single person in one language
 * Contains all professional and personal information
 */
export type PersonalInfoSingleType = {
  bio: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  social: {
    linkedin: string;
    twitter: string;
  };
  specialties: string[];
  experience: Array<{
    period: string;
    title: string;
    organization: string;
    description: string;
  }>;
  education: Array<{
    year: string;
    degree: string;
    institution: string;
  }>;
  memberships: string[];
  hobbies: string[];
  achievements:
    | Array<{
        title: string;
        description?: string;
        organization?: string;
        date: string;
      }>
    | string[];
  academicActivities: Array<{
    title: string;
    description?: string;
    organization?: string;
    date: string;
  }>;
  publications: Array<{
    title: string;
    journal?: string;
    description?: string;
    year?: string;
    url?: string;
  }>;
  languages: Array<{
    language: string;
    level: string;
  }>;
};

/**
 * PersonalInfoFlags - Visibility flags for different CV sections
 * Controls which sections are displayed in the UI
 */
export type PersonalInfoFlags = {
  showBio?: boolean;
  showExperience?: boolean;
  showEducation?: boolean;
  showPublications?: boolean;
  showAchievements?: boolean;
  showLanguages?: boolean;
  showMemberships?: boolean;
  showHobbies?: boolean;
  showAcademicActivities?: boolean;
  showContact?: boolean;
  showSocial?: boolean;
  showSpecialties?: boolean;
};

/**
 * PersonalInfoType - Complete CV data with all language versions
 * Used in Sanity for storing complete staff profiles
 */
export type PersonalInfoType = {
  flags: PersonalInfoFlags;
  am: PersonalInfoSingleType;
  en?: PersonalInfoSingleType;
  ru?: PersonalInfoSingleType;
};

/**
 * StaffVisibility - Controls where staff member is displayed
 * - showInStaffPage: Display in /staff staff listing page
 * - showInLandingPage: Display in landing page "Meet Our Staff" section
 */
export type StaffVisibility = {
  showInStaffPage?: boolean;
  showInLandingPage?: boolean;
};

/**
 * SanityStaff - Raw staff data from Sanity CMS
 * This is what comes directly from Sanity before any localization
 * Name and role are LocaleString objects with all language versions
 */
export type SanityStaff = {
  _id: string;
  id: number;
  name: LocaleString;
  image: string;
  role: LocaleString;
  category: StaffCategory;
  visibility: StaffVisibility;
  personalInfo?: PersonalInfoType;
};

/**
 * APIStaffResponse - Staff data returned by /api/staff endpoint
 * This is what the frontend receives after API localization
 * Name and role are single strings (localized to requested locale)
 * PersonalInfo is reduced to flags + single locale data
 */
export type APIStaffResponse = {
  id: number;
  name: string;
  image: string;
  role: string;
  category: StaffCategory;
  visibility: StaffVisibility;
  personalInfo?: {
    flags: PersonalInfoFlags;
    data: PersonalInfoSingleType;
  };
};

/**
 * AppStaffType - Staff type used throughout the application
 * Alias for APIStaffResponse - what components receive and work with
 * This is the primary type for staff data in components
 */
export type AppStaffType = APIStaffResponse;

/**
 * CardProps - Props for staff card component
 */
export interface CardProps {
  employee: AppStaffType;
  className?: string;
}
