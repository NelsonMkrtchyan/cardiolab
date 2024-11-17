"use client";

import React from "react";
import NewsCard from "~/app/[locale]/news/_components/NewsCard";
import { useLocale } from "next-intl";
import { news } from "~/constants/news";

const LatestBlogPost: React.FC = () => {
  const locale: string = useLocale();
  const localisedNews = news[locale as "en" | "ru" | "am"];

  return (
    <>
      <div className="blog-area-two pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
          </div>

          <div className="row">
            {localisedNews.slice(0, 3).map((news) => {
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

export default LatestBlogPost;
