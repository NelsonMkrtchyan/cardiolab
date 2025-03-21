import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import GalleryCards from "~/app/[locale]/gallery/_components/GalleryCards";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Gallery.Gallery")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Gallery.Gallery")}
        bgImage="/images/page-banner3.jpg"
      />
      <GalleryCards />
    </>
  );
}
