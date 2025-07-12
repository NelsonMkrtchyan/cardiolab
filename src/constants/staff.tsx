export type LocaleString = {
  am: string | string[];
  en?: string | string[];
  ru?: string | string[];
};

export type LocaleComplexString = {
  am:
    | string
    | {
        title: string;
        description?: string;
      }[];
  en?:
    | string
    | {
        title: string;
        description?: string;
      }[];
  ru?:
    | string
    | {
        title: string;
        description?: string;
      }[];
};

export enum StaffCategory {
  AdministrativeStaff = "administrativeStaff",
  MedicalStaff = "medicalStaff",
  NursingStaff = "nursingStaff",
}

interface Experience {
  period: string;
  title: string;
  organization: string;
  description: string;
}

interface Education {
  year: string;
  degree: string;
  institution: string;
}

interface Achievement {
  title: string;
  description?: string;
  organization?: string;
  date: string;
}

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
  experience: Experience[];
  education: Education[];
  memberships: string[];
  hobbies: string[];
  achievements: Achievement[] | string[];
  academicActivities: Achievement[];
  publications: {
    title: string;
    journal?: string;
    description?: string;
    year?: string;
    url?: string;
  }[];
  languages: {
    language: string;
    level: string;
  }[];
};

export type personalInfoFlags = {
  // Visibility flags for each section
  showBio?: boolean;
  showExperience?: boolean;
  showEducation?: boolean;
  showPublications?: boolean;
  showAchievements?: boolean;
  showLanguages?: boolean;
  showMemberships?: boolean;
  showHobbies?: boolean;
  showAcademicActivities?: boolean;
  // Sidebar visibility flags
  showContact?: boolean;
  showSocial?: boolean;
  showSpecialties?: boolean;
};
export type PersonalInfoType = {
  flags: personalInfoFlags;
  am: PersonalInfoSingleType;
  en?: PersonalInfoSingleType;
  ru?: PersonalInfoSingleType;
};

export type EmployeeType = {
  id: number;
  name: LocaleString;
  image: string;
  role: LocaleString;
  category: StaffCategory;
  visibility: boolean;
  personalInfo?: PersonalInfoType;
};

export interface CardI {
  employee: EmployeeType;
  className?: string;
}

type StaffType = EmployeeType[];

export const defaultPersonalInfoFlags = {
  showBio: true,
  showExperience: true,
  showEducation: true,
  showPublications: false,
  showAchievements: false,
  showLanguages: false,
  showMemberships: true,
  showHobbies: false,
  showContact: false,
  showSocial: false,
  showSpecialties: true,
};

export const defaultPersonalSingleInfo = {
  bio: "",
  // Content data
  contact: {
    phone: "",
    email: "",
    location: "",
  },
  social: {
    linkedin: "",
    twitter: "",
  },
  specialties: [],
  experience: [],
  education: [],
  memberships: [],
  hobbies: [],
  achievements: [],
  academicActivities: [],
  publications: [],
  languages: [],
};

export const categorizedStaffOrder = [
  StaffCategory.MedicalStaff,
  StaffCategory.NursingStaff,
  StaffCategory.AdministrativeStaff,
];

