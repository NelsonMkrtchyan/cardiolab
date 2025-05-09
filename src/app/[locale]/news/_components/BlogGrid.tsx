"use client";

import React from "react";
import { useLocale } from "next-intl";
import { news } from "~/constants/news";
import NewsCard from "~/app/[locale]/news/_components/NewsCard";
import { type LocaleT } from "~/types";

const BlogGrid: React.FC = () => {
  const locale: string = useLocale();
  const localisedNews = news[locale as LocaleT];

  return (
    <>
      <div className="blog-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {localisedNews.map((news) => {
              return (
                <>
                  <NewsCard news={news} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
