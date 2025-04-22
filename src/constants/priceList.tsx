export type ServiceType = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

export interface CardI {
  service: ServiceType;
}

interface PriceListI {
  en: ServiceType[];
  am: ServiceType[];
  ru: ServiceType[];
}

// Armenian service names used for all languages
const services: ServiceType[] = [
  {
    id: 1,
    name: "Առողջ ապրելակերպի խորհրդատվություն",
    price: 20000,
    description: "",
  },
  {
    id: 2,
    name: "Արտագնա հոլտեր քննություն 24 ժամ",
    price: 35000,
    description: "",
  },
  {
    id: 3,
    name: "Բժիշկ-մասնագետի խորհրդատվություն",
    price: 15000,
    description: "",
  },
  {
    id: 4,
    name: "Բժիշկ-մասնագետի հեռավար խորհրդատվություն",
    price: 30000,
    description: "",
  },
  {
    id: 5,
    name: "ԶՃ ամբուլատոր մոնիտորինգ 24 ժամ",
    price: 10800,
    description: "",
  },
  {
    id: 6,
    name: "Էխոսրտագրություն մանկական",
    price: 11700,
    description: "",
  },
  {
    id: 7,
    name: "Էխոսրտագրություն մեծահասակի",
    price: 13000,
    description: "",
  },
  {
    id: 8,
    name: "ԷՍԳ – 12Ա",
    price: 3600,
    description: "",
  },
  {
    id: 9,
    name: "ԷՍԳ, ԷխոՍԳ, սրտաբանի խորհրդատվություն",
    price: 28000,
    description: "",
  },
  {
    id: 10,
    name: "ԷՍԳ, ԷխոՍԳ, սրտաբանի խորհրդատվություն, 24ժ.Հոլտեր քննություն",
    price: 45000,
    description: "",
  },
  {
    id: 11,
    name: "Իմպլանտացվող սրտի մոնիտորի իմպլանտացիա",
    price: 1200000,
    description: "",
  },
  {
    id: 12,
    name: "Խորացված ԷխոՍԳ",
    price: 25000,
    description: "",
  },
  {
    id: 13,
    name: "Կոնտրաստ ԷխոՍԳ (bubble study)",
    price: 25000,
    description: "",
  },
  {
    id: 14,
    name: "Կրկնակի հոգեբանական խորհրդատվություն",
    price: 20000,
    description: "",
  },
  {
    id: 15,
    name: "Հոգեբանական խորհրդատվություն",
    price: 25000,
    description: "",
  },
  {
    id: 16,
    name: "Հոլտեր քննություն 24 ժամ",
    price: 25000,
    description: "",
  },
  {
    id: 17,
    name: "Հոլտեր քննություն 24 ժամ + սրտաբանի խորհրդատվություն",
    price: 32000,
    description: "",
  },
  {
    id: 18,
    name: "Հոլտեր քննություն 48 ժամ",
    price: 29700,
    description: "",
  },
  {
    id: 19,
    name: "Հոլտեր քննություն 72 ժամ",
    price: 45000,
    description: "",
  },
  {
    id: 20,
    name: "Հոլտեր քննություն մինչեւ 14 օր",
    price: 99000,
    description: "",
  },
  {
    id: 21,
    name: "Հոլտեր քննություն մինչեւ 7 oր",
    price: 60000,
    description: "",
  },
  {
    id: 22,
    name: "Հոլտեր քննություն մինչեւ մինչեւ 30 օր",
    price: 160000,
    description: "",
  },
  {
    id: 23,
    name: "Մագիստրալ անոթների դուպլեքս հետազոտություն",
    price: 18000,
    description: "",
  },
  {
    id: 24,
    name: "Մագիստրալ անոթների դուպլեքս հետազոտություն(յուրաքանչյուր հաջորդ հավելյալ հատված)",
    price: 12000,
  },
  {
    id: 25,
    name: "Ուլտրաձայնային հետազոտություն",
    price: 15000,
    description: "",
  },
  {
    id: 26,
    name: "Սթրես ԷխոՍԳ + սրտաբանի խորհրդատվություն",
    price: 32000,
    description: "",
  },
  {
    id: 27,
    name: "Սթրես էխոսրտագրություն",
    price: 22000,
    description: "",
  },
  {
    id: 28,
    name: "Սթրես ԷՍԳ",
    price: 18000,
    description: "",
  },
  {
    id: 29,
    name: "Սթրես ԷՍԳ + սրտաբանի խորհրդատվություն",
    price: 28000,
    description: "",
  },
  {
    id: 30,
    name: "Սրտային անբավարարության ամբուլատոր խնամք",
    price: 10000,
    description: "",
  },
  {
    id: 31,
    name: "Սրտի ռիթմավար սարքերի քննություն",
    price: 12000,
    description: "",
  },
  {
    id: 32,
    name: "Ֆետալ էխոՍԳ",
    price: 20000,
    description: "",
  },
  {
    id: 33,
    name: "Ֆետալ էխոՍԳ + սրտաբանի խորհրդատվություն",
    price: 30000,
    description: "",
  },
];

// Generate the price lists for each language using the same service names
export const priceListData: PriceListI = {
  en: services,
  am: services,
  ru: services,
};
