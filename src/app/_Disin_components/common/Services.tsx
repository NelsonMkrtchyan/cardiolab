"use client";

import React from "react";
import { Link } from "~/i18n/routing";
import { FaDiagnoses, FaHeartbeat } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { CiStethoscope } from "react-icons/ci";

const Services: React.FC = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <FaDiagnoses className="icon largest-icon-size mb-4" />
                  <Link href="/services/details">
                    <h3>Cardiology</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <FaHeartbeat className="icon largest-icon-size mb-4" />

                  <Link href="/services/details">
                    <h3>Arrhythmology</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <GiMedicines className="icon largest-icon-size mb-4" />

                  <Link href="/services/details">
                    <h3>Vascular Consultations</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <CiStethoscope className="icon largest-icon-size mb-4" />

                  <Link href="/services/details">
                    <h3>Echocardiography</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="service-item">*/}
            {/*    <div className="service-front">*/}
            {/*      <i className="icofont-heart-beat-alt"></i>*/}
            {/*      <Link href="/services/details">*/}
            {/*        <h3>Cardiology</h3>*/}
            {/*      </Link>*/}
            {/*      <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
            {/*        do eiusmod*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="service-item">*/}
            {/*    <div className="service-front">*/}
            {/*      <i className="icofont-drug"></i>*/}
            {/*      <Link href="/services/details">*/}
            {/*        <h3>Medicine</h3>*/}
            {/*      </Link>*/}
            {/*      <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
            {/*        do eiusmod*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="service-item">*/}
            {/*    <div className="service-front">*/}
            {/*      <i className="icofont-dna-alt-1"></i>*/}
            {/*      <Link href="/services/details">*/}
            {/*        <h3>Neurology</h3>*/}
            {/*      </Link>*/}
            {/*      <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
            {/*        do eiusmod*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="service-item">*/}
            {/*    <div className="service-front">*/}
            {/*      <i className="icofont-ambulance-cross"></i>*/}
            {/*      <Link href="/services/details">*/}
            {/*        <h3>Ambulance</h3>*/}
            {/*      </Link>*/}
            {/*      <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
            {/*        do eiusmod*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div>
            <div className="doctor-btn">
              <Link href="/services">See All</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
