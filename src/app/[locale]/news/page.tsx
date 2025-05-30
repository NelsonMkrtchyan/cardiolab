import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import { useTranslations } from "next-intl";
import BlogGrid from "~/app/[locale]/news/_components/BlogGrid";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");
  return (
    <>
      <PageBanner
        pageTitle={tMenu("News")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("News")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      <BlogGrid />
    </>
  );
}
