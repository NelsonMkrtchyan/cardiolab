"use client";

import ServiceDetailsContent from "~/app/[locale]/services/_components/ServiceDetailsContent";
import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import { useTranslations } from "next-intl";
import ImagesDB from "~/constants/ImageDatabase.json";

const Page = () => {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("InsuranceInformation")}
        homePageUrl="/patientGuide"
        homePageText={tMenu("PatientGuide")}
        activePageText={tMenu("InsuranceInformation")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />
      <ServiceDetailsContent />
    </>
  );
};

export default Page;
