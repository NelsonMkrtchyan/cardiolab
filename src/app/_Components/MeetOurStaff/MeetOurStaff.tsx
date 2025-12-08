"use client";

import { useTranslations } from "next-intl";
import Card from "~/app/[locale]/staff/_components/Card";
import React, { useEffect, useState } from "react";
import { Link } from "~/i18n/routing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { getAllStaff } from "~/lib/sanity/queries";

const MeetOurStaff = () => {
  const tGeneral = useTranslations("General");
  const [staff, setStaff] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const data = await getAllStaff();
        setStaff(data || []);
      } catch (error) {
        console.error("Error fetching staff:", error);
        setStaff([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

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
              {loading ? (
                <div className="text-center py-5">Loading...</div>
              ) : (
                staff
                  .filter((employee) => employee.visibility === true)
                  .map((employee) => (
                    <SwiperSlide key={employee._id || employee.id}>
                      <Card
                        employee={employee}
                        className={"landing-meet-our-staff"}
                      />
                    </SwiperSlide>
                  ))
              )}
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
