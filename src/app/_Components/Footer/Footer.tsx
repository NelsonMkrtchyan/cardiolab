"use client";

import { Link } from "~/i18n/routing";
import { CardioLabInfo } from "~/constants/menus";
import { useLocale, useTranslations } from "next-intl";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { type LocaleT } from "~/types";
import { priceListData } from "~/constants/priceList";
import Image from "next/image";
import React from "react";
import { LogoHorizontal } from "~/app/_Components/Svgs/LogoHorizontal";

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
        className=""
        // style={{ backgroundImage: `url(/images/footer-bg.png)` }}
      >
        <div className="h-100 container">
          <div className="footer-area">
            <div className="col-sm-6 col-lg-6 footer-section">
              <div className="footer-left-area">
                <div className="footer-icon-area">
                  <div className="footer-icon">
                    <LogoHorizontal />
                  </div>
                </div>
                <div className="footer-socials-area"></div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 footer-section">
              <div className="footer-right-area">
                <div></div>
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
