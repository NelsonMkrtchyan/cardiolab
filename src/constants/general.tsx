import { AM, GB, RU } from "country-flag-icons/react/3x2";
import React from "react";

export type LanguageT = {
  icon: React.ReactNode;
  id: number;
};

export type LanguagesT = {
  en: LanguageT;
  ru: LanguageT;
  am: LanguageT;
};

export const Languages: LanguagesT = {
  en: {
    id: 1,
    icon: (
      <>
        <GB title="English" className="languageFlagIcon" />
      </>
    ),
  },
  ru: {
    id: 2,
    icon: (
      <>
        <RU title="Russian" className="languageFlagIcon" />
      </>
    ),
  },
  am: {
    id: 3,
    icon: (
      <>
        <AM title="Armenian" className="languageFlagIcon" />
      </>
    ),
  },
};

export function excludeKeys(obj: LanguagesT, keysToExclude: string[]) {
  return Object.keys(obj).reduce((newObj, key) => {
    if (!keysToExclude.includes(key)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
}
