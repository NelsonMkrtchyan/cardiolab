"use client";

import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import { useTranslations } from "next-intl";
import useNews from "~/app/[locale]/news/_hooks/useNews";
import BlogDetailsContent from "~/app/[locale]/news/_components/BlogDetailsContent";
import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";
import ImagesDB from "~/constants/ImageDatabase.json";

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
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
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
