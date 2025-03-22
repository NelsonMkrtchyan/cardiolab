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
                    src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlubD8SFgldCU4c8A1oViQtsIJW2aZEXeySMgu3"
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
