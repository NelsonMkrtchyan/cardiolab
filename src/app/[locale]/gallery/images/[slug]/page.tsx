"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useLocale, useTranslations } from "next-intl";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";
import { getLocalisedName } from "~/utils/helpers";
import MediaCards from "~/app/[locale]/gallery/images/_components/MediaCards";

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
        bgImage="/images/page-banner4.jpg"
      />

      {currentImageFolders && <MediaCards />}
    </>
  );
}
