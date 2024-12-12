import { useTranslations } from "next-intl";
// TODO change all stuff to staff
export const Menus = () => {
  const t = useTranslations("Menu");
  return [
    // {
    //   label: `${t("Home")}`,
    //   link: "/",
    // },
    {
      label: `${t("AboutUs")}`,
      link: "/about",
    },
    {
      label: `${t("Stuff")}`,
      link: "/stuff",
    },
    {
      label: `${t("Services")}`,
      link: "/services",
    },
    {
      label: `${t("Guide")}`,
      link: "#",
      submenu: [
        {
          label: `${t("DoctorGuide")}`,
          link: "/doctorGuide",
        },
        {
          label: `${t("PatientGuide")}`,
          link: "/patientGuide",
        },
      ],
    },
    {
      label: `${t("News")}`,
      link: "/news",
    },
    {
      label: `${t("Gallery.Gallery")}`,
      link: "/gallery",
      submenu: [
        {
          label: `${t("Gallery.Images")}`,
          link: "/gallery/images",
        },
        {
          label: `${t("Gallery.Videos")}`,
          link: "/gallery/videos",
        },
        {
          label: `${t("Podcasts")}`,
          link: "/podcasts",
        },
      ],
    },
    {
      label: `${t("ContactUs")}`,
      link: "/contact",
    },
  ];
};

export const CardioLabInfo = {
  en: {
    name: "CardioLab",
    address: "Tsitsernakaberd Highway, ½, 303 , Yerevan, Armenia 0082",
    phone: "+37491773025",
    email: "info@cardiolab.am",
  },
  am: {
    name: "CardioLab",
    address: "Ծիծեռնակաբերդի խճուղի ½, 303, Երևան, 0082, Հայաստան",
    phone: "+37491773025",
    email: "info@cardiolab.am",
  },
  ru: {
    name: "CardioLab",
    address: "Цицернакабердское шоссе, ½, 303, Ереван, 0082, Армения",
    phone: "+37491773025",
    email: "info@cardiolab.am",
  },
};

export const WorkingHours = {
  en: {
    Monday: "9:00 AM - 8:00 PM",
    Tuesday: "9:00 AM - 8:00 PM",
    Wednesday: "9:00 AM - 8:00 PM",
    Thursday: "9:00 AM - 8:00 PM",
    Friday: "9:00 AM - 8:00 PM",
    Saturday: "9:00 AM - 8:00 PM",
  },
  ru: {
    Monday: "09:00 - 20:00",
    Tuesday: "09:00 - 20:00",
    Wednesday: "09:00 - 20:00",
    Thursday: "09:00 - 20:00",
    Friday: "09:00 - 20:00",
    Saturday: "09:00 - 20:00",
  },
  am: {
    Monday: "09:00 - 20:00",
    Tuesday: "09:00 - 20:00",
    Wednesday: "09:00 - 20:00",
    Thursday: "09:00 - 20:00",
    Friday: "09:00 - 20:00",
    Saturday: "09:00 - 20:00",
  },
};
