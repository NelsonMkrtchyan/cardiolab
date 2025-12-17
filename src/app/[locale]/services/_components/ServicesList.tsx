"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import type { AppServiceType, ServiceCategoryType } from "~/types/services";
import { ServiceCategory } from "~/types/services";
import { Link } from "~/i18n/routing";
import { getAllServices } from "~/lib/sanity/queries";
import { getServiceDisplayName } from "~/types/services";

// Category order for consistent display
const categorizedServicesOrder: ServiceCategoryType[] = [
  ServiceCategory.Consultation,
  ServiceCategory.PreventiveScreening,
  ServiceCategory.DuplexScan,
  ServiceCategory.Ultrasound,
  ServiceCategory.CardiacCare,
];

const ServicesList = () => {
  const tService = useTranslations("Service");
  const tGeneral = useTranslations("General");
  const locale = useLocale() as "am" | "en" | "ru";
  const [services, setServices] = useState<AppServiceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setError(null);
        const data = await getAllServices();
        setServices(data || []);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load services";
        console.error("Error fetching services:", err);
        setError("Unable to load services. Please refresh the page.");
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Group services by category
  const servicesByCategory = categorizedServicesOrder.reduce<
    Record<ServiceCategory, AppServiceType[]>
  >(
    (
      acc: Record<ServiceCategory, AppServiceType[]>,
      category: ServiceCategory,
    ) => {
      acc[category] = services.filter(
        (service) =>
          service.category === category && !service.hideInServicesPage,
      );
      return acc;
    },
    {} as Record<ServiceCategory, AppServiceType[]>,
  );

  // Function to get category name - uses translation key
  const getCategoryName = (category: ServiceCategory): string => {
    return tService(category) || category;
  };

  const toggleCategory = (category: string) => {
    // If we're opening a new category (not closing the current one)
    if (openCategory !== category) {
      // Set the category first
      setOpenCategory(category);

      // Use requestAnimationFrame to ensure the DOM has updated before scrolling
      requestAnimationFrame(() => {
        // Find the accordion item that was just opened
        const accordionItem = document.querySelector(
          `.accordion-item[data-category="${category}"]`,
        );
        if (accordionItem) {
          // Get the position of the accordion item
          const rect = accordionItem.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          // Calculate position with offset to show the header
          const targetPosition = rect.top + scrollTop - 90;

          // Scroll to the calculated position with smooth behavior
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
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
        </div>

        {error && (
          <div
            style={{
              backgroundColor: "#f8d7da",
              color: "#721c24",
              padding: "15px 20px",
              borderRadius: "5px",
              marginBottom: "20px",
              border: "1px solid #f5c6cb",
            }}
          >
            {error}
          </div>
        )}

        <div className="services-accordion">
          {loading ? (
            <div className="py-5 text-center">Loading services...</div>
          ) : services.length === 0 ? (
            <div className="py-5 text-center">No services available</div>
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
                        {servicesByCategory[category]?.map((service) => (
                          <li
                            key={`service-${service.id}`}
                            className="service-item"
                          >
                            <div className="col-6">
                              <span className="service-name">
                                {getServiceDisplayName(service.name, locale)}
                              </span>
                            </div>

                            {service.doctors && service.doctors.length > 0 && (
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
                                      (doctor, index: number) => (
                                        <Link
                                          key={`doctor-${doctor.id}`}
                                          href={`/staff/details/${doctor.id}`}
                                        >
                                          {getServiceDisplayName(
                                            doctor.name,
                                            locale,
                                          )}
                                          {index <
                                            (service.doctors?.length ?? 0) -
                                              1 && ", "}
                                        </Link>
                                      ),
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
