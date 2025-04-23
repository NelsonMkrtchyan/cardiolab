import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
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
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />
      <GalleryCards />
    </>
  );
}
