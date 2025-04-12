export interface ServiceI {
  id: number;
  name: string;
  price: number;
}

interface FlatPriceListI {
  en: ServiceI[];
  am: ServiceI[];
  ru: ServiceI[];
}

// Armenian service names used for all languages, based on PDF content
const services: ServiceI[] = [
  { id: 1, name: "Էխոսրտագրություն մեծահասակի", price: 13000 },
  { id: 2, name: "Էխոսրտագրություն մանկական", price: 13000 },
  { id: 3, name: "Ֆետալ էխոՍԳ", price: 20000 },
  { id: 4, name: "Կոնտրաստ ԷխոՍԳ (bubble study)", price: 25000 },
  {
    id: 5,
    name: "Մագիստրալ անոթների դուպլեքս հետազոտություն(1 հատված)",
    price: 20000,
  },
  {
    id: 6,
    name: "Մագիստրալ անոթների դուպլեքս հետազոտություն (յուրաքանչյուր հաջորդ հավելյալ հատված)",
    price: 12000,
  },
  { id: 7, name: "Ուլտրաձայնային հետազոտություն", price: 15000 },
  { id: 8, name: "Սթրես էխոսրտագրություն", price: 22000 },
  { id: 9, name: "ԷՍԳ – 12Ա ", price: 4000 },
  { id: 10, name: "Սթրես ԷՍԳ", price: 18000 },
  { id: 11, name: "Հոլտեր քննություն 24 ժամ", price: 22000 },
  { id: 12, name: "Հոլտեր քննություն 48 ժամ", price: 33000 },
  { id: 13, name: "Հոլտեր քննություն մինչև 7 oր", price: 60000 },
  { id: 14, name: "Հոլտեր քննություն մինչև 14 օր", price: 99000 },
  { id: 15, name: "Հոլտեր քննություն մինչև 30 օր", price: 160000 },
  { id: 16, name: "Արտագնա հոլտեր քննություն 24 ժամ", price: 35000 },
  { id: 17, name: "ԶՃ ամբուլատոր մոնիտորինգ 24 ժամ", price: 12000 },
  { id: 18, name: "Սրտի ռիթմավար սարքերի քննություն", price: 12000 },
  { id: 19, name: "Սրտային անբավարարության ամբուլատոր խնամք", price: 10000 },
  { id: 20, name: "Իմպլանտացվող սրտի մոնիտորի իմպլանտացիա", price: 1200000 },
  { id: 21, name: "Բժիշկ-մասնագետի խորհրդատվություն", price: 15000 },
  { id: 22, name: "Բժիշկ-մասնագետի հեռավար խորհրդատվություն", price: 30000 },
  { id: 23, name: "ԷՍԳ, ԷխոՍԳ, սրտաբանի խորհրդատվություն", price: 28000 },
  {
    id: 24,
    name: "Հոլտեր քննություն 24 ժամ + սրտաբանի խորհրդատվություն",
    price: 32000,
  },
  { id: 25, name: "Սթրես ԷխոՍԳ + սրտաբանի խորհրդատվություն", price: 32000 },
  { id: 26, name: "Սթրես ԷՍԳ + սրտաբանի խորհրդատվություն", price: 28000 },
  { id: 27, name: "Ֆետալ ԷխոՍԳ + սրտաբանի խորհրդատվություն", price: 30000 },
  {
    id: 28,
    name: "ԷՍԳ, ԷխոՍԳ, սրտաբանի խորհրդատվություն, 24 ժամ Հոլտեր քննություն",
    price: 45000,
  },
  { id: 29, name: "Հոգեբանական խորհրդատվություն", price: 30000 },
];

// Generate the price lists for each language using the same service names
export const flatPriceListData: FlatPriceListI = {
  en: services.map((service) => ({
    id: service.id,
    name: service.name,
    price: service.price,
  })),
  am: services.map((service) => ({
    id: service.id,
    name: service.name,
    price: service.price,
  })),
  ru: services.map((service) => ({
    id: service.id,
    name: service.name,
    price: service.price,
  })),
};
