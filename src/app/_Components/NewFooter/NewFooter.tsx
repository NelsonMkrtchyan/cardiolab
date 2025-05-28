"use client";

import React from "react";
import { Link } from "~/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoCall, IoMail, IoLocation } from "react-icons/io5";
import { LogoHorizontal } from "~/app/_Components/Svgs/LogoHorizontal";
import "./NewFooter.scss";
import {
  CardioLabInfo,
  WorkingHours,
  type WorkingHoursType,
} from "~/constants/menus";
import type { LocaleT } from "~/types";
import { FaViber, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const NewFooter = () => {
  const currentYear = new Date().getFullYear();
  const tMenu = useTranslations("Menu");
  const tFooter = useTranslations("Footer");
  const tGeneral = useTranslations("General");

  const locale = useLocale();

  // Quick links
  const quickLinks = [
    { title: tMenu("Home"), path: "/" },
    { title: tMenu("AboutUs"), path: "/about" },
    { title: tMenu("Services"), path: "/services" },
    { title: tMenu("Staff"), path: "/staff" },
    { title: tMenu("ContactUs"), path: "/contact" },
  ];

  // Working hours
  const localisedWorkingHours: WorkingHoursType[0] | undefined =
    WorkingHours[locale as LocaleT];

  // Contact info
  const localisedCardioLabInfo = CardioLabInfo[locale as LocaleT];

  // Social media links
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/people/CardioLabArmenia/61566450466884/",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/cardiolab.armenia/",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/cardiolab-armenia",
    },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@CardioLabMed" },
    { icon: <FaWhatsapp />, url: "https://wa.me/+37444991188" },
    {
      icon: <FaViber />,
      url: "viber://chat?number=+37444991188",
      onClick: (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
        if (isMobile) {
          window.location.href = "viber://chat?number=+37444991188";
        } else {
          const confirmed = confirm(
            "Do you have Viber installed on this device?",
          );
          console.log("confirmed ---->", confirmed);
          if (confirmed) {
            window.location.href = "viber://chat?number=+37444991188";
          }
        }
      },
    },
  ];

  return (
    <>
      <footer className="new-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              {/* Left Side - Logo and Social Icons */}
              <div className="col-lg-4 footer-left">
                <div className="footer-logo-container">
                  <div className="footer-logo">
                    <LogoHorizontal />
                  </div>
                  <div className="footer-social">
                    {socialLinks.map((social, index) => (
                      <div key={index} className={"social-icon"}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          // className="social-icon"
                          onClick={social.onClick ? social.onClick : undefined}
                        >
                          {social.icon}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Quick Links, Working Hours, and Contact Info */}
              <div className="col-lg-8 footer-right">
                <div className="row">
                  {/* Quick Links */}
                  <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                    <h4 className="footer-title">
                      {tFooter("QuickLinks.QuickLinksText")}
                    </h4>
                    <ul className="footer-links">
                      {quickLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.path}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Working Hours - Smaller */}
                  <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                    <h4 className="footer-title">
                      {tGeneral("WorkingHours") || "Working Hours"}
                    </h4>
                    <div className="working-hours">
                      {localisedWorkingHours &&
                        Object.keys(localisedWorkingHours).map((key, index) => (
                          <div key={index} className="hours-item">
                            <span className="time">
                              {tGeneral(`Weekdays.${key}`)}
                            </span>
                            <span className="time">
                              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                              {/* @ts-expect-error*/}
                              {localisedWorkingHours[key]}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Contact Info with more compact phone numbers */}
                  <div className="col-12 contact-info-area mt-4">
                    <h4 className="footer-title">{tMenu("ContactUs")}</h4>
                    <div className="contact-info">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-7">
                          <div className="contact-item">
                            <IoMail className="contact-icon" />
                            <a href={`mailto:${localisedCardioLabInfo.email}`}>
                              {localisedCardioLabInfo.email}
                            </a>
                          </div>

                          <div className="contact-item">
                            <IoLocation className="contact-icon" />
                            <span>{localisedCardioLabInfo.address}</span>
                          </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-5">
                          <div className="contact-item phone-numbers">
                            <div className="phone-list">
                              {localisedCardioLabInfo?.phone.map(
                                (number, index) => (
                                  <div className="phone-number-row" key={index}>
                                    <IoCall className="contact-icon" />
                                    <a
                                      href={`tel:${number.replace(/\s/g, "")}`}
                                    >
                                      {number}
                                    </a>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright section */}
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-content">
            <p>© {currentYear} CardioLab</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFooter;
