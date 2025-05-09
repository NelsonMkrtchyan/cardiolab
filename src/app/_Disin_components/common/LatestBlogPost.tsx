"use client";

import React from "react";
import NewsCard from "~/app/[locale]/news/_components/NewsCard";
import { useLocale, useTranslations } from "next-intl";
import { news } from "~/constants/news";
import { Link } from "~/i18n/routing";
import { type LocaleT } from "~/types";

const LatestBlogPost: React.FC = () => {
  const locale: string = useLocale();
  const localisedNews = news[locale as LocaleT];
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="blog-area-two pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{tGeneral("OurNews")}</h2>
          </div>

          <div className="row">
            {localisedNews.slice(0, 3).map((news) => {
              return <NewsCard key={news.id} news={news} />;
            })}
          </div>
          <div className="button-type-1">
            <Link href="/news">{tGeneral("SeeAll")}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
