"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useLocale, useTranslations } from "next-intl";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";
import { getLocalisedName } from "~/utils/helpers";
import MediaCards from "~/app/[locale]/gallery/images/_components/MediaCards";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const locale: string = useLocale();

  const tMenu = useTranslations("Menu");
  const { currentImageFolders } = useGallery();

  return (
    <>
      <PageBanner
        pageTitle={
          currentImageFolders?.name
            ? getLocalisedName({
                object: currentImageFolders.name,
                locale,
              })
            : tMenu("Gallery.Folder")
        }
        homePageUrl="/gallery/images"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Folder")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      {currentImageFolders && <MediaCards />}
    </>
  );
}
