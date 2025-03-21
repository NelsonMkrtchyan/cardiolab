"use client";

import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { FaPeopleGroup, FaUserDoctor } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import { useTranslations } from "next-intl";

const Stats: React.FC = () => {
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="counter-area counter-area-two">
        <div className="container">
          <div
            className="row counter-bg"
            style={{ backgroundImage: `url(/images/map-bg.png)` }}
          >
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <div>
                  <FaClinicMedical className="icon largest-icon-size mb-4" />
                </div>
                <h3 className="counter">1</h3>
                <p>{tGeneral("Stats.one")}</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <div>
                  <FaPeopleGroup className="icon largest-icon-size mb-4" />
                </div>
                <h3>
                  <span className="counter">25000</span>+
                </h3>
                <p>{tGeneral("Stats.two")}</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <div>
                  <FaUserDoctor className="icon largest-icon-size mb-4" />
                </div>
                <h3 className="counter">13</h3>
                <p>{tGeneral("Stats.three")}</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <div>
                  <GiAchievement className="icon largest-icon-size mb-4" />
                </div>
                <h3 className="counter">1</h3>
                <p>{tGeneral("Stats.four")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
