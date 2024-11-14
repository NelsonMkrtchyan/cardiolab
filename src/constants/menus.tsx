import { useTranslations } from "next-intl";

export const Menus = () => {
  const t = useTranslations("Menu");
  return [
    {
      label: `${t("Home")}`,
      link: "/",
    },
    // {
    //   label: `${t("AboutUs")}`,
    //   link: "/aboutus",
    // },
    // {
    //   label: `${t("News")}`,
    //   link: "/news",
    // },
    // {
    //   label: `${t("Gallery")}`,
    //   link: "/gallery",
    // },
    // {
    //   label: `${t("OurStuff")}`,
    //   link: "/ourstuff",
    // },
    // {
    //   label: `${t("OurServices")}`,
    //   link: "/ourservices",
    // },
    // {
    //   label: `${t("PatientGuide")}`,
    //   link: "/patientguide",
    // },
    // {
    //   label: `${t("DoctorGuide")}`,
    //   link: "/doctorguide",
    // },
    // {
    //   label: `${t("ContactUs")}`,
    //   link: "/contactus",
    // },
  ];
};

export const CardioLabInfo = {
  name: "CardioLab",
  address: "Tsitsernakaberd Highway, ½, 303 , Yerevan, Armenia",
  phone: "+37491773025",
  email: "info@cardiolab.am",
};
