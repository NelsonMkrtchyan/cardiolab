export enum ServicesCategory {
  Consultation = "consultation",
  HolterMonitoring = "holterMonitoring", // Հոլտեր քննություն
  Echocardiography = "echocardiography", // Էխոսրտագրություն (including stress)
  RhythmDeviceCheck = "rhythmDeviceCheck", // Սրտի ռիթմավար սարքերի քննություն
  DuplexScan = "duplexScan", // Մագիստրալ անոթների դուպլեքս հետազոտություն
  Ultrasound = "ultraSound", // Ուլտրաձայնային հետազոտություն
  CardiacCare = "cardiacCare", // Սրտային խնամք
  PreventiveScreening = "preventiveScreening", // Տարեկան կանխարգելիչ բուժ․ զննում
  Implantation = "implantation", // Իմպլանտացիա
}

export type ServiceType = {
  id: number;
  name: string;
  price: number;
  description?: string;
  category: ServicesCategory;
  doctorsList?: number[]; // List of doctor IDs associated with the service
  hideInServicesPage?: boolean; // Optional field to hide service in the services page
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
  ServicesCategory.Echocardiography,
  ServicesCategory.HolterMonitoring,
  ServicesCategory.Ultrasound,
  ServicesCategory.DuplexScan,
  ServicesCategory.RhythmDeviceCheck,
  ServicesCategory.CardiacCare,
  ServicesCategory.PreventiveScreening,
  ServicesCategory.Implantation,
];

