"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const TestimonialSlider: React.FC = () => {
  return (
    <>
      <div
        className="review-area ptb-100"
        style={{ backgroundImage: `url(/images/feedback-bg.jpg)` }}
      >
        <div className="container">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="feedback-slider"
          >
            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <Image
                    src="/images/clients/client1.png"
                    alt="Feedback"
                    width={90}
                    height={90}
                  />
                  <h3>Adision Smith</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <Image
                    src="/images/clients/client2.png"
                    alt="Feedback"
                    width={90}
                    height={90}
                  />
                  <h3>John Cena</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <Image
                    src="/images/clients/client3.png"
                    alt="Feedback"
                    width={90}
                    height={90}
                  />
                  <h3>Mac Smith</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <Image
                    src="/images/clients/client4.png"
                    alt="Feedback"
                    width={90}
                    height={90}
                  />
                  <h3>Shane Watson</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
