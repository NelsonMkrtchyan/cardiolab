"use client";
import { CardioLabInfo } from "~/constants/menus";

import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { useTranslations } from "next-intl";

const ContactInfo = () => {
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="location-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center location-wrap">
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <IoLocation className="icon large-icon-size mb-4 mt-2" />
                <h3>{tGeneral("Address")}</h3>
                <p>{CardioLabInfo.address}</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <IoMail className="icon large-icon-size mb-4 mt-2" />
                <h3>{tGeneral("Email")}</h3>
                <p>{CardioLabInfo.email}</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <IoCall className="icon large-icon-size mb-4 mt-2" />
                <h3>{tGeneral("Phone")}</h3>
                <p>{CardioLabInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
