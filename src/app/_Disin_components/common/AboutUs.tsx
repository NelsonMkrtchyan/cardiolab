"use client";

import React from "react";
import Image from "next/image";
import { TbCertificate } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { GiTechnoHeart } from "react-icons/gi";
import { useTranslations } from "next-intl";

const AboutUs: React.FC = () => {
  const tComponents = useTranslations("Components");

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

                <ul>
                  <li>
                    <div className="icon-wrapper">
                      <TbCertificate className="icon largest-icon-size" />
                    </div>
                    <div className="welcome-inner">
                      <h3>{tComponents("Landing.AboutUs.one")}</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon-wrapper">
                      <IoIosPeople className="icon largest-icon-size" />
                    </div>
                    <div className="welcome-inner">
                      <h3>{tComponents("Landing.AboutUs.two")}</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon-wrapper">
                      <GiTechnoHeart className="icon largest-icon-size" />
                    </div>
                    <div className="welcome-inner">
                      <h3>{tComponents("Landing.AboutUs.three")}</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
