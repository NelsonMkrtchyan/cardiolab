"use client";

import React from "react";
import { Link } from "~/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Card from "~/app/[locale]/services/_components/Card";
import { type LocaleT } from "~/types";
import { priceListData } from "~/constants/priceList";

const Services: React.FC = () => {
  const locale: string = useLocale();
  const localisedServices = priceListData[locale as LocaleT];
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{tGeneral("OurServices")}</h2>
          </div>

          <div className="row justify-content-center">
            {localisedServices.slice(0, 3).map((service) => {
              return (
                <>
                  <Card service={service} />
                </>
              );
            })}
          </div>
          <div>
            <div className="button-type-1">
              <Link href="/services">{tGeneral("SeeAll")}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
