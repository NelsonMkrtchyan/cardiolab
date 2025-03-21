"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

const AboutUsSection: React.FC = () => {
  const tComponents = useTranslations("Components");
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="welcome-area ptb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 p-0">
              <div
                className="welcome-item welcome-left"
                style={{ backgroundImage: `url(/images/about3.jpg)` }}
              >
                <Image
                  src="/images/about3.jpg"
                  alt="image"
                  width={845}
                  height={850}
                />
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="welcome-item welcome-right">
                <div className="section-title-two">
                  {/*<span>About Us</span>*/}
                  <h2>{tComponents("Landing.AboutUs.title")}</h2>
                </div>

                <div className="section-title-two">
                  {/*<span>About Us</span>*/}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint optio rem magni, dolorum aut vel nostrum quae, fugit
                    necessitatibus eius perferendis. Quia optio tenetur pariatur
                    aliquam obcaecati enim quam eum?Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Sint optio rem magni, dolorum
                    aut vel nostrum quae, fugit necessitatibus eius perferendis.
                    Quia optio tenetur pariatur aliquam obcaecati enim quam eum?
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
