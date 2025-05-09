"use client";

import { Link } from "~/i18n/routing";
import { CardioLabInfo } from "~/constants/menus";
import { useLocale, useTranslations } from "next-intl";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { type LocaleT } from "~/types";
import { priceListData } from "~/constants/priceList";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const tMenu = useTranslations("Menu");
  const tFooter = useTranslations("Footer");

  const locale: string = useLocale();
  const localisedServices = priceListData[locale as LocaleT];
  const localisedCardioLabInfo = CardioLabInfo[locale as LocaleT];
  return (
    <>
      <footer
        className="pt-100 pb-70"
        style={{ backgroundImage: `url(/images/footer-bg.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>{tMenu("ContactUs")}</h3>
                  <ul>
                    <li>
                      <div>
                        <IoMail className="icon footer-icon large-icon-size" />
                      </div>
                      <div className="footer-text-container">
                        <a href={`mailto:${localisedCardioLabInfo.email}`}>
                          {localisedCardioLabInfo.email}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <IoCall className="icon footer-icon large-icon-size" />
                      </div>
                      <div className="footer-text-container">
                        {localisedCardioLabInfo.phone.map((phone: string) => (
                          <div key={phone}>
                            <a href={`tel:${phone}`}>{phone}</a>
                          </div>
                        ))}
                      </div>
                    </li>
                    <li>
                      <div>
                        <IoLocation className="icon footer-icon large-icon-size" />
                      </div>
                      <div className="footer-text-container">
                        <p>{localisedCardioLabInfo.address}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>{tFooter("QuickLinks.QuickLinksText")}</h3>
                  <ul>
                    <li>
                      <Link href="/about">
                        {tFooter("QuickLinks.Links.AboutUs")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        {tFooter("QuickLinks.Links.Services")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/staff">
                        {tFooter("QuickLinks.Links.Doctors")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/patientGuide/pricelist">
                        {tMenu("Pricelist")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        {tFooter("QuickLinks.Links.ContactUs")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>Copyright &copy; {currentYear} Developed by Nelson Mkrtchyan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
