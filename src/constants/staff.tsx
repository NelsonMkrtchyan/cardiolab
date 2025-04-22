export type LocaleString = {
  am: string;
  en?: string;
  ru?: string;
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlubYgYkMldCU4c8A1oViQtsIJW2aZEXeySMgu3",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu2Fagk13aYOs6XAhJVHKowrlz1WfdjyPxt0Ic",
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
    visibility: true,
  },
  {
    id: 4,
    name: {
      am: "Մարիամ Մինասյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluxRiCLFfVspCYkb9tWP0X6eLDhnRHOl7fTjaE",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluLUcM1UFM9GPald3WK8xTLcn5eompzqNkuiFI",
    role: {
      am: "Մանկական Եվ Պերինատալ Սրտաբան",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluYgysYQo17ZsjS0g8pKl2JFLv4rURaVyuX3wt",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluuGPZnJcGiQfWnFY4hBNrq8zcsHID6ePwJvag",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluEdASraJSpZQ36u72Hw8kvD5PiIMdXj9xVnB0",
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
    visibility: true,
  },
  {
    id: 10,
    name: {
      am: "Մարիամ Հովակիմյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluMxGKMRSmxf0AaeIb7tJwXUHG2sKPOWnoQLik",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui7rlk8UMdgQAzE8HpcawsFuGDr9USml2KXOR",
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
    visibility: true,
  },
  {
    id: 13,
    name: {
      am: "Արփինե Սիմոնյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu1zx6nI2GN8X3FsiITKCzR9wVM5lohEmPqWDv",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluX1HaqkOa6TkeElYqHKS8hzy4uf7mr9tC0MBv",
    role: {
      am: "Բժիշկ-Ռադիոլոգ",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
  },
  {
    id: 15,
    name: {
      am: "Ասղտիկ Ավետիքյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluq8n8oBlhOjyngHXWhEmI6MSGorCe32TBAusL",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluhRKhXws9fbejvdio1cKYPT0D5OHW2CzGgBFZ",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluRij2QmpwtAKyZqujExl659riehkFnU7WadXQ",
    role: {
      am: "Հոգեբան",
    },
    category: StaffCategory.MedicalStaff,
    visibility: true,
  },
  {
    id: 18,
    name: {
      am: "Մոնիկա Մկրտչյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluSPS720nEW7pyXzGrTZQb21kmdgPfAOJ8h3NC",
    role: {
      am: "Բուժքույր",
    },
    category: StaffCategory.NursingStaff,
    visibility: true,
  },
  {
    id: 19,
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
    id: 24,
    name: {
      am: "Գայանե Բաղդասարյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlupG8vuW69E0NFskLoCO7QfyXM4AIan2bKlp6J",
    role: {
      am: "Առողջության և Առողջ Ապրելակերպի Մասնագետ",
    },
    category: StaffCategory.AdministrativeStaff,
    visibility: true,
  },
  {
    id: 20,
    name: {
      am: "Քնարիկ Առաքելյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluuWuZA3cGiQfWnFY4hBNrq8zcsHID6ePwJvag",
    role: {
      am: "Հասարակայնության Հետ Կապերի և Հաղորդակցության Պատասխանատու",
    },
    category: StaffCategory.AdministrativeStaff,
    visibility: true,
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
    visibility: true,
  },
  {
    id: 22,
    name: {
      am: "Անահիտ Իսաջանյան",
    },
    image:
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluJBBuhMgHJqI5EuVZFjgRGzykmXKNTw4WcSeQ",
    role: {
      am: "Ադմինիստրատոր",
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
      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu2m54Bt3aYOs6XAhJVHKowrlz1WfdjyPxt0Ic",
    role: {
      am: "Ադմինիստրատոր",
    },
    category: StaffCategory.AdministrativeStaff,
    visibility: true,
  },
];
