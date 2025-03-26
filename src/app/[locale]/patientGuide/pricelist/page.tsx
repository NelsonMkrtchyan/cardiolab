"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import PriceList from "../_components/PriceList";

const Page = () => {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Pricelist")}
        homePageUrl="/patientGuide"
        homePageText={tMenu("PatientGuide")}
        activePageText={tMenu("Pricelist")}
        bgImage="/images/page-banner3.jpg"
      />
      <PriceList />
    </>
  );
};

export default Page;
