import { AM, GB, RU } from "country-flag-icons/react/3x2";
import React from "react";
import { type LocaleComplexString, type LocaleString } from "~/constants/staff";

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

//About us page

export type AboutUsContentItemType = {
  id: number;
  name: string;
  title: LocaleString;
  description?: LocaleComplexString;
};
export type AboutUsContentType = AboutUsContentItemType[];

export const aboutUsContent: AboutUsContentType = [
  {
    id: 1,
    name: "Mission",
    title: {
      am: "Առաքելություն",
    },
    description: {
      am: "Հայաստանում սիրտանոթային հիվանդությունների բեռի նվազեցում՝ գերժամանակակից, բուժառուակենտրոն և հիվանդությանն ուղղված բազմապրոֆիլ խնամքի միջոցով, որն անխափան ապահովվում է ինտեգրված խնամքի ուղիներով՝ ավելի լավ արդյունքների և առողջ կյանքի համար",
    },
  },
  {
    id: 2,
    name: "Vision",
    title: {
      am: "Տեսլական",
    },
    description: {
      am: "CardioLab-ը ձգտում է դառնալ բացառիկ «բուտիկ» սիրտանոթային հիվանդանոց՝ գերազանցության կենտրոն, որը մատուցում է բարձրորակ, նորարարական և անհատականացված խնամք՝ ինչպես մանկական, այնպես էլ մեծահասակ պացիենտների համար։ Հանրային-մասնավոր համագործակցության մտածված ինտեգրված մոդելի միջոցով CardioLab-ը կվերաձևի սիրտանոթային առողջապահությունը Հայաստանում՝ սահմանելով նոր չափանիշներ պացիենտների փորձառության, կլինիկական արդյունքների և առողջապահական համակարգի կայունության համար",
    },
  },
  {
    id: 3,
    name: "Values",
    title: {
      am: "Մեր Արժեքներ",
    },
    description: {
      am: [
        {
          title: "Շիտակություն և ազնվություն",
          description:
            "Մենք պահպանում ենք թափանցիկության և էթիկայի ամենաբարձր չափանիշները՝ մեր բոլոր շփումներում՝ պացիենտների, ընտանիքների, գործընկերների և գործընկեր կառույցների հետ։ Վստահությունն այն հիմքն է, որի վրա կառուցվում է մեր խնամքը",
        },
        {
          title: "Համակրանք և հարգանք",
          description:
            "Մենք յուրաքանչյուրին մոտենում ենք արժանապատվությամբ և կարեկցանքով՝ ապահովելով բոլոր տարիքային խմբերի համար հարգալից և բուժառուակենտրոն սրտանոթային խնամք",
        },
        {
          title: "Համագործակցություն",
          description:
            "Մենք հավատում ենք, որ լավագույն արդյունքները ծնվում են համատեղ ուժերից։ Մեր բազմապրոֆիլ թիմը գործում է համադրությամբ՝ ապահովելով համակարգված, ամբողջական և շարունակական խնամք բոլոր հիվանդների համար",
        },
      ],
    },
  },
  {
    id: 4,
    name: "OurStrategicDirections",
    title: {
      am: "Մեր ռազմավարական ուղղությունները",
    },
    description: {
      am: [
        {
          title: "Կլինիկական սիրտ-անոթային բժշկություն",
          description: "",
        },
        {
          title: "Գիտահետազոտական գործունեություն",
          description: "",
        },
        {
          title: "Պացիենտի իրազեկվածության բարձրացում",
          description: "",
        },
      ],
    },
  },
];
