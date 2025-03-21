"use client";

import PageBanner from "~/app/_Disin_components/common/PageBanner";
import React from "react";
import { useTranslations } from "next-intl";
import FaqSection from "~/app/_Disin_components/common/FaqSection";
import PatientGuideCards from "~/app/[locale]/patientGuide/_components/PatientGuideCards";

const Page = () => {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("PatientGuide")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("PatientGuide")}
        bgImage="/images/page-banner2.jpg"
      />

      <PatientGuideCards />

      <FaqSection />
    </>
  );
};

export default Page;
