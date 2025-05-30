"use client";

import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import { useTranslations } from "next-intl";
import GuideDetails from "~/app/[locale]/doctorGuide/_components/GuideDetails";
import useDoctorGuides from "~/app/[locale]/doctorGuide/_hooks/useDoctorGuides";
import ImagesDB from "~/constants/ImageDatabase.json";

const Page = () => {
  const tMenu = useTranslations("Menu");
  const { currentDoctorGuide } = useDoctorGuides();

  return (
    <>
      <PageBanner
        pageTitle={tMenu("JobOpenings")}
        homePageUrl="/doctorGuide"
        homePageText={tMenu("DoctorGuide")}
        activePageText={tMenu("JobOpenings")}
        bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />
      {currentDoctorGuide && <GuideDetails currentGuide={currentDoctorGuide} />}
    </>
  );
};

export default Page;
