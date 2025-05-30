import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import { useTranslations } from "next-intl";
import ImagesDB from "~/constants/ImageDatabase.json";
import PodcastsCards from "~/app/[locale]/gallery/podcasts/_components/PodcastsCards";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Gallery.Videos")}
        homePageUrl="/gallery"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Videos")}
        bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />
      <PodcastsCards />
    </>
  );
}
