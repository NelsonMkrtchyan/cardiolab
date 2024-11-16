import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import ServicesCard from "~/app/[locale]/services/_components/ServicesCard";
import { useTranslations } from "next-intl";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Services")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Services")}
        bgImage="/images/page-banner3.jpg"
      />
      <ServicesCard />
    </>
  );
}
