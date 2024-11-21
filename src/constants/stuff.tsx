export interface employeeI {
  id: number;
  name: string;
  image: string;
  position: string;
}

export interface CardI {
  employee: employeeI;
}

interface StuffI {
  en: employeeI[];
  am: employeeI[];
  ru: employeeI[];
}

export const stuff: StuffI = {
  am: [
    {
      id: 1,
      name: "Հովհաննես Աբրահամյան",
      image: "/images/doctors/doctor1.jpg",
      position: "Ադմինիստրատոր",
    },
    {
      id: 2,
      name: "Ալիսա Սարգսյան",
      image: "/images/doctors/doctor2.jpg",
      position: "Ադմինիստրատոր",
    },
    {
      id: 3,
      name: "Միքայել Հովհաննիսյան",
      image: "/images/doctors/doctor3.jpg",
      position: "Կարդիոլոգ",
    },
    {
      id: 4,
      name: "Էմմա Պետրոսյան",
      image: "/images/doctors/doctor4.jpg",
      position: "Կարդիոլոգ",
    },
    {
      id: 5,
      name: "Անդրանիկ Մարտիրոսյան",
      image: "/images/doctors/doctor5.jpg",
      position: "Կարդիոլոգ",
    },
    {
      id: 6,
      name: "Սոֆիա Կարապետյան",
      image: "/images/doctors/doctor6.jpg",
      position: "Կարդիոլոգ",
    },
    {
      id: 7,
      name: "Ալեքսանդր Հովակիմյան",
      image: "/images/doctors/doctor7.jpg",
      position: "Կարդիոլոգ",
    },
    {
      id: 8,
      name: "Գևորգ Միքայելյան",
      image: "/images/doctors/doctor8.jpg",
      position: "Քույր",
    },
    {
      id: 9,
      name: "Մարիա Բաբայան",
      image: "/images/doctors/doctor9.jpg",
      position: "Քույր",
    },
    {
      id: 10,
      name: "Նարեկ Մարտիրոսյան",
      image: "/images/doctors/doctor1.jpg",
      position: "Քույր",
    },
    {
      id: 11,
      name: "Սիրանուշ Հարությունյան",
      image: "/images/doctors/doctor2.jpg",
      position: "Քույր",
    },
    {
      id: 12,
      name: "Էլիզա Հովհաննիսյան",
      image: "/images/doctors/doctor3.jpg",
      position: "Քույր",
    },
    {
      id: 13,
      name: "Գագիկ Վարդանյան",
      image: "/images/doctors/doctor4.jpg",
      position: "Հիմնադիր",
    },
    {
      id: 14,
      name: "Անահիտ Գրիգորյան",
      image: "/images/doctors/doctor5.jpg",
      position: "Հիմնադիր",
    },
  ],
  en: [
    {
      id: 1,
      name: "Hovhannes Abrahamyan",
      image: "/images/doctors/doctor1.jpg",
      position: "Admin",
    },
    {
      id: 2,
      name: "Alisa Sargsyan",
      image: "/images/doctors/doctor2.jpg",
      position: "Admin",
    },
    {
      id: 3,
      name: "Mikayel Hovhannisyan",
      image: "/images/doctors/doctor3.jpg",
      position: "Cardiologist",
    },
    {
      id: 4,
      name: "Emma Petrosyan",
      image: "/images/doctors/doctor4.jpg",
      position: "Cardiologist",
    },
    {
      id: 5,
      name: "Andranik Martirosyan",
      image: "/images/doctors/doctor5.jpg",
      position: "Cardiologist",
    },
    {
      id: 6,
      name: "Sofia Karapetyan",
      image: "/images/doctors/doctor6.jpg",
      position: "Cardiologist",
    },
    {
      id: 7,
      name: "Aleksandr Hovakimyan",
      image: "/images/doctors/doctor7.jpg",
      position: "Cardiologist",
    },
    {
      id: 8,
      name: "Gevorg Mikayelyan",
      image: "/images/doctors/doctor8.jpg",
      position: "Nurse",
    },
    {
      id: 9,
      name: "Maria Babayan",
      image: "/images/doctors/doctor9.jpg",
      position: "Nurse",
    },
    {
      id: 10,
      name: "Narek Martirosyan",
      image: "/images/doctors/doctor1.jpg",
      position: "Nurse",
    },
    {
      id: 11,
      name: "Siranush Harutyunyan",
      image: "/images/doctors/doctor2.jpg",
      position: "Nurse",
    },
    {
      id: 12,
      name: "Eliza Hovhannisyan",
      image: "/images/doctors/doctor3.jpg",
      position: "Nurse",
    },
    {
      id: 13,
      name: "Gagik Vardanyan",
      image: "/images/doctors/doctor4.jpg",
      position: "Founder",
    },
    {
      id: 14,
      name: "Anahit Grigoryan",
      image: "/images/doctors/doctor5.jpg",
      position: "Founder",
    },
  ],
  ru: [
    {
      id: 1,
      name: "Ованес Абраамян",
      image: "/images/doctors/doctor1.jpg",
      position: "Администратор",
    },
    {
      id: 2,
      name: "Алиса Саргсян",
      image: "/images/doctors/doctor2.jpg",
      position: "Администратор",
    },
    {
      id: 3,
      name: "Микаэл Ованисян",
      image: "/images/doctors/doctor3.jpg",
      position: "Кардиолог",
    },
    {
      id: 4,
      name: "Эмма Петросян",
      image: "/images/doctors/doctor4.jpg",
      position: "Кардиолог",
    },
    {
      id: 5,
      name: "Андраник Мартиросян",
      image: "/images/doctors/doctor5.jpg",
      position: "Кардиолог",
    },
    {
      id: 6,
      name: "София Карапетян",
      image: "/images/doctors/doctor6.jpg",
      position: "Кардиолог",
    },
    {
      id: 7,
      name: "Александр Овакимян",
      image: "/images/doctors/doctor7.jpg",
      position: "Кардиолог",
    },
    {
      id: 8,
      name: "Геворг Микаелян",
      image: "/images/doctors/doctor8.jpg",
      position: "Медсестра",
    },
    {
      id: 9,
      name: "Мария Бабаян",
      image: "/images/doctors/doctor9.jpg",
      position: "Медсестра",
    },
    {
      id: 10,
      name: "Нарек Мартиросян",
      image: "/images/doctors/doctor1.jpg",
      position: "Медсестра",
    },
    {
      id: 11,
      name: "Сирануш Арутюнян",
      image: "/images/doctors/doctor2.jpg",
      position: "Медсестра",
    },
    {
      id: 12,
      name: "Элиза Ованисян",
      image: "/images/doctors/doctor3.jpg",
      position: "Медсестра",
    },
    {
      id: 13,
      name: "Гагик Варданян",
      image: "/images/doctors/doctor4.jpg",
      position: "Основатель",
    },
    {
      id: 14,
      name: "Анахит Григорян",
      image: "/images/doctors/doctor5.jpg",
      position: "Основатель",
    },
  ],
};
