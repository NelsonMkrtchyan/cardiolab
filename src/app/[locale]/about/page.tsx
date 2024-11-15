import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import AboutContent from "~/app/[locale]/about/_components/AboutContent";
import { useTranslations } from "next-intl";
import FunFacts from "~/app/_Disin_components/common/FunFacts";
import OurExpertise from "~/app/_Disin_components/common/OurExpertise";
import Services from "~/app/_Disin_components/common/Services";

export default function About() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("AboutUs")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("AboutUs")}
        bgImage="/images/page-banner1.jpg"
      />

      <AboutContent />

      <FunFacts />

      <OurExpertise />

      <Services />

      {/*<TestimonialSlider />*/}

      {/*<LatestBlogPost />*/}
    </>
  );
}
