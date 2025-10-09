import { type LocaleString } from "~/constants/staff";

export enum ServicesCategory {
  Consultation = "consultation",
  DuplexScan = "duplexScan", // Մագիստրալ անոթների դուպլեքս հետազոտություն
  Ultrasound = "ultraSound", // Ուլտրաձայնային հետազոտություն
  CardiacCare = "cardiacCare", // Սրտային խնամք
  PreventiveScreening = "preventiveScreening", // Տարեկան կանխարգելիչ բուժ․ զննում
}

export type ServiceType = {
  id: number;
  // name: string;
  name: LocaleString;
  price: number;
  description?: string;
  category: ServicesCategory;
  doctorsList?: number[]; // List of doctor IDs associated with the service
  hideInServicesPage?: boolean; // Optional field to hide service in the services page
  hideInPriceListPage?: boolean; // Optional field to hide service in the priceList page
  doneByNurses?: boolean; // Optional field to show nurses as alist of doctors
};

export interface CardI {
  service: ServiceType;
}

interface PriceListI {
  en: ServiceType[];
  am: ServiceType[];
  ru: ServiceType[];
}

export const categorizedServicesOrder = [
  ServicesCategory.Consultation,
  ServicesCategory.CardiacCare,
  ServicesCategory.Ultrasound,
  ServicesCategory.DuplexScan,
  ServicesCategory.PreventiveScreening, // is not visible
];

const cardioDoctorsIds = [1, 3, 7, 25, 4, 24, 6, 8, 9];
const cardioDoctorsIdsConsultationTeam = [1, 3, 7, 25, 4, 24, 2, 6, 8, 9];
const nursesIds = [19, 27, 28];

