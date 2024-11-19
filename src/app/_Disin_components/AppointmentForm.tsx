"use client";

import React from "react";
import Image from "next/image";
import { GiAchievement } from "react-icons/gi";
import { FaUserDoctor, FaUserTie } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LiaHospital } from "react-icons/lia";
import { FaPhoneAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const AppointmentForm: React.FC = () => {
  return (
    <>
      <div className="appointment-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center appointment-wrap-two">
            <div className="col-lg-6">
              <div className="appointment-item appointment-item-two">
                <div className="appointment-shape">
                  <Image
                    src="/images/hart-img1.png"
                    alt="Shape"
                    width={360}
                    height={264}
                  />
                </div>

                <h2>Book your appointment</h2>
                <span>We will confirm your appointment within 2 hours</span>

                <div className="appointment-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="icon-container">
                            <FaUserTie className="icon largest-icon-size mb-4" />
                          </div>
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="icon-container">
                            <MdEmail className="icon largest-icon-size mb-4" />
                          </div>
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="icon-container">
                            <FaPhoneAlt className="icon largest-icon-size mb-4" />
                          </div>
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="icon-container">
                            <LiaHospital className="icon largest-icon-size mb-4" />
                          </div>
                          <label>Services</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Dental Care</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="icon-container">
                            <FaUserDoctor className="icon largest-icon-size mb-4" />
                          </div>
                          <label>Doctor</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                          >
                            <option>Choose Your Doctor</option>
                            <option>John Smith</option>
                            <option>Sarah Taylor</option>
                            <option>Stevn King</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="icon-container">
                            <CiUser className="icon largest-icon-size mb-4" />
                          </div>
                          <label>Age</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Age"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn appointment-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="appointment-item-two-right"
                style={{ backgroundImage: `url(/images/appointment1.jpg)` }}
              >
                <div className="appointment-item-content">
                  <h2>Working Hours</h2>
                  <ul>
                    <li>
                      Monday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Tuesday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Wednesday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Thursday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Friday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Saturday <span>9:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
