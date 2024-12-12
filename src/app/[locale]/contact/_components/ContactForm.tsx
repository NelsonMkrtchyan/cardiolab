"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CardioLabInfo } from "~/constants/menus";
import { IoCall } from "react-icons/io5";
import { type ChangeEvent, type FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const locale: string = useLocale();
  const localisedCardioLabInfo = CardioLabInfo[locale as "en" | "ru" | "am"];
  const tComponents = useTranslations("Components");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
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
          number: "",
          subject: "",
          message: "",
        });
      } else {
        const { error } = await response.json();
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

                  <form onSubmit={handleSubmit}>
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
                            value={formData.name}
                            onChange={handleInputChange}
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
                            value={formData.email}
                            onChange={handleInputChange}
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
                            value={formData.number}
                            onChange={handleInputChange}
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
                            value={formData.subject}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            cols={30}
                            rows={6}
                            className="form-control"
                            placeholder={tComponents(
                              "ContactForm.placeholders.message",
                            )}
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button
                          type="submit"
                          className="drop-btn"
                          disabled={isLoading}
                        >
                          {tComponents("ContactForm.sendMessage")}
                          {isLoading
                            ? tComponents("ContactForm.sending")
                            : tComponents("ContactForm.sendMessage")}
                        </button>
                        {/*{status && <p>{status}</p>}*/}
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
                    <p>{localisedCardioLabInfo.phone}</p>
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
