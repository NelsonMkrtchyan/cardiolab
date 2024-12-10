import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import GalleryFoldersCard from "~/app/[locale]/gallery/images/_components/GalleryFoldersCard";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Gallery.Images")}
        homePageUrl="/gallery"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Images")}
        bgImage="/images/page-banner3.jpg"
      />
      <GalleryFoldersCard />
    </>
  );
}
