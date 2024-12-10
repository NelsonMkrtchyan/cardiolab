"use client";

import React from "react";
import { useParams } from "next/navigation";
import { gallery } from "~/constants/Gallery";
import { type NextPage } from "next";
import Carousel from "~/app/[locale]/gallery/images/_components/Carousel";

const Page: NextPage = () => {
  const { slug, imageId } = useParams();
  const galleryFolder = gallery.images.find(
    (folder) => folder.id === Number(slug),
  );
  const index = galleryFolder.images.findIndex(
    (obj) => obj.id === Number(imageId),
  );
  const currentPhoto = galleryFolder.images.find(
    (image) => image.id === Number(imageId),
  );

  return (
    <>
      <Carousel index={index} currentPhoto={currentPhoto} />
    </>
  );
};

export default Page;
