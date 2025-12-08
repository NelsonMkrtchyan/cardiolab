"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { ServicesCategory } from "~/constants/priceList";
import type { LocaleT } from "~/types";
import { Link } from "~/i18n/routing";
import { getAllServices } from "~/lib/sanity/queries";
import { getLocalizedValue } from "~/lib/sanity/utils";

const ServicesList = () => {
  const tService = useTranslations("Service");
  const tGeneral = useTranslations("General");
  const locale: string = useLocale();
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const categorizedServicesOrder = [
    ServicesCategory.Consultation,
    ServicesCategory.CardiacCare,
    ServicesCategory.Ultrasound,
    ServicesCategory.DuplexScan,
    ServicesCategory.PreventiveScreening,
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        setServices(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Group services by category
  const servicesByCategory = categorizedServicesOrder.reduce<Record<string, any[]>>(
    (acc: Record<string, any[]>, category: string) => {
      acc[category] = services.filter(
        (service: any) => service.category === category && !service.hideInServicesPage
      );
      return acc;
    },
    {}
  );

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
          {loading ? (
            <div className="text-center py-5">Loading services...</div>
          ) : (
            categorizedServicesOrder.map((category) => {
              const categoryServices = servicesByCategory[category] ?? [];
              if (categoryServices.length === 0) return null;

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
                      {servicesByCategory[category]?.map((service: any) => (
                        <li key={service._id || service.id} className="service-item">
                          <div className="col-6">
                            <span className="service-name">
                              {getLocalizedValue(service.name, locale as LocaleT)}
                            </span>
                          </div>

                          {service.doctors &&
                            service.doctors.length > 0 && (
                              <div className="service-doctors col-6">
                                <div className="col-2 doctors-label">
                                  <span className="">
                                    {service.doneByNurses
                                      ? tGeneral("Nurses")
                                      : tGeneral("Doctors") || "Doctors"}
                                    :{" "}
                                  </span>
                                </div>
                                <div className="col-8 doctors-list">
                                  <span className="">
                                    {service.doctors?.map(
                                      (doctor: any, index: number) => {
                                        if (!doctor || !doctor.visibility) return null;

                                        return (
                                          <Link
                                            key={doctor._id || doctor.id}
                                            href={`/staff/details/${doctor.id}`}
                                          >
                                            {getLocalizedValue(doctor.name, locale as LocaleT)}
                                            {index < service.doctors.length - 1 && ", "}
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
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
