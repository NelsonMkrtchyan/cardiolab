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

export type PersonalInfoType = {
  bio: string;
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
  // Content data
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

export const categorizedStaffOrder = [
  StaffCategory.MedicalStaff,
  StaffCategory.NursingStaff,
  StaffCategory.AdministrativeStaff,
];

const mockPersonalInfo: PersonalInfoType & {
  name: string;
  role: string;
  image: string;
} = {
  // Default mock data if no personalInfo is provided
  name: "Dr. Anna Hakobyan",
  role: "Senior Cardiologist",
  image: "https://example.com/doctor-image.jpg",
  bio: "Dr. Anna Hakobyan is a board-certified cardiologist with over 15 years of experience in diagnosing and treating cardiovascular conditions. She specializes in interventional cardiology and has performed hundreds of successful cardiac procedures. Her patient-centered approach and commitment to excellence have earned her recognition among peers and patients alike.",
  showBio: false,
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
  contact: {
    phone: "+374 10 123 456",
    email: "info@cardiolab.am",
    location: "CardioLab Medical Center, Yerevan",
  },
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  specialties: [
    "Cardiology",
    "Arrhythmology",
    "Echocardiography",
    "Interventional Cardiology",
  ],
  experience: [
    {
      period: "2018 - Present",
      title: "Senior Cardiologist",
      organization: "CardioLab Medical Center",
      description:
        "Leading the cardiology department and specializing in interventional procedures.",
    },
    {
      period: "2012 - 2018",
      title: "Cardiologist",
      organization: "Central Hospital",
      description:
        "Provided comprehensive cardiac care and performed diagnostic procedures.",
    },
  ],
  education: [
    {
      year: "2006",
      degree: "PhD in Cardiology",
      institution: "University of UCLan School of Medicine, Preston",
    },
    {
      year: "2002",
      degree: "Master of Cardiology",
      institution: "University of Exeter Medical School, Exeter",
    },
    {
      year: "1998",
      degree: "MBBS",
      institution: "Royal College of Medicine",
    },
  ],
  memberships: [
    "American College of Cardiology",
    "European Society of Cardiology",
    "International Society for Heart Research",
    "Heart Rhythm Society",
  ],
  hobbies: ["Mountain hiking", "Classical music", "Chess", "Photography"],
  achievements: [
    {
      title: "Excellence in Cardiology Award",
      organization: "Armenian Medical Association",
      date: "2020",
    },
    {
      title: "Best Research Paper",
      organization: "European Society of Cardiology",
      date: "2018",
    },
    {
      title: "Young Investigator Award",
      organization: "International Cardiology Conference",
      date: "2015",
    },
    {
      title: "Distinguished Service Award",
      organization: "Central Hospital",
      date: "2014",
    },
  ],
  academicActivities: [
    {
      title: "Lecture on Cardiovascular Health",
      organization: "Yerevan State Medical University",
      date: "2023",
      description:
        "Guest lecture on modern approaches to cardiovascular disease prevention",
    },
    {
      title: "Research Workshop",
      organization: "Armenian Medical Association",
      date: "2022",
      description: "Led a workshop on research methodologies in cardiology",
    },
    {
      title: "Medical Conference Speaker",
      organization: "International Cardiology Summit",
      date: "2021",
    },
  ],
  publications: [
    {
      title: "Novel Approaches to Treating Arrhythmias in Young Adults",
      journal: "Journal of Cardiac Electrophysiology",
      year: "2022",
      url: "https://example.com/publication1",
    },
    {
      title: "Long-term Outcomes of Minimally Invasive Cardiac Procedures",
      journal: "Cardiology Research and Practice",
      year: "2020",
      url: "https://example.com/publication2",
    },
    {
      title:
        "Comparative Analysis of Antiarrhythmic Medications in Elderly Patients",
      journal: "International Journal of Cardiology",
      year: "2017",
    },
  ],
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
    {
      language: "French",
      level: "Intermediate",
    },
  ],
};

