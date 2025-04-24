"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useLocale, useTranslations } from "next-intl";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";
import MediaCards from "~/app/[locale]/gallery/images/_components/MediaCards";
import ImagesDB from "~/constants/ImageDatabase.json";
import { type LocaleT } from "~/types";

export default function Page() {
  const locale: string = useLocale();

  const tMenu = useTranslations("Menu");
  const { currentImageFolder } = useGallery();

  return (
    <>
      <PageBanner
        pageTitle={currentImageFolder?.name[locale as LocaleT] as string}
        homePageUrl="/gallery/images"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Folder")}
        bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      {currentImageFolder && <MediaCards folder={currentImageFolder} />}
    </>
  );
}
