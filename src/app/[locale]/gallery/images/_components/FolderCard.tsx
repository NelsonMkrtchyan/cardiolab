"use client";

import React from "react";
import { type FolderCardI } from "~/constants/Gallery";
import { useLocale } from "next-intl";
import { formattingDate } from "~/utils/workingWithDates";
import { getLocalisedName } from "~/utils/helpers";

import "dayjs/locale/ru"; // Import the Russian locale
import "dayjs/locale/hy-am";
import { Link } from "~/i18n/routing";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

const FolderCard = ({ folder }: FolderCardI) => {
  const locale: string = useLocale();
  const { id, name, date, bannerUrl } = folder;

  return (
    <>
      <div className="col-sm-6 col-lg-4 gallery-card">
        <div className="gallery-card-content-container">
          <Link href={`/gallery/images/${id}`}>
            <div className="gallery-item">
              <div className="gallery-text-wrapper">
                <h3>{getLocalisedName({ object: name, locale })}</h3>
              </div>
              <div className="banner" style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px" }}>
                <ImageWithLoader
                  src={bannerUrl.replace('url(', '').replace(')', '').replace(/["']/g, '')}
                  alt={getLocalisedName({ object: name, locale })}
                  fill={true}
                  className="object-fit-cover"
                />
              </div>
              <div className="gallery-text-wrapper">
                <p>{formattingDate({ date, locale })}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FolderCard;
