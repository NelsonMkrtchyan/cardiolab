"use client";

import PageBanner from "~/app/_Disin_components/common/PageBanner";
import React from "react";
import { useTranslations } from "next-intl";
import DoctorGuideCards from "~/app/[locale]/doctorGuide/_components/DoctorGuideCards";
import ImagesDB from "~/constants/ImageDatabase.json";

const Page = () => {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("DoctorGuide")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("DoctorGuide")}
        bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      <DoctorGuideCards />
    </>
  );
};

export default Page;
