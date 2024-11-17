"use client";

import { Link } from "~/i18n/routing";
import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";
import { type NewsCardI } from "~/constants/news";
import { useLocale, useTranslations } from "next-intl";
import dayjs from "dayjs";

import "dayjs/locale/ru"; // Import the Russian locale
import "dayjs/locale/hy-am"; // Import the Armenian locale

const NewsCard = ({ news }: NewsCardI) => {
  const locale: string = useLocale();
  const { id, title, date, media } = news;
  const tGeneral = useTranslations("General");

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
      <div className="col-md-6 col-lg-4">
        <Link href={`/news/details/${id}`}>
          <div className="blog-item">
            <div className="blog-top">
              <Link href={`/news/details/${id}`}>
                <Image src={media.image} alt="Blog" width={366} height={283} />
              </Link>
            </div>
            <div className="blog-bottom">
              <h3>
                <Link href="/blog/details">{title}</Link>
              </h3>
              {/*<p>*/}
              {/*  Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore*/}
              {/*  smod tempor incididunt ut labore et....*/}
              {/*</p>*/}
              <ul>
                <li>
                  <Link href="/blog/details">
                    {tGeneral("ReadMore")}{" "}
                    <FaLongArrowAltRight className="icon" />
                  </Link>
                </li>
                <li>
                  <FaRegCalendarAlt className="icon" />
                  {formattedDate}
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NewsCard;
