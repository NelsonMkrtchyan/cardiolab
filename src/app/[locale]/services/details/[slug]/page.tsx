"use client";
import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import ServiceDetailsContent from "~/app/[locale]/services/_components/ServiceDetailsContent";
import { useRouter } from "~/i18n/routing";
import { useTranslations } from "next-intl";

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
        bgImage="/images/page-banner2.jpg"
      />

      <ServiceDetailsContent />
    </>
  );
}
