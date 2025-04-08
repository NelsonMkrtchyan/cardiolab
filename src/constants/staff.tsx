export interface employeeI {
  id: number;
  name: string;
  image: string;
  position: string;
}

export interface CardI {
  employee: employeeI;
  disabled?: boolean;
}

interface StaffI {
  en: employeeI[];
  am: employeeI[];
  ru: employeeI[];
}

export const staff: StaffI = {
  am: [
    {
      id: 1,
      name: "Տաթևիկ Հովակիմյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlubYgYkMldCU4c8A1oViQtsIJW2aZEXeySMgu3",
      position: "Սրտաբան-Առիթմոլոգ",
    },
    {
      id: 2,
      name: "Կարեն Զոհրաբյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu2Fagk13aYOs6XAhJVHKowrlz1WfdjyPxt0Ic",
      position: "Մանկական Ինտերվենցիոն Սրտաբան",
    },
    {
      id: 3,
      name: "Կատարինե Վարդանյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu015eaHB3uh8TEZLPqWjlAOFybHiDawcvdgUp",
      position: "Ինտենսիվ Սրտաբան",
    },
    {
      id: 4,
      name: "Մարիամ Մինասյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluxRiCLFfVspCYkb9tWP0X6eLDhnRHOl7fTjaE",
      position: "Սրտաբան, Էխո-Սգ Մասնագետ, Սրտի Մռտ Մասնագետ",
    },
    {
      id: 5,
      name: "Տաթևիկ Սիմոնյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluLUcM1UFM9GPald3WK8xTLcn5eompzqNkuiFI",
      position: "Մանկական Եվ Պերինատալ Սրտաբան",
    },
    {
      id: 6,
      name: "Անահիտ Գևորգյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluYgysYQo17ZsjS0g8pKl2JFLv4rURaVyuX3wt",
      position: "Սրտաբան",
    },
    {
      id: 7,
      name: "Գևորգ Պետրոսյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluuGPZnJcGiQfWnFY4hBNrq8zcsHID6ePwJvag",
      position: "Սրտաբան",
    },
    {
      id: 8,
      name: "Տաթևիկ Գաբրիելյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluEdASraJSpZQ36u72Hw8kvD5PiIMdXj9xVnB0",
      position: "Սրտաբան-Առիթմոլոգ",
    },
    {
      id: 9,
      name: "Իզաբելլա Բարեկյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluv7GAuykBOredpWR2N9YyhZbqVn4KCwD15mIt",
      position: "Սրտաբան",
    },
    {
      id: 10,
      name: "Մարիամ Հովակիմյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluMxGKMRSmxf0AaeIb7tJwXUHG2sKPOWnoQLik",
      position: "Սրտաբան",
    },
    {
      id: 11,
      name: "Քնարիկ Բադեյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui7rlk8UMdgQAzE8HpcawsFuGDr9USml2KXOR",
      position: "Ներզատաբան",
    },
    {
      id: 12,
      name: "Անահիտ Ոսկանյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu24lCbw3aYOs6XAhJVHKowrlz1WfdjyPxt0Ic",
      position: "Նյարդաբան",
    },
    {
      id: 13,
      name: "Արփինե Սիմոնյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu1zx6nI2GN8X3FsiITKCzR9wVM5lohEmPqWDv",
      position: "Թերապևտ, Գաստրոէնտերոլոգ",
    },
    {
      id: 14,
      name: "Կարինե Մկրտչյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluX1HaqkOa6TkeElYqHKS8hzy4uf7mr9tC0MBv",
      position: "Բժիշկ-Ռադիոլոգ",
    },
    {
      id: 15,
      name: "Ասղտիկ Ավետիքյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluq8n8oBlhOjyngHXWhEmI6MSGorCe32TBAusL",
      position: "Ռադիոլոգ-Դուպլեքսի Մասնագետ",
    },
    {
      id: 16,
      name: "Աղունիկ Զաքարյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluhRKhXws9fbejvdio1cKYPT0D5OHW2CzGgBFZ",
      position: "Անոթաբան",
    },
    {
      id: 17,
      name: "Թամարա Սիմոնյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluRij2QmpwtAKyZqujExl659riehkFnU7WadXQ",
      position: "Հոգեբան",
    },
    {
      id: 18,
      name: "Մոնիկա Մկրտչյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluSPS720nEW7pyXzGrTZQb21kmdgPfAOJ8h3NC",
      position: "Բուժքույր",
    },
    {
      id: 19,
      name: "Քնարիկ Զաքարյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu17fAqMV2GN8X3FsiITKCzR9wVM5lohEmPqWD",
      position: "Բուժքույր",
    },
    {
      id: 20,
      name: "Քնարիկ Առաքելյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluuWuZA3cGiQfWnFY4hBNrq8zcsHID6ePwJvag",
      position: "Հասարակայնության Հետ Կապերի Եվ Հաղորդակցության Պատասխանատու",
    },
    {
      id: 21,
      name: "Մարիաննա Հովհաննիսյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu7Wff0hxTDGf3YpRJEC1nwk6tWHeNq5xSbUvu",
      position: "Դիզայներ",
    },
    {
      id: 22,
      name: "Անահիտ Իսաջանյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluJBBuhMgHJqI5EuVZFjgRGzykmXKNTw4WcSeQ",
      position: "Ադմինիստրատոր",
    },
    {
      id: 23,
      name: "Քրիստինա Մկրտչյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu2m54Bt3aYOs6XAhJVHKowrlz1WfdjyPxt0Ic",
      position: "Ադմինիստրատոր",
    },
    {
      id: 24,
      name: "Հրաչյա Թումանյան",
      image:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluhQAJC9s9fbejvdio1cKYPT0D5OHW2CzGgBFZ",
      position: "Մենեջեր",
    },
  ],
  en: [
    {
      id: 1,
      name: "Hovhannes Abrahamyan",
      image: "/images/doctors/doctor1.jpg",
      position: "Admin",
    },
  ],
  ru: [
    {
      id: 1,
      name: "Ованес Абраамян",
      image: "/images/doctors/doctor1.jpg",
      position: "Администратор",
    },
  ],
};
