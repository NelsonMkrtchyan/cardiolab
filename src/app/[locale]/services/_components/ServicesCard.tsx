"use client";

import React from "react";
import Card from "~/app/[locale]/services/_components/Card";
import { services } from "~/constants/services";
import { useLocale } from "next-intl";

const ServicesCard: React.FC = () => {
  const locale: string = useLocale();
  const localisedServices = services[locale as "en" | "ru" | "am"];
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {localisedServices.map((service) => {
              return (
                <>
                  <Card service={service} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
