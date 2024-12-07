"use client";

import PageBanner from "~/app/_Disin_components/common/PageBanner";
import React from "react";
import { useTranslations } from "next-intl";
import DoctorGuideChapters from "~/app/[locale]/doctorGuide/_components/PatientGuideChapters";

const Page = () => {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("DoctorGuide")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("DoctorGuide")}
        bgImage="/images/page-banner1.jpg"
      />

      <DoctorGuideChapters />
    </>
  );
};

export default Page;
