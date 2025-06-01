"use client";

import BlueCard from "~/app/_Components/cards/BlueCard";
import type React from "react";
import { useTranslations } from "next-intl";
import { IoIosImages } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";

const GalleryCards = () => {
  const tMenu = useTranslations("Menu");
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="blue-card container">
          <div className="blue-card-item">
            <div className="row">
              <BlueCard
                icon={<IoIosImages className="icon largest-icon-size" />}
                path={"/gallery/images"}
                title={tMenu("Gallery.Images")}
                description={""}
              />

              <BlueCard
                icon={<MdOndemandVideo className="icon largest-icon-size" />}
                path={"/gallery/podcasts"}
                title={tMenu("Podcasts")}
                description={""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCards;
