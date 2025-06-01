"use client";

import React from "react";
import Image from "next/image";
import { type CardI } from "~/constants/priceList";
// import { Link } from "~/i18n/routing";

const Card = ({ service }: CardI) => {
  const {
    // id,
    name,
    description,
    // price,
    // icon,
  } = service;

  return (
    <>
      <div className="col-sm-6 col-lg-3">
        <div className="service-item">
          {/*<Link href={`/services/details/${id}`}>*/}
          <div className="service-front">
            {/*{icon}*/}
            <Image
              src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
              alt="CardioLab Logo"
              width={35}
              height={35}
              className="mb-4"
            />
            <p>{name}</p>
            <p>{description}</p>
          </div>
          {/*</Link>*/}
        </div>
      </div>
    </>
  );
};

export default Card;
