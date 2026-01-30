// Type definitions for Contact Us page from Sanity

export type LocaleString = {
  am: string;
  en?: string;
  ru?: string;
};

export type LocaleText = {
  am: string;
  en?: string;
  ru?: string;
};

export type ContactInfo = {
  address: LocaleString;
  email: string;
  phoneNumbers: string[];
};

export type SliderImage = {
  url: string;
  alt?: string;
};

export type ContactFormSettings = {
  successMessage: LocaleText;
  sliderImages: SliderImage[];
};

export type MapSection = {
  title: LocaleString;
  googleMapsEmbedUrl: string;
};

export type SanityContactPage = {
  _id: string;
  _type: 'contactPage';
  contactInfo: ContactInfo;
  contactForm: ContactFormSettings;
  mapSection: MapSection;
};

// Helper to get localized value
export function getLocalizedValue(
  content: LocaleString | LocaleText | undefined,
  locale: 'am' | 'en' | 'ru'
): string {
  if (!content) return '';

  // Try requested locale first
  const requestedValue = content[locale];
  if (requestedValue) return requestedValue;

  // Fall back to English
  if (content.en) return content.en;

  // Last resort: Armenian
  if (content.am) return content.am;

  return '';
}
