"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";

const HeroSlider = () => {
  const t = useTranslations("HeroSlider");
  const tAbout = useTranslations("About");

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="home-slider"
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      {/*<Image*/}
                      {/*  src="/images/home-one/home-slider1.png"*/}
                      {/*  alt="Shape"*/}
                      {/*  width={730}*/}
                      {/*  height={500}*/}
                      {/*/>*/}
                    </div>

                    <h1>{t("descriptionOne")}</h1>
                    <p>{tAbout("Mission")}</p>

                    <div className="common-btn">
                      {/*<Link href="/appointment">Get Appointment</Link>*/}
                      {/*<Link href="/about" className="cmn-btn-right">*/}
                      {/*  Learn More*/}
                      {/*</Link>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/*<SwiperSlide>*/}
        {/*  <div*/}
        {/*    className="slider-item"*/}
        {/*    style={{*/}
        {/*      backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <div className="d-table">*/}
        {/*      <div className="d-table-cell">*/}
        {/*        <div className="container">*/}
        {/*          <div className="slider-text">*/}
        {/*            <div className="slider-shape-two">*/}
        {/*              <Image*/}
        {/*                src="/images/home-one/home-slider2.png"*/}
        {/*                alt="Shape"*/}
        {/*                width={730}*/}
        {/*                height={500}*/}
        {/*              />*/}
        {/*            </div>*/}
        {/*            <h1>Caring Health is Important Than All</h1>*/}
        {/*            <p>*/}
        {/*              Lorem ipsum dolor sit amet, consectetur adipiscing elit,*/}
        {/*              sed do eiusmod tempor incididunt ut labore et dolore magna*/}
        {/*              aliqua. Quis ipsum suspendisse ultrices gravida.*/}
        {/*            </p>*/}

        {/*            <div className="common-btn">*/}
        {/*              /!*<Link href="/appointment">Get Appointment</Link>*!/*/}
        {/*              /!*<Link href="/about" className="cmn-btn-right">*!/*/}
        {/*              /!*  Learn More*!/*/}
        {/*              /!*</Link>*!/*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</SwiperSlide>*/}

        {/*<SwiperSlide>*/}
        {/*  <div*/}
        {/*    className="slider-item"*/}
        {/*    style={{*/}
        {/*      backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <div className="d-table">*/}
        {/*      <div className="d-table-cell">*/}
        {/*        <div className="container">*/}
        {/*          <div className="slider-text">*/}
        {/*            <div className="slider-shape-three">*/}
        {/*              <Image*/}
        {/*                src="/images/home-one/home-slider3.png"*/}
        {/*                alt="Shape"*/}
        {/*                width={730}*/}
        {/*                height={500}*/}
        {/*              />*/}
        {/*            </div>*/}
        {/*            <h1>We Offer Highly Treatments</h1>*/}
        {/*            <p>*/}
        {/*              Lorem ipsum dolor sit amet, consectetur adipiscing elit,*/}
        {/*              sed do eiusmod tempor incididunt ut labore et dolore magna*/}
        {/*              aliqua. Quis ipsum suspendisse ultrices gravida.*/}
        {/*            </p>*/}

        {/*            <div className="common-btn">*/}
        {/*              /!*<Link href="/appointment">Get Appointment</Link>*!/*/}

        {/*              /!*<Link href="/about" className="cmn-btn-right">*!/*/}
        {/*              /!*  Learn More*!/*/}
        {/*              /!*</Link>*!/*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</SwiperSlide>*/}
      </Swiper>
    </>
  );
};

export default HeroSlider;
