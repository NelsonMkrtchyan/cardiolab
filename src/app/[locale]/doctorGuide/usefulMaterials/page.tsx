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
        pageTitle={tMenu("UsefulMaterials")}
        homePageUrl="/doctorGuide"
        homePageText={tMenu("DoctorGuide")}
        activePageText={tMenu("UsefulMaterials")}
        bgImage="/images/page-banner1.jpg"
      />
      <ServiceDetailsContent />
    </>
  );
};

export default Page;
