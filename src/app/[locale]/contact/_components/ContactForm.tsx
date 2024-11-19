"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CardioLabInfo } from "~/constants/menus";
import { IoCall } from "react-icons/io5";

const ContactForm = () => {
  const tComponents = useTranslations("Components");

  return (
    <>
      <div className="drop-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 p-0">
              <div
                className="drop-item drop-img"
                style={{
                  backgroundImage: `url(/images/contact-form-bg.png)`,
                }}
              >
                <div className="drop-left">
                  <h2>{tComponents("ContactForm.title")}</h2>

                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder={tComponents(
                              "ContactForm.placeholders.name",
                            )}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder={tComponents(
                              "ContactForm.placeholders.email",
                            )}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            placeholder={tComponents(
                              "ContactForm.placeholders.phone",
                            )}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder={tComponents(
                              "ContactForm.placeholders.subject",
                            )}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="text"
                            cols={30}
                            rows={6}
                            className="form-control"
                            placeholder={tComponents(
                              "ContactForm.placeholders.message",
                            )}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="drop-btn">
                          {tComponents("ContactForm.sendMessage")}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5 p-0">
              <div
                className="speciality-item speciality-right speciality-right-two speciality-right-three"
                style={{ backgroundImage: `url(/images/about4.jpg)` }}
              >
                <Image
                  src="/images/about4.jpg"
                  alt="Contact"
                  width={845}
                  height={850}
                />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <IoCall className="icon large-icon-size" />
                  </div>
                  <div className="speciality-content">
                    <h3>{tComponents("ContactForm.callNote")}</h3>
                    <p>{CardioLabInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
