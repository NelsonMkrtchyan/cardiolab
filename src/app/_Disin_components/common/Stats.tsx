"use client";

import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { FaPeopleGroup, FaUserDoctor } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";

const Stats: React.FC = () => {
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
                <h3 className="counter">850</h3>
                <p>Technologies</p>
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
                <p>Happy Patients</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <div>
                  <FaUserDoctor className="icon largest-icon-size mb-4" />
                </div>
                <h3 className="counter">750</h3>
                <p>Doctors & Nurse</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <div>
                  <GiAchievement className="icon largest-icon-size mb-4" />
                </div>
                <h3 className="counter">18</h3>
                <p>Year Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
