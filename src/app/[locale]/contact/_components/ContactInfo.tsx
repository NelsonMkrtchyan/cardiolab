"use client";

import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { useLocale, useTranslations } from "next-intl";
import { type ContactInfo as ContactInfoType, getLocalizedValue } from "~/types/contactPage";

interface ContactInfoProps {
  contactInfo: ContactInfoType;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  const tGeneral = useTranslations("General");
  const locale = useLocale() as "am" | "en" | "ru";

  const address = getLocalizedValue(contactInfo.address, locale);

  return (
    <>
      <div className="location-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center location-wrap">
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <IoLocation className="icon large-icon-size mb-4 mt-2" />
                <h3>{tGeneral("Address")}</h3>
                <p>{address}</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <IoMail className="icon large-icon-size mb-4 mt-2" />
                <h3>{tGeneral("Email")}</h3>
                <p>{contactInfo.email}</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <IoCall className="icon large-icon-size mb-4 mt-2" />
                <h3>{tGeneral("Phone")}</h3>
                <ul>
                  {contactInfo.phoneNumbers.map((phone: string) => (
                    <li key={phone}>
                      <a href={`tel:${phone}`}>
                        <IoCall className="icon" />
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
