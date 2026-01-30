"use client";

import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { type MainSection, getLocalizedValue } from "~/types/aboutPage";

interface AboutContentProps {
  mainSection: MainSection;
}

const AboutContent: React.FC<AboutContentProps> = ({ mainSection }) => {
  const locale = useLocale() as "am" | "en" | "ru";

  const title = getLocalizedValue(mainSection.title, locale);
  const description = getLocalizedValue(mainSection.description, locale);
  const signatureName = getLocalizedValue(mainSection.signature.name, locale);
  const signatureOrganization = getLocalizedValue(
    mainSection.signature.organization,
    locale,
  );
  const signaturePosition = getLocalizedValue(
    mainSection.signature.position,
    locale,
  );

  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <Image
                    src={
                      mainSection.image ??
                      "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlubD8SFgldCU4c8A1oViQtsIJW2aZEXeySMgu3"
                    }
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
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="handwriting-signature">
                  <p>
                    <span className={`${locale === "en" && "english"}`}>
                      {signatureName}
                    </span>
                    <span className="english">{signatureOrganization}</span>
                    <span className={`${locale === "en" && "english"}`}>
                      {signaturePosition}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
