"use client";

import { Link } from "~/i18n/routing";
import { CardioLabInfo } from "~/constants/menus";
import { useLocale, useTranslations } from "next-intl";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { services } from "~/constants/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const tMenu = useTranslations("Menu");
  const tFooter = useTranslations("Footer");

  const locale: string = useLocale();
  const localisedServices = services[locale as "en" | "ru" | "am"];
  return (
    <>
      <footer
        className="pt-100 pb-70"
        style={{ backgroundImage: `url(/images/footer-bg.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-lg-5">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>{tMenu("ContactUs")}</h3>
                  <ul>
                    <li>
                      <div>
                        <IoMail className="icon footer-icon large-icon-size" />
                      </div>
                      <div className="footer-text-container">
                        <a href={`mailto:${CardioLabInfo.email}`}>
                          {CardioLabInfo.email}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <IoCall className="icon footer-icon large-icon-size" />
                      </div>
                      <div className="footer-text-container">
                        <a href={`tel:${CardioLabInfo.phone}`}>
                          Call: {CardioLabInfo.phone}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <IoLocation className="icon footer-icon large-icon-size" />
                      </div>
                      <div className="footer-text-container">
                        <p>{CardioLabInfo.address}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
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
                      <Link href="/news">
                        {tFooter("QuickLinks.Links.News")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        {tFooter("QuickLinks.Links.Services")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/stuff">
                        {tFooter("QuickLinks.Links.Doctors")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">{tFooter("QuickLinks.Links.Faq")}</Link>
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
            <div className="col-sm-4 col-lg-4">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>{tFooter("OurServices.OurServicesText")}</h3>
                  <ul>
                    {localisedServices.slice(0, 5).map((service) => {
                      return (
                        <>
                          <li>
                            <Link href={`/services/details/${service.id}`}>
                              {service.title}
                            </Link>
                          </li>
                        </>
                      );
                    })}
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
