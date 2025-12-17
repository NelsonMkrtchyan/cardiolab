"use client";

import React from "react";
import { type AppGalleryType } from "~/types/gallery";
import { useLocale } from "next-intl";
import { formattingDate } from "~/utils/workingWithDates";
import "dayjs/locale/ru";
import "dayjs/locale/hy-am";
import { Link } from "~/i18n/routing";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

interface FolderCardI {
  folder: AppGalleryType;
}

const FolderCard = ({ folder }: FolderCardI) => {
  const locale: string = useLocale();
  const { slug, title, publishedAt, coverImage, images } = folder;

  const bannerUrl = coverImage?.url ?? images?.[0]?.url ?? "";
  const date = publishedAt ? new Date(publishedAt) : new Date();

  return (
    <>
      <div className="col-sm-6 col-lg-4 gallery-card">
        <div className="gallery-card-content-container">
          <Link href={`/gallery/images/${slug}`}>
            <div className="gallery-item">
              <div className="gallery-text-wrapper">
                <h3>{title}</h3>
              </div>
              <div
                className="banner"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <ImageWithLoader
                  src={bannerUrl}
                  alt={title}
                  fill={true}
                  className="object-fit-cover"
                />
              </div>
              <div className="gallery-text-wrapper">
                <p>{formattingDate({ date, locale, format: "DD.MM.YYYY" })}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FolderCard;
