import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import ImagesDB from "~/constants/ImageDatabase.json";
import PodcastsCards from "./_components/PodcastsCards";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Podcasts")}
        homePageUrl="/gallery"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Podcasts")}
        bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
      />
      <PodcastsCards />
    </>
  );
}
