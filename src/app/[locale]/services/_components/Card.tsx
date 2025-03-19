"use client";

import React from "react";
import { type CardI } from "~/constants/services";
// import { Link } from "~/i18n/routing";

const Card = ({ service }: CardI) => {
  const {
    // id,
    title,
    description,
    icon,
  } = service;

  return (
    <>
      <div className="col-sm-6 col-lg-3">
        <div className="service-item">
          {/*<Link href={`/services/details/${id}`}>*/}
          <div className="service-front">
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          {/*</Link>*/}
        </div>
      </div>
    </>
  );
};

export default Card;
