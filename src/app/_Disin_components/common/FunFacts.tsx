"use client";

import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { FaPeopleGroup, FaUserDoctor } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";

const FunFacts: React.FC = () => {
  return (
    <>
      <div
        className="counter-area counter-bg counter-area-four"
        style={{ backgroundImage: `url(/images/map-bg.png)` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                {/*<i className="icofont-patient-bed"></i>*/}
                <div>
                  <FaClinicMedical className="icon largest-icon-size mb-4" />
                </div>
                <h3 className="counter">1</h3>
                <p>Clinics</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <FaPeopleGroup className="icon largest-icon-size mb-4" />
                <h3>
                  <span className="counter">25000</span>+
                </h3>
                <p>Happy Patients</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <FaUserDoctor className="icon largest-icon-size mb-4" />

                <h3 className="counter">13</h3>
                <p>Doctors & Nurse</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <GiAchievement className="icon largest-icon-size mb-4" />
                <h3 className="counter">1</h3>
                <p>Year Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
