"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

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
              backgroundImage: `url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlun2PT6Vz8iXtIHULns6k3RoJDbzQgEqF9Vf7m)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    {/*<h1>{t("descriptionOne")}</h1>*/}
                    {/*<p>{tAbout("Mission")}</p>*/}

                    {/*TODO: From template, not using now*/}
                    {/*<div className="common-btn">*/}
                    {/*  <Link href="/appointment">Get Appointment</Link>*/}
                    {/*  <Link href="/about" className="cmn-btn-right">*/}
                    {/*    Learn More*/}
                    {/*  </Link>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/*/!*TODO: From template, not using now*!/*/}
        <SwiperSlide>
          <div
            className="slider-item blur"
            style={{
              backgroundImage: `url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlun2PT6Vz8iXtIHULns6k3RoJDbzQgEqF9Vf7m)`,
            }}
          />
          <div className="d-table slider-item-content-alternative">
            <div className="d-table-cell">
              <div className="container">
                <div className="slider-text">
                  <h1>{t("priceTitle")}</h1>
                  {/*<p>{tAbout("Mission")}</p>*/}

                  {/*TODO: From template, not using now*/}
                  <div className="common-btn">
                    {/*<Link href="/appointment">Get Appointment</Link>*/}
                    <Link
                      href="/patientGuide/pricelist"
                      className="cmn-btn-right"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/*TODO: From template, not using now*/}
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
        {/*              <img*/}
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
