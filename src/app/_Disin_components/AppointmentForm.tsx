"use client";

import React, { type ChangeEvent, type FormEvent, useState } from "react";
import Image from "next/image";
import { FaUserTie } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { WorkingHours, type WorkingHoursType } from "~/constants/menus";
import { type LocaleT } from "~/types";

interface FormData {
  name: string;
  email: string;
  ssn: string;
  number: string;
}

const AppointmentForm: React.FC = () => {
  const tComponents = useTranslations("Components");
  const tGeneral = useTranslations("General");
  const locale: string = useLocale();
  const localisedWorkingHours: WorkingHoursType[0] | undefined =
    WorkingHours[locale as LocaleT];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    ssn: "",
    number: "",
  });
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(tComponents("ContactForm.successMessage"));
        setFormData({
          name: "",
          email: "",
          ssn: "",
          number: "",
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { error } = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument
        setStatus(error || tComponents("ContactForm.errorMessage"));
      }
    } catch (error) {
      console.error(error);
      setStatus(tComponents("ContactForm.errorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

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
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-container">
                            <label>
                              {tComponents("Appointments.labels.name")}
                            </label>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              required
                              placeholder={tComponents(
                                "Appointments.placeholders.name",
                              )}
                              value={formData.name}
                              onChange={handleInputChange}
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
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder={tComponents(
                                "Appointments.placeholders.email",
                              )}
                              required
                              value={formData.email}
                              onChange={handleInputChange}
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
                              {tComponents("Appointments.labels.ssn")}
                            </label>
                            <input
                              type="text"
                              name="ssn"
                              className="form-control"
                              placeholder={tComponents(
                                "Appointments.placeholders.ssn",
                              )}
                              required
                              value={formData.ssn}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="icon-container">
                            <FaIdCard className="icon largest-icon-size mb-4" />
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
                              name="number"
                              className="form-control"
                              placeholder={tComponents(
                                "Appointments.placeholders.phone",
                              )}
                              required
                              value={formData.number}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="icon-container">
                            <FaPhoneAlt className="icon largest-icon-size mb-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn appointment-btn"
                        disabled={isLoading}
                      >
                        {tComponents("Appointments.actions.submit")}
                      </button>
                      {/*{status && <p>{status}</p>}*/}
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
                    {localisedWorkingHours &&
                      Object.keys(localisedWorkingHours).map((key, index) => {
                        return (
                          <li key={index}>
                            {tGeneral(`Weekdays.${key}`)}
                            {/* @ts-ignore*/}
                            <span>{localisedWorkingHours[key]}</span>
                          </li>
                        );
                      })}
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
