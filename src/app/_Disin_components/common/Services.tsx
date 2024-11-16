"use client";

import React from "react";
import { Link } from "~/i18n/routing";
import { services } from "~/constants/services";
import { useLocale } from "next-intl";
import Card from "~/app/[locale]/services/_components/Card";

const Services: React.FC = () => {
  const locale: string = useLocale();
  const localisedServices = services[locale as "en" | "ru" | "am"];
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>

          <div className="row justify-content-center">
            {localisedServices.slice(0, 4).map((service) => {
              return (
                <>
                  <Card service={service} />
                </>
              );
            })}
          </div>
          <div>
            <div className="doctor-btn">
              <Link href="/services">See All</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
