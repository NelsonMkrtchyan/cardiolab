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
import React from "react";
import { priceListData } from "~/constants/priceList";
import type { LocaleT } from "~/types";

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
  const localisedPriceList = priceListData[locale as LocaleT];

  const categories = Array.from(
    new Set(localisedPriceList.map((service) => service.category)),
  );

  const serviceCategories = categories.map((category, index) => {
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
