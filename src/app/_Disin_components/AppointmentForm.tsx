"use client";

import React from "react";
import Image from "next/image";
import { FaUserDoctor, FaUserTie } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LiaHospital } from "react-icons/lia";
import { FaPhoneAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { useTranslations } from "next-intl";

const AppointmentForm: React.FC = () => {
  const tComponents = useTranslations("Components");
  const tGeneral = useTranslations("General");
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

                <h2>{tComponents("Appointments.title")}</h2>
                <span>{tComponents("Appointments.description")}</span>

                <div className="appointment-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-container">
                            <label>
                              {tComponents("Appointments.labels.name")}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={tComponents(
                                "Appointments.placeholders.name",
                              )}
                            />
                          </div>
                          <div className="icon-container">
                            <FaUserTie className="icon largest-icon-size mb-4" />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-container">
                            <label>
                              {tComponents("Appointments.labels.email")}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder={tComponents(
                                "Appointments.placeholders.email",
                              )}
                            />
                          </div>
                          <div className="icon-container">
                            <MdEmail className="icon largest-icon-size mb-4" />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-container">
                            <label>
                              {tComponents("Appointments.labels.phone")}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={tComponents(
                                "Appointments.placeholders.phone",
                              )}
                            />
                          </div>
                          <div className="icon-container">
                            <FaPhoneAlt className="icon largest-icon-size mb-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn appointment-btn">
                        {tComponents("Appointments.actions.submit")}
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
                  <h2>{tGeneral("WorkingHours")}</h2>
                  <ul>
                    <li>
                      {tGeneral("Weekdays.Monday")}
                      <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      {tGeneral("Weekdays.Tuesday")}
                      <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      {tGeneral("Weekdays.Wednesday")}
                      <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      {tGeneral("Weekdays.Thursday")}
                      <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      {tGeneral("Weekdays.Friday")}
                      <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      {tGeneral("Weekdays.Saturday")}
                      <span>9:00 AM - 8:00 PM</span>
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
