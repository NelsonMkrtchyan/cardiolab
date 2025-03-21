"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import useNews from "~/app/[locale]/news/_hooks/useNews";
import BlogDetailsContent from "~/app/[locale]/news/_components/BlogDetailsContent";
import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";

export default function Page() {
  const tMenu = useTranslations("Menu");
  const { currentNews, availableNewsIds } = useNews({});

  return (
    <>
      <PageBanner
        pageTitle={currentNews?.title ?? tMenu("EmployeeDetails")}
        homePageUrl="/news"
        homePageText={tMenu("News")}
        activePageText={tMenu("News")}
        bgImage="/images/page-banner4.jpg"
      />

      {currentNews && (
        <BlogDetailsContent
          currentNews={currentNews}
          availableNewsIds={availableNewsIds}
        />
      )}

      <LatestBlogPost />
    </>
  );
}
