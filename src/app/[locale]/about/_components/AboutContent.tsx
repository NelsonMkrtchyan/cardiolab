"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutContent: React.FC = () => {
  const tAbout = useTranslations("About");

  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <Image
                    src="/images/about1.jpg"
                    alt="About"
                    width={626}
                    height={552}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <Image
                  src="/images/about-shape1.png"
                  alt="About"
                  width={556}
                  height={712}
                />
                <h2>{tAbout("AboutContent.title")}</h2>
                <p>{tAbout("AboutContent.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
