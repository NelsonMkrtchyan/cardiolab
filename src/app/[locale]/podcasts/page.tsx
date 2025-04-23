import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import PodcastsCards from "~/app/[locale]/podcasts/_components/PodcastsCards";
import { useTranslations } from "next-intl";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Podcasts")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Podcasts")}
        bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />
      <PodcastsCards />
    </>
  );
}
