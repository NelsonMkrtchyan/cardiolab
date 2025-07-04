"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import {
  type ServiceType,
  ServicesCategory,
  categorizedServicesOrder,
  priceListData,
} from "~/constants/priceList";
import type { LocaleT } from "~/types";
import { staff, type EmployeeType } from "~/constants/staff";
import { Link } from "~/i18n/routing";

const ServicesList = () => {
  const tService = useTranslations("Service");
  const tGeneral = useTranslations("General");
  const locale: string = useLocale();
  const localisedPriceList = priceListData[locale as LocaleT];
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Group services by category
  const servicesByCategory = categorizedServicesOrder.reduce<
    Record<string, ServiceType[]>
  >((acc: Record<string, ServiceType[]>, category: string) => {
    acc[category] = localisedPriceList.filter(
      (service: ServiceType) => service.category === category,
    );
    return acc;
  }, {});

  // Function to get category name from enum
  const getCategoryName = (category: ServicesCategory): string => {
    switch (category) {
      case ServicesCategory.Consultation:
        return tService(category) || "Consultations";
      case ServicesCategory.Ultrasound:
        return tService(category) || "Ultrasound";
      case ServicesCategory.DuplexScan:
        return tService(category) || "Duplex Scan";
      case ServicesCategory.CardiacCare:
        return tService(category) || "Cardiac Care";
      case ServicesCategory.PreventiveScreening:
        return tService(category) || "Preventive Screening";
      default:
        return String(category);
    }
  };

  const toggleCategory = (category: string) => {
    // If we're opening a new category (not closing the current one)
    if (openCategory !== category) {
      // Set the category first
      setOpenCategory(category);

      // Use setTimeout to ensure the DOM has updated before scrolling
      setTimeout(() => {
        // Find the accordion item that was just opened
        const accordionItem = document.querySelector(
          `.accordion-item[data-category="${category}"]`,
        );
        if (accordionItem) {
          // Get the position of the accordion item
          const rect = accordionItem.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          // Calculate position with offset to show the header (subtract 80px to show the header)
          const targetPosition = rect.top + scrollTop - 90;

          // Scroll to the calculated position with smooth behavior
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Just close the category if it's already open
      setOpenCategory(null);
    }
  };

  return (
    <div className="services-list-container">
      <div className="container">
        <div className="section-title">
          <h2>{tGeneral("OurServices") || "Our Services"}</h2>
          {/*<p>*/}
          {/*  {tService("servicesListDescription") ||*/}
          {/*    "Comprehensive cardiac care services for all your needs"}*/}
          {/*</p>*/}
        </div>

        <div className="services-accordion">
          {categorizedServicesOrder.map((category) => {
            const services =
              servicesByCategory[category]?.filter(
                (service) => !service.hideInServicesPage,
              ) ?? [];
            if (services.length === 0) return null;

            const isOpen = openCategory === category;
            // const isOpen = true;

            return (
              <div
                key={category}
                data-category={category}
                className={`accordion-item ${isOpen ? "active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleCategory(category)}
                >
                  <h3>{getCategoryName(category)}</h3>
                  <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
                </div>

                {isOpen && (
                  <div className="accordion-content">
                    <ul className="services-list">
                      {services.map((service: ServiceType) => (
                        <li key={service.id} className="service-item">
                          <span className="service-name">{service.name}</span>

                          {service.doctorsList &&
                            service.doctorsList.length > 0 && (
                              <div className="service-doctors col-6">
                                <div className="col-2 doctors-label">
                                  <span className="">
                                    {tGeneral("Doctors") || "Doctors"}:{" "}
                                  </span>
                                </div>
                                <div className="col-8 doctors-list">
                                  <span className="">
                                    {service.doctorsList?.map(
                                      (doctorId: number, index: number) => {
                                        const doctor = staff.find(
                                          (doc: EmployeeType) =>
                                            doc.id === doctorId &&
                                            doc.visibility,
                                        );
                                        if (!doctor) return null;

                                        return (
                                          <Link
                                            key={doctorId}
                                            href={`/staff/details/${doctor.id}`}
                                          >
                                            {doctor.name.am}
                                            {index <
                                              (service.doctorsList?.length ??
                                                0) -
                                                1 && ", "}
                                          </Link>
                                        );
                                      },
                                    )}
                                  </span>
                                </div>
                              </div>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
