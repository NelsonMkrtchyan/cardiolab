"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

const AboutUsSection: React.FC = () => {
  const tComponents = useTranslations("Components");
  const tGeneral = useTranslations("General");
  const tAbout = useTranslations("About");
  const locale: string = useLocale();

  return (
    <>
      <div className="landing-section">
        <div className="welcome-area container-fluid h-100 row">
          <div className="welcome-left col-lg-6 p-0">
            <div className="welcomeImageWrapper">
              <ImageWithLoader
                src={
                  "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlubD8SFgldCU4c8A1oViQtsIJW2aZEXeySMgu3"
                }
                alt={"Welcome"}
                className={
                  "object-fit-cover responsive-image object-position-top"
                }
                width={500}
                height={750}
              />
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div className="welcome-item welcome-right">
              <h2 className="font-md">
                {tComponents("Landing.AboutUs.title")}
              </h2>

              <p className="font-sm">
                {tComponents("Landing.AboutUs.description")}
              </p>
              <div className="handwriting-signature">
                <p className="font-sm">
                  <span className={`${locale === "en" && "english"}`}>
                    {tAbout("AboutContent.signature1")}
                  </span>
                  <span className="english">
                    {tAbout("AboutContent.signature2")}
                  </span>
                  <span className={`${locale === "en" && "english"}`}>
                    {tAbout("AboutContent.signature3")}
                  </span>
                </p>
              </div>

              <div className="button-type-1">
                <Link href="/about">{tGeneral("KnowMore")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
