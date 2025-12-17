"use client";

import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import { useTranslations } from "next-intl";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";
import MediaCards from "~/app/[locale]/gallery/images/_components/MediaCards";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");
  const { currentImageFolder, loading } = useGallery();

  if (loading) {
    return (
      <div className="container pt-100 pb-70">
        <p className="text-center">Loading gallery...</p>
      </div>
    );
  }

  if (!currentImageFolder) {
    return (
      <div className="container pt-100 pb-70">
        <p className="text-center">Gallery not found.</p>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        pageTitle={currentImageFolder.title}
        homePageUrl="/gallery/images"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Folder")}
        bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      <MediaCards folder={currentImageFolder} />
    </>
  );
}
