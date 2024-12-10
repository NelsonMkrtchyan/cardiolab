"use client";

import PageBanner from "~/app/_Disin_components/common/PageBanner";
import React from "react";
import { useTranslations } from "next-intl";
import DoctorGuideCards from "~/app/[locale]/doctorGuide/_components/DoctorGuideCards";

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

      <DoctorGuideCards />
    </>
  );
};

export default Page;
