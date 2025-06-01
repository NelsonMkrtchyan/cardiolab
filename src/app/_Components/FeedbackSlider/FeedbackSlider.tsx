"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

const FeedbackSlider: React.FC = () => {
  const feedbackData = [
    {
      name: "Adision Smith",
      image: "/images/clients/client1.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra",
    },
    {
      name: "John Cena",
      image: "/images/clients/client2.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra",
    },
    {
      name: "Mac Smith",
      image: "/images/clients/client3.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra",
    },
    {
      name: "Shane Watson",
      image: "/images/clients/client4.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra",
    },
  ];

  return (
    <>
      <div
        className="review-area ptb-150"
        style={{
          backgroundImage: `url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu1vFYqy2GN8X3FsiITKCzR9wVM5lohEmPqWDv)`,
        }}
      >
        <div
          className="review-area-background"
          style={{
            backgroundImage: `url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu1vFYqy2GN8X3FsiITKCzR9wVM5lohEmPqWDv)`,
          }}
        />
        <div className="container">
          <Swiper
            // navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="feedback-slider"
          >
            {feedbackData.map((item, index, i) => (
              <SwiperSlide key={index}>
                <div className="feedback-item">
                  <div className="client-img">
                    <Image
                      src={item.image}
                      alt="Feedback"
                      width={90}
                      height={90}
                    />
                    <h3>{item.name}</h3>
                  </div>
                  <p>{item.feedback}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
