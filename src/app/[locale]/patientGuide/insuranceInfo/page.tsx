"use client";

import ServiceDetailsContent from "~/app/[locale]/services/_components/ServiceDetailsContent";
import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";

const Page = () => {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("InsuranceInformation")}
        homePageUrl="/patientGuide"
        homePageText={tMenu("PatientGuide")}
        activePageText={tMenu("InsuranceInformation")}
        bgImage="/images/page-banner4.jpg"
      />
      <ServiceDetailsContent />
    </>
  );
};

export default Page;
