import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import AboutContent from "~/app/[locale]/about/_components/AboutContent/AboutContent";
import { useTranslations } from "next-intl";
import OurExpertise from "~/app/_Disin_components/common/OurExpertise";
import Services from "~/app/_Disin_components/common/Services";

import ImagesDB from "~/constants/ImageDatabase.json";
import SatisfactionSurvey from "~/app/_Components/SatisfactionSurvey/SatisfactionSurvey";

export default function About() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("AboutUs")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("AboutUs")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      <AboutContent />

      <OurExpertise />

      <SatisfactionSurvey />

      <Services />
    </>
  );
}
