"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import type { AppServiceType, ServiceCategoryType } from "~/types/services";
import { ServiceCategory } from "~/types/services";
import { getAllServices } from "~/lib/sanity/queries";

// Category order for consistent display
const categorizedServicesOrder: ServiceCategoryType[] = [
  ServiceCategory.Consultation,
  ServiceCategory.PreventiveScreening,
  ServiceCategory.DuplexScan,
  ServiceCategory.Ultrasound,
  ServiceCategory.CardiacCare,
];

type ServicesSectionProps = {
  variant?: "light" | "dark";
  ctaLink?: string;
  showSignature?: boolean;
  autoplayDelay?: number;
};

const ServicesSection = ({
  variant = "light",
  ctaLink = "/services",
  showSignature = true,
  autoplayDelay = 3000,
}: ServicesSectionProps) => {
  const tGeneral = useTranslations("General");
  const tService = useTranslations("Service");
  const locale: string = useLocale();
  const [services, setServices] = useState<AppServiceType[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Get unique categories from services
  const categories = Array.from(
    new Set(services.map((service) => service.category)),
  );

  // Ensure categories follow the defined order
  const sortedCategories = categorizedServicesOrder.filter((cat) =>
    categories.includes(cat),
  );

  const serviceCategories = sortedCategories.map((category, index) => {
    return {
      id: index,
      title: tService(category),
    };
  });

  return (
    <section className={`services-section ${variant}`}>
      <div className="container">
        <div className="section-title">
          <h2>{tGeneral("OurServices")}</h2>
        </div>

        <div className="services-swiper-container">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // navigation={true}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="services-swiper"
          >
            {serviceCategories.map((category) => (
              <SwiperSlide key={category.id}>
                <Link href={ctaLink}>
                  <div className="service-category-card">
                    <div className="icon-container">
                      <Image
                        src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
                        alt="CardioLab Logo"
                        width={35}
                        height={35}
                      />
                    </div>
                    <h3>{category.title}</h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {showSignature && (
          <div className="signature-section">
            <p className="signature-text">{tGeneral("Slogan")}</p>
          </div>
        )}

        <div className="cta-container button-type-1">
          <Link href={ctaLink} className="view-all-btn">
            {tGeneral("SeeAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
