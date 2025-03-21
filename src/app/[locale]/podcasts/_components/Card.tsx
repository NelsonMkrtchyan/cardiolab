"use client";

import React, { useState } from "react";
import { type CardI } from "~/constants/podcasts";
import FsLightbox from "fslightbox-react";
import { formattingDate } from "~/utils/workingWithDates";
import { useLocale } from "next-intl";

const Card = ({ podcast }: CardI) => {
  const locale: string = useLocale();
  const { id, title, description, icon, url, posterUrl, date } = podcast;
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {url && <FsLightbox toggler={toggler} sources={[url]} />}
      <div
        className="col-sm-6 col-lg-4 podcast-card"
        onClick={() => setToggler(!toggler)}
      >
        <div className="podcast-card-content-container">
          <div className="podcast-item">
            <div className="podcast-front">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="video-area" style={{ backgroundImage: posterUrl }} />
          <div className="podcast-item">
            <div className="podcast-front">
              <p>{formattingDate({ date, locale })}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
