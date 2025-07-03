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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu015eaHB3uh8TEZLPqWjlAOFybHiDawcvdgUp",
    role: {
      am: "Ինտենսիվ Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
    personalInfo: mockPersonalInfo,
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
      name: "Karine Mkrtchyan",
      role: "Sonographer",
      image: "", // From image CV, not provided
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
