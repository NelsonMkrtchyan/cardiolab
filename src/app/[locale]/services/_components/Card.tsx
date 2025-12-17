"use client";

import React from "react";
import { useLocale } from "next-intl";
// import Image from "next/image";
import ImageWithCache from "~/components/ImageWithCache";
import type { AppServiceType } from "~/types/services";
import { getLocalizedServiceValue } from "~/types/services";
import type { LocaleString } from "~/types/services";
// import { Link } from "~/i18n/routing";

interface CardProps {
  service: AppServiceType;
}

const Card = ({ service }: CardProps) => {
  const locale = useLocale();
  const {
    // id,
    name,
    description,
    // price,
    // icon,
  } = service;

  // Handle both LocaleString (from Sanity) and string (from API)
  const serviceName = typeof name === "string"
    ? name
    : getLocalizedServiceValue(name as LocaleString, locale as "am" | "en" | "ru");

  const serviceDescription = typeof description === "string"
    ? description
    : description
    ? getLocalizedServiceValue(description as LocaleString, locale as "am" | "en" | "ru")
    : "";

  return (
    <>
      <div className="col-sm-6 col-lg-3">
        <div className="service-item">
          {/*<Link href={`/services/details/${id}`}>*/}
          <div className="service-front">
            {/*{icon}*/}
            <ImageWithCache
              src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
              alt="CardioLab Logo"
              width={35}
              height={35}
              className="mb-4"
              cacheKey="cardiolab-service-logo"
              disableOptimization={false}
            />
            <p>{serviceName}</p>
            {serviceDescription && <p>{serviceDescription}</p>}
          </div>
          {/*</Link>*/}
        </div>
      </div>
    </>
  );
};

export default Card;
