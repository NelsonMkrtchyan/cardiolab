"use client";

import React from "react";
import Card from "~/app/[locale]/services/_components/Card";
import { useLocale, useTranslations } from "next-intl";
import { type LocaleT } from "~/types";
import { categorizedServicesOrder, priceListData } from "~/constants/priceList";

const ServicesCards: React.FC = () => {
  const tService = useTranslations("Service");
  const locale: string = useLocale();
  const localisedPriceList = priceListData[locale as LocaleT];
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {categorizedServicesOrder.map((category) => {
              const filteredServices = localisedPriceList.filter(
                (service) => service.category === category,
              );
              if (filteredServices.length === 0) return null;

              return (
                <>
                  <div className="ptb-30 container">
                    <div className="section-title">
                      <h2>{tService(category)}</h2>
                    </div>
                  </div>

                  {filteredServices.map((service) => {
                    return (
                      <>
                        <Card service={service} />
                      </>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
