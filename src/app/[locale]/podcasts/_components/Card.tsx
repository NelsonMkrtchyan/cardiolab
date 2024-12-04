"use client";

import React, { useState } from "react";
import { type CardI } from "~/constants/podcasts";
import FsLightbox from "fslightbox-react";

const Card = ({ podcast }: CardI) => {
  const { id, title, description, icon, url, posterUrl } = podcast;
  console.log("url", url);
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
        </div>
      </div>
    </>
  );
};

export default Card;
