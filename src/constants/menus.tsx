import { useTranslations } from "next-intl";
// TODO change all staff to staff
export const Menus = () => {
  const tMenu = useTranslations("Menu");
  return [
    // {
    //   label: `${tMenu("Home")}`,
    //   link: "/",
    // },
    {
      label: `${tMenu("AboutUs")}`,
      link: "/about",
    },
    {
      label: `${tMenu("Staff")}`,
      link: "/staff",
    },
    {
      label: `${tMenu("Services")}`,
      link: "/services",
    },
    {
      label: `${tMenu("Pricelist")}`,
      link: "/patientGuide/pricelist",
    },
    // {
    //   label: `${tMenu("Guide")}`,
    //   link: "#",
    //   submenu: [
    //     {
    //       label: `${tMenu("DoctorGuide")}`,
    //       link: "/doctorGuide",
    //     },
    //     {
    //       label: `${tMenu("PatientGuide")}`,
    //       link: "/patientGuide",
    //     },
    //   ],
    // },
    // {
    //   label: `${tMenu("News")}`,
    //   link: "/news",
    // },
    {
      label: `${tMenu("Gallery.Gallery")}`,
      link: "/gallery",
      submenu: [
        {
          label: `${tMenu("Gallery.Images")}`,
          link: "/gallery/images",
        },
        // {
        //   label: `${tMenu("Gallery.Videos")}`,
        //   link: "/gallery/videos",
        // },
        {
          label: `${tMenu("Gallery.Podcasts")}`,
          link: "/gallery/podcasts",
        },
      ],
    },
    {
      label: `${tMenu("ContactUs")}`,
      link: "/contact",
    },
  ];
};

export const CardioLabInfo = {
  en: {
    name: "CardioLab",
    address: "Tsitsernakaberd Highway, ½, 303 , Yerevan, Armenia 0082",
    phone: ["+374 11991180", "+374 33991188", "+374 44991188"],
    email: "info@cardiolab.am",
  },
  am: {
    name: "CardioLab",
    address: "Ծիծեռնակաբերդի խճուղի ½, 303, Երևան, 0082, Հայաստան",
    phone: ["+374 11991180", "+374 33991188", "+374 44991188"],
    email: "info@cardiolab.am",
  },
  ru: {
    name: "CardioLab",
    address: "Цицернакабердское шоссе, ½, 303, Ереван, 0082, Армения",
    phone: ["+374 11991180", "+374 33991188", "+374 44991188"],
    email: "info@cardiolab.am",
  },
};

export type WorkingHoursType = Record<
  string,
  {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  }
>;

export const WorkingHours: WorkingHoursType = {
  en: {
    Monday: "9:00 AM - 7:00 PM",
    Tuesday: "9:00 AM - 7:00 PM",
    Wednesday: "9:00 AM - 7:00 PM",
    Thursday: "9:00 AM - 7:00 PM",
    Friday: "9:00 AM - 7:00 PM",
    Saturday: "9:00 AM - 5:00 PM",
    Sunday: "Non Working Day",
  },
  ru: {
    Monday: "09:00 - 19:00",
    Tuesday: "09:00 - 19:00",
    Wednesday: "09:00 - 19:00",
    Thursday: "09:00 - 19:00",
    Friday: "09:00 - 19:00",
    Saturday: "09:00 - 17:00",
    Sunday: "Выходной день",
  },
  am: {
    Monday: "09:00 - 19:00",
    Tuesday: "09:00 - 19:00",
    Wednesday: "09:00 - 19:00",
    Thursday: "09:00 - 19:00",
    Friday: "09:00 - 19:00",
    Saturday: "09:00 - 17:00",
    Sunday: "Հանգստյան օր",
  },
};
