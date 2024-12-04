import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import PodcastsCards from "~/app/[locale]/podcasts/_components/PodcastsCards";
import { useTranslations } from "next-intl";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Podcasts")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Podcasts")}
        bgImage="/images/page-banner3.jpg"
      />
      <PodcastsCards />
    </>
  );
}
