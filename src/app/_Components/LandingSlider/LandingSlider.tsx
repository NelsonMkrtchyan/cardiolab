"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

type SliderDataItemType = {
  id: number;
  title?: string;
  description?: string;
  imageUrl: string;
  haveBlur?: boolean;
  link?: {
    buttonLinkUrl: string;
    buttonText: string;
  };
};

type SliderDataType = SliderDataItemType[];

const LandingSlider = () => {
  const tHeroSlider = useTranslations("HeroSlider");
  const tGeneral = useTranslations("General");

  const sliderData: SliderDataType = [
    {
      id: 1,
      imageUrl:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlun2PT6Vz8iXtIHULns6k3RoJDbzQgEqF9Vf7m",
    },
    {
      id: 2,
      title: tHeroSlider("priceTitle"),
      imageUrl:
        "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu1HrSPG2GN8X3FsiITKCzR9wVM5lohEmPqWDv",
      link: {
        buttonLinkUrl: "/patientGuide/pricelist",
        buttonText: tGeneral("KnowMore"),
      },
      haveBlur: true,
    },
  ];

  return (
    <>
      <div className="landing-section">
        <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="home-slider"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`slider-item`}>
                <div
                  className={`slider-item-background ${item.haveBlur ? "blur" : ""}`}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                <div className={`slider-item-content`}>
                  <div className={`d-table`}>
                    <div className="d-table-cell">
                      <div className="container">
                        <div className="slider-text">
                          {item.title && (
                            <h1 className="font-xl">{item.title}</h1>
                          )}
                          {item.description && (
                            <p className="font-xl">{item.description}</p>
                          )}

                          {item.link && (
                            <div className="common-btn">
                              <Link
                                href={item.link.buttonLinkUrl}
                                className="cmn-btn-right font-md"
                              >
                                {item.link.buttonText}
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LandingSlider;
