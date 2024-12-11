import { useTranslations } from "next-intl";

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
      label: `${t("ContactUs")}`,
      link: "/contact",
    },
  ];
};

export const CardioLabInfo = {
  name: "CardioLab",
  address: "Tsitsernakaberd Highway, ½, 303 , Yerevan, Armenia",
  phone: "+37491773025",
  email: "info@cardiolab.am",
};
