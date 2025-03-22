import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { type LocaleT } from "~/types";

import { CardioLabInfo } from "~/constants/menus";
import { useLocale } from "next-intl";

const TopHeader = () => {
  const locale: string = useLocale();
  const localisedCardioLabInfo = CardioLabInfo[locale as LocaleT];
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8 col-lg-9">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <ul>
                        {localisedCardioLabInfo.phone.map((phone: string) => (
                          <li key={phone}>
                            <a href={`tel:${phone}`}>
                              <IoCall className="icon" />
                              {phone}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <a href={`mailto:${localisedCardioLabInfo.email}`}>
                        <IoMail className="icon" />
                        {localisedCardioLabInfo.email}
                      </a>
                    </li>
                    <li>
                      <IoLocation className="icon" />
                      {localisedCardioLabInfo.address}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="header-top-item">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/people/CardioLabArmenia/61566450466884/"
                        target="_blank"
                      >
                        <FaFacebookF className="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/cardiolab.armenia/"
                        target="_blank"
                      >
                        <FaInstagram className="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@CardioLabMed"
                        target="_blank"
                      >
                        <FaYoutube className="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/cardiolab-armenia"
                        target="_blank"
                      >
                        <FaLinkedinIn className="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="viber://chat?number=+374 44991188"
                        target="_blank"
                      >
                        <FaViber className="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/+374 44991188" target="_blank">
                        <FaWhatsapp className="" />
                      </a>
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

export default TopHeader;
