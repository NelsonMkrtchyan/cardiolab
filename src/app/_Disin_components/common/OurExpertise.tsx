"use client";

import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

const OurExpertise: React.FC = () => {
  const tAbout = useTranslations("About");
  return (
    <>
      <div className="speciality-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-12">
              <div className="speciality-left">
                {/*<div className="section-title-two">*/}
                {/*  <span>Speciality</span>*/}
                {/*  <h2>Our Expertise</h2>*/}
                {/*</div>*/}

                <div className="speciality-item">
                  <div className="row m-0">
                    <div className="col-sm-6 col-lg-8">
                      <div className="speciality-inner">
                        <FaRegCheckCircle className="icon largest-icon-size mb-4" />
                        <h3>Our vision</h3>
                        <p>{tAbout("Vision")}</p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-8 right ms-auto">
                      <div className="speciality-inner">
                        <FaRegCheckCircle className="icon largest-icon-size mb-4" />
                        <h3>Our mission</h3>
                        <p>{tAbout("Mission")}</p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-8">
                      <div className="speciality-inner">
                        <FaRegCheckCircle className="icon largest-icon-size mb-4" />
                        <h3>Our values</h3>
                        <p>{tAbout("Values")}</p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-8 right ms-auto">
                      <div className="speciality-inner">
                        <FaRegCheckCircle className="icon largest-icon-size mb-4" />
                        <h3>Our strategic directions</h3>
                        <ul>
                          <li> {tAbout("OurStrategicDirections.one")}</li>
                          <li> {tAbout("OurStrategicDirections.two")}</li>
                          <li> {tAbout("OurStrategicDirections.three")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="col-lg-5 pr-0">*/}
            {/*  <div*/}
            {/*    className="speciality-item speciality-right"*/}
            {/*    style={{ backgroundImage: `url(/images/about4.jpg)` }}*/}
            {/*  >*/}
            {/*    <Image*/}
            {/*      src="/images/about4.jpg"*/}
            {/*      alt="Speciality"*/}
            {/*      width={845}*/}
            {/*      height={850}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
