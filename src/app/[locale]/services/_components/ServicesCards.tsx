"use client";

import React from "react";
import Card from "~/app/[locale]/services/_components/Card";
import { useLocale } from "next-intl";
import { type LocaleT } from "~/types";
import { flatPriceListData } from "~/constants/priceList";

const ServicesCards: React.FC = () => {
  const locale: string = useLocale();
  const localisedPriceList = flatPriceListData[locale as LocaleT];

  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {localisedPriceList.map((service) => {
              return <Card key={service.id} service={service} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
