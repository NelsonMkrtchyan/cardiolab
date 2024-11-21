import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import ContactInfo from "~/app/[locale]/contact/_components/ContactInfo";
import { useTranslations } from "next-intl";
import GoogleMap from "~/app/[locale]/contact/_components/GoogleMap";
import ContactForm from "~/app/[locale]/contact/_components/ContactForm";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("ContactUs")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("ContactUs")}
        bgImage="/images/page-banner3.jpg"
      />

      <ContactInfo />

      <ContactForm />

      <GoogleMap />
    </>
  );
}