export const staff: StaffType = [
  {
    id: 1,
    name: {
      am: "Տաթևիկ Հովակիմյան",
      en: "Tatevik Hovakimyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlueDvPGq4t76bKABNX1vpMyZqWPS43EoxGDlka",
    role: {
      am: "Սրտաբան-Առիթմոլոգ",
      en: "Cardiologist-Arrhythmologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: true,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showAcademicActivities: true,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      en: {
        bio: "Clinical Adult and Pediatric Cardiologist, Arrhythmia Specialist, Public Health Specialist",
        contact: {
          phone: "+37491787632",
          email: "tatevik_hovakimyan@yahoo.com",
          location: "Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "Arrhythmology",
          "Echocardiography",
          "Cardiac Electrophysiology",
          "Health Economics",
          "Cardiovascular Research",
          "Public Health",
        ],
        experience: [
          {
            period: "2024 – present",
            title: "Co-Founder and CEO",
            organization: "CardioLab Medical Center",
            description: "",
          },
          {
            period: "2024 – present",
            title: "EHRA National Cardiac Societies Committee",
            organization: "European Heart Rhythm Association",
            description: "",
          },
          {
            period: "2017 – 2024",
            title: "Founder and Head of Arrhythmology Department",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
          {
            period: "2022 – present",
            title:
              "Expert Member, Cardiovascular Diseases Management Advisory Board",
            organization: "Ministry of Health",
            description: "",
          },
          {
            period: "2023 – 2024",
            title: "Expert Member for Cardiac Arrhythmology Cases Revision",
            organization: "State Health Agency",
            description: "",
          },
          {
            period: "2022",
            title: "Expert Member of Quality Improvement Advisory Board",
            organization: "Ministry of Health",
            description: "",
          },
          {
            period: "2021",
            title:
              "Project Expert of Cardiovascular Diseases for National Diabetes Strategy for Diabetes Management in Armenia)",
            organization: "Armenian Eyecare Project",
            description: "",
          },
          {
            period: "2020 – 2022",
            title: "Cardiologist",
            organization: "Wigmore Clinic",
            description: "",
          },
          {
            period: "2012 – 2017",
            title: "Arrhythmologist",
            organization: "Astghik Medical Center",
            description: "",
          },
          {
            period: "2009 – 2012",
            title: "Junior Adult and Pediatric Cardiologist",
            organization: "Arrhythmology Cardiology Center of Armenia",
            description: "",
          },
          {
            period: "2007 – 2009",
            title: "Fellowship in Adult Cardiology",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
          {
            period: "2004 – 2007",
            title: "Residency in Pediatric Cardiology",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
        ],
        education: [
          {
            year: "2021 – 2023",
            degree:
              "Diploma of Advanced Studies in Cardiac Arrhythmia Management",
            institution: "Maastricht University",
          },
          {
            year: "2017 – 2019",
            degree:
              "Executive Master of Sience in Health Economics, Outcomes and Management in Cardiovascular Sciences",
            institution: "London School of Economics and Political Science",
          },
          {
            year: "2017",
            degree: "Observership in Electrophysiology",
            institution: "Medical University of Vienna",
          },
          {
            year: "2015 – 2017",
            degree: "Master of Public Health",
            institution: "American University of Armenia",
          },
          {
            year: "2011",
            degree: "Observership in Pediatric Cardiology",
            institution: "Cleveland Clinic Children’s Hospital",
          },
          {
            year: "2008",
            degree: "Observership in Adult Cardiology",
            institution: "Medical University of Vienna",
          },
          {
            year: "2007 − 2009",
            degree: "Clinical Fellowship in Adult Cardiology",
            institution: "Nork-Marash Medical Center",
          },
          {
            year: "2004 − 2007",
            degree: "Clinical Residency in Pediatric Cardiology",
            institution: "Nork-Marash Medical Center",
          },
          {
            year: "1998 − 2004",
            degree: "Student at Department of Pediatrics)",
            institution: "Yerevan State Medical University",
          },
        ],
        memberships: [
          "ESC Professional Member (since 2018)",
          "European Heart Rhythm Association (since 2010)",
          "ESC Women in Cardiology Initiative (since 2017)",
          "ESC Working Group on Grown-up Congenital Heart Disease (since 2014)",
          "European Society of Cardiology (since 2010)",
          "European Heart Failure Association (ESC HFA) (since 2019)",
        ],
        hobbies: [],
        achievements: [
          {
            title: "ESC Scholarship",
            description:
              "Supported education at the London School of Economics and Political Science",
            organization: "European Society of Cardiology",
            date: "2017",
          },
          {
            title: "AGBU Scholarship",
            description:
              "Supported education at the London School of Economics and Political Science",
            organization: "Armenian General Benevolent Union",
            date: "2017",
          },
          {
            title: "AUA/MoES Merit-based Scholarship",
            description:
              "Supported education at American University of Armenia",
            organization: "AUA/Ministry of Education and Science",
            date: "2015",
          },
        ],
        academicActivities: [
          {
            title:
              "Arrhythmology Rotation of Cardiology Students and Residents ",
            organization: "Nork-Marash Medical Center",
            date: "2020 – 2024",
          },
          {
            title: "Annual Arrhythmia Seminars",
            organization: "Nork-Marash Medical Center",
            date: "2019 – 2024",
          },
          {
            title:
              "Arrhythmology Rotation of Cardiology Students and Residents ",
            organization:
              "Astghik Medical Center, Arrhythmology Cardiology Center of Armenia",
            date: "2010 – 2017",
          },
          {
            title: "Clinical Fellowship in Arrhythmology",
            organization:
              "Astghik Medical Center, Arrhythmology Cardiology Center of Armenia",
            date: "2010 – 2017",
          },
          {
            title: "Semiannual Arrhythmia Seminars ",
            organization: "Arrhythmology Cardiology Center of Armenia",
            date: "2010 – 2017",
          },
        ],
        publications: [
          {
            title:
              "Electrophysiological findings during re-do procedures after single-shot pulmonary vein isolation for atrial\n" +
              "fibrillation with pulsed field ablation",
            journal: "Journal of Interventional Cardiac Electrophysiology",
            year: "2023",
          },
          {
            title:
              "Perceptions and barriers to deceased organ donation in Armenia: a\n" +
              "qualitative research",
            journal: "European Journal of Heart Failure",
            year: "2020",
          },
          {
            title:
              "Syncope in a pregnant woman with repaired Tetralogy of Fallot: a case report",
            journal: "European Heart Journal-Case Reports",
            year: "2022",
          },
          {
            title:
              "Successful management of near-incessant bidirectional ventricular tachycardia in one-year-old child with COVID-19 infection: a case report",
            journal: "European Heart Journal-Case Reports",
            year: "2023",
          },
          {
            title:
              "Uncommon case of incessant tachycardia-induced cardiomyopathy in a child",
            journal: "Journal of Innovations in Cardiac Rhythm Management",
            year: "2018",
          },
          {
            title:
              "Cardiogenic anorexia and underweighting in a child: case report",
            journal: "European Heart Journal-Case Reports",
            year: "2018",
          },
        ],
        languages: [
          { language: "Armenian", level: "Native" },
          { language: "English", level: "Fluent" },
          { language: "Russian", level: "Fluent" },
        ],
      },
      am: {
        bio: "Մեծահասակների և մանկական սրտաբան, արիթմոլոգիայի մասնագետ, հանրային առողջության մասնագետ",
        contact: {
          phone: "+37491787632",
          email: "tatevik_hovakimyan@yahoo.com",
          location: "Երևան, Հայաստան",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "Արիթմոլոգիա",
          "Էխոկարդիոգրաֆիա",
          "Սրտային էլեկտրոֆիզիոլոգիա",
          "Առողջապահական տնտեսագիտություն",
          "Սրտանոթային հետազոտություններ",
          "Հանրային առողջություն",
        ],
        experience: [
          {
            period: "2024 – այժմ",
            title: "Հիմնադիր և Գլխավոր Մասնաճյուղի Նախագահ",
            organization: "CardioLab բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2024 – այժմ",
            title: "EHRA Ազգային սրտային ընկերությունների հանձնաժողովի անդամ",
            organization: "Եվրոպական սրտի ռիթմի ասոցիացիա",
            description: "",
          },
          {
            period: "2017 – 2024",
            title: "Արիթմոլոգիայի բաժնի հիմնադիր և ղեկավար",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2022 – այժմ",
            title:
              "Մասնագիտական խորհրդի անդամ, սրտանոթային հիվանդությունների կառավարման ոլորտում",
            organization: "Առողջապահության նախարարություն",
            description: "",
          },
          {
            period: "2023 – 2024",
            title:
              "Սրտային արիթմոլոգիայի դեպքերի փորձագիտական հանձնաժողովի անդամ",
            organization: "Պետական առողջապահական գործակալություն",
            description: "",
          },
          {
            period: "2022",
            title: "Որակի բարելավման խորհրդատվական խորհրդի փորձագիտական անդամ",
            organization: "Առողջապահության նախարարություն",
            description: "",
          },
          {
            period: "2021",
            title:
              "Սրտանոթային հիվանդությունների ազգային դիաբետի ռազմավարության նախագծի փորձագետ",
            organization: "Հայկական ակնհաշվառման ծրագիր",
            description: "",
          },
          {
            period: "2020 – 2022",
            title: "Սրտաբան",
            organization: "Wigmore կլինիկա",
            description: "",
          },
          {
            period: "2012 – 2017",
            title: "Արիթմոլոգ",
            organization: "Աստղիկ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2009 – 2012",
            title: "Մանկական և մեծահասակների կրտսեր սրտաբան",
            organization: "Հայաստանի Արիթմոլոգիայի սրտաբուժության կենտրոն",
            description: "",
          },
          {
            period: "2007 – 2009",
            title: "Մեծահասակների սրտաբուժության ֆելլոուշիպ",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2004 – 2007",
            title: "Մանկական սրտաբուժության ռեզիդենտուրա",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            description: "",
          },
        ],
        education: [
          {
            year: "2021 – 2023",
            degree: "Սրտային արիթմիայի կառավարման առաջադեմ ուսուցման դիպլոմ",
            institution: "Մաստրիխտի համալսարան",
          },
          {
            year: "2017 – 2019",
            degree:
              "Առողջապահական տնտեսագիտության, արդյունքների և կառավարման գործադիր մագիստրոս",
            institution:
              "Լոնդոնի տնտեսագիտության և քաղաքական գիտությունների դպրոց",
          },
          {
            year: "2017",
            degree: "Էլեկտրոֆիզիոլոգիայի դիտորդական ուսուցում",
            institution: "Վիեննայի բժշկական համալսարան",
          },
          {
            year: "2015 – 2017",
            degree: "Հանրային առողջության մագիստրոս",
            institution: "Հայ-ամերիկյան համալսարան",
          },
          {
            year: "2011",
            degree: "Մանկական սրտաբուժության դիտորդական ուսուցում",
            institution: "Կլիվլենդի կլինիկի մանկական հիվանդանոց",
          },
          {
            year: "2008",
            degree: "Մեծահասակների սրտաբուժության դիտորդական ուսուցում",
            institution: "Վիեննայի բժշկական համալսարան",
          },
          {
            year: "2007 − 2009",
            degree: "Մեծահասակների սրտաբուժության կլինիկական ֆելլոուշիպ",
            institution: "Նորք-Մարաշ բժշկական կենտրոն",
          },
          {
            year: "2004 − 2007",
            degree: "Մանկական սրտաբուժության կլինիկական ռեզիդենտուրա",
            institution: "Նորք-Մարաշ բժշկական կենտրոն",
          },
          {
            year: "1998 − 2004",
            degree: "Ուսանող, մանկաբուժության բաժին",
            institution: "Երևանի պետական բժշկական համալսարան",
          },
        ],
        memberships: [
          "ESC պրոֆեսիոնալ անդամ (2018-ից)",
          "Եվրոպական սրտի ռիթմի ասոցիացիա (2010-ից)",
          "ESC կանանց սրտաբանության նախաձեռնություն (2017-ից)",
          "ESC մեծահասակ կոնգենիտալ սրտային հիվանդությունների աշխատանքային խումբ (2014-ից)",
          "Եվրոպական սրտաբուժական ընկերություն (2010-ից)",
          "Եվրոպական սրտի անբավարարության ասոցիացիա (ESC HFA) (2019-ից)",
        ],
        hobbies: [],
        achievements: [
          {
            title: "ESC կրթաթոշակ",
            description:
              "Ուսուցման աջակցություն Լոնդոնի տնտեսագիտության և քաղաքական գիտությունների դպրոցում",
            organization: "Եվրոպական սրտաբուժական ընկերություն",
            date: "2017",
          },
          {
            title: "AGBU կրթաթոշակ",
            description:
              "Ուսուցման աջակցություն Լոնդոնի տնտեսագիտության և քաղաքական գիտությունների դպրոցում",
            organization: "Հայկական ընդհանուր բարեգործական միություն",
            date: "2017",
          },
          {
            title: "AUA/MoES կրթաթոշակ` ըստ արժանվույնության",
            description: "Ուսուցման աջակցություն Հայ-Ամերիկյան համալսարանում",
            organization: "AUA/Կրթության և գիտության նախարարություն",
            date: "2015",
          },
        ],
        academicActivities: [
          {
            title:
              "Արիթմոլոգիայի ռոտացիա սրտաբանների ուսանողների և ռեզիդենտների համար",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            date: "2020 – 2024",
          },
          {
            title: "Տարեկան արիթմիայի սեմինարներ",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            date: "2019 – 2024",
          },
          {
            title:
              "Արիթմոլոգիայի ռոտացիա սրտաբանների ուսանողների և ռեզիդենտների համար",
            organization:
              "Աստղիկ բժշկական կենտրոն, Հայաստանի Արիթմոլոգիայի սրտաբուժության կենտրոն",
            date: "2010 – 2017",
          },
          {
            title: "Արիթմոլոգիայի կլինիկական ֆելլոուշիպ",
            organization:
              "Աստղիկ բժշկական կենտրոն, Հայաստանի Արիթմոլոգիայի սրտաբուժության կենտրոն",
            date: "2010 – 2017",
          },
          {
            title: "Կեսամյակային արիթմիայի սեմինարներ",
            organization: "Հայաստանի Արիթմոլոգիայի սրտաբուժության կենտրոն",
            date: "2010 – 2017",
          },
        ],
        publications: [
          {
            title:
              "Էլեկտրոֆիզիոլոգիական արդյունքներ ռիդո ընթացակարգերի ժամանակ՝ միայնակ թիրախային թոքային անոթների იზոլյացիայի (PFA) համար ատրիայի ֆիբրիլյացիայի բուժման նպատակով",
            journal: "Journal of Interventional Cardiac Electrophysiology",
            year: "2023",
          },
          {
            title:
              "Հայաստանում օրգանների տրոհման ընկալումները և խոչընդոտները՝ որակական հետազոտություն",
            journal: "European Journal of Heart Failure",
            year: "2020",
          },
          {
            title:
              "Տեղաշարժ` վերականգնված Ֆալլո թետրալոգի հետաքննության ընթացքում հղի կնոջ մոտ՝ դեպքի զեկույց",
            journal: "European Heart Journal-Case Reports",
            year: "2022",
          },
          {
            title:
              "COVID-19-ով վարակված մեկ տարեկանի մոտ գրեթե շարունակական երկակողմանի փորոքային տախիկարդիայի հաջող կառավարում՝ դեպքի զեկույց",
            journal: "European Heart Journal-Case Reports",
            year: "2023",
          },
          {
            title:
              "Հաճախ չտեսնված դեպք՝ շարունակական տախիկարդիայի սրտամկանի հիվանդություն երեխանում",
            journal: "Journal of Innovations in Cardiac Rhythm Management",
            year: "2018",
          },
          {
            title:
              "Կարդիոգենիկ անորեքսիա և քաշի կորուստ երեխայի մոտ՝ դեպքի զեկույց",
            journal: "European Heart Journal-Case Reports",
            year: "2018",
          },
        ],
        languages: [
          { language: "Հայերեն", level: "Մայրենի" },
          { language: "Անգլերեն", level: "Անգլերենի գերազանց իմացություն" },
          { language: "Ռուսերեն", level: "Ռուսերենի գերազանց իմացություն" },
        ],
      },
    },
  },
  {
    id: 2,
    name: {
      am: "Կարեն Զոհրաբյան",
      en: "Karen Zohrabyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluzPJlX1UCJcmH7QjURruLeMoFslfS6nVvkpdN",
    role: {
      am: "Մանկական Ինտերվենցիոն Սրտաբան",
      en: "Pediatric Interventional Cardiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: true,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      am: {
        bio: "Որակավորում՝ բժշկական գիտությունների թեկնածու, մանկական սրտաբան, ինտերվենցիոն սրտաբան։ Դիրքեր՝ «ԿարդիոԼաբ» կլինիկայի համահիմնադիր։ Նորք Մարաշ բժշկական կենտրոնի մանկական բաժանմունքի ավագ սրտաբան։",
        contact: {
          phone: "(+374 10) 65 59 60 գրասենյակ, (+374 91) 49 05 26 բջջային",
          email: "karenzohrabyan@yahoo.com",
          location:
            "Այգեձորի 1-ին փողոց 28/1, Երևան 0019, Հայաստանի Հանրապետություն",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "2024 թվականի հոկտեմբերից մինչ օրս",
            title: "Համահիմնադիր",
            organization: "«ԿարդիոԼաբ» կլինիկա",
            description: "",
          },
          {
            period: "2018 թվականի սեպտեմբերից մինչև 2023 թվականի սեպտեմբեր",
            title:
              "Առողջապահության նախարարի խորհրդական մանկական սրտաբանության ոլորտում",
            organization:
              "Հայաստանի Հանրապետության առողջապահության նախարարություն",
            description: "",
          },
          {
            period: "2017 թվականի փետրվարից մինչև 2020 թվականի մարտ",
            title: "Փոխտնօրեն",
            organization: "Նորք Մարաշ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2010 թվականի նոյեմբերից մինչև 2013 թվականի փետրվար",
            title: "Բժշկական անձնակազմի ղեկավար",
            organization: "Նորք Մարաշ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2007 թվականի դեկտեմբերից մինչ օրս",
            title: "Անձնակազմի բժիշկ, մանկական ինտերվենցիոն սրտաբան",
            organization: "Նորք Մարաշ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2005 թվականի դեկտեմբերից մինչև 2007 թվականի նոյեմբեր",
            title:
              "Կլինիկական գիտաշխատող մանկական ինտերվենցիոն սրտաբանության գծով",
            organization: "Նորք Մարաշ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2002 թվականի սեպտեմբերից մինչև 2005 թվականի նոյեմբեր",
            title: "Մանկական սրտաբանության ռեզիդենտ",
            organization: "Նորք Մարաշ բժշկական կենտրոն",
            description: "",
          },
        ],
        education: [
          {
            year: "2018 թվականի փետրվարից մինչև 2018 թվականի մարտ",
            degree: "Կլինիկական դիտորդ մանկական սրտաբանության բաժանմունքում",
            institution: "Վիեննայի բժշկական համալսարան, AKH",
          },
          {
            year: "2017 թվականի նոյեմբեր",
            degree: "Կլինիկական պրակտիկանտ ինտերվենցիոն առիթմոլոգիայում",
            institution:
              "Սրտաբանության և ներքին հիվանդությունների գիտական ինստիտուտ",
          },
          {
            year: "2011 թվականի նոյեմբեր",
            degree:
              "Միջազգային դիտորդ մանկական սրտաբանության և մանկական բնածին սրտի վիրահատությունների բաժանմունքում",
            institution: "Քլիվլենդի կլինիկա",
          },
          {
            year: "2006 թվականի հունվարից մինչև 2006 թվականի ապրիլ",
            degree: "Կլինիկական դիտորդ մանկական ինտերվենցիոն սրտաբանության մեջ",
            institution: "Սուրբ Սրտի մանկական հիվանդանոց",
          },
          {
            year: "2005 թվականի ապրիլից մինչև 2005 թվականի հուլիս",
            degree:
              "Կլինիկական պրակտիկանտ մանկական ինտերվենցիոն սրտաբանության մեջ",
            institution:
              "Ռուսաստանի բժշկական գիտությունների ակադեմիայի սիրտանոթային վիրաբուժության Բակուլևի գիտական կենտրոն",
          },
          {
            year: "2005 թվականի հոկտեմբերից մինչև 2008 թվականի հոկտեմբեր",
            degree: "Հետբուհական ուսումնասիրություն մանկական սրտաբանության մեջ",
            institution:
              "Ակադեմիկոս Ս. Ավդալբեկյանի անվան առողջապահության ազգային ինստիտուտ",
          },
          {
            year: "2002 թվականի սեպտեմբերից մինչև 2005 թվականի հոկտեմբեր",
            degree: "Մանկական սրտաբան",
            institution:
              "Ակադեմիկոս Ս. Ավդալբեկյանի անվան առողջապահության ազգային ինստիտուտ",
          },
          {
            year: "1996 թվականի սեպտեմբերից մինչև 2002 թվականի հուլիս",
            degree: "Բժշկական գիտությունների թեկնածու, մանկաբույժ",
            institution:
              "Մխիթար Հերացու անվան Երևանի պետական բժշկական համալսարան",
          },
        ],
        memberships: [
          "Եվրոպական պերկուտան սրտանոթային միջամտությունների ասոցիացիայի անդամ",
          "Եվրոպական սրտաբանության միության անդամ ID 409978",
        ],
        hobbies: [],
        achievements: [
          {
            title:
              "Երևանի քաղաքապետարանի շնորհակալագիր առողջապահության ոլորտում ձեռքբերումների համար",
            date: "2014",
          },
          {
            title:
              "Շնորհակալագիր Նորք Մարաշ բժշկական կենտրոնի բժշկական անձնակազմից՝ Հայաստանում մանկական ինտերվենցիոն սրտաբանության զարգացման համար",
            date: "2013",
          },
        ],
        academicActivities: [],
        publications: [],
        languages: [
          {
            language: "Հայերեն",
            level: "մայրենի",
          },
          {
            language: "Ռուսերեն",
            level: "ազատ",
          },
          {
            language: "Անգլերեն",
            level: "լավ (բավականին ծանոթ է մասնագիտական տերմինաբանությանը)",
          },
          {
            language: "Ֆրանսերեն",
            level: "բավարար",
          },
        ],
      },
      en: {
        bio: "Qualification MD, Pediatric Cardiologist, Interventional Cardiologist. Positions Co-Founder at CardioLab Clinic. Senior Staff Cardiologist at Pediatric Department of Nork Marash Medical Center.",
        contact: {
          phone: "(+37410) 65 59 60 office, (+37491) 49 05 26 mobile",
          email: "karenzohrabyan@yahoo.com",
          location: "Aygedzor 1st line 28/1, Yerevan 0019, Republic of Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "October 2024 till Now",
            title: "Co-Founder",
            organization: "CardioLab Clinic",
            description: "",
          },
          {
            period: "September 2018 till September 2023",
            title:
              "Health Ministry Advisor in the field of Pediatric Cardiology",
            organization: "Ministry of Health of the Republic of Armenia",
            description: "",
          },
          {
            period: "February 2017 till March 2020",
            title: "Deputy Director",
            organization: "Nork Marash Medical Center",
            description: "",
          },
          {
            period: "November 2010 till February 2013",
            title: "Chief of the Medical Staff",
            organization: "Nork Marash Medical Center",
            description: "",
          },
          {
            period: "December 2007 till now",
            title: "Staff Physician, Pediatric Interventional Cardiologist",
            organization: "Nork Marash Medical Center",
            description: "",
          },
          {
            period: "December 2005 till November 2007",
            title: "Clinical Fellow in Pediatric Interventional Cardiology",
            organization: "Nork Marash Medical Center",
            description: "",
          },
          {
            period: "September 2002 till November 2005",
            title: "Pediatric Cardiology Resident",
            organization: "Nork Marash Medical Center",
            description: "",
          },
        ],
        education: [
          {
            year: "February 2018 till March 2018",
            degree: "Clinical Observer at Division of Pediatric Cardiology",
            institution: "Medical University of Vienna, AKH",
          },
          {
            year: "November 2017",
            degree: "Clinical Trainee in Interventional Arrhythmology",
            institution:
              "Scientific Institute of Cardiology and Internal Diseases",
          },
          {
            year: "November 2011",
            degree:
              "International Observer at Department of Pediatric Cardiology and Pediatric Congenital Heart Surgery",
            institution: "Cleveland Clinic",
          },
          {
            year: "January 2006 till April 2006",
            degree: "Clinical Observer in Pediatric Interventional Cardiology",
            institution: "Sacred Heart Childrens Hospital",
          },
          {
            year: "April 2005 till July 2005",
            degree: "Clinical Trainee in Pediatric Interventional Cardiology",
            institution:
              "Bakulev Scientific Center for Cardiovascular Surgery of Russian Academy of Medical Sciences",
          },
          {
            year: "October 2005 till October 2008",
            degree: "Postgraduate Study in Pediatric Cardiology",
            institution:
              "National Institute of Health named after ac. S. Avdalbekyan",
          },
          {
            year: "September 2002 till October 2005",
            degree: "Pediatric Cardiologist",
            institution:
              "National Institute of Health named after ac. S. Avdalbekyan",
          },
          {
            year: "September 1996 till July 2002",
            degree: "MD, Pediatrician",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
          },
        ],
        memberships: [
          "Member of European Association of Percutaneous Cardiovascular Interventions",
          "European Society of Cardiology ID 409978",
        ],
        hobbies: [],
        achievements: [
          {
            title:
              "Yerevan Municipality Аcknowledgment of Achievements in Health Care",
            date: "2014",
          },
          {
            title:
              "Аcknowledgment from Medical Staff of Nork Marash Medical Center for Development of Pediatric Interventional Cardiology in Armenia",
            date: "2013",
          },
        ],
        academicActivities: [],
        publications: [],
        languages: [
          {
            language: "Armenian",
            level: "native",
          },
          {
            language: "Russian",
            level: "fluent",
          },
          {
            language: "English",
            level: "good (quiet familiar with professional terminology)",
          },
          {
            language: "French",
            level: "satisfactory",
          },
        ],
      },
    },
  },
  {
    id: 3,
    name: {
      am: "Կատարինե Վարդանյան",
      en: "Katarine Vardanyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu3h1g5Y7N5s3FUueQwgdhBEa4x1ScGkiXJAzp",
    role: {
      am: "Ինտենսիվ Սրտաբան",
      en: "Intensive Cardiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showAcademicActivities: false,
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      am: {
        bio: "",
        contact: {
          phone: "(+374) 95885773",
          email: "katarinevardanyan@gmail.com",
          location: "Երևան, Հայաստան",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "2015թ. նոյեմբեր – մինչ օրս",
            title: "Սրտաբան ինտենսիվիստ",
            organization:
              "«Նորք Մարաշ» բժշկական կենտրոն, վերակենդանացման բաժանմունք",
            description: "",
          },
          {
            period: "2024թ. հունիս – մինչ օրս",
            title: "Սրտաբան",
            organization: "«ԷկոՍենս» բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2016թ. օգոստոս – 2017թ. սեպտեմբեր",
            title: "Սրտաբան",
            organization: "«ՍլավՄեդ» բժշկական կենտրոն",
            description: "",
          },
        ],
        education: [
          {
            year: "2003 – 2009",
            degree: "Բժշկական դիպլոմ (M.D.)",
            institution:
              "Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան",
          },
        ],
        memberships: [
          "ACCA-ի դեսպան Հայաստանի Հանրապետությունում",
          "ACCA երիտասարդ ներկայացուցիչը Հայաստանում",
          "Եվրոպական Սրտաբանական Ընկերություն",
          "Հայաստանի Սրտաբանների Ասոցիացիա",
          "Սուր Սրտանոթային Խնամքի Ասոցիացիա",
          "Եվրոպական Սրտանոթային Պատկերման Ասոցիացիա",
          "Սուր Սրտանոթային Խնամքի Աշխատանքային Խումբ",
          "Եվրոպական Սրտային Անբավարարության Ասոցիացիա",
        ],
        hobbies: [],
        achievements: [],
        academicActivities: [],
        publications: [
          {
            title: "Եռասրբան փականի լարերի պատռում",
            journal: "Սուր սրտանոթային համագումար, Աթենք",
            year: "2024",
          },
          {
            title:
              "ՍՏ բարձրացմամբ միոկարդի ինֆարկտ ունեցող հիվանդների բուժումը 2006-ից 2011 թվականներին՝ թիվ 1 համալսարանական կլինիկայում",
            journal:
              "Սրտաբանության հայկական ասոցիացիայի 12-րդ համագումար, Երևան",
            year: "2019",
          },
          {
            title: "Թոքային զարկերակի հսկա անևրիզմայի վերականգնում",
            journal: "Հայաստանի 5-րդ միջազգային բժշկական համագումար",
            year: "2019",
          },
        ],
        languages: [],
      },
      en: {
        bio: "",
        contact: {
          phone: "(+374) 95885773",
          email: "katarinevardanyan@gmail.com",
          location: "Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "November 2015 – Present",
            title: "Adult Cardiologist-Intensivist",
            organization: "Nork Marash Medical Center, Intensive Care Unit",
            description: "",
          },
          {
            period: "June 2024 – Present",
            title: "Cardiologist",
            organization: "EcoSense Medical Center",
            description: "",
          },
          {
            period: "August 2016 – September 2017",
            title: "Cardiologist",
            organization: "SlavMed Medical Center",
            description: "",
          },
        ],
        education: [
          {
            year: "2003 – 2009",
            degree: "M.D. Degree",
            institution: "Yerevan State Medical University",
          },
        ],
        memberships: [
          "ACCA Ambassador to Armenia",
          "Young ACCA representative in Armenia",
          "European Society of Cardiology",
          "Armenian Association of Cardiologists",
          "Acute Cardiovascular Care Association",
          "European Association of Cardiovascular Imaging",
          "Acute Cardiovascular Care Working Group",
          "European Heart Failure Association",
        ],
        hobbies: [],
        achievements: [],
        academicActivities: [],
        publications: [
          {
            title: "Tricuspid Chordae Rupture",
            journal: "Acute Cardiovascular Congress, Athens",
            year: "2024",
          },
          {
            title:
              "Treatment of patients with ST-elevation myocardial infarction from 2006 to 2011 at the N1 University Clinic",
            journal: "Armenian Association of Cardiology XII Congress, Yerevan",
            year: "2019",
          },
          {
            title: "Repair of Giant Pulmonary Artery Aneurysm",
            journal: "5th International Medical Congress of Armenia",
            year: "2019",
          },
        ],
        languages: [],
      },
    },
  },
  {
    id: 4,
    name: {
      am: "Մարիամ Մինասյան",
      en: "Mariam Minasyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluIC4DbAEmOVFpZEU45sKoR6bt7NDSv82hyxfg",
    role: {
      am: "Սրտաբան, Էխո-Սգ Մասնագետ, Սրտի Մռտ Մասնագետ",
      en: "Cardiologist, Echo Specialist, Cardiac MRI Specialist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showAcademicActivities: false,
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      am: {
        bio: "",
        contact: {
          phone: "096-205012",
          email: "mariamminasyan@yahoo.com",
          location: "ՀՀ, Երևան-0011, Արմենակյան 108/4 , ՆորքՄարաշԲԿ",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "2025թ. մինչ այժմ",
            title: "Սրտաբան, Էխո-Սգ Մասնագետ, Սրտի Մռտ Մասնագետ",
            organization: "Կարդիոլաբ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2014թ. մինչևայժմ",
            title: "սրտաբան",
            organization: "Նորք Մարաշ բժշկական կենտրոնի",
            description: "",
          },
          {
            period: "2024թ. մինչևայժմ",
            title: "բժիշկ-ճառագայթաբան, սրտի ՄՌՏ մասնագետ",
            organization: "Պրոտոն ախտորոշիչ և գիտական կենտրոնում",
            description: "",
          },
        ],
        education: [
          {
            year: "2021-2022թթ.",
            degree:
              "Հետբուհական կրթության «Ճառագայթայինախտորոշում» մասնագիտությամբ",
            institution:
              "Երևանի Մխիթար Հերացու անվ. Պետական բժշկական համալսարանի",
          },
          {
            year: "2011-2014թթ.",
            degree: "Հետդիպլոմային կրթություն «Սրտաբանություն» մասնագիտությամբ",
            institution:
              "Երևանի Մխիթար Հերացու անվ. Պետական բժշկական համալսարանի",
          },
          {
            year: "2011թ.",
            degree: "Ընդհանուր բժշկության ֆակուլտետ",
            institution: "Երևանի պետական բժշկական համալսարան",
          },
        ],
        memberships: [
          "«Հայաստանի երիտասարդ սրտաբանների խմբի» անդամ",
          "Սրտաբանության եվրոպական ընկերության պրոֆեսիոնալ անդամ",
        ],
        hobbies: [],
        achievements: [],
        academicActivities: [],
        publications: [],
        languages: [
          {
            language: "հայերեն",
            level: "",
          },
          {
            language: "ռուսերեն",
            level: "",
          },
          {
            language: "անգլերեն",
            level: "",
          },
        ],
      },
      en: {
        bio: "",
        contact: {
          phone: "096-205012",
          email: "mariamminasyan@yahoo.com",
          location:
            "108/4 Armenakyan St., Nork Marash MC, Yerevan 0011, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "Since 2025",
            title: "Cardiologist, Echo-CG Specialist, Cardiac MRI Specialist",
            organization: "Cardiolab Medical Center",
            description: "",
          },
          {
            period: "Since 2014",
            title: "Cardiologist",
            organization: "Nork Marash Medical Center",
            description: "",
          },
          {
            period: "Since 2024",
            title: "Radiologist, Cardiac MRI Specialist",
            organization: "Proton Diagnostic and Scientific Center",
            description: "",
          },
        ],
        education: [
          {
            year: "2021–2022",
            degree: "Postgraduate education in Radiological Diagnostics",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
          },
          {
            year: "2011–2014",
            degree: "Postgraduate education in Cardiology",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
          },
          {
            year: "2011",
            degree: "Faculty of General Medicine",
            institution: "Yerevan State Medical University",
          },
        ],
        memberships: [
          "Member of the Young Cardiologists Group of Armenia",
          "Professional Member of the European Society of Cardiology",
        ],
        hobbies: [],
        achievements: [],
        academicActivities: [],
        publications: [],
        languages: [
          {
            language: "Armenian",
            level: "",
          },
          {
            language: "Russian",
            level: "",
          },
          {
            language: "English",
            level: "",
          },
        ],
      },
    },
  },
  {
    id: 5,
    name: {
      am: "Տաթևիկ Սիմոնյան",
      en: "Tatevik Simonyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluxjrAPtfVspCYkb9tWP0X6eLDhnRHOl7fTjaE",
    role: {
      am: "Մանկական և Պերինատալ Սրտաբան",
      en: "Pediatric and Perinatal Cardiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: true,
        showLanguages: false,
        showMemberships: false,
        showHobbies: true,
        showAcademicActivities: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      am: {
        bio: "",
        contact: {
          phone: "+374-55-99-09-92",
          email: "tateviksimonyan1994@gmail.com",
          location: "ՀՀ, մարզ Կոտայք, ք. Նոր Հաճն, Չարենցի 16 փողոց, բն. 14",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "Մանկական սրտաբանություն",
          "Պերինատալ սրտաբանություն",
          "Քլինիկական ռեզիդենտուրա",
          "Բժշկական ներկայացումներ",
          "Գիտաժողովային մասնակցություն",
        ],
        experience: [
          {
            period: "2024թ.- առ այսօր",
            title: "Մանկական և պերինատալ սրտաբան",
            organization: "Նորք-Մարաշ ԲԿ",
            description: "",
          },
          {
            period: "2023-2024թթ.",
            title: "Պերինատալ սրտաբան-ֆելոու",
            organization: "Նորք-Մարաշ ԲԿ",
            description: "",
          },
          {
            period: "2021թ. հուլիս - 2021թ. դեկտեմբեր",
            title: "Մանկական սրտաբան",
            organization: "Սուրբ Աստվածամայր ԲԿ",
            description: "",
          },
          {
            period: "2020-2021թթ.",
            title: "Պերինատալ սրտաբանության ֆելոուշիփ",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            description: "",
          },
          {
            period: "2020թ. նոյեմբեր - դեկտեմբեր",
            title: "Մանկական սրտաբան",
            organization: "Արաբկիր ԲԿ",
            description: "",
          },
          {
            period: "2018-2020թթ.",
            title: "Ռեզիդենտ-մանկական սրտաբան",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            description: "",
          },
        ],
        education: [
          {
            year: "2023-2024թթ.",
            degree: "Պերինատալ սրտաբանության ֆելոուշիփ",
            institution: "‹‹Նորք-Մարաշ›› բժշկական կենտրոն",
          },
          {
            year: "2017-2020թթ.",
            degree: "Մանկական սրտաբանության կլինիկական օրդինատուրա",
            institution: "‹‹Նորք-Մարաշ›› բժշկական կենտրոն",
          },
          {
            year: "2015-2017թթ.",
            degree:
              "Մագիստրոսի աստիճան, բժշկի որակավորում, գերազանցության դիպլոմ",
            institution:
              "Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան",
          },
          {
            year: "2010-2015թթ.",
            degree: "Բակալավրի աստիճան",
            institution:
              "Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան",
          },
        ],
        memberships: [],
        hobbies: [
          "Կարդալ",
          "Ճանապարհորդել",
          "Երաժշտություն լսել",
          "Դաշնամուր նվագել",
        ],
        achievements: [
          {
            title: "Խոսնակ",
            description:
              "‹‹Ֆիզիկական ակտիվությունը սրտի բնածին արատով երեխաների շրջանում››",
            organization: "‹‹Սիրո և նվիրումի 30 տարին›› գիտաժողով",
            date: "2024թ. նոյեմբեր",
          },
          {
            title: "Մասնակից",
            description: "‹‹Առիթմոլոգիական մաստեր–կլաս››",
            date: "2023թ. հոկտեմբեր",
          },
          {
            title: "Մասնակից",
            description:
              "Նորածնային սիրտ-թոքային հեմոդինամիկային նվիրված վեբինար",
            date: "2021թ. մարտ",
          },
          {
            title: "Խոսնակ",
            description:
              "‹‹Սպորտը և պատվաստումները սրտի բնածին արատով երեխաների մոտ››",
            organization: "ՆՄԲԿ սիրտ-անոթային գիտաժողով",
            date: "2021թ. հունիս",
          },
          {
            title: "Խոսնակ",
            description:
              "‹‹Ամբողջական նախասիրտ-փորոքային հաղորդակցություն ախտորոշմամբ հիվանդների վարման փորձը ‹‹Նորք-Մարաշ›› ԲԿ-ում››",
            organization: "Հայաստանի 5-րդ միջազգային բժշկական համագումար",
            date: "2019թ. հուլիս",
          },
        ],
        academicActivities: [],
        publications: [],
        languages: [
          { language: "Հայերեն", level: "մայրենի" },
          { language: "Ռուսերեն", level: "սահուն" },
          { language: "Անգլերեն", level: "սահուն" },
        ],
      },
      en: {
        bio: "",
        contact: {
          phone: "+374-55-99-09-92",
          email: "tateviksimonyan1994@gmail.com",
          location:
            "16 Charents St., Apt. 14, Nor Hachn, Kotayk Province, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "Pediatric Cardiology",
          "Perinatal Cardiology",
          "Clinical Residency",
          "Medical Presentations",
          "Conference Participation",
        ],
        experience: [
          {
            period: "2024 – Present",
            title: "Pediatric and Perinatal Cardiologist",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
          {
            period: "2023–2024",
            title: "Perinatal Cardiology Fellow",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
          {
            period: "July 2021 – December 2021",
            title: "Pediatric Cardiologist",
            organization: "Surb Astvatsamayr Medical Center",
            description: "",
          },
          {
            period: "2020–2021",
            title: "Perinatal Cardiology Fellowship",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
          {
            period: "November – December 2020",
            title: "Pediatric Cardiologist",
            organization: "Arabkir Medical Center",
            description: "",
          },
          {
            period: "2018–2020",
            title: "Resident – Pediatric Cardiologist",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
        ],
        education: [
          {
            year: "2023–2024",
            degree: "Perinatal Cardiology Fellowship",
            institution: "Nork-Marash Medical Center",
          },
          {
            year: "2017–2020",
            degree: "Clinical Residency in Pediatric Cardiology",
            institution: "Nork-Marash Medical Center",
          },
          {
            year: "2015–2017",
            degree:
              "Master’s Degree, Medical Qualification, Diploma with Honors",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
          },
          {
            year: "2010–2015",
            degree: "Bachelor’s Degree",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
          },
        ],
        memberships: [],
        hobbies: [
          "Reading",
          "Traveling",
          "Listening to music",
          "Playing piano",
        ],
        achievements: [
          {
            title: "Speaker",
            description:
              "“Physical activity among children with congenital heart defects”",
            organization: "“30 Years of Love and Devotion” Conference",
            date: "November 2024",
          },
          {
            title: "Participant",
            description: "“Arrhythmology Master Class”",
            date: "October 2023",
          },
          {
            title: "Participant",
            description:
              "Webinar dedicated to neonatal cardio-pulmonary hemodynamics",
            date: "March 2021",
          },
          {
            title: "Speaker",
            description:
              "“Sports and Vaccinations in Children with Congenital Heart Defects”",
            organization: "NMCC Cardiovascular Conference",
            date: "June 2021",
          },
          {
            title: "Speaker",
            description:
              "“Experience in managing patients diagnosed with complete atrioventricular communication at Nork-Marash Medical Center”",
            organization: "5th International Medical Congress of Armenia",
            date: "July 2019",
          },
        ],
        academicActivities: [],
        publications: [],
        languages: [
          { language: "Armenian", level: "native" },
          { language: "Russian", level: "fluent" },
          { language: "English", level: "fluent" },
        ],
      },
    },
  },
  {
    id: 6,
    name: {
      am: "Անահիտ Գևորգյան",
      en: "Anahit Gevorgyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluT7Vuh0IO67xl130tYVbZmnvuKAkc2dHC9ghD",
    role: {
      am: "Սրտաբան",
      en: "Cardiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      en: {
        bio: "Clinical Cardiologist, Anti-Age Medicine Consultant, Echocardiography and Holter Specialist",
        contact: {
          phone: "+37494611777",
          email: "anna_dr29@yahoo.com",
          location: "Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "Cardiology",
          "Anti-Age Medicine",
          "Echocardiography (transthoracic, transesophageal)",
          "Holter Monitoring",
          "Stress Testing (Treadmill, Veloergometry, Stress-Echo)",
          "Invasive Cardiology",
        ],
        experience: [
          {
            period: "Feb 2025 - Present",
            title: "Cardiologist",
            organization: "CardioLab Armenia medical center",
            description:
              "Clinical cardiology, echocardiography, treadmill test",
          },
          {
            period: "2024 - Present",
            title: "Cardiologist & Anti-Age Consultant",
            organization: "Davidyants Polyclinic",
            description:
              "Clinical cardiology, echocardiography, treadmill test, Holter monitoring, Anti-Age consultations",
          },
          {
            period: "2011 - 2024",
            title: "Cardiologist",
            organization: "Cardiological Private Clinic",
            description:
              "Clinical cardiology, echocardiography, treadmill test, Holter monitoring",
          },
          {
            period: "2008 - 2011",
            title: "Cardiologist",
            organization: "Ultra Lab medical center",
            description:
              "Clinical cardiology, echocardiography, treadmill test",
          },
          {
            period: "Sep 2005 - Jun 2007",
            title: "Cardiologist",
            organization: "Abou-Jaoude Hospital",
            description:
              "General cardiology practice in a clinical hospital setting",
          },
          {
            period: "Sep 2005 - Jun 2007",
            title: "Cardiologist & General Practitioner",
            organization: "Private Clinic, Beirut",
            description: "General cardiology and primary healthcare",
          },
          {
            period: "Sep 2003 - Sep 2004",
            title: "Fellow",
            organization: "Nork-Marash Medical Center",
            description: "Fellowship of Invasive Cardiology",
          },
          {
            period: "Oct 2002 - Sep 2003",
            title: "Volunteer Assistant Cardiologist",
            organization: "Nork-Marash Medical Center",
            description: "Assisting fellow cardiologists",
          },
          {
            period: "Mar 2002 - Aug 2002",
            title: "Medical Representative",
            organization: "Hipp Company",
            description: "Promotion of infant food products",
          },
          {
            period: "Sep 2001 - Oct 2002",
            title: "Assistant Lecturer",
            organization: "National Institute of Health of Armenia",
            description:
              "Taught topics related to rational drug use, coronary disease, Alzheimer’s, hypertension, etc.",
          },
          {
            period: "Sep 2000 - Oct 2002",
            title: "Expert in Clinical Trials & Drug Evaluation",
            organization: "Armenian Drug and Medical Technology Agency",
            description:
              "Worked in clinical trials and drug registration departments",
          },
          {
            period: "Sep 2000 - Oct 2002",
            title: "Secretary of Ethics Committee",
            organization: "Knowledge Society",
            description: "Oversight of clinical trials in accordance with GCP",
          },
          {
            period: "1998 - 2000",
            title: "Resident Doctor on Duty",
            organization: "Scientific Research Institute of Cardiology",
            description:
              "Departments of Heart Failure, Arrhythmias, Cardiac Care",
          },
          {
            period: "1997 - 1998",
            title: "Resident Doctor on Duty",
            organization: "Erebouni Medical Center",
            description: "Cardiac Care Unit",
          },
        ],
        education: [
          {
            year: "2021 - Present",
            degree: "Anti-Age Expert",
            institution: "Swiss Group AG, Anti-Age Medicine",
          },
          {
            year: "2008",
            degree: "24-hour ECG Monitoring (Holter)",
            institution: "Astghik Medical Center",
          },
          {
            year: "2002 - 2003",
            degree: "Clinical Echocardiography",
            institution: "Nork Marash Medical Center",
          },
          {
            year: "1997 - 2000",
            degree: "Clinical Residency of Cardiology",
            institution:
              "National Institute of Health of Armenia and Erebouni Medical Center",
          },
          {
            year: "1991 - 1997",
            degree: "Diploma in General Medicine (with honors)",
            institution: "Yerevan State Medical University",
          },
          {
            year: "1981 - 1991",
            degree: "Secondary Education Certificate (with honors)",
            institution: "Secondary school N 55 named after A.P. Chekhov",
          },
        ],
        memberships: [
          "Republic of Armenia Medical License in Cardiology (2000)",
          "Lebanese Medical Colloquium (July 2005)",
        ],
        hobbies: ["Sports", "Theater", "Literature", "Music", "Arts"],
        achievements: [],
        academicActivities: [
          {
            title: "Assistant Lecturer on Clinical Pharmacology Topics",
            description:
              "Covered topics such as rational drug use, essential medicines, quality of life, and diseases like Alzheimer's and coronary disease.",
            organization: "National Institute of Health of Armenia",
            date: "2001 - 2002",
          },
          {
            title: "Secretary of Ethics Committee for Clinical Trials",
            description: "Oversaw clinical trials following GCP standards",
            organization: "Knowledge Society",
            date: "2000 - 2002",
          },
          {
            title:
              "Participant in Euro Heart Survey of Adult Congenital Heart Disease",
            date: "n/a",
          },
          {
            title: "Frequent Medical Conference Participant",
            date: "n/a",
          },
        ],
        publications: [],
        languages: [
          { language: "Armenian", level: "Fluent" },
          { language: "Russian", level: "Fluent" },
          { language: "English", level: "Fluent" },
          { language: "Arabic", level: "Fair" },
          { language: "French", level: "Fair" },
          { language: "Greek", level: "Fair" },
        ],
      },
      am: {
        bio: "Կլինիկական սրտաբույժ, հակատարիքային բժշկության խորհրդատու, Էխոսրտագրության և Հոլտեր մոնիթորինգի մասնագետ",
        contact: {
          phone: "+37494611777",
          email: "anna_dr29@yahoo.com",
          location: "Երևան, Հայաստան",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "Սրտաբանություն",
          "Հակատարիքային բժշկություն",
          "Էխոսրտագրություն (տրանցթորակալ, տրանզեզոֆագեալ)",
          "Հոլտեր մոնիթորինգ",
          "Սթրես թեստեր (ավանդական գորգ, վելոերգոմետրիա, սթրես-էխո)",
          "Ինվազիվ սրտաբանություն",
        ],
        experience: [
          {
            period: "Փետրվար 2025 - Մինչ օրս",
            title: "Սրտաբույժ",
            organization: "CardioLab Armenia բժշկական կենտրոն",
            description:
              "Կլինիկական սրտաբանություն, էխոսրտագրություն, վարժանքի թեստավորում (տրեդմիլ)",
          },
          {
            period: "2024 - Մինչ օրս",
            title: "Սրտաբույժ և հակատարիքային խորհրդատու",
            organization: "Դավիթյանց պոլիկլինիկա",
            description:
              "Սրտաբանություն, էխոսրտագրություն, սթրես թեստ, Հոլտեր մոնիթորինգ, հակատարիքային բժշկություն",
          },
          {
            period: "2011 - 2024",
            title: "Սրտաբույժ",
            organization: "Սրտաբանական մասնավոր կլինիկա",
            description:
              "Սրտաբանություն, էխոսրտագրություն, սթրես թեստեր, Հոլտեր մոնիթորինգ",
          },
          {
            period: "2008 - 2011",
            title: "Սրտաբույժ",
            organization: "Ուլտրա Լաբ բժշկական կենտրոն",
            description:
              "Սրտաբանական ծառայություններ, էխոսրտագրություն, վարժանքի թեստեր",
          },
          {
            period: "Սեպտեմբեր 2005 - Հունիս 2007",
            title: "Սրտաբույժ",
            organization: "Abou-Jaoude հիվանդանոց, Բեյրութ",
            description: "Ընդհանուր սրտաբանական պրակտիկա հիվանդանոցում",
          },
          {
            period: "Սեպտեմբեր 2005 - Հունիս 2007",
            title: "Սրտաբույժ և Ընդհանուր բժշկի գործառույթ",
            organization: "Մասնավոր կլինիկա, Բեյրութ",
            description:
              "Ընդհանուր սրտաբանական և առաջնային բուժօգնության ծառայություններ",
          },
          {
            period: "Սեպտեմբեր 2003 - Սեպտեմբեր 2004",
            title: "Ինվազիվ սրտաբանության ֆելոու",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            description: "Ինվազիվ սրտաբանության ոլորտում մասնագիտացում",
          },
          {
            period: "Հոկտեմբեր 2002 - Սեպտեմբեր 2003",
            title: "Կամավոր օգնական սրտաբան",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            description:
              "Օգնում էր սրտաբույժներին կլինիկական գործունեության ընթացքում",
          },
          {
            period: "Մարտ 2002 - Օգոստոս 2002",
            title: "Բժշկական ներկայացուցիչ",
            organization: "Hipp ընկերություն",
            description: "Մանկական սննդի արտադրանքի առաջխաղացում",
          },
          {
            period: "Սեպտեմբեր 2001 - Հոկտեմբեր 2002",
            title: "Օգնական դասախոս",
            organization: "ՀՀ ԱՆ Առողջապահության ազգային ինստիտուտ",
            description:
              "Դասավանդել է դեղագործության և սրտաբանության թեմաներով",
          },
          {
            period: "Սեպտեմբեր 2000 - Հոկտեմբեր 2002",
            title: "Կլինիկական փորձարկումների փորձագետ",
            organization:
              "Հայկական դեղերի և բժշկական տեխնոլոգիաների գործակալություն",
            description: "Կլինիկական փորձարկումներ և դեղերի գրանցում",
          },
          {
            period: "Սեպտեմբեր 2000 - Հոկտեմբեր 2002",
            title: "Էթիկայի կոմիտեի քարտուղար",
            organization: "«Գիտելիք» հասարակություն",
            description:
              "Հետևում էր կլինիկական փորձարկումների էթիկական չափանիշներին (GCP)",
          },
          {
            period: "1998 - 2000",
            title: "Ռեզիդենտ, հերթապահ բժիշկ",
            organization: "Սրտաբանության գիտահետազոտական ինստիտուտ",
            description:
              "«Սրտային անբավարարություն», «Առիթմիաներ», «Սրտային խնամք» բաժանմունքներում",
          },
          {
            period: "1997 - 1998",
            title: "Ռեզիդենտ, հերթապահ բժիշկ",
            organization: "Էրեբունի բժշկական կենտրոն",
            description: "Սրտային խնամքի բաժանմունք",
          },
        ],
        education: [
          {
            year: "2021 - Մինչ օրս",
            degree: "Հակատարիքային բժշկության մասնագետ",
            institution: "Swiss Group AG, Anti-Age Medicine",
          },
          {
            year: "2008",
            degree: "24-ժամյա ԷԿԳ մոնիթորինգ (Հոլտեր)",
            institution: "Աստղիկ բժշկական կենտրոն",
          },
          {
            year: "2002 - 2003",
            degree: "Կլինիկական էխոսրտագրություն",
            institution: "Նորք Մարաշ բժշկական կենտրոն",
          },
          {
            year: "1997 - 2000",
            degree: "Սրտաբանության կլինիկական ռեզիդենտուրա",
            institution: "ԱԱԻ և Էրեբունի ԲԿ",
          },
          {
            year: "1991 - 1997",
            degree: "Բժշկական դիպլոմ (պատվով)",
            institution: "Երևանի պետական բժշկական համալսարան",
          },
        ],
        memberships: [
          "ՀՀ Սրտաբանի արտոնագիր (2000-ից)",
          "Լիբանանի բժշկական քոլոքվիում (Հուլիս 2005)",
        ],
        hobbies: [
          "Սպորտ",
          "Թատրոն",
          "Գրականություն",
          "Երաժշտություն",
          "Արվեստ",
        ],
        achievements: [],
        academicActivities: [
          {
            title: "Օգնական դասախոս կլինիկական դեղագիտության թեմաներով",
            description:
              "Դասավանդել է՝ դեղերի խելամիտ օգտագործում, Ալցհեյմերի հիվանդություն, սրտային հիվանդություններ և այլն",
            organization: "ՀՀ ԱՆ Առողջապահության ազգային ինստիտուտ",
            date: "2001 - 2002",
          },
          {
            title:
              "Էթիկայի կոմիտեի քարտուղար կլինիկական փորձարկումների վերահսկման համար",
            description:
              "Վերահսկել է կլինիկական փորձարկումների համապատասխանությունը GCP-ին",
            organization: "«Գիտելիք» հասարակություն",
            date: "2000 - 2002",
          },
          {
            title: "Մասնակցել է Euro Heart Survey նախագծին",
            date: "չնշված",
          },
          {
            title: "Պարբերաբար մասնակցել է բժշկական գիտաժողովների",
            date: "չնշված",
          },
        ],
        publications: [],
        languages: [
          { language: "Հայերեն", level: "Արտահայտիչ" },
          { language: "Ռուսերեն", level: "Արտահայտիչ" },
          { language: "Անգլերեն", level: "Արտահայտիչ" },
          { language: "Արաբերեն", level: "Միջին" },
          { language: "Ֆրանսերեն", level: "Միջին" },
          { language: "Հունարեն", level: "Միջին" },
        ],
      },
    },
  },
  {
    id: 7,
    name: {
      am: "Գևորգ Պետրոսյան",
      en: "Gevorg Petrosyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluf6eVH0Zz5N7IdOAeZ04QFuoWqrbmxjn9MY1P",
    role: {
      am: "Սրտաբան",
      en: "Cardiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: true,
        showLanguages: false,
        showMemberships: true,
        showHobbies: true,
        showAcademicActivities: true,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      en: {
        bio: "",
        contact: {
          phone: "+37498572768",
          email: "gevorgpetrosyan2805@gmail.com",
          location: "Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "01.2025-present",
            title: "Arrhythmology fellow",
            organization: '"Cardiolab" MC, Yerevan',
            description: "",
          },
          {
            period: "11.2024-present",
            title: "Cardiologist",
            organization: '"Astghik" MC, Yerevan',
            description: "",
          },
          {
            period: "09.2021-03.2025",
            title: "Emergency physician",
            organization: '"Ambulance" CJSC, N2 substation',
            description: "",
          },
          {
            period: "09.2016-present",
            title: "Head of Biology Olympiad Club",
            organization:
              '"Shirakatsy Lyceum" International Scientific-Educational Complex',
            description: "",
          },
          {
            period: "2023- present",
            title: "Member of the Republican Committee on Biology Olympiad",
            organization: "",
            description: "",
          },
          {
            period: "2019-2021",
            title: "Patient Care Assistant",
            organization: '"Heratsi" No. 1 hospital complexe',
            description: "",
          },
        ],
        education: [
          {
            year: "11.2024-03.2025",
            degree:
              "Short-term specialization and licensing in Echocardiography",
            institution:
              '"National Institute of Health named after Academician S. Avdalbekyan" Ministry of Health. RA',
          },
          {
            year: "2021-2024",
            degree: "Residency in Cardiology",
            institution:
              '"Heratsi" No. 1 hospital complexe, YSMU, Department of General & Invasive Cardiology',
          },
          {
            year: "2015-2021",
            degree: "Doctor of Medicine",
            institution:
              "Yerevan State Medical University (YSMU), Faculty of General Medicine.",
          },
        ],
        memberships: [],
        hobbies: ["Chess", "Hiking", "Gardening", "Swimming"],
        achievements: [
          {
            title: "EHRA CIED Course",
            organization: "European Society of Cardiology",
            date: "June 19-21, 2025",
          },
          {
            title: "POCUS ultarasound course",
            date: "March 09-10, 2025",
          },
          {
            title: "Echocardiography Workshop",
            organization: '"Cardiolab" MC, Yerevan',
            date: "February 27-28, 2025",
          },
          {
            title: "ACLS training",
            organization: '"Traveling Doctors" Health NGO',
            date: "03.05.23",
          },
          {
            title: "Leadership Map assessment program",
            organization: "Grow Edutainment, Yerevan",
            date: "2019",
          },
          {
            title: "Online Eurocamp 2020",
            organization:
              "Magdeburg, Auslandsgesellschaft Sachsen-Anhalt e. V.",
            date: "from 25.05.2020 to 05.06.2020",
          },
        ],
        academicActivities: [],
        publications: [
          {
            title: 'Review "mTOR as a possible target for ASD pharmacotherapy"',
            journal:
              "The New Armenian Medical Journal, Vol.11, No3, 2017, page 156",
            description:
              "Khamperyan A.Kh., Hakobyan A.H., Kehyan V.S., Petrosyan G.V. (Scientific supervisor- .S.Fereshetyan, Departament of Biochemistry, YSMU)",
            year: "2017",
          },
          {
            title:
              'Impact of Ararat Cement and Zangezur Copper and Molybdenum Factories Emissiones on Population Health" research work',
            description:
              "3rd International Conference on Non-Communicable Diseases, Chi inău, Republic of Moldova",
            year: "2019",
          },
          {
            title:
              "Comparative Characteristics of Idiopathic Inflammatory Bowel Diseases",
            journal:
              "V International Scientific and Practical Conference of Students and Young Scientists, Dorokhov Readings - Russia, 2018, pp. 202-213.",
            description: "Petrosyan G.V., Gevorgyan N.V., Karalyan N.Yu.",
            year: "2018",
          },
        ],
        languages: [
          {
            language: "Armenian",
            level: "mother tongue",
          },
          {
            language: "English",
            level: "B2",
          },
          {
            language: "Russian",
            level: "B2",
          },
          {
            language: "German",
            level: "A1",
          },
        ],
      },
      am: {
        bio: "",
        contact: {
          phone: "+37498572768",
          email: "gevorgpetrosyan2805@gmail.com",
          location: "Երևան, Հայաստան",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "01.2025–մինչ օրս",
            title: "Առիթմոլոգիայի ֆելոու",
            organization: "«Կարդիոլաբ» ԲԿ, Երևան",
            description: "",
          },
          {
            period: "11.2024–մինչ օրս",
            title: "Սրտաբան",
            organization: "«Աստղիկ» ԲԿ, Երևան",
            description: "",
          },
          {
            period: "09.2021–03.2025",
            title: "Շտապ բժշկական օգնության բժիշկ",
            organization: "«Շտապ օգնություն» ՓԲԸ, N2 ենթակայան",
            description: "",
          },
          {
            period: "09.2016–մինչ օրս",
            title: "Կենսաբանության օլիմպիադայի խմբակի ղեկավար",
            organization: "«Շիրակացու լիցեյ» միջազգային գիտակրթական համալիր",
            description: "",
          },
          {
            period: "2023–մինչ օրս",
            title: "Կենսաբանության հանրապետական օլիմպիադայի հանձնաժողովի անդամ",
            organization: "",
            description: "",
          },
          {
            period: "2019–2021",
            title: "Հիվանդների խնամքի օգնական",
            organization: "«Հերացու» թիվ 1 հիվանդանոցային համալիրը",
            description: "",
          },
        ],
        education: [
          {
            year: "11.2024–03.2025",
            degree:
              "Կարճաժամկետ մասնագիտացում և արտոնագրում էխոկարդիոգրաֆիայում",
            institution:
              "ՀՀ Առողջապահության նախարարության «Ս. Ավդալբեկյանի անվան Առողջապահության ազգային ինստիտուտ»",
          },
          {
            year: "2021–2024",
            degree: "Սրտաբանության ռեզիդենտուրա",
            institution:
              "«Հերացու» թիվ 1 հիվանդանոցային համալիր, ԵՊԲՀ, Ընդհանուր և միջամտային սրտաբանության ամբիոն",
          },
          {
            year: "2015–2021",
            degree: "Բժշկի դիպլոմ",
            institution:
              "Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան, Ընդհանուր բժշկության ֆակուլտետ",
          },
        ],
        memberships: [],
        hobbies: ["Շախմատ", "Արևելք", "Այգեգործություն", "Լող"],
        achievements: [
          {
            title: "EHRA CIED դասընթաց",
            organization: "Եվրոպական Սրտաբանական Ընկերություն",
            date: "2025թ․ հունիսի 19–21",
          },
          {
            title: "POCUS ուլտրաձայնային դասընթաց",
            date: "2025թ․ մարտի 9–10",
          },
          {
            title: "Էխոկարդիոգրաֆիայի աշխատարան",
            organization: "«Կարդիոլաբ» ԲԿ, Երևան",
            date: "2025թ․ փետրվարի 27–28",
          },
          {
            title: "ACLS վերապատրաստում",
            organization: "«Ճամփորդող բժիշկներ» առողջապահական ՀԿ",
            date: "2023թ․ մայիսի 3",
          },
          {
            title: "Leadership Map գնահատման ծրագիր",
            organization: "Grow Edutainment, Երևան",
            date: "2019թ․",
          },
          {
            title: "Online Eurocamp 2020",
            organization:
              "Մագդեբուրգ, Auslandsgesellschaft Sachsen-Anhalt e. V.",
            date: "25.05.2020 – 05.06.2020",
          },
        ],
        academicActivities: [],
        publications: [
          {
            title: "Վերանայում «mTOR-ը՝ որպես ԱՍԴ դեղաբուժման հնարավոր թիրախ»",
            journal:
              "The New Armenian Medical Journal, Հատոր 11, Թիվ 3, 2017, էջ 156",
            description:
              "Խամփերյան Ա.Խ., Հակոբյան Ա.Հ., Քեհյան Վ.Ս., Պետրոսյան Գ.Վ. (Գիտական ղեկավար՝ Ս. Ֆերեշեթյան, ԵՊԲՀ Կենսաքիմիայի ամբիոն)",
            year: "2017",
          },
          {
            title:
              "Արարատի ցեմենտի և Զանգեզուրի պղնձամոլիբդենային գործարանների արտանետումների ազդեցությունը բնակչության առողջության վրա",
            description:
              "Ոչ վարակիչ հիվանդությունների վերաբերյալ 3-րդ միջազգային գիտաժողով, Քիշինև, Մոլդովայի Հանրապետություն",
            year: "2019",
          },
          {
            title:
              "Իդիոպաթիկ բորբոքային աղիքային հիվանդությունների համեմատական բնութագրումը",
            journal:
              "Ուսանողների և երիտասարդ գիտնականների V միջազգային գիտագործնական կոնֆերանս, Դորոխովյան ընթերցումներ – Ռուսաստան, 2018, էջ 202–213",
            description: "Պետրոսյան Գ.Վ., Գևորգյան Ն.Վ., Կարալյան Ն.Յու.",
            year: "2018",
          },
        ],
        languages: [
          {
            language: "Հայերեն",
            level: "մայրենի",
          },
          {
            language: "Անգլերեն",
            level: "B2",
          },
          {
            language: "Ռուսերեն",
            level: "B2",
          },
          {
            language: "Գերմաներեն",
            level: "A1",
          },
        ],
      },
    },
  },
  {
    id: 8,
    name: {
      am: "Տաթևիկ Գաբրիելյան",
      en: "Tatevik Gabrielyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluX38r1mOa6TkeElYqHKS8hzy4uf7mr9tC0MBv",
    role: {
      am: "Սրտաբան-Առիթմոլոգ",
      en: "Cardiologist-Arrhythmologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      am: defaultPersonalSingleInfo,
    },
  },
  {
    id: 9,
    name: {
      am: "Իզաբելլա Բարեկյան",
      en: "Izabella Barekyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluv7GAuykBOredpWR2N9YyhZbqVn4KCwD15mIt",
    role: {
      am: "Սրտաբան",
      en: "Cardiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        // Visibility flags
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: false,
        showLanguages: false,
        showMemberships: false,
        showHobbies: false,
        showAcademicActivities: false,
        // Sidebar visibility
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      en: {
        bio: "",
        contact: {
          phone: "+37494226363",
          email: "izabellabarekan@gmail.com",
          location: "Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            title: "Cardiology Consultant",
            organization: "Haematology Center after Prof. R. Yeolyan MI",
            period: "Feb 2023 – Present",
            description: "",
          },
          {
            title: "Cardiologist and Arrhythmologist Fellow",
            organization: "Nork-Marash Medical Center",
            period: "Sep 2022 – Present",
            description: "",
          },
          {
            title: "Cardiologist",
            organization: "Mikaelyan University Hospital",
            period: "2020 – Present",
            description: "",
          },
          {
            title: "Cardiologist",
            organization: "Nork-Marash Medical Center",
            period: "2019 – 2021",
            description: "",
          },
          {
            title: "Cardiologist",
            organization: "Ambulance CJSC",
            period: "2016 – 2018",
            description: "",
          },
          {
            title: "Cardiologist",
            organization: "Republican Anti-Tuberculosis Dispensary",
            period: "Jun 2018 – Dec 2018",
            description: "",
          },
        ],
        education: [
          {
            degree: "Medical Specialist in the Field of Cardiology",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
            year: "2015 – 2018",
          },
          {
            degree: "Medical Doctor",
            institution: "Belgorod State University",
            year: "2009 – 2015",
          },
        ],
        memberships: [],
        hobbies: [],
        achievements: [
          "Member of the organizational committee of the first Cardio-Oncology Forum in Armenia (April 2023)",
          "Delivered a lecture on Sudden Cardiac Death within the first Patient School at NMMC (May 2023)",
        ],
        academicActivities: [],
        publications: [
          {
            title:
              "Analysis of the Frequency of Detection of Precancerous Diseases of the Cervix",
            journal:
              'Collection of Scientific Papers – "Education and Science: Current Status and Development Prospects"',
            description: "Supervisor: Prof. Speransky S.L.",
            year: "2013",
          },
          {
            title: "Liver Transplantation",
            journal: "Forum on Surgical Diseases",
            description: "Supervisor: Ph.D., Assoc. Volkov D.V.",
            year: "2013",
          },
          {
            title: "Syndrome of Ovarian Hyperstimulation",
            journal: "Forum of Obstetrics and Gynecology",
            description: "Supervisor: Prof. Pakhomov S.P.",
            year: "2013",
          },
          {
            title: "Religion as an Element of the National Social System",
            journal:
              "Belgorod State National Research University – Philosophy and Science over Barriers: VI All-Russian Scientific Conference",
            description: "",
            year: "2012",
          },
        ],
        languages: [
          { language: "Armenian", level: "Native" },
          { language: "Russian", level: "Native" },
          { language: "English", level: "C1" },
        ],
      },
      am: {
        bio: "",
        contact: {
          phone: "+37494226363",
          email: "izabellabarekan@gmail.com",
          location: "Երևան, Հայաստան",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            title: "Սրտաբան խորհրդատու",
            organization: "Պրոֆ. Ռ. Եոլյանի անվան Արյունաբանական կենտրոն",
            period: "2023թ. փետրվար – մինչ օրս",
            description: "",
          },
          {
            title: "Սրտաբան և առիթմոլոգ ֆելոու",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            period: "2022թ. սեպտեմբեր – մինչ օրս",
            description: "",
          },
          {
            title: "Սրտաբան",
            organization: "Միքայելյան համալսարանական հիվանդանոց",
            period: "2020 – մինչ օրս",
            description: "",
          },
          {
            title: "Սրտաբան",
            organization: "Նորք-Մարաշ բժշկական կենտրոն",
            period: "2019 – 2021",
            description: "",
          },
          {
            title: "Սրտաբան",
            organization: "«Շտապ օգնություն» ՓԲԸ",
            period: "2016 – 2018",
            description: "",
          },
          {
            title: "Սրտաբան",
            organization: "Հանրապետական հակատուբերկուլոզային դիսպանսեր",
            period: "2018թ. հունիս – 2018թ. դեկտեմբեր",
            description: "",
          },
        ],
        education: [
          {
            degree: "Սրտաբանության մասնագետ",
            institution:
              "Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան",
            year: "2015 – 2018",
          },
          {
            degree: "Բժիշկ",
            institution: "Բելգորոդի Պետական Համալսարան",
            year: "2009 – 2015",
          },
        ],
        memberships: [],
        hobbies: [],
        achievements: [
          "Հայաստանում առաջին Կարդիո-օնկոլոգիայի ֆորումի կազմակերպչական խմբի անդամ (2023թ. ապրիլ)",
          "Դասախոսություն «Հանկարծամահության» վերաբերյալ ՆՄԲԿ-ում անցկացված առաջին Հիվանդների դպրոցում (2023թ. մայիս)",
        ],
        academicActivities: [],
        publications: [
          {
            title:
              "Պարանոցի նախաքաղցկեղային հիվանդությունների հայտնաբերման հաճախականության վերլուծություն",
            journal:
              "Գիտական աշխատանքների ժողովածու – «Կրթություն և գիտություն. Ներկայիս վիճակն ու զարգացման հեռանկարները»",
            description: "Գիտական ղեկավար՝ պրոֆ. Սպերանսկի Ս.Լ.",
            year: "2013",
          },
          {
            title: "Լյարդի փոխպատվաստում",
            journal: "Վիրաբուժական հիվանդությունների ֆորում",
            description: "Գիտական ղեկավար՝ բ.գ.թ., դոցենտ Վոլկով Դ.Վ.",
            year: "2013",
          },
          {
            title: "Ձվարանների գերազգայունացման համախտանիշ",
            journal: "Մայրաբուծության և գինեկոլոգիայի ֆորում",
            description: "Գիտական ղեկավար՝ պրոֆ. Պախոմով Ս.Պ.",
            year: "2013",
          },
          {
            title: "Կրոնն՝ որպես ազգային սոցիալական համակարգի տարր",
            journal:
              "Բելգորոդի Պետական Ազգային Հետազոտական Համալսարան – Փիլիսոփայություն և գիտություն առանց սահմանների՝ VI համառուսական գիտաժողով",
            description: "",
            year: "2012",
          },
        ],
        languages: [
          { language: "Հայերեն", level: "մայրենի" },
          { language: "Ռուսերեն", level: "մայրենի" },
          { language: "Անգլերեն", level: "C1" },
        ],
      },
    },
  },
  {
    id: 10,
    name: {
      am: "Մարիամ Հովակիմյան",
      en: "Mariam Hovakimyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluM6kftgSmxf0AaeIb7tJwXUHG2sKPOWnoQLik",
    role: {
      am: "Սրտային Անբավարարության Մասնագետ",
      en: "Heart Failure Specialist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: true,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showAcademicActivities: false,
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      en: {
        bio: "",
        contact: {
          phone: "(+374) 093130414",
          email: "hovakimyanmariam@gmail.com",
          location: "2nd Aghyusagortsner street, 56, 0018, Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "01/04/2025 - CURRENT",
            title: "CARDIOLOGIST",
            organization: "CARDIOLAB",
            description: "",
          },
          {
            period: "01/10/2022 - CURRENT",
            title: "CARDIOLOGIST, ATTENDING PHYSICIAN",
            organization: "HERATSI HOSPITAL COMPLEX, EMERGENCY DEPARTMENT",
            description: "",
          },
          {
            period: "01/04/2022 - CURRENT",
            title: "CARDIOLOGIST, PART-TIME",
            organization:
              "NEW-MED CENTER OF UROLOGY CLOSED JOINT-STOCK COMPANY (CJSC)",
            description: "",
          },
          {
            period: "17/09/2022 - CURRENT",
            title: "CARDIOLOGIST, PART-TIME",
            organization:
              "HOSPITAL AND POLYCLINIC N 2 CLOSED JOINT-STOCK COMPANY (CJSC)",
            description: "",
          },
          {
            period: "01/09/2019-09/09/2022",
            title: "CARDIOLOGY RESIDENT",
            organization:
              "HERATSI HOSPITAL COMPLEX, DEPARTMENT OF GENERAL AND INVASIVE CARDIOLOGY",
            description: "",
          },
          {
            period: "27/06/2020 - 19/02/2021",
            title: "ATTENDING PHISICIAN",
            organization:
              "RESEARCH INSTITUTE OF CARDIOLOGY NAMED AFTER LEVON HOVHANNISYAN",
            description: "",
          },
          {
            period: "02/09/2016- 10/04/2018",
            title: "PHARMACEUTICAL ASSISTANT",
            organization: "MAGTONI PHARMACY CHAIN",
            description: "",
          },
        ],
        education: [
          {
            year: "20/04/2025-20/06/2025",
            degree: "CERTIFICATE OF TRAINING FELLOWSHIP",
            institution: "CHU de Nice Hopital Pasteur, Cardiology Department",
          },
          {
            year: "11/03/2024-04/05/2024",
            degree: "CLINICAL AND RESEARCH INTERNSHIP",
            institution:
              "Erasme academic hospital, Cardiac Insufficiency and Pulmonary Vascular Disease Clinic",
          },
          {
            year: "04/01/2023-04/05/2023",
            degree:
              "ECHOCARDIOGRAPHY, PROFESSIONAL TRAINING COURSE, CERTIFICATE",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
          },
          {
            year: "26/05/2023",
            degree:
              "CERTIFICATE OF ATTENDANCE AT THE EVENT: HYPERTROPHIC CARDIOMYOPATHY: THE PATIENT'S\n" +
              "PERSPECTIVE",
            institution:
              "European Accreditation Council for Continuing Medical Education, esc working groups",
          },
          {
            year: "10/06/2023",
            degree:
              "CERTIFICATE OF PARTICIPATION IN THE E-LEARNING ACTIVITY TITLED 2022 - ESC-ERS GUIDELINES FOR\n" +
              "THE DIAGNOSIS AND TREATMENT OF PULMONARY HYPERTENSION",
            institution:
              "European Accreditation Council for Continuing Medical Education, esc working groups",
          },
          {
            year: "26/06/2023",
            degree:
              "CERTIFICATE OF PARTICIPATION IN THE ENDURING MATERIAL TITLED MYOCARDIAL INFARCTION",
            institution: "University of Zurich",
          },
          {
            year: "26/09/2021-02/10/2021",
            degree:
              "CERTIFICATE OF ATTENDANCE IN SALZBURG WEILL CORNELL SEMINAR IN LIPID METABOLISM AND CARDIOVASCULAR RISK",
            institution: "Open medical institute",
          },
          {
            year: "10/10/2021-16/10/2021",
            degree:
              "CERTIFICATE OF ATTENDANCE IN SALZBURG WEILL CORNELL SEMINAR IN CARDIOLOGY",
            institution: "Open medical institute",
          },
          {
            year: "28/04/2020",
            degree:
              "CERTIFICATE OF PARTICIPATION IN ENDURING MATERIAL TITLED MANAGING ATRIAL FIBRILLATION",
            institution: "Stanford center for Continuing medical education",
          },
          {
            year: "16/05/2020",
            degree:
              "CERTIFICATE OF PARTICIPATION IN THE ENDURING MATERIAL TITLED HYPERTENSION IN PRIMARY\n" +
              "CARE - IMPROVING CONTROL AND REDUCING RISK",
            institution: "Stanford center for Continuing medical education",
          },
          {
            year: "16/05/2020",
            degree:
              "CERTIFICATE OF PARTICIPATION IN THE ENDURING MATERIAL TITLED OPTIMIZING ANTIMICROBIAL\n" +
              "THERAPY WITH TIMEOUTS",
            institution: "Stanford center for Continuing medical education",
          },
          {
            year: "30/05/2020",
            degree:
              "CERTIFICATE OF PARTICIPATION IN THE ENDURING MATERIAL TITLED TYPE 2 DIABETES MANAGEMENT",
            institution: "Stanford center for Continuing medical education",
          },
          {
            year: "30/05/2020",
            degree:
              "CERTIFICATE OF ATTENDANCE AT THE EVENT: PERCUTANEOUS THERAPIES FOR ACUTE PULMONARY\n" +
              "EMBOLISM: STATE-OF-THE-ARTT",
            institution:
              "European Accreditation Council for Continuing Medical Education, esc working groups",
          },
          {
            year: "09/07/2020",
            degree:
              "CERTIFICATE OF PARTICIPATION IN THE ENDURING MATERIAL TITLED COVID-19 AND\n" +
              "CARDIOVASCULAR COMPLICATIONS",
            institution: "Stanford center for Continuing medical education",
          },
          {
            year: "01/09/2013-01/07/2019",
            degree: "DOCTOR OF MEDICINE",
            institution: "Yerevan State Medical University",
          },
        ],
        memberships: [
          "Armenian Cardiologists Association",
          "ESC Professional Member",
          "HFA Silver Member",
          "Working Group on Pulmonary Circulation & Right Ventricular Function Membership",
          "WG on Thrombosis Member",
          "European Association of Cardiovascular Imaging Regular Membership",
          "WG on Cardiovascular Pharmacotherapy Member",
          "Council on Basic Cardiovascular Science Member",
        ],
        hobbies: [],
        achievements: [
          {
            title: "Scholarship grant",
            organization: "THE HIRAIR and ANNA HOVNANIAN FOUNDATION, INC",
            date: "18/01/2019",
            description:
              "Scholarship grant covering the tuition for spring 2019 term in the Yerevan state Medical university after M. Heratsi.",
          },
          {
            title:
              "The complex case of a Stemi infarction complicated by atrial fibrillation, cardiogenic shock and thromboembolic complications.",
            organization: "ESC Heart Failure 2023, Prague, Czech Republic",
            date: "May 2023",
            description:
              "Martirosyan G. E., Hovakimyan M.H. The clinical case was presented at ESC Heart Failure 2023, in May 2023 in Prague, Czech Republic.",
          },
        ],
        academicActivities: [],
        publications: [
          {
            title:
              "Pacemaker lead-associated pulmonary embolism in patient with covid- 19 infection",
            journal:
              "The New Armenian Medical Journal Vol.15 (2021), No 2, . 42-45",
            year: "2021",
            description:
              "Sisakian H.S. *, Harutyunyan G.H., Hovakimyan M.H., Hovhannisyan M.R., Aghayan S.Y.",
          },
          {
            title:
              "Clinical and Therapeutic assesment of patients with acute pulmonary embolism. Two years of observation in the Herasi Hospital complex No 1",
            journal: "Medicine, Science and Education",
            year: "2024",
            description:
              "Malkhasyan I. E., Hovakimyan M. H., Terteryan A. M., Martirosyan G. E., Avetisyan Q. A., Vardanyan A. K., Hovhannisyan M. R. Sisakian H.S.",
          },
        ],
        languages: [
          {
            language: "Armenian",
            level: "Mother tongue",
          },
          {
            language: "Russian",
            level: "C1",
          },
          {
            language: "English",
            level: "C1",
          },
          {
            language: "German",
            level: "A2",
          },
          {
            language: "French",
            level: "B1",
          },
        ],
      },
      am: {
        bio: "",
        contact: {
          phone: "(+374) 093130414",
          email: "hovakimyanmariam@gmail.com",
          location: "Երևան, Հայաստան, Աղյուսագործների 2-րդ փողոց, շ. 56, 0018",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "01/04/2025 - Մինչ օրս",
            title: "Սրտաբան",
            organization: "Կարդիոլաբ",
            description: "",
          },
          {
            period: "01/10/2022 - Մինչ օրս",
            title: "Սրտաբան, հերթապահ բժիշկ",
            organization:
              "Հերացի հիվանդանոցային համալիր, շտապ օգնության բաժանմունք",
            description: "",
          },
          {
            period: "01/04/2022 - Մինչ օրս",
            title: "Սրտաբան, կիսաաշխատաժամյա",
            organization: "Նյու-Մեդ ուրոլոգիայի կենտրոն ՓԲԸ",
            description: "",
          },
          {
            period: "17/09/2022 - Մինչ օրս",
            title: "Սրտաբան, կիսաաշխատաժամյա",
            organization: "Հիվանդանոց և պոլիկլինիկա թիվ 2 ՓԲԸ",
            description: "",
          },
          {
            period: "01/09/2019 - 09/09/2022",
            title: "Սրտաբանության ռեզիդենտ",
            organization:
              "Հերացի հիվանդանոցային համալիր, Ընդհանուր և ինտերվենցիոն սրտաբանության բաժին",
            description: "",
          },
          {
            period: "27/06/2020 - 19/02/2021",
            title: "Հերթապահ բժիշկ",
            organization:
              "Լևոն Հովհաննիսյանի անվան սրտաբանության գիտահետազոտական ինստիտուտ",
            description: "",
          },
          {
            period: "02/09/2016 - 10/04/2018",
            title: "Դեղատան օգնական",
            organization: "Մագտոնի դեղատների ցանց",
            description: "",
          },
        ],
        education: [
          {
            year: "20/04/2025 - 20/06/2025",
            degree: "Ֆելոուշիփի սերտիֆիկատ",
            institution: "Նիս քաղաքի Pasteur հիվանդանոց, Սրտաբանության բաժին",
          },
          {
            year: "11/03/2024 - 04/05/2024",
            degree: "Կլինիկական և հետազոտական փորձառություն",
            institution:
              "Erasme ակադեմիական հիվանդանոց, Սրտային անբավարարության և թոքային անոթային հիվանդությունների կլինիկա",
          },
          {
            year: "04/01/2023 - 04/05/2023",
            degree: "Էխոկարդիոգրաֆիա, մասնագիտական դասընթացի սերտիֆիկատ",
            institution:
              "Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան",
          },
          {
            year: "26/05/2023",
            degree:
              "Մասնակցման վկայագիր՝ «Հիպերտրոֆիկ կարդիոմիոպաթիան՝ հիվանդի տեսանկյունից» միջոցառում",
            institution:
              "Եվրոպական շարունակական բժշկական կրթության հավատարմագրման խորհուրդ (ESC աշխատախմբեր)",
          },
          {
            year: "10/06/2023",
            degree:
              "Մասնակցման վկայագիր՝ «Թոքային հիպերտենզիայի ախտորոշման և բուժման ESC-ERS ուղեցույցներ»",
            institution:
              "Եվրոպական շարունակական բժշկական կրթության խորհուրդ (ESC աշխատախմբեր)",
          },
          {
            year: "26/06/2023",
            degree: "Մասնակցման վկայագիր՝ «Միջսրտային ինֆարկտ» թեմայով նյութ",
            institution: "Ցյուրիխի համալսարան",
          },
          {
            year: "26/09/2021 - 02/10/2021",
            degree:
              "Մասնակցություն՝ Սալցբուրգի Weill Cornell սեմինար՝ Լիպիդային մետաբոլիզմ և սրտանոթային ռիսկ",
            institution: "Բաց բժշկական ինստիտուտ",
          },
          {
            year: "10/10/2021 - 16/10/2021",
            degree:
              "Մասնակցություն՝ Սալցբուրգի Weill Cornell սեմինար՝ Սրտաբանություն",
            institution: "Բաց բժշկական ինստիտուտ",
          },
          {
            year: "28/04/2020",
            degree:
              "Մասնակցություն՝ «Ատրիումի ֆիբրիլացիայի կառավարում» թեմայով նյութ",
            institution: "Սթենֆորդի շարունակական բժշկական կրթության կենտրոն",
          },
          {
            year: "16/05/2020",
            degree:
              "Մասնակցություն՝ «Առաջնային խնամքում արյան բարձր ճնշում – հսկողության բարելավում և ռիսկի նվազեցում» թեմայով նյութ",
            institution: "Սթենֆորդի շարունակական բժշկական կրթության կենտրոն",
          },
          {
            year: "16/05/2020",
            degree:
              "Մասնակցություն՝ «Հակամանրէային թերապիայի օպտիմալացում` դադարների միջոցով» նյութի վերաբերյալ",
            institution: "Սթենֆորդի շարունակական բժշկական կրթության կենտրոն",
          },
          {
            year: "30/05/2020",
            degree:
              "Մասնակցություն՝ «Տիպ 2 շաքարախտի կառավարում» թեմայով նյութ",
            institution: "Սթենֆորդի շարունակական բժշկական կրթության կենտրոն",
          },
          {
            year: "30/05/2020",
            degree:
              "Մասնակցություն՝ «Թոքային էմբոլիայի պերկուտան բուժում. ժամանակակից մոտեցում» միջոցառում",
            institution:
              "Եվրոպական շարունակական բժշկական կրթության խորհուրդ (ESC աշխատախմբեր)",
          },
          {
            year: "09/07/2020",
            degree:
              "Մասնակցություն՝ «COVID-19 և սրտանոթային բարդություններ» նյութի վերաբերյալ",
            institution: "Սթենֆորդի շարունակական բժշկական կրթության կենտրոն",
          },
          {
            year: "01/09/2013 - 01/07/2019",
            degree: "Բժշկի որակավորում",
            institution: "Երևանի պետական բժշկական համալսարան",
          },
        ],
        memberships: [
          "Հայաստանի սրտաբանների ասոցիացիա",
          "ESC մասնագիտական անդամ",
          "HFA արծաթե անդամ",
          "Թոքային շրջանառության և աջ փորոքի ֆունկցիայի աշխատանքային խմբի անդամ",
          "Թրոմբոզի աշխատանքային խմբի անդամ",
          "Եվրոպական սրտանոթային պատկերացման ասոցիացիայի սովորական անդամ",
          "Սրտանոթային դեղաբանական թերապիայի աշխատանքային խմբի անդամ",
          "Հիմնական սրտանոթային գիտության խորհրդի անդամ",
        ],
        hobbies: [],
        achievements: [
          {
            title: "Կրթաթոշակի աջակցություն",
            organization: "ՀԻՐԱՅՐ և ԱՆՆԱ ՀՈՎՆԱՆՅԱՆ հիմնադրամ",
            date: "18/01/2019",
            description:
              "Կրթաթոշակ՝ 2019 թվականի գարնանային կիսամյակի ուսման վարձը վճարելու համար Երևանի պետական բժշկական համալսարանում",
          },
          {
            title:
              "ՍտԵՄԻ ինֆարկտի բարդ դեպք՝ ուղեկցվող արտրիումի ֆիբրիլացիայով, կարդիոգեն շոկով և թրոմբոէմբոլիկ բարդություններով",
            organization: "ESC Սրտային անբավարարություն 2023, Պրահա, Չեխիա",
            date: "2023թ. մայիս",
            description:
              "Գայանե Մարտիրոսյան, Մարիամ Հովակիմյան. կլինիկական դեպքը ներկայացվել է ESC Սրտային անբավարարություն 2023 միջոցառման ժամանակ",
          },
        ],
        academicActivities: [],
        publications: [
          {
            title:
              "Սրտի ստիմուլյատորի էլեկտրոդի հետ կապված թոքային էմբոլիա՝ COVID-19 վարակով հիվանդի մոտ",
            journal:
              "The New Armenian Medical Journal, Հատոր 15 (2021), No 2, էջ 42-45",
            year: "2021",
            description:
              "Հ.Ս. Սիսակյան, Գ.Հ. Հարությունյան, Մ.Հ. Հովակիմյան, Մ.Ռ. Հովհաննիսյան, Ս.Յ. Աղայան",
          },
          {
            title:
              "Սուր թոքային էմբոլիայով հիվանդների կլինիկական և թերապևտիկ գնահատում․ երկամյա դիտարկում Հերացի թիվ 1 հիվանդանոցային համալիրում",
            journal: "Բժշկություն, Գիտություն և Կրթություն",
            year: "2024",
            description:
              "Ի.Ե. Մալխասյան, Մ.Հ. Հովակիմյան, Ա.Մ. Տերտերյան, Գ.Ե. Մարտիրոսյան, Ք.Ա. Ավետիսյան, Ա.Կ. Վարդանյան, Մ.Ռ. Հովհաննիսյան, Հ.Ս. Սիսակյան",
          },
        ],
        languages: [
          {
            language: "Հայերեն",
            level: "Մայրենի",
          },
          {
            language: "Ռուսերեն",
            level: "C1",
          },
          {
            language: "Անգլերեն",
            level: "C1",
          },
          {
            language: "Գերմաներեն",
            level: "A2",
          },
          {
            language: "Ֆրանսերեն",
            level: "B1",
          },
        ],
      },
    },
  },
  {
    id: 11,
    name: {
      am: "Քնարիկ Բադեյան",
      en: "Knarik Badeyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluEM5Y9sJSpZQ36u72Hw8kvD5PiIMdXj9xVnB0",
    role: {
      am: "Ներզատաբան",
      en: "Endocrinologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        // Visibility flags
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,

        // Sidebar visibility flags
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      en: {
        bio: "Successfully diagnosed and treated over 1,500 patients with endocrine disorders, including diabetes, thyroid diseases, and hormonal imbalances, resulting in a 95% patient satisfaction rate. Successfully diagnosed and treated more than 200 patients with postoperative complications, postoperative hypothyroidism, hypoparathyroidism.",
        // Content data
        contact: {
          phone: "+374 98585520",
          email: "knarikbadeyan@mail.ru",
          location: "Yerevan, Shahamiryan 51/1",
        },
        social: {
          linkedin: "", // Not provided
          twitter: "", // Not provided
        },
        specialties: [
          "Ultrasonography",
          "Fine-Needle Aspiration of the Thyroid Gland",
          "Continuous glucose monitoring",
          "Thyroidectomy Consultation",
          "Hormone Replacement",
        ],
        experience: [
          {
            title: "Endocrinologist, Sonographer of Thyroid Gland",
            organization: "Cardiolab Clinic",
            period: "2025 Jan – Present",
            description: "",
          },
          {
            title: "Endocrinologist",
            organization: "Shengavit Medical Centre",
            period: "2024 Nov – Present",
            description: "",
          },
          {
            title: "Endocrinologist, Sonographer of Thyroid Gland",
            organization: "MedExpress Clinic",
            period: "2023–Present",
            description: "",
          },
          {
            title: "Endocrinologist",
            organization: "MedLine Clinic",
            period: "2022–Present",
            description: "",
          },
          {
            title: "Endocrinologist",
            organization: "New Med Clinic",
            period: "2021–2022",
            description: "",
          },
          {
            title: "Clinical Ordinator in Department of Endocrinology",
            organization: "Muratsan University Hospital",
            period: "2019–2021",
            description: "",
          },
        ],
        education: [
          {
            degree: "Fine-Needle Aspiration of the Thyroid Gland",
            institution: "", // No institution specified
            year: "2023 March – July",
          },
          {
            degree: "Specializing in Ultrasound Diagnostics",
            institution: "Yerevan State Medical University",
            year: "2022 Jan – Aug",
          },
          {
            degree: "Resident in Department of Endocrinology",
            institution: "Yerevan State Medical University",
            year: "2019–2021",
          },
          {
            degree: "Medical Doctor",
            institution:
              "Yerevan State Medical University, Faculty of General Medicine",
            year: "2013–2019",
          },
        ],
        memberships: [
          "European Thyroid Association",
          "The European Society of Endocrinology",
          "Armenian Thyroid Association",
        ],
        hobbies: [],
        achievements: [],
        publications: [],
        languages: [
          {
            language: "Armenian",
            level: "Native",
          },
          {
            language: "English",
            level: "Fluent",
          },
          {
            language: "Russian",
            level: "Fluent",
          },
        ],
        academicActivities: [],
      },
      am: {
        bio: "Հաջողությամբ ախտորոշել և բուժել ավելի քան 1500 հիվանդ էնդոկրին խնդիրներով՝ ներառյալ շաքարային դիաբետը, վահանաձև գեղձի հիվանդությունները և հորմոնալ անհավասարակշռությունները, ինչի արդյունքում հիվանդների  գոհունակության մակարդակը կազմել է 95%։ Հաջողությամբ ախտորոշել և բուժել ավելի քան 200 հիվանդ հետօպերացիոն բարդություններով, հետօպերացիոն հիպոթիրեոզով, հիպոպարաթիրեոզով։",
        contact: {
          phone: "+374 98585520",
          email: "knarikbadeyan@mail.ru",
          location: "Երևան, Շահամիրյան 51/1",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "Ուլտրաձայնային հետազոտություն",
          "Վահանաձև գեղձի նիհար ասպիրացիա",
          "Շաքարի շարունակական մոնիտորինգ",
          "Վահանաձև գեղձի տիրեոեկտոմիայի խորհրդատվություն",
          "Հորմոնալ փոխարինող թերապիա",
        ],
        experience: [
          {
            title: "Էնդոկրինոլոգ, վահանաձև գեղձի սոնոգրաֆիստ",
            organization: "Կարդիոլաբ կլինիկա",
            period: "2025 հունվար - մինչ օրս",
            description: "",
          },
          {
            title: "Էնդոկրինոլոգ",
            organization: "Շենգավիթ բժշկական կենտրոն",
            period: "2024 նոյեմբեր - մինչ օրս",
            description: "",
          },
          {
            title: "Էնդոկրինոլոգ, վահանաձև գեղձի սոնոգրաֆիստ",
            organization: "MedExpress կլինիկա",
            period: "2023 - մինչ օրս",
            description: "",
          },
          {
            title: "Էնդոկրինոլոգ",
            organization: "MedLine կլինիկա",
            period: "2022 - մինչ օրս",
            description: "",
          },
          {
            title: "Էնդոկրինոլոգ",
            organization: "Նյու Մեդ կլինիկա",
            period: "2021 - 2022",
            description: "",
          },
          {
            title: "Կլինիկական օրդինատոր, էնդոկրինոլոգիայի բաժին",
            organization: "Մուրացան համալսարանական հիվանդանոց",
            period: "2019 - 2021",
            description: "",
          },
        ],
        education: [
          {
            degree: "Վահանաձև գեղձի նիհար ասպիրացիա",
            institution: "",
            year: "2023 մարտ - հուլիս",
          },
          {
            degree: "Ուլտրաձայնային ախտորոշման մասնագիտացում",
            institution: "Երևանի պետական բժշկական համալսարան",
            year: "2022 հունվար - օգոստոս",
          },
          {
            degree: "Էնդոկրինոլոգիայի բաժնի ռեզիդենտուրա",
            institution: "Երևանի պետական բժշկական համալսարան",
            year: "2019 - 2021",
          },
          {
            degree: "Բժշկական դոկտոր",
            institution:
              "Երևանի պետական բժշկական համալսարան, ընդհանուր բժշկության ֆակուլտետ",
            year: "2013 - 2019",
          },
        ],
        memberships: [
          "Եվրոպական վահանաձև գեղձի ասոցիացիա",
          "Եվրոպական էնդոկրինոլոգիայի ընկերություն",
          "Հայկական վահանաձև գեղձի ասոցիացիա",
        ],
        hobbies: [],
        achievements: [],
        publications: [],
        languages: [
          {
            language: "Հայերեն",
            level: "Մայրենի",
          },
          {
            language: "Անգլերեն",
            level: "Սահուն",
          },
          {
            language: "Ռուսերեն",
            level: "Սահուն",
          },
        ],
        academicActivities: [],
      },
    },
  },
  //   #######
  {
    id: 24,
    name: {
      am: "Մերի Պապիկան",
      en: "Meri Papikyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluXp5BaFOa6TkeElYqHKS8hzy4uf7mr9tC0MBv",
    role: {
      am: "Սրտաբան",
      en: "Cardiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: true,
        showLanguages: false,
        showMemberships: true,
        showHobbies: true,
        showAcademicActivities: true,
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      am: {
        bio: "",

        contact: {
          phone: "+37494501113",
          email: "marypapikyan1318@gmail.com",
          location: "Գ.Լուսավորիչ 12; բն.#50; 0015; Երևան",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "04.2024-ներկա",
            title: "Մեծահասակների և մանկական սրտաբան",
            organization: "«Ուիգմոր հիվանդանոց»",
            description: "",
          },
          {
            period: "04.2024-ներկա",
            title: "Մեծահասակի բնածին արատներով զբաղվող մասնագետ",
            organization: "«Ուիգմոր հիվանդանոց»",
            description: "",
          },
          {
            period: "10.2019-ներկա",
            title: "Ինտենսիվ սրտաբան",
            organization: "«Նորք-Մարաշ» ԲԿ",
            description: "",
          },
          {
            period: "10.2019-ներկա",
            title: "ԷԽՈՍԳ և ՍթրեսսԷխոՍԳ մասնագետ",
            organization: "«Նորք-Մարաշ» ԲԿ",
            description: "",
          },
        ],
        education: [
          {
            year: "2024-ներկա",
            degree: "Հանրային առողջապահության կազմակերպում և կառավարում",
            institution: "Հետդիպլոմային կրթություն ԱԱԻ",
          },
          {
            year: "2021-2023",
            degree: "Մանկական սրտաբանություն»",
            institution: "Հետդիպլոմային կրթություն ԵՊԲՀ",
          },
          {
            year: "2011-2016",
            degree: "Սրտաբանություն",
            institution: "Հետդիպլոմային կրթություն ԵՊԲՀ",
          },
          {
            year: "2005-2011",
            degree: "Ընդհանուր բժշկություն",
            institution: "ԵՊԲՀ",
          },
        ],
        memberships: [
          "ESC «պրոֆեսիոնալ» անդամ",
          "EACVI «արծաթե» անդամ",
          "HFA «արծաթե» անդամ",
          "ACVC, EAPCI, EHRA",
          "Հայաստանի Սրտաբանների Ասոցիացիայի անդամ",
          "Հայաստանի Երիտասարդ Սրտաբանների Խմբի կորիզի անդամ",
        ],
        hobbies: [
          "Առողջ սննդակարգ, հեծանիվ",
          "Ֆուտբոլի, օլիմպիական խաղերի դիտում և երկրպագություն",
          "Կինո, պոէզիա",
        ],
        achievements: [
          {
            title: "Մեծահասակ տրանսթորակալ ԷխոՍԳ ESC/EACVI սերտիֆիկացիա",
            date: "12.2024",
          },
          {
            title: "«Սրտային անբավարարության մասնագետ» ESC/HFA սերտիֆիկացիա",
            date: "10.2024",
          },
          {
            title:
              "Ակադեմիկոս Ադամյանի անվան՝ «Տարվա լավագույն երիտասարդ սրտաբան 2023թ» Խրախուսական մրցանակ",
            organization: "Հայաստանի Սրտաբանների Ասոցիացիայի կողմից",
            date: "2023",
          },
        ],
        academicActivities: [
          {
            title: "Առիթմոլոգիական Մաստեր Կլաս",
            organization: "Երևան",
            date: "10.2023",
          },
          {
            title: "Եվրոպական սրտաբանների ասոցիացիայի ESC կոնգրես",
            organization: "Ամստերդամ",
            date: "08.2023",
          },
          {
            title: "Սիրտանոթային սիմպոզիում",
            organization: "Հայաստանի 6րդ միջազգային բժշկական համագումար",
            date: "07.2023",
          },
          {
            title: "Եվրոկովկասյան սրտաբանության կոնգրես",
            organization: "Երևան",
            date: "05.2023",
          },
        ],
        publications: [
          {
            title: "Ինֆեկցիոն էնդոկարդիտի դեպքի ներկայացում",
            description: "Էնդոկարդիտների ուղեցույց, վեբինար",
            year: "10.2024",
          },
          {
            title: "Թոքային հիպերտենզիայի ԷխոՍԳ",
            description: " ԷԽՈՍԳ ամառային դպրոց, Ջեֆերսոն կենտրոն, Երևան",
            year: "07.2024",
          },
          {
            title: "«Հղիություն և ՍԱ հիվանդություններ»",
            description: "Մոր և մանկան առողջության պահպանման կենտրոն",
            year: "04.2024",
          },
          {
            title:
              "ՁՓԱՖ-ի, երկայնաձիգ գլոբալ սթրեյնի և դիաստոլիկ ֆունկցիայի լավացումը աորտալ փականի պրոթեզավորումից հետո համակցված աորտալ արատով պացիենտի մոտ",
            year: "11.2023",
          },
          {
            title: "ՍԱ նշաններով քողարկված պլևրայի հազվագյուտ ուռուցք",
            description: "Կարդիոօնկոլոգիական ֆորում",
            year: "04.2023",
          },
          {
            title: "Հղիություն և հիպերտենզիա",
            description: "Նորք-Մարաշ Սիրտանոթային Գիտաժողով",
            year: "06.2021",
          },
        ],
        languages: [
          {
            language: "Հայերեն",
            level: "մայրենի լեզու",
          },
          {
            language: "Անգլերեն",
            level: "վարժ",
          },
          {
            language: "Ռուսերեն",
            level: "վարժ",
          },
          {
            language: "Ֆրանսերեն",
            level: "սկսնակ",
          },
        ],
      },
      en: {
        bio: "",

        contact: {
          phone: "+37494501113",
          email: "marypapikyan1318@gmail.com",
          location: "12 Grigor Lusavorich St., Apt. 50, 0015, Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "04.2024–Present",
            title: "Adult and Pediatric Cardiologist",
            organization: "Wigmore Hospital",
            description: "",
          },
          {
            period: "04.2024–Present",
            title: "Specialist in Adult Congenital Heart Disease",
            organization: "Wigmore Hospital",
            description: "",
          },
          {
            period: "10.2019–Present",
            title: "Intensive Care Cardiologist",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
          {
            period: "10.2019–Present",
            title: "Echocardiography and Stress-Echo Specialist",
            organization: "Nork-Marash Medical Center",
            description: "",
          },
        ],
        education: [
          {
            year: "2024–Present",
            degree: "Public Health Organization and Management",
            institution: "National Institute of Health, Postgraduate Education",
          },
          {
            year: "2021–2023",
            degree: "Pediatric Cardiology",
            institution:
              "Yerevan State Medical University, Postgraduate Studies",
          },
          {
            year: "2011–2016",
            degree: "Cardiology",
            institution:
              "Yerevan State Medical University, Postgraduate Studies",
          },
          {
            year: "2005–2011",
            degree: "General Medicine",
            institution: "Yerevan State Medical University",
          },
        ],
        memberships: [
          "ESC Professional Member",
          "EACVI Silver Member",
          "HFA Silver Member",
          "Member of ACVC, EAPCI, EHRA",
          "Member of the Armenian Cardiologists Association",
          "Core Member of the Armenian Young Cardiologists Group",
        ],
        hobbies: [
          "Healthy eating, cycling",
          "Watching and supporting football and Olympic Games",
          "Cinema, poetry",
        ],
        achievements: [
          {
            title:
              "ESC/EACVI Certification in Adult Transthoracic Echocardiography",
            date: "12.2024",
          },
          {
            title: "ESC/HFA Certified Heart Failure Specialist",
            date: "10.2024",
          },
          {
            title:
              "Academician Adamyan Award – 'Best Young Cardiologist of the Year 2023' (Encouragement Prize)",
            organization: "Armenian Cardiologists Association",
            date: "2023",
          },
        ],
        academicActivities: [
          {
            title: "Arrhythmology Masterclass",
            organization: "Yerevan",
            date: "10.2023",
          },
          {
            title: "ESC Congress of the European Society of Cardiology",
            organization: "Amsterdam",
            date: "08.2023",
          },
          {
            title: "Cardiovascular Symposium",
            organization: "6th International Medical Congress of Armenia",
            date: "07.2023",
          },
          {
            title: "Euro-Caucasus Congress of Cardiology",
            organization: "Yerevan",
            date: "05.2023",
          },
        ],
        publications: [
          {
            title: "Case Presentation of Infective Endocarditis",
            description: "Endocarditis Guidelines Webinar",
            year: "10.2024",
          },
          {
            title: "Echocardiography in Pulmonary Hypertension",
            description: "Echo Summer School, Jefferson Center, Yerevan",
            year: "07.2024",
          },
          {
            title: "Pregnancy and Cardiovascular Diseases",
            description: "Mother and Child Health Protection Center",
            year: "04.2024",
          },
          {
            title:
              "Improvement of LVEF, longitudinal global strain, and diastolic function after aortic valve replacement in a patient with combined aortic defect",
            year: "11.2023",
          },
          {
            title: "Rare Pleural Tumor Mimicking Cardiac Symptoms",
            description: "Cardio-Oncology Forum",
            year: "04.2023",
          },
          {
            title: "Pregnancy and Hypertension",
            description: "Nork-Marash Cardiovascular Conference",
            year: "06.2021",
          },
        ],
        languages: [
          {
            language: "Armenian",
            level: "Native language",
          },
          {
            language: "English",
            level: "Fluent",
          },
          {
            language: "Russian",
            level: "Fluent",
          },
          {
            language: "French",
            level: "Beginner",
          },
        ],
      },
    },
  },
  {
    id: 25,
    name: {
      am: "Նադեժդա Իսկանդարյան",
      en: "Nadezhda Iskandaryan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu015eaHB3uh8TEZLPqWjlAOFybHiDawcvdgUp",
    role: {
      am: "Սրտաբան",
      en: "Cardiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      am: defaultPersonalSingleInfo,
      en: defaultPersonalSingleInfo,
    },
  },
  //   #######
  {
    id: 12,
    name: {
      am: "Անահիտ Ոսկանյան",
      en: "Anahit Voskanyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluZPNUNfraARMXrkUnhxzT0mdNIlYQPEivqbew",
    role: {
      am: "Նյարդաբան",
      en: "Neurologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showAcademicActivities: false,

        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      en: {
        bio: "",
        contact: {
          phone: "(+374) 94065058",
          email: "doctorvoskanyan@yahoo.com",
          location: "33th street of Erebuni, 16, 0020, Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "Mar 2021 – Present",
            title: "Neurologist",
            organization:
              "Support for Wounded Soldiers and Disabled Military NGO",
            description: "",
          },
          {
            period: "Nov 2017 – Jan 2021",
            title: "Vice-President",
            organization: "Sirmed Medical Center",
            description: "",
          },
          {
            period: "May 2017 – Nov 2017",
            title: "Neurologist",
            organization: "2nd Hospital, Yerevan",
            description: "",
          },
          {
            period: "May 2014 – Jun 2021",
            title: "Medical Doctor – Neurology & Neurorehabilitation",
            organization: "Sirmed Medical Center, Yerevan",
            description: "",
          },
          {
            period: "Mar 2015 – Apr 2016",
            title: "Medical Doctor – Neurologist",
            organization: "8th Polyclinic, Yerevan",
            description: "",
          },
        ],
        education: [
          {
            year: "2021 – Present",
            degree: "PhD Student",
            institution: "KU Leuven, Belgium",
          },
          {
            year: "2016 – 2017",
            degree: "Exchange student, KU Leuven funded by Erasmus+",
            institution:
              "Grant between Yerevan\n" +
              "State Medical University (Armenia) and KULeuven (Belgium)",
          },
          {
            year: "2010 – 2013",
            degree: "Neurology Residency",
            institution: "YSMU, Neurology Department",
          },
          {
            year: "2004 – 2010",
            degree: "M.D.",
            institution: "Yerevan State Medical University",
          },
        ],
        memberships: [
          "Member of Armenian Association of Neurologists (AAN)",
          "Member of Movement Disorder Society",
          "Member of EFNS Teaching Course Local Organizing Committee",
          "Membership in Sezione Sclerosi Multipla",
          "Member of Armenian Speech Therapists Association",
          "Resident and Research Member of the European Academy of Neurology (EAN)",
        ],
        hobbies: [],
        achievements: [
          {
            title: "Poster Presenter – PiLoT1 Exposition 'Chaos'",
            organization: "KU Leuven / SLAC FineArts",
            date: "May 2017",
          },
          {
            title: "OMI Observership",
            organization:
              "Christian Doppler Klinik, American Austrian Foundation",
            date: "Oct 2017",
          },
          {
            title: "Observership",
            organization:
              "Christian Doppler Klinik, American Austrian Foundation",
            date: "Jan 2018",
          },
          {
            title: "Rehabilitation Medicine Seminar",
            organization: "Salzburg, Austria",
            date: "Feb 2016",
          },
        ],
        academicActivities: [],
        publications: [
          {
            title: "Insulin dependent diabetes and hand tremor",
            journal: "MOVEMENT DISORDERS, Vol. 31",
            year: "2016",
          },
          {
            title:
              "Increase L-dopa dosage for rest tremor or think about essential tremor?",
            journal:
              "20th International Congress of Parkinson’s Disease and Movement Disorders, Berlin",
            year: "2016",
          },
          {
            title: "A case of misdiagnosed Parkinson’s disease (PD)",
            year: "2016",
          },
          {
            title: `"PARKINSON'S DISEASE OR SYMPTOMATIC PARKINSONISM? CAN THEY BE COMBINED?"`,
            journal:
              "21st World Congress on Parkinson’s Disease and Related Disorders",
            year: "2015",
          },
          {
            title: "A case of misdiagnosed essential tremor (ET)",
            journal: "MOVEMENT DISORDERS, Vol. 30",
            year: "2015",
          },
          {
            title:
              "Early Parkinson’s disease with family history of essential tremor",
            journal:
              "Movement Disorders: vol. 3019th International Congress of Parkinson’s Disease and Movement Disorders, CA",
            year: "2015",
          },
          {
            title: "Worst side effect of drugs – Parkinsonism",
            journal:
              "MOVEMENT DISORDERS, Vol. 30. Presented at the 18th International Congress of Parkinson's Disease and Movement Disorder,CA.",
            year: "2015",
          },
          {
            title:
              "Isolated facial nerve palsy. Are all isolated facial nerve palsies\n" +
              "attributed to Bells palsy?",
            journal:
              "MOVEMENT DISORDERS, Vol. 39. Presented at the 24th International Congress of Parkinson's Disease and Movement Disorder,Austria",
            year: "2015",
          },
          {
            title: "Non-motor symptoms in Parkinson’s disease",
            journal:
              "MOVEMENT DISORDERS, Vol. 29. Presented at the 18th International Congress of Parkinson's Disease and Movement Disorder,Sweden",
            year: "2014",
          },
          {
            title: "Drug-induced dystonia",
            journal:
              "MOVEMENT DISORDERS, Vol. 29. Presented at the 18th International Congress of Parkinson's Disease and Movement Disorder,Sweden",
            year: "2014",
          },
          {
            title: "Guam syndrome in four Armenian patients",
            journal:
              "MOVEMENT DISORDERS, Vol. 29. Presented at the 18th International Congress of Parkinson's Disease and Movement Disorder,Sweden",
            year: "2014",
          },
        ],
        languages: [
          { language: "Armenian", level: "native" },
          { language: "English", level: "C1" },
          { language: "Russian", level: "C2" },
          { language: "Italian", level: "A2" },
        ],
      },
      am: {
        bio: "",
        contact: {
          phone: "(+374) 94065058",
          email: "doctorvoskanyan@yahoo.com",
          location: "Երևան, Էրեբունու 33-րդ փողոց, շ. 16, 0020 Հայաստան",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "2021 Մարտ – ներկա",
            title: "Նյարդաբան",
            organization:
              "Վիրավոր զինվորների և հաշմանդամ զինծառայողների աջակցման ՀԿ",
            description: "",
          },
          {
            period: "2017 Նոյեմբեր – 2021 Հունվար",
            title: "Փոխնախագահ",
            organization: "Սիրմեդ Բժշկական Կենտրոն",
            description: "",
          },
          {
            period: "2017 Մայիս – 2017 Նոյեմբեր",
            title: "Նյարդաբան",
            organization: "Երևանի թիվ 2 հիվանդանոց",
            description: "",
          },
          {
            period: "2014 Մայիս – 2021 Հունիս",
            title: "Բժիշկ – Նյարդաբան և Նեյրոռեաբիլիտացիա մասնագետ",
            organization: "Սիրմեդ Բժշկական Կենտրոն, Երևան",
            description: "",
          },
          {
            period: "2015 Մարտ – 2016 Ապրիլ",
            title: "Բժիշկ – Նյարդաբան",
            organization: "Երևանի թիվ 8 պոլիկլինիկա",
            description: "",
          },
        ],
        education: [
          {
            year: "2021 – ներկա",
            degree: "Ասպիրանտուրա",
            institution: "Լյովենի Կաթոլիկ Համալսարան (KU Leuven), Բելգիա",
          },
          {
            year: "2016 – 2017",
            degree: "Փոխանակման ուսանող, KU Leuven՝ Erasmus+ ծրագրով",
            institution: "ԵՊԲՀ և KU Leuven համագործակցության ծրագրի շրջանակում",
          },
          {
            year: "2010 – 2013",
            degree: "Նյարդաբանության ռեզիդենտուրա",
            institution: "ԵՊԲՀ, Նյարդաբանության ամբիոն",
          },
          {
            year: "2004 – 2010",
            degree: "Բժշկական կրթություն (ՄԴ)",
            institution: "Երևանի Պետական Բժշկական Համալսարան",
          },
        ],
        memberships: [
          "Հայ Նյարդաբանների Ասոցիացիայի անդամ",
          "Շարժողական խանգարումների միջազգային ընկերության անդամ",
          "EFNS ուսուցման դասընթացի կազմակերպչական կոմիտեի անդամ",
          "Սկլերոզ մուլտիպլայի բաժանմունքի անդամ",
          "Հայ Մարդաբանախոսների Ասոցիացիայի անդամ",
          "Եվրոպական Նյարդաբանության Ակադեմիայի (EAN) ռեզիդենտ և հետազոտական անդամ",
        ],
        hobbies: [],
        achievements: [
          {
            title: "Փաստաթղթով ներկայացում – PiLoT1 ցուցահանդես 'Խառնաշփոթ'",
            organization: "Լյովենի Կաթոլիկ Համալսարան / SLAC FineArts",
            date: "2017 Մայիս",
          },
          {
            title: "OMI Դիտարկում",
            organization:
              "Քրիստիան Դոպլեր կլինիկա, Ամերիկյան Ավստրիական Հիմնադրամ",
            date: "2017 Հոկտեմբեր",
          },
          {
            title: "Դիտարկում",
            organization:
              "Քրիստիան Դոպլեր կլինիկա, Ամերիկյան Ավստրիական Հիմնադրամ",
            date: "2018 Հունվար",
          },
          {
            title: "Վերականգնողական բժշկության սեմինար",
            organization: "Զալցբուրգ, Ավստրիա",
            date: "2016 Փետրվար",
          },
        ],
        academicActivities: [],
        publications: [
          {
            title: "Ինսուլինից կախված շաքարախտ և ձեռքի դող",
            journal: "MOVEMENT DISORDERS, Հատոր 31",
            year: "2016",
          },
          {
            title:
              "Ամենակիչ դոզայի բարձրացումը՝ հանգստյան դողի դեպքում, թե՞ էական դողը դիտարկել",
            journal:
              "Պարկինսոնի Հիվանդության և Շարժողական խանգարումների 20-րդ միջազգային կոնգրես, Բեռլին",
            year: "2016",
          },
          {
            title: "Պարկինսոնի հիվանդության սխալ ախտորոշման դեպք",
            year: "2016",
          },
          {
            title:
              "Պարկինսոնի Հիվանդությո՞ւն, թե՞ ախտանշանային պարկինսոնիզմ․ հնարավո՞ր է համադրություն",
            journal:
              "Պարկինսոնի Հիվանդության և Հարակից խանգարումների 21-րդ համաշխարհային կոնգրես",
            year: "2015",
          },
          {
            title: "Էական դողի սխալ ախտորոշման դեպք",
            journal: "MOVEMENT DISORDERS, Հատոր 30",
            year: "2015",
          },
          {
            title:
              "Վաղ փուլում գտնվող Պարկինսոնի հիվանդություն՝ էական դողի ընտանեկան պատմությամբ",
            journal:
              "Movement Disorders, vol. 30, 19-րդ Միջազգային Կոնգրես, Կալիֆորնիա",
            year: "2015",
          },
          {
            title: "Դեղորայքի ամենավատ կողմնակի ազդեցությունը՝ պարկինսոնիզմ",
            journal: "MOVEMENT DISORDERS, Հատոր 30, 18-րդ Կոնգրես, Կալիֆորնիա",
            year: "2015",
          },
          {
            title:
              "Մեկուսացված դիմային նյարդի կաթված․ բոլո՞ր դեպքերը Bells palsy են",
            journal: "MOVEMENT DISORDERS, Հատոր 39, 24-րդ Կոնգրես, Ավստրիա",
            year: "2015",
          },
          {
            title: "Պարկինսոնի հիվանդության ոչ շարժողական ախտանիշներ",
            journal: "MOVEMENT DISORDERS, Հատոր 29, 18-րդ Կոնգրես, Շվեդիա",
            year: "2014",
          },
          {
            title: "Դեղորայքով առաջացած դիստոնիա",
            journal: "MOVEMENT DISORDERS, Հատոր 29, 18-րդ Կոնգրես, Շվեդիա",
            year: "2014",
          },
          {
            title: "Գուամ համախտանիշ՝ չորս հայ հիվանդների մոտ",
            journal: "MOVEMENT DISORDERS, Հատոր 29, 18-րդ Կոնգրես, Շվեդիա",
            year: "2014",
          },
        ],
        languages: [
          { language: "Հայերեն", level: "մայրենի" },
          { language: "Անգլերեն", level: "C1" },
          { language: "Ռուսերեն", level: "C2" },
          { language: "Իտալերեն", level: "A2" },
        ],
      },
    },
  },
  {
    id: 13,
    name: {
      am: "Արփինե Սիմոնյան",
      en: "Arpine Simonyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluEmku7JSpZQ36u72Hw8kvD5PiIMdXj9xVnB0U",
    role: {
      am: "Թերապևտ, Գաստրոէնտերոլոգ",
      en: "Therapist, Gastroenterologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        // Visibility flags
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,

        // Sidebar visibility flags
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      am: {
        bio: "",

        contact: {
          phone: "",
          email: "simonyan.arpiner@gmail.com",
          location: "ք․ Երևան, Պուշկինի 50, բն․8",
        },
        social: {
          linkedin: "",
          twitter: "",
        },

        specialties: [
          "MAFLD/MASLD",
          "NASH",
          "Metabolic Syndrome",
          "Obesity",
          "Overlap syndrome",
          "Hepatic Dysfunction",
          "Neurogastroenterology",
          "DGBI",
        ],

        experience: [
          {
            title: "Գաստրոէնտերոլոգ-թերապևտ",
            organization: "Գաստրո Կլինիկ",
            period: "2024թ․ նոյեմբեր – մինչ օրս",
            description: "",
          },
          {
            title: "Ներքին հիվանդությունների կլինիկայի ղեկավար",
            organization: "Քանաքեռ-Զեյթուն ԲԿ",
            period: "2022թ․ ապրիլ – 2023թ․ մարտ",
            description: "",
          },
          {
            title: "Գաստրոէնտերոլոգ-թերապևտ",
            organization: "ՈՒիգմոր Կլինիկ",
            period: "2021թ․ ապրիլից – մինչ օրս",
            description: "",
          },
          {
            title: "Ուս․մասի պատասխանատու",
            organization:
              "Ներքին հիվանդությունների (պուլմոնոլոգիա և նեֆրոլոգիա) ամբիոն",
            period: "2021թ․ մարտ – 2022թ․ ապրիլ",
            description: "",
          },
          {
            title: "Գաստրոէնտերոլոգ-կոնսուլտանտ",
            organization: "Աջափնյակ ԲԿ",
            period: "2020թ․ մարտ – 2021թ․ ապրիլ",
            description: "",
          },
          {
            title: "Դասախոս",
            organization:
              "Ներքին հիվանդությունների (պուլմոնոլոգիա և նեֆրոլոգիա) ամբիոն",
            period: "2019թ․ սեպտեմբեր 18 – մինչ օրս",
            description: "",
          },
          {
            title: "Հերթապահող բժիշկ`հիվանդ վարելու իրավունքով",
            organization:
              "Սուրբ Գրիգոր Լուսավորիչ ԲԿ, ընդհանուր թերապիայի բաժանմունք",
            period: "2018թ․ մարտ – 2018թ․ օգոստոս",
            description: "",
          },
          {
            title: "Ասիստենտ",
            organization: "ԵՊԲՀ Թերապիայի թիվ 3 ամբիոն",
            period: "2017թ․ սեպտեմբեր – 2019թ․",
            description: "",
          },
        ],

        education: [
          {
            degree: "Ներքին բժշկություն",
            institution: "ԵՊԲՀ",
            year: "2020–2022",
          },
          {
            degree: "Գաստրոէնտերոլոգիա",
            institution: "ԵՊԲՀ",
            year: "2015–2017",
          },
          {
            degree: "Բուժական գործ",
            institution: "ԵՊԲՀ",
            year: "2013–2015",
          },
          {
            degree: "Բուժական գործ",
            institution: "Երևանի Մ. Հերացու անվան պետական բժշկական համալսարան",
            year: "2008–2013",
          },
        ],

        memberships: [
          "Գաստրոէնտերոլոգների հայկական ասոցիացիայի անդամ (2017–2020թթ․)",
          "Թերապևտների եվրասիական ասոցիացիայի անդամ (2017թ․–մինչ օրս)",
          "Ճարպակալման կանխարգելման հայկական ասոցիացիայի անդամ (2023թ․–մինչ օրս)",
        ],

        hobbies: [],
        achievements: [
          "2021թ․ Վերապատրաստում ԵՊԲՀ դասախոսների որակավորման բարձրացման բաժնում",
          "2018թ․ Անգլալեզու խմբերի ուսուցման կատարելագործման ատեստացիա (ԵՊԲՀ Օտար Լեզուների ամբիոն)",
          "2018թ․ Վերապատրաստում ԵՊԲՀ դասախոսների որակավորման բարձրացման բաժնում",
          "2017թ․ Կատարելագործում Թոքաբանություն մասնագիտությամբ (ԵՊԲՀ Թերապիայի թիվ 3 ամբիոն)",
        ],

        publications: [
          {
            title: "«Թոքաբանություն» ուսումնական ձեռնարկ",
            description:
              "2021թ․, համահեղինակ՝ ըստ Գ.Ե. Ռոյտբերգի և Ա.Վ. Ստրուտինսկու <<Ներքին հիվանդություններ. Շնչառական համակարգ>> (2018) և Ջ.Ա. Ֆիշմանի <<Թոքային հիվանդություններ և ախտահարումներ>> գրքի V հր․ (2015)",
          },
          {
            title:
              "«Լյարդի ոչ ալկոհոլային ճարպային հիվանդությունը Covid-19 վիրուսային վարակի ժամանակ»",
            journal:
              "Բժշկություն Գիտություն և Կրթություն, ISSN 1829-1775, Թ. 32, Նոյեմբեր 2021թ․",
          },
          {
            title:
              "«Լյարդային դրսևորումները COVID-19 վիրուսային վարակի դեպքում և ռեմդեսիվիրի ազդեցությունը լյարդի ֆունկցիայի վրա այդ հիվանդների շրջանում»",
            journal:
              "Բժշկություն Գիտություն և Կրթություն, ISSN 1829-1775, Թ. 34, Նոյեմբեր 2022թ․",
          },
          {
            title:
              "Drug Development: From Design To Customer (DDDC-2022) միջազգային համաժողով",
            description:
              "ԵՊԲՀ Դեղագործական ֆակուլտետի 50-ամյակի կապակցությամբ, 2022թ․, սեպտեմբերի 26–28, Երևան",
          },
          {
            title:
              "Comparative Analysis of Self-Medication For Acute Upper Respiratory Tract Infections and Headache Symptoms",
            journal:
              "Թեզ, UDC:616.211/.231:616.857, Բժշկություն Գիտություն և Կրթություն, 2023թ․ մայիս",
          },
        ],
        academicActivities: [],
        languages: [],
      },
      en: {
        bio: "",
        contact: {
          phone: "",
          email: "simonyan.arpiner@gmail.com",
          location: "Yerevan, Pushkin 50, Apt. 8",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "MAFLD/MASLD",
          "NASH",
          "Metabolic Syndrome",
          "Obesity",
          "Overlap syndrome",
          "Hepatic Dysfunction",
          "Neurogastroenterology",
          "DGBI",
        ],
        experience: [
          {
            title: "Gastroenterologist-Therapist",
            organization: "Gastro Clinic",
            period: "Nov 2024 – Present",
            description: "",
          },
          {
            title: "Head of Internal Medicine Clinic",
            organization: "Kanaker-Zeytun MC",
            period: "Apr 2022 – Mar 2023",
            description: "",
          },
          {
            title: "Gastroenterologist-Therapist",
            organization: "Wigmore Clinic",
            period: "Apr 2021 – Present",
            description: "",
          },
          {
            title: "Head of Educational Department",
            organization:
              "Department of Internal Medicine (Pulmonology and Nephrology)",
            period: "Mar 2021 – Apr 2022",
            description: "",
          },
          {
            title: "Gastroenterologist-Consultant",
            organization: "Ajapnyak MC",
            period: "Mar 2020 – Apr 2021",
            description: "",
          },
          {
            title: "Lecturer",
            organization:
              "Department of Internal Medicine (Pulmonology and Nephrology)",
            period: "Sep 18, 2019 – Present",
            description: "",
          },
          {
            title: "On-duty Doctor (with right to manage patients)",
            organization:
              "St. Gregory the Illuminator MC, General Therapy Department",
            period: "Mar 2018 – Aug 2018",
            description: "",
          },
          {
            title: "Assistant",
            organization: "YSMU, 3rd Department of Therapy",
            period: "Sep 2017 – 2019",
            description: "",
          },
        ],
        education: [
          {
            degree: "Internal Medicine",
            institution: "YSMU",
            year: "2020–2022",
          },
          {
            degree: "Gastroenterology",
            institution: "YSMU",
            year: "2015–2017",
          },
          {
            degree: "General Medicine",
            institution: "YSMU",
            year: "2013–2015",
          },
          {
            degree: "General Medicine",
            institution:
              "Yerevan State Medical University named after Mkhitar Heratsi",
            year: "2008–2013",
          },
        ],
        memberships: [
          "Member of Armenian Association of Gastroenterologists (2017–2020)",
          "Member of Eurasian Association of Therapists (2017–Present)",
          "Member of Armenian Association for the Prevention of Obesity (2023–Present)",
        ],
        hobbies: [],
        achievements: [
          "2021 – Training at the YSMU Faculty Development Department",
          "2018 – English-language teaching certification (YSMU Department of Foreign Languages)",
          "2018 – Training at the YSMU Faculty Development Department",
          "2017 – Advanced Training in Pulmonology (YSMU 3rd Department of Therapy)",
        ],
        publications: [
          {
            title: "“Pulmonology” Educational Manual",
            description:
              "2021, co-author; based on G.Ye. Roytberg & A.V. Strutinsky's ‘Internal Diseases: Respiratory System’ (2018) and J.A. Fishman's ‘Pulmonary Diseases and Disorders’ 5th Ed. (2015)",
          },
          {
            title:
              "“Non-Alcoholic Fatty Liver Disease During Covid-19 Viral Infection”",
            journal:
              "Medicine Science and Education, ISSN 1829-1775, Vol. 32, Nov 2021",
          },
          {
            title:
              "“Hepatic Manifestations During COVID-19 and the Effect of Remdesivir on Liver Function in These Patients”",
            journal:
              "Medicine Science and Education, ISSN 1829-1775, Vol. 34, Nov 2022",
          },
          {
            title:
              "Drug Development: From Design To Customer (DDDC-2022) International Conference",
            description:
              "Dedicated to the 50th anniversary of the Faculty of Pharmacy, YSMU, Sep 26–28, 2022, Yerevan",
          },
          {
            title:
              "Comparative Analysis of Self-Medication For Acute Upper Respiratory Tract Infections and Headache Symptoms",
            journal:
              "Thesis, UDC:616.211/.231:616.857, Medicine Science and Education, May 2023",
          },
        ],
        academicActivities: [],
        languages: [],
      },
    },
  },
  {
    id: 14,
    name: {
      am: "Կարինե Մկրտչյան",
      en: "Karine Mkrtchyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluJk7QajrgHJqI5EuVZFjgRGzykmXKNTw4WcSe",
    role: {
      am: "Բժիշկ-Ռադիոլոգ",
      en: "Radiologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        // Visibility flags
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: true,
        showLanguages: false,
        showMemberships: false,
        showHobbies: false,
        showAcademicActivities: true,
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      am: {
        bio: "",
        contact: {
          phone: "",
          email: "",
          location: "",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            title: "Սոնոգրաֆիստ",
            organization: "Վարդանանց նորարարական բժշկական կենտրոն",
            period: "14.04.2025 – Present",
            description: "",
          },
          {
            title: "՝Սոնոգրաֆիստ",
            organization:
              "Մեյփլ Լիֆ (Maple Leaf) հայ-կանադական բժշկական կլինիկա",
            period: "01.09.2012 – Present",
            description: "",
          },
          {
            title: "Սոնոգրաֆիստ",
            organization: "Սոնատո տղամարդու առողջության բժշկական կենտրոն",
            period: "06.10.2011 – 20.12.2011",
            description: "",
          },
          {
            title: "Սոնոգրաֆիստ",
            organization: "Եղվարդ «Նաիրի» բժշկական կենտրոն",
            period: "15.03.2009 – 25.10.2011",
            description: "",
          },
        ],
        education: [
          {
            degree: "Ճառագայթային ախտորոշում",
            institution:
              "Ս. Ավդալբեկյանի անվան Առողջապահության ազգային ինստիտուտ",
            year: "2006–2008",
          },
          {
            degree: "Ինտերնատուրա՝ մանկաբուժություն",
            institution: "Երևանի թիվ 3 մանկական հիվանդանոց",
            year: "1997–1998",
          },
          {
            degree: "Մանկաբուժություն",
            institution: "Երևանի Մ. Հերացու անվան պետական բժշկական համալսարան",
            year: "1991–1997",
          },
        ],
        memberships: [],
        hobbies: [],
        publications: [],
        achievements: [],
        languages: [],
        academicActivities: [
          {
            title:
              "Գինետոլոգիայի վարպետաց դասընթաց՝ Հիստերոսկոպիայի և ուլտրաձայնի հետազոտության միությունն արգանրդի խոռոչի ախտաբանության բուժում",
            organization: "Գլասբո կլինիկա",
            date: "09.10.2023",
            description: "",
          },
          {
            title: "Վարպետաց դասընթաց՝ «Գինեկոլոգիական ուլտրաձայն»",
            organization: "Գլասբո կլինիկա",
            date: "05.06.2022",
            description: "",
          },
          {
            title: "Ռադիոլոգիայի հայկական չորրորդ համակումար",
            organization: "ՀՀ ԱՆ, Ռադիոլոգների հայկական ասոցիացիա",
            date: "05.06.2022",
            description: "",
          },
          {
            title:
              "Գիտագործնական սեմինար՝ «Լյարդի հիվանդությունների ախտորոշում և վիրահատաքան բուժման ժամանակակից մոտեցումները»",
            organization: "Աստղիկ ԲԿ",
            date: "06.05.2022",
            description: "",
          },
          {
            title: "Ռադիոլոգիայի հայկական համագումար",
            organization: "ՀՀ առողջապահության նախարարություն",
            date: "15.06.2019",
            description: "",
          },
          {
            title:
              "Գիտաժողով՝ «Որովայնի ուռուցքաբանական պատկերների ախտորոշում»",
            organization: "Ռադիոլոգիայի եվրոպական դպրոց (ESOR)",
            date: "06.29.2018",
            description: "",
          },
          {
            title:
              "Կատարելագործման դասընթաց՝ «Արտակարգ իրավիճակներում բժշկական օգնության կազմակերպումը»",
            organization: "Երևանի Մ. Հերացու անվան պետական բժշկական համալսարան",
            date: "20.11–22.12.2017",
            description: "",
          },
          {
            title:
              "Կատարելագործման դասընթաց՝ «Գերձայնային ախտորոշում գինեկոլոգիայում»",
            organization: "Երևանի Մ. Հերացու անվան պետական բժշկական համալսարան",
            date: "04.11–20.12.2013",
            description: "",
          },
          {
            title: "«Տղամարդու առողջություն» երկրորդ տարեկան գիտաժողով",
            organization: "Հայաստանի ուրոլրգների ասոցիացիա",
            date: "17.12.2011",
            description: "",
          },
        ],
      },
      en: {
        bio: "",

        contact: {
          phone: "",
          email: "",
          location: "",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],

        experience: [
          {
            title: "Sonographer",
            organization: "Vardanants Innovative Medical Center",
            period: "14.04.2025 – Present",
            description: "",
          },
          {
            title: "Sonographer",
            organization: "Maple Leaf Armenian-Canadian Medical Clinic",
            period: "01.09.2012 – Present",
            description: "",
          },
          {
            title: "Sonographer",
            organization: "Sonato Men's Health Medical Center",
            period: "06.10.2011 – 20.12.2011",
            description: "",
          },
          {
            title: "Sonographer",
            organization: "Yeghvard 'Nairi' Medical Center",
            period: "15.03.2009 – 25.10.2011",
            description: "",
          },
        ],

        education: [
          {
            degree: "Radiological Diagnostics",
            institution: "National Institute of Health after S. Avdalbekyan",
            year: "2006–2008",
          },
          {
            degree: "Pediatrics Internship",
            institution: "Yerevan Children's Hospital No. 3",
            year: "1997–1998",
          },
          {
            degree: "Pediatrics",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
            year: "1991–1997",
          },
        ],

        memberships: [],
        hobbies: [],
        publications: [],
        achievements: [],
        languages: [],

        academicActivities: [
          {
            title:
              "Gynecology Masterclass: Hysteroscopy and Ultrasound in the Treatment of Uterine Cavity Pathologies",
            organization: "Glasbo Clinic",
            date: "09.10.2023",
            description: "",
          },
          {
            title: "Masterclass: 'Gynecological Ultrasound'",
            organization: "Glasbo Clinic",
            date: "05.06.2022",
            description: "",
          },
          {
            title: "4th Armenian Congress of Radiology",
            organization:
              "Ministry of Health of RA, Armenian Radiology Association",
            date: "05.06.2022",
            description: "",
          },
          {
            title:
              "Scientific-Practical Seminar: 'Diagnosis and Modern Surgical Approaches to Liver Diseases'",
            organization: "Astghik Medical Center",
            date: "06.05.2022",
            description: "",
          },
          {
            title: "Armenian Congress of Radiology",
            organization: "Ministry of Health of RA",
            date: "15.06.2019",
            description: "",
          },
          {
            title: "Conference: 'Diagnosis of Abdominal Oncological Imaging'",
            organization: "European School of Radiology (ESOR)",
            date: "29.06.2018",
            description: "",
          },
          {
            title:
              "Advanced Training Course: 'Organization of Medical Aid in Emergency Situations'",
            organization:
              "Yerevan State Medical University after Mkhitar Heratsi",
            date: "20.11–22.12.2017",
            description: "",
          },
          {
            title:
              "Advanced Training Course: 'Ultrasound Diagnostics in Gynecology'",
            organization:
              "Yerevan State Medical University after Mkhitar Heratsi",
            date: "04.11–20.12.2013",
            description: "",
          },
          {
            title: "2nd Annual Conference on Men's Health",
            organization: "Armenian Association of Urologists",
            date: "17.12.2011",
            description: "",
          },
        ],
      },
    },
  },
  {
    id: 15,
    name: {
      am: "Աստղիկ Ավետիքսյան",
      en: "Astghik Avetiqsyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluzfsrDYCJcmH7QjURruLeMoFslfS6nVvkpdNb",
    role: {
      am: "Ռադիոլոգ-Դուպլեքսի Մասնագետ",
      en: "Radiologist-Duplex Specialist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        // Visibility flags
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: true,
        showAchievements: true,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showAcademicActivities: true,
        // Sidebar visibility
        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      am: {
        bio: "",
        contact: {
          phone: "",
          email: "",
          location: "",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            title:
              "Դոպլեր-դուպլեքս հետազոտության և հոդերի սոնոգրաֆիայի բժիշկ-մասնագետ",
            organization: "Վլադիմիր Ավագյանի անվան ԲԿ",
            period: "2008թ․ – առ այսօր",
            description:
              "Համատեղելիությամբ աշխատում է Պլանտա-Սանա ԲԿ-ում, Ցիտո ԲԿ-ում, Կարդիոլաբ ԲԿ-ում և Ավանտա կենտրոնում",
          },
        ],
        education: [
          {
            degree: "Օրդինատուրա, ճառագայթային ախտորոշման մասնագետ",
            institution:
              "Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան",
            year: "2006 – 2008",
          },
          {
            degree: "Բժիշկ, բուժական գործ մասնագիտություն",
            institution:
              "Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան",
            year: "2000 – 2006",
          },
        ],
        memberships: [
          "Հայաստանի ռադիոլոգիայի և անոթային վիրաբուժության ասոցիացիաների անդամ",
        ],
        hobbies: [],
        achievements: [
          "Մասնակցել է բազմաթիվ վերապատրաստումների (գիտական և գործնական) ՀՀ-ում և արտերկրում",
        ],
        academicActivities: [],
        publications: [
          {
            title:
              "Վարիկոզ հիվանդության ժամանակ էնդովազալ լազերային կոագուլյացիայի գնահատումը դուպլեքս հետազոտության միջոցով",
            journal: "«Радиология и практика» №3, Մոսկվա",
            year: "2009",
            description: "էջ 9-10",
          },
          {
            title:
              "Լազերային կոագուլյացիայից հետո վարիկոզ հիվանդության կրկնության հսկողությունը դուպլեքս հետազոտության միջոցով",
            journal:
              "Հայաստանի բժշկական միջազգային 3-րդ կոնգրեսի նյութերի ժողովածու",
            year: "2011",
            description: "հուլիս 7-9, Երևան, էջ 431-432",
          },
        ],
        languages: [],
      },
      en: {
        bio: "",
        contact: {
          phone: "",
          email: "",
          location: "",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            title: "Specialist Doctor in Doppler-Duplex and Joint Sonography",
            organization: "Vladimir Avagyan Medical Center",
            period: "2008 – Present",
            description:
              "Also working at Planta-Sana Medical Center, Tsito Medical Center, Cardiolab Medical Center, and Avanta Center",
          },
        ],
        education: [
          {
            degree:
              "Clinical Residency, Specialist in Radiological Diagnostics",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
            year: "2006 – 2008",
          },
          {
            degree: "Doctor, General Medicine",
            institution:
              "Yerevan State Medical University after Mkhitar Heratsi",
            year: "2000 – 2006",
          },
        ],
        memberships: [
          "Member of the Armenian Association of Radiology and Vascular Surgery",
        ],
        hobbies: [],
        achievements: [
          "Participated in numerous trainings (both scientific and practical) in Armenia and abroad",
        ],
        academicActivities: [],
        publications: [
          {
            title:
              "Evaluation of Endovenous Laser Coagulation in Varicose Disease via Duplex Examination",
            journal: "‘Radiology and Practice’ No. 3, Moscow",
            year: "2009",
            description: "pp. 9–10",
          },
          {
            title:
              "Monitoring Recurrence of Varicose Disease After Laser Coagulation via Duplex Examination",
            journal:
              "Proceedings of the 3rd International Armenian Medical Congress",
            year: "2011",
            description: "July 7–9, Yerevan, pp. 431–432",
          },
        ],
        languages: [],
      },
    },
  },
  {
    id: 16,
    name: {
      am: "Աղունիկ Զաքարյան",
      en: "Aghunik Zakaryan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu0jircpuB3uh8TEZLPqWjlAOFybHiDawcvdgU",
    role: {
      am: "Անոթային վիրաբույժ",
      en: "Vascular Surgeon",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: true,
        showLanguages: false,
        showMemberships: true,
        showHobbies: true,
        showAcademicActivities: false,

        showContact: false,
        showSocial: false,
        showSpecialties: false,
      },
      am: {
        bio: "",

        contact: {
          phone: "(+374 55) 056117",
          email: "aghunikzakaryan@gmail.com",
          location: "Gyumri, Shirak, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "November 2024 – Present",
            title: "Vascular Surgeon",
            organization: "Sonomax Diagnostic Center",
            description: "",
          },
          {
            period: "February 2024 – December 2024",
            title: "Doctor of Women Under 17 Armenian National Football Team",
            organization: "Football Federation of Armenia",
            description: "",
          },
          {
            period: "February 2021 – June 2024",
            title: "Vascular Surgeon",
            organization: "Gyumri Medical Center",
            description:
              "This is a community hospital in the city of Gyumri, the second largest city in Armenia",
          },
          {
            period: "November 2020 – Present",
            title: "Vascular Surgeon",
            organization: "Nork Marash Medical Center (NMMC)",
            description:
              "NMMC is a regional academic center with American-style cardiac surgery residency programs, established by US-trained Dr. Hrayr Hovaguimyan.",
          },
          {
            period: "September 2020 – September 2021",
            title: "Vascular Surgeon",
            organization: "Wigmore Clinic",
            description: "",
          },
        ],
        education: [
          {
            year: "2017–2020",
            degree: "Clinical Residency in Vascular Surgery",
            institution: "Yerevan State Medical University (YSMU)",
          },
          {
            year: "2015–2017",
            degree: "Doctor of Medicine Program (M.D.)",
            institution: "YSMU",
          },
          {
            year: "2010–2015",
            degree: "Bachelor’s Degree in Medical Sciences",
            institution: "YSMU",
          },
        ],
        memberships: [
          "ESVS trainee member (2017 - present)",
          "Armenian Association for Vascular Surgeons (2019 - present)",
          "CLI (Critical Limb Ischemia) Global Society (2024 - present)",
        ],
        hobbies: [
          "Aspiring Female Entrepreneurs (FAST), 2019 Feb–May – Leadership and creativity program for young females",
          "Leadership in Healthcare Program, 2022 Apr–Sept – Focused on research, healthcare communication, and burnout prevention",
        ],
        achievements: [
          {
            title: "Kickstarter Escalator Award",
            description:
              "Awarded by Women As One – an organization supporting female cardiovascular specialists in career development and advocacy",
            organization: "Women As One",
            date: "12 December 2022",
          },
        ],
        academicActivities: [],
        publications: [],
        languages: [
          { language: "Armenian", level: "native" },
          { language: "English", level: "fluent" },
          { language: "Russian", level: "fluent" },
        ],
      },
      en: {
        bio: "",
        contact: {
          phone: "(+374 55) 056117",
          email: "aghunikzakaryan@gmail.com",
          location: "Gyumri, Shirak, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [],
        experience: [
          {
            period: "November 2024 – Present",
            title: "Vascular Surgeon",
            organization: "Sonomax Diagnostic Center",
            description: "",
          },
          {
            period: "February 2024 – December 2024",
            title: "Doctor of Women Under 17 Armenian National Football Team",
            organization: "Football Federation of Armenia",
            description: "",
          },
          {
            period: "February 2021 – June 2024",
            title: "Vascular Surgeon",
            organization: "Gyumri Medical Center",
            description:
              "This is a community hospital in the city of Gyumri, the second largest city in Armenia",
          },
          {
            period: "November 2020 – Present",
            title: "Vascular Surgeon",
            organization: "Nork Marash Medical Center (NMMC)",
            description:
              "NMMC is a regional academic center with American-style cardiac surgery residency programs, established by US-trained Dr. Hrayr Hovaguimyan.",
          },
          {
            period: "September 2020 – September 2021",
            title: "Vascular Surgeon",
            organization: "Wigmore Clinic",
            description: "",
          },
        ],
        education: [
          {
            year: "2017–2020",
            degree: "Clinical Residency in Vascular Surgery",
            institution: "Yerevan State Medical University (YSMU)",
          },
          {
            year: "2015–2017",
            degree: "Doctor of Medicine Program (M.D.)",
            institution: "YSMU",
          },
          {
            year: "2010–2015",
            degree: "Bachelor’s Degree in Medical Sciences",
            institution: "YSMU",
          },
        ],
        memberships: [
          "ESVS trainee member (2017 - present)",
          "Armenian Association for Vascular Surgeons (2019 - present)",
          "CLI (Critical Limb Ischemia) Global Society (2024 - present)",
        ],
        hobbies: [
          "Aspiring Female Entrepreneurs (FAST), 2019 Feb–May – Leadership and creativity program for young females",
          "Leadership in Healthcare Program, 2022 Apr–Sept – Focused on research, healthcare communication, and burnout prevention",
        ],
        achievements: [
          {
            title: "Kickstarter Escalator Award",
            description:
              "Awarded by Women As One – an organization supporting female cardiovascular specialists in career development and advocacy",
            organization: "Women As One",
            date: "12 December 2022",
          },
        ],
        academicActivities: [],
        publications: [],
        languages: [
          { language: "Armenian", level: "native" },
          { language: "English", level: "fluent" },
          { language: "Russian", level: "fluent" },
        ],
      },
    },
  },
  {
    id: 17,
    name: {
      am: "Թամարա Սիմոնյան",
      en: "Tamara Simonyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluSCWBQYcnEW7pyXzGrTZQb21kmdgPfAOJ8h3N",
    role: {
      am: "Հոգեբան",
      en: "Psychologist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      am: defaultPersonalSingleInfo,
      en: defaultPersonalSingleInfo,
    },
  },
  {
    id: 18,
    name: {
      am: "Գայանե Բաղդասարյան",
      en: "Gayane Baghdasaryan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlupG8vuW69E0NFskLoCO7QfyXM4AIan2bKlp6J",
    role: {
      am: "Առողջության և Առողջ Ապրելակերպի Մասնագետ",
      en: "Health and Wellness Specialist",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      flags: {
        // Visibility flags
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: false,
        showHobbies: false,
        showAcademicActivities: false,

        // Sidebar visibility
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      en: {
        bio: `As part of my certification in Health and Nutrition Coaching, I developed a deep understanding of evidence-based nutrition principles, behavior change techniques, and holistic wellness strategies. My training focused on helping individuals create sustainable lifestyle changes through personalized nutrition guidance, goal setting, and motivational support. I gained practical experience in client assessment, meal planning, and coaching methodologies grounded in science and empathy. This education laid the foundation for my mission to empower others to live healthier, more balanced lives.`,

        // Contact
        contact: {
          phone: "+37477065995",
          email: "baghdasaryan.gayane99@gmail.com",
          location: "Yerevan, Armenia",
        },

        social: {
          linkedin: "",
          twitter: "",
        },

        specialties: [
          "Health and Wellness Nutrition",
          "Human Resources (HR) Recruiting",
        ],

        experience: [
          {
            title: "Health and Wellness Specialist",
            organization: "CardioLab",
            period: "April 2025 — Present",
            description: "",
          },
          {
            title: "Technical Recruiter",
            organization: "DataArt LLC",
            period: "Sep 2021 — May 2025",
            description: "",
          },
          {
            title: "Human Resources Specialist",
            organization: "DataArt LLC",
            period: "Jul 2019 — May 2025",
            description: "",
          },
        ],

        education: [
          {
            degree:
              "Health and Wellness Coach (Diplomate & Certified Specialist)",
            institution: "CNM College of Naturopathic Medicine in London, UK",
            year: "2023 — 2025",
          },
          {
            degree: "Bachelor's degree, Psychology",
            institution: "Yerevan State University",
            year: "2018 — 2022",
          },
          {
            degree: "Bachelor's degree, Law (Not completed)",
            institution: "French University in Armenia (UFAR)",
            year: "2016 — 2018",
          },
        ],

        memberships: [],
        hobbies: [],
        achievements: [],
        academicActivities: [],

        publications: [],

        languages: [
          {
            language: "Armenian",
            level: "Native",
          },
          {
            language: "Russian",
            level: "Native",
          },
          {
            language: "English",
            level: "Advanced",
          },
          {
            language: "French",
            level: "Intermediate",
          },
        ],
      },
      am: {
        bio: `Իմ առողջության և սննդակարգի կոուչինգի սերտիֆիկացման շրջանակում ձեռք եմ բերել խորիմաստ գիտելիքներ ապացուցված սննդակարգի սկզբունքների, վարքաբանական փոփոխությունների տեխնիկաների և հոլիստիկ բարեկեցության ռազմավարությունների վերաբերյալ։ Իմ ուսուցումը կենտրոնացած է եղել անհատներին օգնելու վրա կայուն կենսակերպի փոփոխություններ ստեղծելու համար՝ անհատականացված սննդային խորհրդատվության, նպատակների սահմանման և մոտիվացնող աջակցման միջոցով։ Ես ստացել եմ պրակտիկ փորձ հաճախորդների գնահատման, սննդի պլանավորման և գիտական և էմպատիկ մոտեցումների վրա հիմնված կոուչինգի մեթոդոլոգիաների մեջ։ Այս կրթությունը հիմք դրեց իմ առաքելությանը՝ ուժեղացնելու ուրիշներին առողջ և հավասարակշռված կյանք ապրելու համար։`,

        contact: {
          phone: "+37477065995",
          email: "baghdasaryan.gayane99@gmail.com",
          location: "Երևան, Հայաստան",
        },

        social: {
          linkedin: "",
          twitter: "",
        },

        specialties: [
          "Առողջություն և բարեկեցություն՝ սննդակարգի ոլորտում",
          "Մարդկային ռեսուրսներ (HR) հավաքագրում",
        ],

        experience: [
          {
            title: "Առողջության և բարեկեցության մասնագետ",
            organization: "CardioLab",
            period: "2025 թվականի ապրիլ — ներկայում",
            description: "",
          },
          {
            title: "Տեխնիկական հավաքագրող",
            organization: "DataArt ՍՊԸ",
            period: "2021 թվականի սեպտեմբեր — 2025 թվականի մայիս",
            description: "",
          },
          {
            title: "Մարդկային ռեսուրսների մասնագետ",
            organization: "DataArt ՍՊԸ",
            period: "2019 թվականի հուլիս — 2025 թվականի մայիս",
            description: "",
          },
        ],

        education: [
          {
            degree:
              "Առողջության և բարեկեցության կոուչ (Դիպլոմատ և սերտիֆիկացված մասնագետ)",
            institution:
              "CNM, Նատուրապաթիկ բժշկության քոլեջ, Լոնդոն, Մեծ Բրիտանիա",
            year: "2023 — 2025",
          },
          {
            degree: "Բակալավրի աստիճան, հոգեբանություն",
            institution: "Երևանի պետական համալսարան",
            year: "2018 — 2022",
          },
          {
            degree: "Բակալավրի աստիճան, իրավագիտություն (չի ավարտվել)",
            institution: "Հայաստանում Ֆրանսիական համալսարան (UFAR)",
            year: "2016 — 2018",
          },
        ],

        memberships: [],
        hobbies: [],
        achievements: [],
        academicActivities: [],
        publications: [],

        languages: [
          { language: "Հայերեն", level: "Մայրենի" },
          { language: "Ռուսերեն", level: "Մայրենի" },
          { language: "Անգլերեն", level: "Առաջադեմ" },
          { language: "Ֆրանսերեն", level: "Միջին" },
        ],
      },
    },
  },
  {
    id: 19,
    name: {
      am: "Մոնիկա Մկրտչյան",
      en: "Monika Mkrtchyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluilm0PHUMdgQAzE8HpcawsFuGDr9USml2KXOR",
    role: {
      am: "Պատասխանատու Բուժքույր",
      en: "Head Nurse",
    },
    category: StaffCategory.NursingStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      am: defaultPersonalSingleInfo,
      en: defaultPersonalSingleInfo,
    },
  },
  {
    id: 20,
    name: {
      am: "Քնարիկ Զաքարյան",
      en: "Knarik Zakaryan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu17fAqMV2GN8X3FsiITKCzR9wVM5lohEmPqWD",
    role: {
      am: "Բուժքույր",
      en: "Nurse",
    },
    category: StaffCategory.NursingStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: false,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: false,
        showHobbies: true,
        showAcademicActivities: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      am: {
        bio: "",

        contact: {
          phone: "+37491-789-867",
          email: "qnarikzaqarian@gmail.com",
          location: "Yerevan, Armenia",
        },
        social: {
          linkedin: "",
          twitter: "",
        },
        specialties: [
          "eHealth Systems (Armed eHealth)",
          "Medical Data Entry",
          "Patient Coordination",
          "Basic CPR and AED",
          "Microsoft Office",
          "1C",
          "Web Hospital",
          "Adobe Illustrator",
        ],
        experience: [
          {
            period: "2023 փետրվար–նոյեմբեր",
            title: "Օպերատոր, բժշկի օգնական",
            organization: "Էրեբունի Բժշկական Կենտրոն",
            description: "",
          },
          {
            period: "2022 հոկտեմբեր–դեկտեմբեր",
            title: "Բուժքույր-վիճակագիր",
            organization: "Շտապբուժօգնություն ՓԲԸ",
            description: "",
          },
          {
            period: "2022 օգոստոս–դեկտեմբեր",
            title: "Armed eHealth էլ. առողջապահության օպերատոր",
            organization: "Շտապբուժօգնություն ՓԲԸ",
            description: "",
          },
          {
            period: "2020 հունիս–2022 հունիս",
            title: "Պացիենտների տվյալների մուտքագրման մասնագետ",
            organization: "ՀՀ ԱՆ COVID-19 դրական պացիենտների Տրիաժ կենտրոն",
            description: "",
          },
          {
            period: "2021 օգոստոս–2022 ապրիլ",
            title: "Armed eHealth էլ. առողջապահության օպերատոր",
            organization: "ՀՀ ԱՆ 80-33 Շտապօգնության ծառայություն",
            description: "",
          },
          {
            period: "2021 հունիս–2022 հունվար",
            title: "Պետպատվերի շրջանակներում ծառայությունների գծով մասնագետ",
            organization:
              "ՀՀ ԱՆ Վնասվածքաբանության և Օրթոպեդիայի Գիտական Կենտրոն",
            description: "",
          },
          {
            period: "2020 ապրիլ–2020 մայիս",
            title: "Armed eHealth օպերատոր",
            organization:
              "ՀՀ ԱՆ COVID-19 դրական պացիենտների կարանտինային Նաիրի հյուրանոց",
            description: "",
          },
          {
            period: "2021 օգոստոս–2022 փետրվար",
            title: "Բուժքույր (կամավորական հիմունքներով)",
            organization: "ՀՀ ԱՆ Շտապօգնության ծառայություն",
            description: "",
          },
        ],
        education: [
          {
            year: "2022 – 2025",
            degree: "Քույրական գործ",
            institution: "Էրեբունի Բժշկական Ակադեմիա",
          },
          {
            year: "2015 – 2019",
            degree: "Բակալավրի աստիճան՝ Գեղարվեստական կրթություն",
            institution:
              "Խ․ Աբովյանի անվան Հայկական պետական մանկավարժական համալսարան",
          },
        ],
        memberships: [],
        hobbies: ["Սպորտ (Լող, հեծանիվ)", "Կաշեգործություն"],
        achievements: [],
        academicActivities: [],
        publications: [],
        languages: [],
      },
      en: {
        bio: "",

        contact: {
          phone: "+37491-789-867",
          email: "qnarikzaqarian@gmail.com",
          location: "Yerevan, Armenia",
        },

        social: {
          linkedin: "",
          twitter: "",
        },

        specialties: [
          "eHealth Systems (Armed eHealth)",
          "Medical Data Entry",
          "Patient Coordination",
          "Basic CPR and AED",
          "Microsoft Office",
          "1C",
          "Web Hospital",
          "Adobe Illustrator",
        ],

        experience: [
          {
            period: "Feb 2023 – Nov 2023",
            title: "Operator, Physician Assistant",
            organization: "Erebuni Medical Center",
            description: "",
          },
          {
            period: "Oct 2022 – Dec 2022",
            title: "Nurse-Registrar",
            organization: "Urgent Care LLC",
            description: "",
          },
          {
            period: "Aug 2022 – Dec 2022",
            title: "Armed eHealth Electronic Health Operator",
            organization: "Urgent Care LLC",
            description: "",
          },
          {
            period: "Jun 2020 – Jun 2022",
            title: "Patient Data Entry Specialist",
            organization:
              "Ministry of Health of Armenia COVID-19 Positive Patients Triage Center",
            description: "",
          },
          {
            period: "Aug 2021 – Apr 2022",
            title: "Armed eHealth Electronic Health Operator",
            organization:
              "Ministry of Health of Armenia 80-33 Emergency Service",
            description: "",
          },
          {
            period: "Jun 2021 – Jan 2022",
            title: "Specialist in Services within State Order",
            organization:
              "Ministry of Health of Armenia Scientific Center of Traumatology and Orthopedics",
            description: "",
          },
          {
            period: "Apr 2020 – May 2020",
            title: "Armed eHealth Operator",
            organization:
              "Ministry of Health of Armenia COVID-19 Positive Patients Quarantine Nairi Hotel",
            description: "",
          },
          {
            period: "Aug 2021 – Feb 2022",
            title: "Nurse (volunteer basis)",
            organization: "Ministry of Health of Armenia Emergency Service",
            description: "",
          },
        ],

        education: [
          {
            year: "2022 – 2025",
            degree: "Nursing",
            institution: "Erebuni Medical Academy",
          },
          {
            year: "2015 – 2019",
            degree: "Bachelor’s Degree, Fine Arts Education",
            institution:
              "Khachatur Abovyan Armenian State Pedagogical University",
          },
        ],

        memberships: [],
        hobbies: ["Sports (Swimming, Cycling)", "Leatherworking"],
        achievements: [],
        academicActivities: [],
        publications: [],
        languages: [],
      },
    },
  },
  {
    id: 22,
    name: {
      am: "Անահիտ Իսաջանյան",
      en: "Anahit Isajanyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluga5tUTviePapmd4fjRNBXFSt1CEhgvq2b0rM",
    role: {
      am: "Մենեջեր",
      en: "Manager",
    },
    category: StaffCategory.AdministrativeStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      am: defaultPersonalSingleInfo,
      en: defaultPersonalSingleInfo,
    },
  },
  {
    id: 23,
    name: {
      am: "Քրիստինա Մկրտչյան",
      en: "Kristina Mkrtchyan",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu7ZZJ3LYxTDGf3YpRJEC1nwk6tWHeNq5xSbUv",
    role: {
      am: "Ադմինիստրատոր",
      en: "Administrator",
    },
    category: StaffCategory.AdministrativeStaff,
    visibility: true,
    personalInfo: {
      flags: {
        showBio: true,
        showExperience: true,
        showEducation: true,
        showPublications: false,
        showAchievements: false,
        showLanguages: false,
        showMemberships: true,
        showHobbies: false,
        showContact: false,
        showSocial: false,
        showSpecialties: true,
      },
      am: defaultPersonalSingleInfo,
      en: defaultPersonalSingleInfo,
    },
  },
];