export const staff: StaffType = [
  {
    id: 1,
    name: {
      am: "Տաթևիկ Հովակիմյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlueDvPGq4t76bKABNX1vpMyZqWPS43EoxGDlka",
    role: {
      am: "Սրտաբան-Առիթմոլոգ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "Clinical Adult and Pediatric Cardiologist, Arrhythmia Specialist, Public Health Specialist",
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
          title: "EHRA National Cardiac Societies Committee Member",
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
          title: "Expert Member, Cardiac Arrhythmology Cases Revision",
          organization: "State Health Agency",
          description: "",
        },
        {
          period: "2022",
          title: "Expert Member, Quality Improvement Advisory Board",
          organization: "Ministry of Health",
          description: "",
        },
        {
          period: "2021",
          title:
            "Project Expert (Cardiovascular Diseases for National Diabetes Strategy)",
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
            "Executive MSc in Health Economics, Outcomes and Management in Cardiovascular Sciences",
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
          degree: "MD (Department of Pediatrics)",
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
          description: "Supported education at American University of Armenia",
          organization: "AUA/Ministry of Education and Science",
          date: "2015",
        },
      ],
      academicActivities: [
        {
          title: "Annual and Semiannual Arrhythmia Seminars",
          organization: "Various medical centers",
          date: "2010 – 2024",
        },
        {
          title: "Arrhythmology Rotation (Teaching)",
          organization: "Nork-Marash, Astghik Medical Center",
          date: "2010 – 2024",
        },
        {
          title: "Fellowship Training and Journal Clubs",
          organization: "Multiple Centers",
          date: "2010 – 2024",
        },
      ],
      publications: [
        {
          title: "Electrophysiological findings during re-do procedures...",
          journal: "Journal of Interventional Cardiac Electrophysiology",
          year: "2023",
        },
        {
          title:
            "Perceptions and barriers to deceased organ donation in Armenia",
          journal: "European Journal of Heart Failure",
          year: "2020",
        },
        {
          title:
            "Syncope in a pregnant woman with repaired Tetralogy of Fallot",
          journal: "European Heart Journal-Case Reports",
          year: "2022",
        },
        {
          title:
            "Successful management of bidirectional ventricular tachycardia in child with COVID-19",
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
  },
  {
    id: 2,
    name: {
      am: "Կարեն Զոհրաբյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluzPJlX1UCJcmH7QjURruLeMoFslfS6nVvkpdN",
    role: {
      am: "Մանկական Ինտերվենցիոն Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
      showBio: true,
      showExperience: true,
      showEducation: true,
      showPublications: false,
      showAchievements: false,
      showLanguages: false,
      showMemberships: true,
      showHobbies: false,
      showContact: true,
      showSocial: true,
      showSpecialties: true,
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
      publications: [],
      languages: [],
      academicActivities: [],
    },
  },
  {
    id: 3,
    name: {
      am: "Կատարինե Վարդանյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu3h1g5Y7N5s3FUueQwgdhBEa4x1ScGkiXJAzp",
    role: {
      am: "Ինտենսիվ Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",

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
  {
    id: 4,
    name: {
      am: "Մարիամ Մինասյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluIC4DbAEmOVFpZEU45sKoR6bt7NDSv82hyxfg",
    role: {
      am: "Սրտաբան, Էխո-Սգ Մասնագետ, Սրտի Մռտ Մասնագետ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
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
        {
          period: "2025թ. մինչ այժմ",
          title: "",
          organization: "Կարդիոլաբ բժշկական կենտրոն",
          description: "",
        },
      ],
      education: [
        {
          year: "2005թ.",
          degree: "Ավարտել է Անանիա Շիրակացու անվան ճեմարանը",
          institution: "Անանիա Շիրակացու անվան ճեմարան",
        },
        {
          year: "2011թ.",
          degree:
            "Ավարտել է Երևանի պետական բժշկական համալսարանի <<Ընդհանուր բժշկություն>> ֆակուլտետը",
          institution: "Երևանի պետական բժշկական համալսարան",
        },
        {
          year: "2011-2014թթ.",
          degree:
            "Հետդիպլոմային կրթություն է ստացել «Սրտաբանություն» մասնագիտությամբ",
          institution:
            "Երևանի Մխիթար Հերացու անվ. Պետական բժշկական համալսարանի Հետբուհական և շարունակական կրթության ֆակուլտետի Անհետաձգելի և Ընդհանուր Սրտաբանության ամբիոն",
        },
        {
          year: "2021-2022թթ.",
          degree:
            "Հետդիպլոմային կրթություն է ստացել «Ճառագայթայինախտորոշում» մասնագիտությամբ",
          institution:
            "Երևանի Մխիթար Հերացու անվ. Պետական բժշկական համալսարանի Հետբուհական և շարունակական կրթության ֆակուլտետի Ճառագայթային ախտորոշման բաժանմունք",
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
  },
  {
    id: 5,
    name: {
      am: "Տաթևիկ Սիմոնյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluxjrAPtfVspCYkb9tWP0X6eLDhnRHOl7fTjaE",
    role: {
      am: "Մանկական և Պերինատալ Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
      showBio: false,
      showExperience: true,
      showEducation: true,
      showPublications: false,
      showAchievements: true,
      showLanguages: false,
      showMemberships: false,
      showHobbies: true,
      showAcademicActivities: true,
      showContact: false,
      showSocial: false,
      showSpecialties: true,
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
          organization: "‹‹Նորք-Մարաշ›› ԲԿ",
          description: "",
        },
        {
          period: "2023-2024թթ.",
          title: "Պերինատալ սրտաբան-ֆելոու",
          organization: "‹‹Նորք-Մարաշ›› ԲԿ",
          description: "",
        },
        {
          period: "2021թ. հուլիս - 2021թ. դեկտեմբեր",
          title: "Մանկական սրտաբան",
          organization: "‹‹Սուրբ Աստվածամայր›› ԲԿ",
          description: "",
        },
        {
          period: "2020թ. նոյեմբեր - դեկտեմբեր",
          title: "Մանկական սրտաբան",
          organization: "‹‹Արաբկիր›› ԲԿ",
          description: "",
        },
        {
          period: "2018-2020թթ.",
          title: "Ռեզիդենտ-մանկական սրտաբան",
          organization: "‹‹Նորք-Մարաշ›› բժշկական կենտրոն",
          description: "",
        },
        {
          period: "2020-2021թթ.",
          title: "Պերինատալ սրտաբանության ֆելոուշիփ",
          organization: "‹‹Նորք-Մարաշ›› բժշկական կենտրոն",
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
        {
          year: "2000-2010թթ.",
          degree: "Միջնակարգ կրթություն",
          institution: "N 2 միջնակարգ դպրոց, ք. Նոր Հաճն",
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
            "‹‹Սպորտը և պատվաստումները սրտի բնածին արատով երեխաների մոտ››",
          organization: "ՆՄԲԿ սիրտ-անոթային գիտաժողով",
          date: "2021թ. հունիս",
        },
        {
          title: "Խոսնակ",
          description:
            "‹‹Ֆիզիկական ակտիվությունը սրտի բնածին արատով երեխաների շրջանում››",
          organization: "‹‹Սիրո և նվիրումի 30 տարին›› գիտաժողով",
          date: "2024թ. նոյեմբեր",
        },
        {
          title: "Մասնակից",
          description:
            "Նորածնային սիրտ-թոքային հեմոդինամիկային նվիրված վեբինար",
          date: "2021թ. մարտ",
        },
        {
          title: "Մասնակից",
          description: "‹‹Առիթմոլոգիական մաստեր–կլաս››",
          date: "2023թ. հոկտեմբեր",
        },
        {
          title: "Խոսնակ",
          description:
            "‹‹Ամբողջական նախասիրտ-փորոքային հաղորդակցություն ախտորոշմամբ հիվանդների վարման փորձը ‹‹Նորք-Մարաշ›› ԲԿ-ում››",
          organization: "Հայաստանի 5-րդ միջազգային բժշկական համագումար",
          date: "2019թ. հուլիս",
        },
      ],
      academicActivities: [
        {
          title: "Գիտաժողովային խոսնակ և մասնակից",
          organization: "Հայաստանյան և միջազգային համագումարներ",
          date: "2019–2024թթ.",
        },
      ],
      publications: [],
      languages: [
        { language: "Հայերեն", level: "մայրենի" },
        { language: "Ռուսերեն", level: "սահուն" },
        { language: "Անգլերեն", level: "սահուն" },
      ],
    },
  },
  {
    id: 6,
    name: {
      am: "Անահիտ Գևորգյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluT7Vuh0IO67xl130tYVbZmnvuKAkc2dHC9ghD",
    role: {
      am: "Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
      showBio: true,
      showExperience: true,
      showEducation: true,
      showPublications: false,
      showAchievements: false,
      showLanguages: false,
      showMemberships: true,
      showHobbies: false,
      showContact: true,
      showSocial: true,
      showSpecialties: true,
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
      publications: [],
      languages: [],
      academicActivities: [],
    },
  },
  {
    id: 7,
    name: {
      am: "Գևորգ Պետրոսյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluf6eVH0Zz5N7IdOAeZ04QFuoWqrbmxjn9MY1P",
    role: {
      am: "Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
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
          degree: "Short-term specialization and licensing in Echocardiography",
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
        {
          year: "2010-2015",
          degree: "Secondary Education",
          institution:
            '"Shirakatsy Lyceum" International Scientific-Educational Complex',
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
          organization: "Magdeburg, Auslandsgesellschaft Sachsen-Anhalt e. V.",
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
  },
  {
    id: 8,
    name: {
      am: "Տաթևիկ Գաբրիելյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluX38r1mOa6TkeElYqHKS8hzy4uf7mr9tC0MBv",
    role: {
      am: "Սրտաբան-Առիթմոլոգ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
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
      publications: [],
      languages: [],
      academicActivities: [],
    },
  },
  {
    id: 9,
    name: {
      am: "Իզաբելլա Բարեկյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluv7GAuykBOredpWR2N9YyhZbqVn4KCwD15mIt",
    role: {
      am: "Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",

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

      // Contact Info
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
          institution: "Yerevan State Medical University after Mkhitar Heratsi",
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
  },
  {
    id: 10,
    name: {
      am: "Մարիամ Հովակիմյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluM6kftgSmxf0AaeIb7tJwXUHG2sKPOWnoQLik",
    role: {
      am: "Սրտային Անբավարարության Մասնագետ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
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
          organization: "CARDIOLAB - YEREVAN, ARMENIA",
          description: "",
        },
        {
          period: "01/10/2022 - CURRENT",
          title: "CARDIOLOGIST, ATTENDING PHYSICIAN",
          organization:
            "HERATSI HOSPITAL COMPLEX, EMERGENCY DEPARTMENT - YEREVAN, ARMENIA",
          description: "",
        },
        {
          period: "01/04/2022 - CURRENT",
          title: "CARDIOLOGIST, PART-TIME",
          organization:
            'NEW-MED" CENTER OF UROLOGY CLOSED JOINT-STOCK COMPANY (CJSC) - YEREVAN, ARMENIA',
          description:
            "-consultation of patients with cardiovascular diseases, -diagnostic evaluation of cardiovascular diseases. -treatment and follow-up.",
        },
        {
          period: "17/09/2022 - CURRENT",
          title: "CARDIOLOGIST, PART-TIME",
          organization:
            "HOSPITAL AND POLYCLINIC N 2 CLOSED JOINT-STOCK COMPANY (CJSC) - YEREVAN, ARMENIA",
          description:
            "-consultation of patients with cardiovascular diseases, -diagnostic evaluation of cardiovascular diseases. -in-hospital and outpatient treatment, and follow-up.",
        },
        {
          period: "01/09/2019-09/09/2022",
          title: "CARDIOLOGY RESIDENT",
          organization:
            "HERATSI HOSPITAL COMPLEX, DEPARTMENT OF GENERAL AND INVASIVE CARDIOLOGY - YEREVAN, ARMENΙΑ",
          description: "",
        },
        {
          period: "27/06/2020 - 19/02/2021",
          title: "ATTENDING PHISICIAN",
          organization:
            "RESEARCH INSTITUTE OF CARDIOLOGY NAMED AFTER LEVON HOVHANNISYAN - YEREVAN, ARMENIA",
          description: "",
        },
        {
          period: "02/09/2016- 10/04/2018",
          title: "PHARMACEUTICAL ASSISTANT",
          organization: "MAGTONI PHARMACY CHAIN - YEREVAN, ARMENIA",
          description:
            "• giving advice on how to use medicines correctly, including the amount to use (dosage) and any risk checking dosage and ensuring that medicines are correctly and safely supplied and labelled advising patients of any adverse side-effects of medicines or potential interactions with other medicines/ treatments",
        },
      ],
      education: [
        {
          year: "11/03/2024-04/05/2024",
          degree: "CLINICAL AND RESEARCH INTERNSHIP",
          institution:
            "Erasme academic hospital, Cardiac Insufficiency and Pulmonary Vascular Disease Clinic",
        },
        {
          year: "20/04/2025-20/06/2025",
          degree: "CERTIFICATE OF TRAINING FELLOWSHIP",
          institution: "CHU de Nice Hopital Pasteur, Cardiology Department",
        },
        {
          year: "26/09/2021-02/10/2021",
          degree:
            "CERTIFICATE OF ATTENDANCE IN SALZBURG WEILL CORNELL SEMINAR IN LIPID METABOLISM AND CARDIOVASCULAR RISK",
          institution: "open medical institute",
        },
        {
          year: "10/10/2021-16/10/2021",
          degree:
            "CERTIFICATE OF ATTENDANCE IN SALZBURG WEILL CORNELL SEMINAR IN CARDIOLOGY",
          institution: "open medical institute",
        },
        {
          year: "04/01/2023-04/05/2023",
          degree: "ECHOCARDIOGRAPHY, PROFESSIONAL TRAINING COURSE, CERTIFICATE",
          institution: "Yerevan State Medical University after Mkhitar Heratsi",
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
          organization:
            "THE HRAIR and ANNA HOVNANIAN FOUNDATION - THE HIRAIR and ANNA HOVNANIAN FOUNDATION, INC",
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
  },
  {
    id: 11,
    name: {
      am: "Քնարիկ Բադեյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluEM5Y9sJSpZQ36u72Hw8kvD5PiIMdXj9xVnB0",
    role: {
      am: "Ներզատաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "Successfully diagnosed and treated over 1,500 patients with endocrine disorders, including diabetes, thyroid diseases, and hormonal imbalances, resulting in a 95% patient satisfaction rate. Successfully diagnosed and treated more than 200 patients with postoperative complications, postoperative hypothyroidism, hypoparathyroidism.",

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
        "Continuous glucose monitoring",
        "Thyroidectomy Consultation",
        "Hormone Replacement",
      ],
      experience: [
        {
          title: "Clinical Ordinator in Department of Endocrinology",
          organization: "Muratsan University Hospital",
          period: "2019–2021",
          description: "",
        },
        {
          title: "Endocrinologist",
          organization: "New Med Clinic",
          period: "2021–2022",
          description: "",
        },
        {
          title: "Endocrinologist",
          organization: "MedLine Clinic",
          period: "2022–Present",
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
          organization: "Shengavit Medical Centre",
          period: "2024 Nov – Present",
          description: "",
        },
        {
          title: "Endocrinologist, Sonographer of Thyroid Gland",
          organization: "Cardiolab Clinic",
          period: "2025 Jan – Present",
          description: "",
        },
      ],
      education: [
        {
          degree: "Medical Doctor",
          institution:
            "Yerevan State Medical University, Faculty of General Medicine",
          year: "2013–2019",
        },
        {
          degree: "Resident in Department of Endocrinology",
          institution: "Yerevan State Medical University",
          year: "2019–2021",
        },
        {
          degree: "Specializing in Ultrasound Diagnostics",
          institution: "Yerevan State Medical University",
          year: "2022 Jan – Aug",
        },
        {
          degree: "Fine-Needle Aspiration of the Thyroid Gland",
          institution: "", // No institution specified
          year: "2023 March – July",
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
  },
  //   #######
  {
    id: 24,
    name: {
      am: "Մերի Պապիկան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu015eaHB3uh8TEZLPqWjlAOFybHiDawcvdgUp",
    role: {
      am: "Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
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
      contact: {
        phone: "+37494501113",
        email: "marypapikyan1318@gmail.com",
        location: "Գ.Լուսավորիչ 12; բն.#50; 0015; Երևան [cite: 4]",
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
          degree:
            "Հետդիպլոմային կրթություն ԱԱԻ «Հանրային առողջապահության կազմակերպում և կառավարում»",
          institution: "ԱԱԻ",
        },
        {
          year: "2021-2023",
          degree:
            "Հետդիպլոմային կրթություն ԵՊԲՀ «Մանկական սրտաբանություն» մասնագիտությամբ",
          institution: "ԵՊԲՀ",
        },
        {
          year: "2011-2016",
          degree:
            "Հետդիպլոմային կրթություն ԵՊԲՀ «Սրտաբանություն» մասնագիտությամբ",
          institution: "ԵՊԲՀ",
        },
        {
          year: "2005-2011",
          degree: "«Ընդհանուր բժշկության ֆակուլտետ»՝ գերազանցության դիպլոմով",
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
          title:
            "Սիրտանոթային սիմպոզիում; Հայաստանի 6րդ միջազգային բժշկական համագումար",
          date: "07.2023",
        },
        {
          title: "Եվրոկովկասյան սրտաբանության կոնգրես",
          organization: "Երևան",
          date: "05.2023",
        },
        {
          title:
            "«Ինֆեկցիոն էնդոկարդիտի դեպքի ներկայացում»Էնդոկարդիտների ուղեցույց, վեբինար",
          organization: "Երևան-Փարիզ",
          date: "10.2024",
        },
        {
          title: "«Թոքային հիպերտենզիայի ԷխոՍԳ» ԷԽՈՍԳ ամառային դպրոց",
          organization: "Ջեֆերսոն կենտրոն, Երևան",
          date: "07.2024",
        },
        {
          title: "«Հղիություն և ՍԱ հիվանդություններ»",
          organization: "Մոր և մանկան առողջության պահպանման կենտրոն",
          date: "04.2024",
        },
        {
          title:
            "«ՁՓԱՖ-ի, երկայնաձիգ գլոբալ սթրեյնի և դիաստոլիկ ֆունկցիայի լավացումը աորտալ փականի պրոթեզավորումից հետո համակցված աորտալ արատով պացիենտի մոտ»",
          date: "11.2023",
        },
        {
          title: "«ՍԱ նշաններով քողարկված պլևրայի հազվագյուտ ուռուցք»",
          organization: "Կարդիոօնկոլոգիական ֆորում",
          date: "04.2023",
        },
        {
          title: "«Հղիություն և հիպերտենզիա»",
          organization: "Նորք-Մարաշ Սիրտանոթային Գիտաժողով",
          date: "06.2021",
        },
      ],
      publications: [],
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
  },
  {
    id: 25,
    name: {
      am: "Նադեժդա Իսկանդարյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu015eaHB3uh8TEZLPqWjlAOFybHiDawcvdgUp",
    role: {
      am: "Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
      showBio: true,
      showExperience: true,
      showEducation: true,
      showPublications: false,
      showAchievements: false,
      showLanguages: false,
      showMemberships: true,
      showHobbies: false,
      showContact: true,
      showSocial: true,
      showSpecialties: true,
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
      publications: [],
      languages: [],
      academicActivities: [],
    },
  },
  //   #######
  {
    id: 12,
    name: {
      am: "Անահիտ Ոսկանյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu24lCbw3aYOs6XAhJVHKowrlz1WfdjyPxt0Ic",
    role: {
      am: "Նյարդաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",

      showBio: false,
      showExperience: true,
      showEducation: true,
      showPublications: true,
      showAchievements: false,
      showLanguages: true,
      showMemberships: true,
      showHobbies: false,
      showAcademicActivities: false,

      showContact: false,
      showSocial: false,
      showSpecialties: false,

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
          period: "Mar 2015 – Apr 2016",
          title: "Medical Doctor – Neurologist",
          organization: "8th Polyclinic, Yerevan",
          description: "",
        },
        {
          period: "May 2014 – Jun 2021",
          title: "Medical Doctor – Neurology & Neurorehabilitation",
          organization: "Sirmed Medical Center, Yerevan",
          description: "",
        },
        {
          period: "May 2017 – Nov 2017",
          title: "Neurologist",
          organization: "2nd Hospital, Yerevan",
          description: "",
        },
        {
          period: "Nov 2017 – Jan 2021",
          title: "Vice-President",
          organization: "Sirmed Medical Center",
          description: "",
        },
        {
          period: "Mar 2021 – Present",
          title: "Neurologist",
          organization:
            "Support for Wounded Soldiers and Disabled Military NGO",
          description: "",
        },
      ],
      education: [
        {
          year: "1994 – 2004",
          degree: "High School",
          institution: "Spitak",
        },
        {
          year: "2004 – 2010",
          degree: "M.D.",
          institution: "Yerevan State Medical University",
        },
        {
          year: "2010 – 2013",
          degree: "Neurology Residency",
          institution: "YSMU, Neurology Department",
        },
        {
          year: "2021 – Present",
          degree: "PhD Student",
          institution: "KU Leuven, Belgium",
        },
      ],
      memberships: [
        "Member of Armenian Association of Neurologists (AAN)",
        "Member of Movement Disorder Society",
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
          title: `"PARKINSON'S DISEASE OR SYMPTOMATIC PARKINSONISM? CAN THEY BE COMBINED?"`,
          journal:
            "21st World Congress on Parkinson’s Disease and Related Disorders",
          year: "2015",
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
          title: "Insulin dependent diabetes and hand tremor",
          journal: "MOVEMENT DISORDERS, Vol. 31",
          year: "2016",
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
            "19th International Congress of Parkinson’s Disease and Movement Disorders",
          year: "2015",
        },
        {
          title: "Worst side effect of drugs – Parkinsonism",
          journal: "MOVEMENT DISORDERS, Vol. 30",
          year: "2015",
        },
        {
          title: "Isolated facial nerve palsy: Bells palsy?",
          journal: "CEREBROVASCULAR DISEASES, Vol. 39",
          year: "2015",
        },
        {
          title: "Non-motor symptoms in Parkinson’s disease",
          journal: "MOVEMENT DISORDERS, Vol. 29",
          year: "2014",
        },
        {
          title: "Drug-induced dystonia",
          journal: "MOVEMENT DISORDERS, Vol. 29",
          year: "2014",
        },
        {
          title: "Guam syndrome in four Armenian patients",
          journal: "MOVEMENT DISORDERS, Vol. 29",
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
  },
  {
    id: 13,
    name: {
      am: "Արփինե Սիմոնյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluEmku7JSpZQ36u72Hw8kvD5PiIMdXj9xVnB0U",
    role: {
      am: "Թերապևտ, Գաստրոէնտերոլոգ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",

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
          title: "Ասիստենտ",
          organization: "ԵՊԲՀ Թերապիայի թիվ 3 ամբիոն",
          period: "2017թ․ սեպտեմբեր – 2019թ․",
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
          title: "Դասախոս",
          organization:
            "Ներքին հիվանդությունների (պուլմոնոլոգիա և նեֆրոլոգիա) ամբիոն",
          period: "2019թ․ սեպտեմբեր 18 – մինչ օրս",
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
          title: "Գաստրոէնտերոլոգ-թերապևտ",
          organization: "ՈՒիգմոր Կլինիկ",
          period: "2021թ․ ապրիլից – մինչ օրս",
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
          organization: "Գաստրո Կլինիկ",
          period: "2024թ․ նոյեմբեր – մինչ օրս",
          description: "",
        },
      ],

      education: [
        {
          degree: "Բուժական գործ",
          institution: "Երևանի Մ. Հերացու անվան պետական բժշկական համալսարան",
          year: "2008–2013",
        },
        {
          degree: "Բուժական գործ",
          institution: "ԵՊԲՀ",
          year: "2013–2015",
        },
        {
          degree: "Գաստրոէնտերոլոգիա",
          institution: "ԵՊԲՀ",
          year: "2015–2017",
        },
        {
          degree: "Ներքին բժշկություն",
          institution: "ԵՊԲՀ",
          year: "2020–2022",
        },
      ],

      memberships: [
        "Գաստրոէնտերոլոգների հայկական ասոցիացիայի անդամ (2017–2020թթ․)",
        "Թերապևտների եվրասիական ասոցիացիայի անդամ (2017թ․–մինչ օրս)",
        "Ճարպակալման կանխարգելման հայկական ասոցիացիայի անդամ (2023թ․–մինչ օրս)",
      ],

      hobbies: [],
      achievements: [
        "2017թ․ Կատարելագործում Թոքաբանություն մասնագիտությամբ (ԵՊԲՀ Թերապիայի թիվ 3 ամբիոն)",
        "2018թ․ Անգլալեզու խմբերի ուսուցման կատարելագործման ատեստացիա (ԵՊԲՀ Օտար Լեզուների ամբիոն)",
        "2018թ․ Վերապատրաստում ԵՊԲՀ դասախոսների որակավորման բարձրացման բաժնում",
        "2021թ․ Վերապատրաստում ԵՊԲՀ դասախոսների որակավորման բարձրացման բաժնում",
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
  },
  {
    id: 14,
    name: {
      am: "Կարինե Մկրտչյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluJk7QajrgHJqI5EuVZFjgRGzykmXKNTw4WcSe",
    role: {
      am: "Բժիշկ-Ռադիոլոգ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "", // No explicit bio provided

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

      // Sidebar visibility flags
      showContact: false,
      showSocial: false,
      showSpecialties: false,

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

      experience: [
        {
          title: "Նորածնային բաժանմունքի բժիշկ-սոնոգրաֆիստ",
          organization: "Վարդանանց բժշկական կենտրոն",
          period: "14.04.2025 – Present",
          description: "",
        },
        {
          title: "ՀՅԿ Կանանց առողջության կլինիկա բժիշկ սոնոգրաֆիստ",
          organization: "Մեյփլ Լիֆ (Maple Leaf)",
          period: "01.09.2012 – Present",
          description: "",
        },
        {
          title: "Սոնոգրաֆիստ",
          organization: "Սոնատո բժշկական կենտրոն",
          period: "06.10.2011 – 20.12.2011",
          description: "",
        },
        {
          title: "Բժիշկ սոնոգրաֆիստ",
          organization: "Երեխաների «Մուրացան» բժշկական կենտրոն",
          period: "15.03.2009 – 25.10.2011",
          description: "",
        },
      ],

      education: [
        {
          degree: "Բժշկական գիտությունների թեկնածու",
          institution: "Երևանի Մ. Հերացու անվան պետական բժշկական համալսարան",
          year: "1991–1997",
        },
        {
          degree: "Մանկաբարձագինեկոլոգիական մասնագիտացում",
          institution: "Հետդիպլոմային բժշկական կրթություն, ԵՊԲՀ",
          year: "1997–1998",
        },
        {
          degree: "Ամբողջական աշխատակցի մանկաբարձագինեկոլոգ",
          institution: "Ու. Ախուրյանի անվան առողջապահության քոլեջ",
          year: "2006–2008",
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
            "Հետդիպլոմային կրթական դասընթաց՝ «Հետազոտությունների և ուսումնառության մենեջմենթ»",
          organization:
            "Գիտելիքների գնահատման միջազգային կենտրոն, Գլազգո քոլեջ",
          date: "09.10.2023",
          description: "Մասնակցություն և հավաստագրում",
        },
        {
          title: "Դասընթաց՝ «Գինեկոլոգիական ուլտրաձայն»",
          organization: "Գլազգո քոլեջ",
          date: "05.06.2022",
          description: "Մասնագիտական դասընթաց",
        },
        {
          title:
            "Դասընթաց՝ «Լյարդի հիվանդությունների դիագնոստիկա և մոնիթորինգ՝ ուլտրաձայնի ժամանակակից մոտեցումներ»",
          organization: "Սոնատո ԲԿ",
          date: "06.05.2022",
          description: "Մասնագիտական վերապատրաստում",
        },
        {
          title:
            "Ռադիոլոգիայի հայկական ընկերություն, ԱՄԱ, Ռադիոլոգների հայկական ասոցիացիա",
          organization: "Երևան",
          date: "05.06.2022",
          description: "Մասնակցություն մասնագիտական ասոցիացիայի աշխատանքներին",
        },
        {
          title:
            "Ռադիոլոգիայի հայկական ընկերություն, ԼՂ առողջապահության նախարարություն",
          organization: "Երևան",
          date: "15.06.2019",
          description: "Մասնագիտական ձեռքբերում ռադիոլոգիայի ոլորտում",
        },
        {
          title: "Դասընթաց՝ «Ռադիոլոգիայի եվրոպական դպրոցի» (ESOR)",
          organization: "Երևան",
          date: "06.29.2018",
          description: "Միջազգային դասընթաց",
        },
        {
          title: "Կոնֆերանս՝ «Արդիական թեմաներ ռադիոլոգիայում»",
          organization: "ԵՊԲՀ",
          date: "20.11–22.12.2017",
          description: "Մասնակցություն գիտաժողովին",
        },
        {
          title:
            "Կոնֆերանս՝ «Երեխաների կենտրոնական նյարդային համակարգի պաթոլոգիա գինեկոլոգիայում»",
          organization: "ԵՊԲՀ",
          date: "04.11–20.12.2013",
          description: "Գիտական զեկույց",
        },
        {
          title: "Սեմինար՝ «Սոնոգրաֆիկ սեմինար»",
          organization: "Հայաստանի դոցենտների ասոցիացիա",
          date: "17.12.2011",
          description: "Մասնագիտական սեմինար",
        },
      ],
    },
  },
  {
    id: 15,
    name: {
      am: "Աստղիկ Ավետիքսյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluzfsrDYCJcmH7QjURruLeMoFslfS6nVvkpdNb",
    role: {
      am: "Ռադիոլոգ-Դուպլեքսի Մասնագետ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",

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
  },
  {
    id: 16,
    name: {
      am: "Աղունիկ Զաքարյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu0jircpuB3uh8TEZLPqWjlAOFybHiDawcvdgU",
    role: {
      am: "Անոթային վիրաբույժ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",

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
          organization: "Sonomax Diagnostic Center (Gyumri, Armenia)",
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
          organization: "Nork Marash Medical Center (NMMC), Yerevan, Armenia",
          description:
            "NMMC is a regional academic center with American-style cardiac surgery residency programs, established by US-trained Dr. Hrayr Hovaguimyan.",
        },
        {
          period: "September 2020 – September 2021",
          title: "Vascular Surgeon",
          organization: "Wigmore Clinic, Yerevan, Armenia",
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
          degree: "Doctor of Medicine (M.D.)",
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
  {
    id: 17,
    name: {
      am: "Թամարա Սիմոնյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlua0HqbpKeDI891qSZ0fT7zH2wQLEbgPcoRV4J",
    role: {
      am: "Հոգեբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: "",
      showBio: true,
      showExperience: true,
      showEducation: true,
      showPublications: false,
      showAchievements: false,
      showLanguages: false,
      showMemberships: true,
      showHobbies: false,
      showContact: true,
      showSocial: true,
      showSpecialties: true,
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
      publications: [],
      languages: [],
      academicActivities: [],
    },
  },
  {
    id: 18,
    name: {
      am: "Գայանե Բաղդասարյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlupG8vuW69E0NFskLoCO7QfyXM4AIan2bKlp6J",
    role: {
      am: "Առողջության և Առողջ Ապրելակերպի Մասնագետ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: {
      bio: `As part of my certification in Health and Nutrition Coaching, I developed a deep understanding of evidence-based nutrition principles, behavior change techniques, and holistic wellness strategies. My training focused on helping individuals create sustainable lifestyle changes through personalized nutrition guidance, goal setting, and motivational support. I gained practical experience in client assessment, meal planning, and coaching methodologies grounded in science and empathy. This education laid the foundation for my mission to empower others to live healthier, more balanced lives.`,

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
  },
  {
    id: 19,
    name: {
      am: "Մոնիկա Մկրտչյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluilm0PHUMdgQAzE8HpcawsFuGDr9USml2KXOR",
    role: {
      am: "Պատասխանատու Բուժքույր",
    },
    category: StaffCategory.NursingStaff,
    visibility: true,
    personalInfo: {
      bio: "",
      showBio: true,
      showExperience: true,
      showEducation: true,
      showPublications: false,
      showAchievements: false,
      showLanguages: false,
      showMemberships: true,
      showHobbies: false,
      showContact: true,
      showSocial: true,
      showSpecialties: true,
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
      publications: [],
      languages: [],
      academicActivities: [],
    },
  },
  {
    id: 20,
    name: {
      am: "Քնարիկ Զաքարյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu17fAqMV2GN8X3FsiITKCzR9wVM5lohEmPqWD",
    role: {
      am: "Բուժքույր",
    },
    category: StaffCategory.NursingStaff,
    visibility: true,
    personalInfo: {
      bio: "",
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
        {
          year: "2012 – 2015",
          degree: "12-ամյա միջնակարգ կրթություն",
          institution: "Հակոբ Կոջոյանի անվան կրթահամալիր",
        },
      ],
      memberships: [],
      hobbies: ["Սպորտ (Լող, հեծանիվ)", "Կաշեգործություն"],
      achievements: [],
      academicActivities: [],
      publications: [],
      languages: [],
    },
  },
  {
    id: 22,
    name: {
      am: "Անահիտ Իսաջանյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluga5tUTviePapmd4fjRNBXFSt1CEhgvq2b0rM",
    role: {
      am: "Մենեջեր",
    },
    category: StaffCategory.AdministrativeStaff,
    visibility: true,
    personalInfo: {
      bio: "",
      showBio: true,
      showExperience: true,
      showEducation: true,
      showPublications: false,
      showAchievements: false,
      showLanguages: false,
      showMemberships: true,
      showHobbies: false,
      showContact: true,
      showSocial: true,
      showSpecialties: true,
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
      publications: [],
      languages: [],
      academicActivities: [],
    },
  },
  {
    id: 23,
    name: {
      am: "Քրիստինա Մկրտչյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu7ZZJ3LYxTDGf3YpRJEC1nwk6tWHeNq5xSbUv",
    role: {
      am: "Ադմինիստրատոր",
    },
    category: StaffCategory.AdministrativeStaff,
    visibility: true,
    personalInfo: {
      bio: "",
      showBio: true,
      showExperience: true,
      showEducation: true,
      showPublications: false,
      showAchievements: false,
      showLanguages: false,
      showMemberships: true,
      showHobbies: false,
      showContact: true,
      showSocial: true,
      showSpecialties: true,
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
      publications: [],
      languages: [],
      academicActivities: [],
    },
  },
];
