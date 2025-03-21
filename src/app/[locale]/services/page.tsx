import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import ServicesCards from "~/app/[locale]/services/_components/ServicesCards";
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
      <ServicesCards />
    </>
  );
}
