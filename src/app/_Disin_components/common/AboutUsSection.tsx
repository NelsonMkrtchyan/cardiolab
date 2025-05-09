"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

const AboutUsSection: React.FC = () => {
  const tComponents = useTranslations("Components");
  const tGeneral = useTranslations("General");
  const tAbout = useTranslations("About");

  return (
    <>
      <div className="welcome-area ptb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 p-0">
              <div
                className="welcome-item welcome-left"
                style={{
                  backgroundImage: `url(https://x41q9wll8l.ufs.sh/f/kPqN7718CWlubD8SFgldCU4c8A1oViQtsIJW2aZEXeySMgu3)`,
                }}
              />
            </div>

            <div className="col-lg-6 p-0">
              <div className="welcome-item welcome-right">
                <div className="section-title-two">
                  <h2>{tComponents("Landing.AboutUs.title")}</h2>
                </div>

                <div className="section-title-two">
                  <p>{tComponents("Landing.AboutUs.description")}</p>
                </div>
                <div className="handwriting-signature">
                  <p>
                    <span> {tAbout("AboutContent.signature1")}</span>
                    <span className="english">
                      {tAbout("AboutContent.signature2")}
                    </span>
                    <span> {tAbout("AboutContent.signature3")}</span>
                  </p>
                </div>

                <div className="button-type-1">
                  <Link href="/about">{tGeneral("KnowMore")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
