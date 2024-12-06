import { type nameWithTranslations } from "~/types";

export const getLocale = (locale: string) => {
  if (locale === "am") {
    return "hy-AM";
  }
  return locale;
};

export const getLocalisedName = ({
  object,
  locale,
}: {
  object: nameWithTranslations;
  locale: string;
}) => {
  return object[locale as "en" | "ru" | "am"];
};
