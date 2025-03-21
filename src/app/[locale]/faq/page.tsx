import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import FaqContent from "~/app/[locale]/faq/_components/FaqContent";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="FAQ's"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImage="/images/page-banner1.jpg"
      />

      <FaqContent />
    </>
  );
}
