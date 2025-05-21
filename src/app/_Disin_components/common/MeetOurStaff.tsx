"use client";

import { useTranslations } from "next-intl";
import { staff } from "~/constants/staff";
import Card from "~/app/[locale]/staff/_components/Card";
import React from "react";
import { Link } from "~/i18n/routing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MeetOurStaff = () => {
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="doctors-area ptb-100 landing-section">
        <div className="container">
          <div className="section-title">
            <h2>{tGeneral("MeetOurStaff")}</h2>
          </div>

          <div className="row">
            <Swiper
              className="staff-slider"
              slidesPerView={1}
              spaceBetween={20}
              navigation={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                500: {
                  slidesPerView: 1.75,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1200: {
                  slidesPerView: 4.5,
                },
              }}
            >
              {staff
                .filter((employee) => employee.visibility)
                .map((employee) => (
                  <SwiperSlide key={employee.id}>
                    <Card employee={employee} className={""} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="button-type-1">
            <Link href="/staff">{tGeneral("SeeAll")}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurStaff;
