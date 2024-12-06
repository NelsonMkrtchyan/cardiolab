"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useLocale, useTranslations } from "next-intl";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";
import { getLocalisedName } from "~/utils/helpers";
import MediaCards from "~/app/[locale]/gallery/_components/MediaCards";

export default function Page() {
  const locale: string = useLocale();

  const tMenu = useTranslations("Menu");
  const { currentFolder } = useGallery();

  return (
    <>
      <PageBanner
        pageTitle={
          currentFolder?.name
            ? getLocalisedName({
                object: currentFolder.name,
                locale,
              })
            : tMenu("GalleryFolder")
        }
        homePageUrl="/gallery"
        homePageText={tMenu("Gallery")}
        activePageText={tMenu("GalleryFolder")}
        bgImage="/images/page-banner4.jpg"
      />

      {currentFolder && <MediaCards />}
    </>
  );
}
