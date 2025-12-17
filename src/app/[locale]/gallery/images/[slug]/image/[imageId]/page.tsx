"use client";

import React from "react";
import { useParams } from "next/navigation";
import { type NextPage } from "next";
import Carousel from "~/app/[locale]/gallery/images/_components/Carousel";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";

const Page: NextPage = () => {
  const { imageId } = useParams();

  const { currentImageFolder } = useGallery();

  const images = currentImageFolder?.images ?? [];
  const imageIndex = Number(imageId) - 1;
  const currentImage = images[imageIndex];

  const currentPhoto = currentImage
    ? {
        id: Number(imageId),
        url: currentImage.url,
      }
    : null;

  return (
    <>
      {currentPhoto && (
        <Carousel index={imageIndex} currentPhoto={currentPhoto} />
      )}
    </>
  );
};

export default Page;
