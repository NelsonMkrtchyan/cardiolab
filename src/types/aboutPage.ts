// Type definitions for About Us page from Sanity

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

export type SignatureBlock = {
  name: LocaleString;
  organization: LocaleString;
  position: LocaleString;
};

export type MainSection = {
  title: LocaleString;
  description: LocaleText;
  image?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  signature: SignatureBlock;
};

export type MissionSection = {
  title: LocaleString;
  description: LocaleText;
  order: number;
};

export type VisionSection = {
  title: LocaleString;
  description: LocaleText;
  order: number;
};

export type StrategicPrioritiesSection = {
  title: LocaleString;
  items: Array<{
    text: LocaleString;
  }>;
  order: number;
};

export type CoreValue = {
  title: LocaleString;
  description: LocaleText;
};

export type CoreValuesSection = {
  title: LocaleString;
  values: CoreValue[];
  order: number;
};

export type SatisfactionSurveySection = {
  title: LocaleString;
  buttonText: LocaleString;
  surveyUrl: string;
  showSection: boolean;
};

export type SanityAboutPage = {
  _id: string;
  _type: 'aboutPage';
  mainSection: MainSection;
  mission: MissionSection;
  vision: VisionSection;
  strategicPriorities: StrategicPrioritiesSection;
  coreValues: CoreValuesSection;
  satisfactionSurvey: SatisfactionSurveySection;
};

// Helper to get localized value
export function getLocalizedValue(
  content: LocaleString | LocaleText | undefined,
  locale: 'am' | 'en' | 'ru',
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

// Type for sections with order
export type OrderedSection =
  | { type: 'mission'; data: MissionSection }
  | { type: 'vision'; data: VisionSection }
  | { type: 'strategicPriorities'; data: StrategicPrioritiesSection }
  | { type: 'coreValues'; data: CoreValuesSection };

// Helper to get ordered sections
export function getOrderedSections(aboutPage: SanityAboutPage): OrderedSection[] {
  const sections: OrderedSection[] = [
    { type: 'mission', data: aboutPage.mission },
    { type: 'vision', data: aboutPage.vision },
    { type: 'strategicPriorities', data: aboutPage.strategicPriorities },
    { type: 'coreValues', data: aboutPage.coreValues },
  ];

  return sections.sort((a, b) => a.data.order - b.data.order);
}
