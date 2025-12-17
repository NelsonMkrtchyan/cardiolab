"use client";

import React, { useState, useEffect } from "react";
import Card from "~/app/[locale]/services/_components/Card";
import { useLocale, useTranslations } from "next-intl";
import type { AppServiceType, ServiceCategory } from "~/types/services";
import { getAllServices } from "~/lib/sanity/queries";
import { getLocalizedServiceValue } from "~/types/services";

// Category order for consistent display
const categorizedServicesOrder: ServiceCategory[] = [
  "consultation",
  "cardiac-care",
  "ultrasound",
  "duplex-scan",
  "preventive-screening",
];

const ServicesCards: React.FC = () => {
  const tService = useTranslations("Service");
  const locale: string = useLocale();
  const [services, setServices] = useState<AppServiceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        // Filter services that should be visible
        const visibleServices = (data || []).filter(
          (service: AppServiceType) => !service.hideInServicesPage
        );
        setServices(visibleServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="text-center py-5">Loading services...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {categorizedServicesOrder.map((category) => {
              const filteredServices = services.filter(
                (service) => service.category === category
              );
              if (filteredServices.length === 0) return null;

              return (
                <React.Fragment key={category}>
                  <div className="ptb-30 container">
                    <div className="section-title">
                      <h2>{tService(category)}</h2>
                    </div>
                  </div>

                  {filteredServices.map((service) => {
                    return (
                      <Card
                        key={`${category}-${service.id}`}
                        service={service}
                      />
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
