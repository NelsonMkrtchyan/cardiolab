/**
 * Centralized internationalization types
 */

export type Locale = 'en' | 'am' | 'ru';

export type LocalizedString = Record<Locale, string>;

export type LocalizedOptionalString = {
  am: string;
  en?: string;
  ru?: string;
};

export type LocalizedContent<T> = Record<Locale, T>;

export type LocalizedOptionalContent<T> = {
  am: T;
  en?: T;
  ru?: T;
};
