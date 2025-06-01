import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
// import ContactInfo from "~/app/[locale]/contact/_components/ContactInfo";
import { useTranslations } from "next-intl";
import GoogleMap from "~/app/[locale]/contact/_components/GoogleMap";
import ContactForm from "~/app/[locale]/contact/_components/ContactForm";
import ImagesDB from "~/constants/ImageDatabase.json";
import SatisfactionSurvey from "~/app/_Components/SatisfactionSurvey/SatisfactionSurvey";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("ContactUs")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("ContactUs")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      {/*<ContactInfo />*/}

      <ContactForm />

      <SatisfactionSurvey />

      <GoogleMap />
    </>
  );
}
