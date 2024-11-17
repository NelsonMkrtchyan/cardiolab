"use client";

import React from "react";
import CommentForm from "./CommentForm";
import Image from "next/image";
import { type NewsI } from "~/constants/news";
import { FaRegCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

interface NewsDetailsI {
  currentNews: NewsI;
  availableNewsIds: number[];
}

const BlogDetailsContent = ({
  currentNews,
  availableNewsIds,
}: NewsDetailsI) => {
  const locale: string = useLocale();
  const tGeneral = useTranslations("General");

  const { id, title, content, date, media } = currentNews;

  const getLocale = (locale: string) => {
    if (locale === "am") {
      return "hy-AM";
    }
    return locale;
  };

  const formattedDate = dayjs(date)
    .locale(getLocale(locale))
    .format("MMM DD, YYYY");

  function getNextAndPreviousIds(availableIds: number[], currentId: number) {
    const currentIndex = availableIds.indexOf(currentId);

    // Get previousId with wrap-around logic
    const previousId =
      currentIndex === 0
        ? availableIds[availableIds.length - 1]
        : availableIds[currentIndex - 1];

    // Get nextId with wrap-around logic
    const nextId =
      currentIndex === availableIds.length - 1
        ? availableIds[0]
        : availableIds[currentIndex + 1];

    return { previousId, nextId };
  }

  const { previousId, nextId } = getNextAndPreviousIds(availableNewsIds, id);

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
                    {/*<li>*/}
                    {/*  <Link href="/blog">*/}
                    {/*    <i className="icofont-businessman"></i> Admin*/}
                    {/*  </Link>*/}
                    {/*</li>*/}
                    <li>
                      <FaRegCalendarAlt className="icon" />
                      {formattedDate}
                    </li>
                  </ul>

                  <div className="mb-4 mt-4">{content}</div>
                </div>

                <div className="blog-details-previous">
                  <div className="prev-next">
                    <ul>
                      <li>
                        <Link href={`/news/details/${previousId}`}>
                          {tGeneral("Previous")}
                        </Link>
                      </li>
                      <li>
                        <Link href={`/news/details/${nextId}`}>
                          {tGeneral("Next")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
