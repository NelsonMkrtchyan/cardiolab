"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import GuideDetails from "~/app/[locale]/doctorGuide/_components/GuideDetails";
import usePatientGuides from "~/app/[locale]/patientGuide/_hooks/usePatientGuides";
import ImagesDB from "~/constants/ImageDatabase.json";

const Page = () => {
  const tMenu = useTranslations("Menu");
  const { currentPatientGuide } = usePatientGuides();

  return (
    <>
      <PageBanner
        pageTitle={tMenu("HealthLibrary")}
        homePageUrl="/patientGuide"
        homePageText={tMenu("PatientGuide")}
        activePageText={tMenu("HealthLibrary")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />
      {currentPatientGuide && (
        <GuideDetails currentGuide={currentPatientGuide} />
      )}
    </>
  );
};

export default Page;