// Armenian service names used for all languages
const services: ServiceType[] = [
  {
    id: 34,
    name: "Սրտաբանի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1],
  },
  {
    id: 35,
    name: "Սրտաբան-առիթմոլոգի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2],
  },
  {
    id: 36,
    name: "Մանկական սրտաբանի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5],
  },
  {
    id: 37,
    name: "Ինվազիվ մանկական սրտաբանի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 38,
    name: "Սրտային անբավարարության մասնագետի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5],
  },
  {
    id: 39,
    name: "Աղեստամոքսաբանի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
  },
  {
    id: 40,
    name: "Ներզատաբանի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
  },
  {
    id: 41,
    name: "Նյարդաբանի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 42,
    name: "Թերապևտի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 43,
    name: "Անոթային վիրաբույժի խորհրդատվություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 14,
    name: "Հոգեբանական խորհրդատվություն",
    price: 25000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 15,
    name: "Հոգեբանական կրկնակի խորհրդատվություն",
    price: 20000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    hideInServicesPage: true,
  },
  {
    id: 1,
    name: "Առողջ ապրելակերպի մասնագետի խորհրդատվություն",
    price: 20000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  // ######### ######### ######### ######### ######### ######### ######### #########
  {
    id: 9,
    name: "ԷՍԳ, ԷխոՍԳ, սրտաբանի խորհրդատվություն",
    price: 28000,
    description: "",
    category: ServicesCategory.Echocardiography,
    hideInServicesPage: true,
  },
  {
    id: 8,
    name: "ԷՍԳ – 12Ա",
    price: 3600,
    description: "",
    category: ServicesCategory.Echocardiography,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 7,
    name: "Էխոսրտագրություն մեծահասակի",
    price: 13000,
    description: "",
    category: ServicesCategory.Echocardiography,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 6,
    name: "Էխոսրտագրություն մանկական",
    price: 13000,
    description: "",
    category: ServicesCategory.Echocardiography,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 32,
    name: "Ֆետալ էխոՍԳ",
    price: 20000,
    description: "",
    category: ServicesCategory.Echocardiography,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 33,
    name: "Ֆետալ էխոՍԳ + սրտաբանի խորհրդատվություն",
    price: 30000,
    description: "",
    category: ServicesCategory.Echocardiography,
    hideInServicesPage: true,
  },
  {
    id: 13,
    name: "Կոնտրաստ ԷխոՍԳ (bubble study)",
    price: 25000,
    description: "",
    category: ServicesCategory.Echocardiography,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 12,
    name: "Խորացված ԷխոՍԳ",
    price: 25000,
    description: "",
    category: ServicesCategory.Echocardiography,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 28,
    name: "Սթրես ԷՍԳ",
    price: 18000,
    description: "",
    category: ServicesCategory.Echocardiography,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 47,
    name: "Սթրես ԷխոՍԳ",
    price: 22000,
    description: "",
    category: ServicesCategory.Echocardiography,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },

  {
    id: 26,
    name: "Սթրես ԷխոՍԳ + սրտաբանի խորհրդատվություն",
    price: 32000,
    description: "",
    category: ServicesCategory.Echocardiography,
    hideInServicesPage: true,
  },
  {
    id: 29,
    name: "Սթրես ԷՍԳ + սրտաբանի խորհրդատվություն",
    price: 28000,
    description: "",
    category: ServicesCategory.Echocardiography,
    hideInServicesPage: true,
  },
  // #################################################################################
  {
    id: 16,
    name: "Հոլտեր քննություն 24 ժամ",
    price: 22000,
    description: "",
    category: ServicesCategory.HolterMonitoring,
    hideInServicesPage: true,
  },
  {
    id: 18,
    name: "Հոլտեր քննություն 48 ժամ",
    price: 33000,
    description: "",
    category: ServicesCategory.HolterMonitoring,
    hideInServicesPage: true,
  },
  {
    id: 19,
    name: "Հոլտեր քննություն 72 ժամ",
    price: 45000,
    description: "",
    category: ServicesCategory.HolterMonitoring,
    hideInServicesPage: true,
  },
  {
    id: 21,
    name: "Հոլտեր քննություն մինչեւ 7 oր",
    price: 60000,
    description: "",
    category: ServicesCategory.HolterMonitoring,
    hideInServicesPage: true,
  },
  {
    id: 20,
    name: "Հոլտեր քննություն մինչեւ 14 օր",
    price: 99000,
    description: "",
    category: ServicesCategory.HolterMonitoring,
    hideInServicesPage: true,
  },
  {
    id: 22,
    name: "Հոլտեր քննություն մինչեւ մինչեւ 30 օր",
    price: 160000,
    description: "",
    category: ServicesCategory.HolterMonitoring,
    hideInServicesPage: true,
  },
  {
    id: 17,
    name: "Հոլտեր քննություն 24 ժամ + սրտաբանի խորհրդատվություն",
    price: 32000,
    description: "",
    category: ServicesCategory.HolterMonitoring,
    hideInServicesPage: true,
  },
  // #################################################################################
  {
    id: 5,
    name: "ԶՃ ամբուլատոր մոնիտորինգ 24 ժամ",
    price: 12000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 31,
    name: "Սրտի ռիթմավար սարքերի քննություն",
    price: 12000,
    description: "",
    category: ServicesCategory.RhythmDeviceCheck,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 25,
    name: "Ուլտրաձայնային հետազոտություն",
    price: 15000,
    description: "",
    category: ServicesCategory.Ultrasound,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 48,
    name: "Ուլտրաձայնային հետազոտություն (յուրաքանչյուր հաջորդ հավելյալ հատված)",
    price: 12000,
    description: "",
    category: ServicesCategory.Ultrasound,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 23,
    name: "Մագիստրալ անոթների դուպլեքս հետազոտություն(1 հատված)",
    price: 20000,
    description: "",
    category: ServicesCategory.DuplexScan,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 24,
    name: "Մագիստրալ անոթների դուպլեքս հետազոտություն (յուրաքանչյուր հաջորդ հավելյալ հատված)",
    price: 12000,
    description: "",
    category: ServicesCategory.DuplexScan,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 51,
    name: "Սրտային անբավարարության ամբուլատոր խնամք (օրավարձային)",
    price: 40000,
    description: "",
    category: ServicesCategory.CardiacCare,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 4,
    name: "Բժիշկ-մասնագետի հեռավար խորհրդատվություն",
    price: 30000,
    description: "",
    category: ServicesCategory.Consultation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    name: "Արտագնա հոլտեր քննություն 24 ժամ",
    price: 35000,
    description: "",
    category: ServicesCategory.HolterMonitoring,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 52,
    name: "Տարեկան կանխարգելիչ բուժ․ զննում",
    price: 50000,
    description: "",
    category: ServicesCategory.PreventiveScreening,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 11,
    name: "Իմպլանտացվող սրտի մոնիտորի իմպլանտացիա",
    price: 1200000,
    description: "",
    category: ServicesCategory.Implantation,
    doctorsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  // #################################################################################
];

// Generate the price lists for each language using the same service names
export const priceListData: PriceListI = {
  en: services,
  am: services,
  ru: services,
};
