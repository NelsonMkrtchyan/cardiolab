import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import { useTranslations } from "next-intl";
import GalleryCards from "~/app/[locale]/gallery/_components/GalleryCards";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Gallery.Gallery")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Gallery.Gallery")}
        bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
      />
      <GalleryCards />
    </>
  );
}
