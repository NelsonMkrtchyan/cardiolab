import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import PodcastsCards from "~/app/[locale]/podcasts/_components/PodcastsCards";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Gallery.Videos")}
        homePageUrl="/gallery"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Videos")}
        bgImage="/images/page-banner3.jpg"
      />
      <PodcastsCards />
    </>
  );
}
