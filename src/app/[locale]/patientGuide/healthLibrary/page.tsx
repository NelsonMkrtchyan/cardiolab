"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import GuideDetails from "~/app/[locale]/doctorGuide/_components/GuideDetails";
import usePatientGuides from "~/app/[locale]/patientGuide/_hooks/usePatientGuides";

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
        bgImage="/images/page-banner4.jpg"
      />
      {currentPatientGuide && (
        <GuideDetails currentGuide={currentPatientGuide} />
      )}
    </>
  );
};

export default Page;
