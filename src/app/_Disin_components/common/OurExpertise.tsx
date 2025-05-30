"use client";

import React from "react";
import { aboutUsContent } from "~/constants/general";
import SingleExpertise from "~/app/_Components/OurExpertise/components/SingleExpertise";

const OurExpertise: React.FC = () => {
  return (
    <>
      <div className="speciality-area-wrapper pb-100">
        <div
          className={"background-image"}
          style={{ backgroundImage: "url(/images/map-bg.png)" }}
        />
        <div className="speciality-area container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-12">
              <div className="speciality-left">
                {aboutUsContent && (
                  <div className="speciality-item">
                    <div className="row">
                      <div
                        className={
                          "col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 m-0 p-0"
                        }
                      >
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-expect-error */}
                        <SingleExpertise expertise={aboutUsContent[0]} />
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-expect-error */}
                        <SingleExpertise expertise={aboutUsContent[2]} />
                      </div>
                      <div
                        className={
                          "col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 m-0 p-0"
                        }
                      >
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-expect-error */}
                        <SingleExpertise expertise={aboutUsContent[1]} />
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className={
                          "col-12 col-sm-12 col-md-12 col-l-12 col-xl-12 m-0 p-0"
                        }
                      >
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-expect-error */}
                        <SingleExpertise expertise={aboutUsContent[3]} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurExpertise;
