"use client";

import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import React from "react";
import { useTranslations } from "next-intl";
import FaqSection from "~/app/_Disin_components/common/FaqSection";
import PatientGuideCards from "~/app/[locale]/patientGuide/_components/PatientGuideCards";
import ImagesDB from "~/constants/ImageDatabase.json";

const Page = () => {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("PatientGuide")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("PatientGuide")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      <PatientGuideCards />

      <FaqSection />
    </>
  );
};

export default Page;
