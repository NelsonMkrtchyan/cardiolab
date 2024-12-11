"use client";

import React from "react";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { type PGuideI } from "~/constants/patientGuide";

interface GuideDetailsI {
  currentGuide: PGuideI;
}

const GuideDetails = ({ currentGuide }: GuideDetailsI) => {
  const locale: string = useLocale();
  const tGeneral = useTranslations("General");

  const { details } = currentGuide;
  const { title, content, date, media } = details;

  const getLocale = (locale: string) => {
    if (locale === "am") {
      return "hy-AM";
    }
    return locale;
  };

  const formattedDate = dayjs(date)
    .locale(getLocale(locale))
    .format("MMM DD, YYYY");

  return (
    <>
      <div className="blog-details-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-details-item">
                <div className="blog-details-img">
                  <Image
                    src={media.image}
                    alt="Blog"
                    width={744}
                    height={208}
                  />
                  <h2>{title}</h2>

                  <ul>
                    <li>
                      <FaRegCalendarAlt className="icon" />
                      {formattedDate}
                    </li>
                  </ul>

                  <div className="mb-4 mt-4">{content}</div>
                </div>

                <div className="button-type-1">
                  <Link href="/contact">{tGeneral("ContactUs")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideDetails;
