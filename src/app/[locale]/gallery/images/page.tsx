import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import GalleryFoldersCard from "~/app/[locale]/gallery/images/_components/GalleryFoldersCard";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Gallery.Images")}
        homePageUrl="/gallery"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Images")}
        bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />
      <GalleryFoldersCard />
    </>
  );
}
