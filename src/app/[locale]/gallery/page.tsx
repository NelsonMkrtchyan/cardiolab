import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import GalleryFoldersCard from "~/app/[locale]/gallery/_components/GalleryFoldersCard";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Gallery")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Gallery")}
        bgImage="/images/page-banner3.jpg"
      />
      <GalleryFoldersCard />
    </>
  );
}
