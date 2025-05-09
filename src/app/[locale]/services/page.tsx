import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import ServicesCards from "~/app/[locale]/services/_components/ServicesCards";
import { useTranslations } from "next-intl";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Services")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Services")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />
      <ServicesCards />
    </>
  );
}
