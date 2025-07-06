import { AM, GB, RU } from "country-flag-icons/react/3x2";
import React from "react";
import { type LocaleComplexString, type LocaleString } from "~/constants/staff";

export type LanguageT = {
  icon: React.ReactNode;
  id: number;
};

export type LanguagesT = {
  am: LanguageT;
  en?: LanguageT;
  ru?: LanguageT;
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
  // ru: {
  //   id: 2,
  //   icon: (
  //     <>
  //       <RU title="Russian" className="languageFlagIcon" />
  //     </>
  //   ),
  // },
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
  description: LocaleComplexString;
  list?: {
    am: string[];
    en?: string[];
    ru?: string[];
  };
  className: string; // Optional className for styling
};
export type AboutUsContentType = AboutUsContentItemType[];

export const aboutUsContent: AboutUsContentType = [
  {
    id: 1,
    name: "Mission",
    title: {
      am: "Առաքելություն",
      en: "Mission",
    },
    description: {
      am: "Հայաստանում սիրտանոթային հիվանդությունների բեռի նվազեցում՝ գերժամանակակից, բուժառուակենտրոն և հիվանդությանն ուղղված բազմապրոֆիլ խնամքի միջոցով, որն անխափան ապահովվում է ինտեգրված խնամքի ուղիներով՝ ավելի լավ արդյունքների և առողջ կյանքի համար",
      en: "To reduce the burden of cardiovascular diseases in Armenia through cutting-edge, patient-centered, and disease-focused multidisciplinary care—seamlessly delivered via integrated care pathways—for better outcomes and healthier lives.\n",
    },
    className: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
  },
  {
    id: 2,
    name: "Vision",
    title: {
      am: "Տեսլական",
      en: "Vision",
    },
    description: {
      am: "CardioLab-ը ձգտում է դառնալ բացառիկ «բուտիկ» սիրտանոթային հիվանդանոց՝ գերազանցության կենտրոն, որը մատուցում է բարձրորակ, նորարարական և անհատականացված խնամք՝ ինչպես մանկական, այնպես էլ մեծահասակ պացիենտների համար։ Հանրային-մասնավոր համագործակցության մտածված ինտեգրված մոդելի միջոցով CardioLab-ը կվերաձևի սիրտանոթային առողջապահությունը Հայաստանում՝ սահմանելով նոր չափանիշներ պացիենտների փորձառության, կլինիկական արդյունքների և առողջապահական համակարգի կայունության համար",
      en: "CardioLab aspires to become a premier “boutique” cardiovascular hospital—a true center of excellence that delivers high-quality, innovative, and personalized care for both pediatric and adult patients.\n Through a thoughtfully integrated public-private partnership model, CardioLab aims to reshape cardiovascular healthcare in Armenia by setting new standards in patient experience, clinical outcomes, and healthcare system sustainability.",
    },
    className: "d-flex h-100 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
  },
  {
    id: 3,
    name: "OurStrategicDirections",
    title: {
      am: "Մեր ռազմավարական ուղղությունները",
      en: "Our Strategic Priorities",
    },

    description: {
      am: "",
    },
    list: {
      am: [
        "Կլինիկական սիրտ-անոթային բժշկություն",
        "Գիտահետազոտական գործունեություն",
        "Պացիենտի իրազեկվածության բարձրացում",
      ],
      en: [
        "Clinical Cardiovascular Medicine",
        "Scientific Research and Innovation",
        "Enhancing Patient Awareness",
      ],
    },
    className: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
  },
  {
    id: 4,
    name: "Values",
    title: {
      am: "Մեր Արժեքները",
      en: "Our Core Values",
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
        {
          title: "Պրոֆեսիոնալիզմ",
          description:
            "Մենք ծառայություններ ենք մատուցում մեծագույն պատասխանատվությամբ և նվիրումով՝ մեր պացիենտների առողջությունը առաջնահերթ դնելով",
        },
        {
          title: "Շարունակական Ջարգացում",
          description:
            "Մենք միշտ ձգտում ենք աճի՝ հետևելով նորագույն գիտական ձեռքբերումներին և բարելավելով մեր հմտություններն ու ծառայությունները",
        },
      ],
      en: [
        {
          title: "Integrity and Honesty",
          description:
            "We uphold the highest standards of transparency and ethics in all our interactions—with patients, families, partners, and affiliated institutions. Trust is the foundation upon which our care is built.",
        },
        {
          title: "Compassion and Respect",
          description:
            "We treat every individual with dignity and empathy, ensuring respectful and patient-centered cardiovascular care for people of all ages.",
        },
        {
          title: "Collaboration",
          description:
            "We believe that the best outcomes are achieved through teamwork. Our multidisciplinary team works in unison to provide coordinated, comprehensive, and continuous care to every patient.",
        },
        {
          title: "Professionalism",
          description:
            "We deliver our services with utmost responsibility and dedication, always prioritizing the health and well-being of our patients.",
        },
        {
          title: "Continuous Improvement",
          description:
            "We are committed to ongoing growth by staying at the forefront of scientific advancements and constantly enhancing our skills and services.",
        },
      ],
    },
    className: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
  },
];
