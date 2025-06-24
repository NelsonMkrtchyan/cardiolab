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

export type PersonalInfoType = {
  description: LocaleString;
}; // will be implemented after the details page is done

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
    visibility: false,
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
    visibility: false,
  },
  {
    id: 10,
    name: {
      am: "Մարիամ Հովակիմյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluM6kftgSmxf0AaeIb7tJwXUHG2sKPOWnoQLik",
    role: {
      am: "Սրտաբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
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
    visibility: false,
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
    visibility: false,
  },
  {
    id: 21,
    name: {
      am: "Մարիաննա Հովհաննիսյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu7Wff0hxTDGf3YpRJEC1nwk6tWHeNq5xSbUvu",
    role: {
      am: "Դիզայներ",
    },
    category: StaffCategory.AdministrativeStaff,
    visibility: false,
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
  },
];
