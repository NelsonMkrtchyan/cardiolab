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
  achievements: string[];
  publications: {
    title: string;
    journal: string;
    year: string;
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
  showPublications: false,
  showAchievements: false,
  showLanguages: false,
  showMemberships: true,
  showHobbies: true,
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
    "Excellence in Cardiology Award, Armenian Medical Association (2020)",
    "Best Research Paper, European Society of Cardiology (2018)",
    "Young Investigator Award, International Cardiology Conference (2015)",
    "Distinguished Service Award, Central Hospital (2014)",
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
    },
  },
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
    },
  },
  {
    id: 15,
    name: {
      am: "Աստղիկ Ավետիքսյանի",
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
    },
  },
];