// Armenian service names used for all languages
const services: ServiceType[] = [
  {
    id: 1,
    name: {
      am: "Էխոսրտագրություն մեծահասակի",
      en: "Adult Echocardiography",
    },
    price: 13000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 2,
    name: {
      am: "Էխոսրտագրություն մանկական",
      en: "Child Echocardiography",
    },
    price: 13000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [5],
  },
  {
    id: 3,
    name: {
      am: "Ֆետալ էխոՍԳ",
      en: "Fetal echocardiography",
    },
    price: 20000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [5],
  },
  {
    id: 4,
    name: {
      am: "Կոնտրաստ ԷխոՍԳ (bubble study)",
      en: "Contrast Echocardiography (bubble study)",
    },
    price: 25000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [5],
  },
  {
    id: 37,
    name: {
      am: "Մագիստրալ անոթների դուպլեքս հետազոտություն",
      en: "Duplex examination of major vessels",
    },
    price: 20000,
    description: "",
    category: ServicesCategory.DuplexScan,
    doctorsList: [15],
  },
  {
    id: 38,
    name: {
      am: "Ուլտրաձայնային հետազոտություն",
      en: "Ultrasound examination",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Ultrasound,
    doctorsList: [11, 14],
  },
  {
    id: 5,
    name: {
      am: "Սթրես էխոսրտագրություն",
      en: "Stress echocardiography",
    },
    price: 22000,
    description: "",
    category: ServicesCategory.CardiacCare,
    // doctorsList: [...nursesIds],
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 6,
    name: {
      am: "ԷՍԳ – 12Ա",
      en: "ECG – 12A",
    },
    price: 4000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...nursesIds],
    doneByNurses: true,
  },
  {
    id: 60,
    name: {
      am: "Սկլերոթերապիա",
      en: "Sclerotherapy",
    },
    price: 25000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [],
  },
  {
    id: 8,
    name: {
      am: "Հոլտեր քննություն 24 ժամ",
      en: "Holter exam 24 hours",
    },
    price: 22000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 9,
    name: {
      am: "Հոլտեր քննություն 48 ժամ",
      en: "Holter exam 48 hours",
    },
    price: 33000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 34,
    name: {
      am: "Հոլտեր քննություն մինչև 7 oր",
      en: "Holter exam up to 7 days",
    },
    price: 60000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 35,
    name: {
      am: "Հոլտեր քննություն մինչև 14 օր",
      en: "Holter exam up to 14 days",
    },
    price: 99000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 12,
    name: {
      am: "Հոլտեր քննություն մինչև մինչև 30 օր",
      en: "Holter exam up to 30 days",
    },
    price: 160000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 13,
    name: {
      am: "ԶՃ ամբուլատոր մոնիտորինգ 24 ժամ",
      en: "24-hour ambulatory cardiac monitoring",
    },
    price: 12000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 14,
    name: {
      am: "Սրտի ռիթմավար սարքերի քննություն",
      en: "Cardiac pacemaker examination",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [7],
  },
  {
    id: 15,
    name: {
      am: "Սրտային անբավարարության ամբուլատոր խնամք",
      en: "Outpatient care for heart failure",
    },
    price: 10000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [1, 3, 24],
  },
  {
    id: 16,
    name: {
      am: "Իմպլանտացվող սրտի մոնիտորի իմպլանտացիա",
      en: "Implantable cardiac monitor implantation",
    },
    price: 1200000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [],
  },
  {
    id: 39,
    name: {
      am: "Բժիշկ-մասնագետի խորհրդատվություն",
      en: "Consultation with a doctor",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [...cardioDoctorsIdsConsultationTeam],
  },
  {
    id: 41,
    name: {
      am: "Բժիշկ-մասնագետի հեռավար խորհրդատվություն",
      en: "Remote consultation with a doctor",
    },
    price: 30000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [],
  },
  {
    id: 29,
    name: {
      am: "Հոգեբանական խորհրդատվություն",
      en: "Psychological counseling",
    },
    price: 25000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [17],
  },
  {
    id: 30,
    name: {
      am: "ԷՍԳ, ԷխոՍԳ, սրտաբանի խորհրդատվություն",
      en: "ECG, Echocardiogram, cardiologist consultation",
    },
    price: 28000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIdsConsultationTeam],
  },
  {
    id: 32,
    name: {
      am: "Սթրես ԷխոՍԳ + սրտաբանի խորհրդատվություն",
      en: "Stress Echocardiography + cardiologist consultation",
    },
    price: 32000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 42,
    name: {
      am: "ԷՍԳ, ԷխոՍԳ, սրտաբանի խորհրդատվություն, 24ժ.Հոլտեր քննություն",
      en: "ECG, Echocardiogram, cardiologist consultation, 24-hour Holter exam",
    },
    price: 45000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIdsConsultationTeam],
  },
  {
    id: 43,
    name: {
      am: "Մագիստրալ անոթների դուպլեքս հետազոտություն (յուրաքանչյուր հաջորդ հավելյալ հատված)",
      en: "Duplex examination of the main vessels (each additional segment)",
    },
    price: 12000,
    description: "",
    category: ServicesCategory.DuplexScan,
    doctorsList: [15],
  },
  {
    id: 44,
    name: {
      am: "Արտագնա հոլտեր քննություն 24 ժամ",
      en: "Outpatient Holter exam 24 hours",
    },
    price: 35000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 45,
    name: {
      am: "Հոլտեր քննություն 24 ժամ  + սրտաբանի խորհրդատվություն",
      en: "Holter exam 24 hours + cardiologist consultation",
    },
    price: 32000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 46,
    name: {
      am: "Սթրես ԷՍԳ  + սրտաբանի խորհրդատվություն",
      en: "Stress ECG + cardiologist consultation",
    },
    price: 28000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 47,
    name: {
      am: "Ֆետալ էխոՍԳ + սրտաբանի խորհրդատվություն",
      en: "Fetal echocardiography + cardiologist consultation",
    },
    price: 30000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [5],
  },
  {
    id: 51,
    name: {
      am: "Կրկնակի հոգեբանական խորհրդատվություն",
      en: "Double psychological consultation",
    },
    price: 20000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [17],
    hideInServicesPage: true,
  },
  {
    id: 54,
    name: {
      am: "Հոլտեր քննություն 72 ժամ",
      en: "Holter exam 72 hours",
    },
    price: 45000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 55,
    name: {
      am: "Առողջ ապրելակերպի հերթական խորհրդատվություն",
      en: "Regular healthy lifestyle consultation",
    },
    price: 20000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [18],
  },
  {
    id: 56,
    name: {
      am: "Խորացված ԷխոՍԳ",
      en: "Deep Echocardiography",
    },
    price: 25000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 63,
    name: {
      am: "Մագիստրալ անոթների դուպլեքս հետազոտություն (4 հատված)",
      en: "Duplex examination of the main vessels (4 sections)",
    },
    price: 56000,
    description: "",
    category: ServicesCategory.DuplexScan,
    doctorsList: [15],
  },
  {
    id: 64,
    name: {
      am: "Ուլտրաձայնային հետազոտություն (2 հատված)",
      en: "Ultrasound examination (2 sections)",
    },
    price: 20000,
    description: "",
    category: ServicesCategory.Ultrasound,
    doctorsList: [11, 14],
  },
  // {
  //   id: 67,
  //   name: {
  //     am: "Տ․Հովակիմյան Բժիշկ-մասնագետի խորհրդատվություն ",
  //     en: "T. Hovakimyan Specialist consultation",
  //   },
  //   price: 32000,
  //   description: "",
  //   category: ServicesCategory.Consultation,
  //   doctorsList: [1],
  // },
  {
    id: 7,
    name: {
      am: "Սթրես ԷՍԳ",
      en: "Stress ECG",
    },
    price: 18000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [...cardioDoctorsIds],
  },
  {
    id: 66,
    name: {
      am: "Թարգմանված տեղեկանքի տրամադրում",
      en: "Providing a translated reference",
    },
    price: 30000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [],
  },
  {
    id: 62,
    name: {
      am: "Մագիստրալ անոթների դուպլեքս հետազոտություն (3 հատված)",
      en: "Duplex examination of the main vessels (3 sections)",
    },
    price: 44000,
    description: "",
    category: ServicesCategory.DuplexScan,
    doctorsList: [15],
  },
  {
    id: 57,
    name: {
      am: "Ուլտրաձայնային հետազոտություն (յուրաքանչյուր հաջորդ հավելյալ հատված)",
      en: "Ultrasound examination (each subsequent additional segment)",
    },
    price: 5000,
    description: "",
    category: ServicesCategory.Ultrasound,
    doctorsList: [11, 14],
  },
  {
    id: 65,
    name: {
      am: "Ուլտրաձայնային հետազոտություն (3 հատված)",
      en: "Ultrasound examination (3 sections)",
    },
    price: 25000,
    description: "",
    category: ServicesCategory.Ultrasound,
    doctorsList: [11, 14],
  },
  {
    id: 68,
    name: {
      am: "Տաթևիկ Հովակիմյան խորհրդատվություն",
      en: "Tatevik Hovakimyan Consulting",
    },
    price: 20000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1],
  },
  {
    id: 69,
    name: {
      am: "Արփինե Սիմոնյան խորհրդատվություն",
      en: "Arpine Simonyan Consulting",
    },
    price: 20000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [13],
  },
  {
    id: 70,
    name: {
      am: "Կատարինե Վարդանյան խորհրդատվություն",
      en: "Katarine Vardanyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [3],
  },
  {
    id: 71,
    name: {
      am: "Մարիամ Մինասյան խորհրդատվություն",
      en: "Mariam Minasyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [4],
  },
  {
    id: 72,
    name: {
      am: "Աննա Գևորգյան խորհրդատվություն",
      en: "Anna Gevorgyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [6],
  },
  {
    id: 73,
    name: {
      am: "Մարիամ Հովակիմյան խորհրդատվություն",
      en: "Mariam Hovakimyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [10],
  },
  {
    id: 74,
    name: {
      am: "Նադեժդա Իսկանդարյան խորհրդատվություն",
      en: "Nadezhda Iskandaryan consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [25],
  },
  {
    id: 75,
    name: {
      am: "Գևորգ Պետրոսյան խորհրդատվություն",
      en: "Gevorg Petrosyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [7],
  },
  {
    id: 76,
    name: {
      am: "Իզաբելլա Բարեկյան խորհրդատվություն",
      en: "Isabella Barekyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [9],
  },
  {
    id: 77,
    name: {
      am: "Մերի Պապիկյան խորհրդատվություն",
      en: "Mery Papikyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [24],
  },
  {
    id: 78,
    name: {
      am: "Տաթևիկ Սիմոնյան խորհրդատվություն",
      en: "Tatevik Simonyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [5],
  },
  {
    id: 79,
    name: {
      am: "Քնարիկ Բադեյան խորհրդատվություն",
      en: "Knarik Badeyan consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [11],
  },
  {
    id: 80,
    name: {
      am: "Անահիտ Ոսկանյան խորհրդատվություն",
      en: "Anahit Voskanyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [12],
  },
  {
    id: 81,
    name: {
      am: "Կարինե Մկրտչյան խորհրդատվություն",
      en: "Karine Mkrtchyan consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [14],
  },
  {
    id: 82,
    name: {
      am: "Աստղիկ Ավետիքյան խորհրդատվություն",
      en: "Astghik Avetikyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [15],
  },
  {
    id: 83,
    name: {
      am: "Աղունիկ Զաքարյան խորհրդատվություն",
      en: "Aghunik Zakaryan consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [16],
  },
  {
    id: 84,
    name: {
      am: "Արթուր Հակոբյան խորհրդատվություն",
      en: "Arthur Hakobyan Consulting",
    },
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [23],
  },
];

// Generate the price lists for each language using the same service names
export const priceListData: PriceListI = {
  en: services,
  am: services,
  ru: services,
};
