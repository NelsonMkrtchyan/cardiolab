import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import BlogGrid from "~/app/[locale]/news/_components/BlogGrid";

export default function Page() {
  const tMenu = useTranslations("Menu");
  return (
    <>
      <PageBanner
        pageTitle={tMenu("News")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("News")}
        bgImage="/images/page-banner2.jpg"
      />

      <BlogGrid />
    </>
  );
}
