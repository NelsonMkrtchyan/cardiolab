"use client";

import React from "react";
import { useParams } from "next/navigation";
import { type NextPage } from "next";
import Carousel from "~/app/[locale]/gallery/images/_components/Carousel";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";

const Page: NextPage = () => {
  const { imageId } = useParams();

  const { currentImageFolder } = useGallery();

  const currentPhoto = currentImageFolder?.list.find(
    (image) => image.id === Number(imageId),
  );

  return (
    <>
      {currentPhoto && (
        <Carousel index={currentPhoto.id} currentPhoto={currentPhoto} />
      )}
    </>
  );
};

export default Page;
