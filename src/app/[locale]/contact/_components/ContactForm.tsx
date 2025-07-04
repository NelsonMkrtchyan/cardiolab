"use client";

// import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

interface FormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const locale: string = useLocale();
  const tForms = useTranslations("Forms");
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
        setStatus(tForms("ContactForm.successMessage"));
        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { error } = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setStatus(error || tForms("ContactForm.errorMessage"));
      }
    } catch (error) {
      console.error(error);
      setStatus(tForms("ContactForm.errorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="drop-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 drop-item">
              {/*<div*/}
              {/*  className="drop-img"*/}
              {/*  style={{*/}
              {/*    backgroundImage: `url(/images/contact-form-bg.png)`,*/}
              {/*  }}*/}
              {/*/>*/}
              <div className="drop-left">
                <h2>{tForms("ContactForm.title")}</h2>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder={tForms("ContactForm.placeholders.name")}
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
                          placeholder={tForms("ContactForm.placeholders.email")}
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
                          placeholder={tForms("ContactForm.placeholders.phone")}
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
                          placeholder={tForms(
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
                          placeholder={tForms(
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
                        {isLoading
                          ? tForms("ContactForm.sending")
                          : tForms("ContactForm.sendMessage")}
                      </button>
                      {/*{status && <p>{status}</p>}*/}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5 p-0">
              <div className="speciality-right">
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  className="contact-slider"
                  style={{ height: "100%" }}
                >
                  <SwiperSlide>
                    <ImageWithLoader
                      src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluga5tUTviePapmd4fjRNBXFSt1CEhgvq2b0rM"
                      alt="Contact"
                      width={600}
                      height={400}
                      className="swiper-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ImageWithLoader
                      src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu7ZZJ3LYxTDGf3YpRJEC1nwk6tWHeNq5xSbUv"
                      alt="Contact"
                      width={600}
                      height={400}
                      className="swiper-image"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
