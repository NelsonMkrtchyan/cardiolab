"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import useDoctorGuides from "~/app/[locale]/doctorGuide/_hooks/useDoctorGuides";
import GuideDetails from "~/app/[locale]/doctorGuide/_components/GuideDetails";

const Page = () => {
  const tMenu = useTranslations("Menu");

  const { currentDoctorGuide } = useDoctorGuides();
  return (
    <>
      <PageBanner
        pageTitle={tMenu("AccreditedTrainings")}
        homePageUrl="/doctorGuide"
        homePageText={tMenu("DoctorGuide")}
        activePageText={tMenu("AccreditedTrainings")}
        bgImage="/images/page-banner2.jpg"
      />
      {currentDoctorGuide && <GuideDetails currentGuide={currentDoctorGuide} />}
    </>
  );
};

export default Page;
