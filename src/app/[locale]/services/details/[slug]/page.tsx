"use client";
import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import ServiceDetailsContent from "~/app/[locale]/services/_components/ServiceDetailsContent";
import { useRouter } from "~/i18n/routing";
import { useTranslations } from "next-intl";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");
  const router = useRouter();

  return (
    <>
      <PageBanner
        pageTitle={tMenu("ServiceDetails")}
        homePageUrl="/services"
        homePageText={tMenu("Services")}
        activePageText={tMenu("ServiceDetails")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      <ServiceDetailsContent />
    </>
  );
}
