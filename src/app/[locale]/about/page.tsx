import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import AboutContent from "~/app/[locale]/about/_components/AboutContent/AboutContent";
import { getTranslations } from "next-intl/server";
import Services from "~/app/_Disin_components/common/Services";

import ImagesDB from "~/constants/ImageDatabase.json";
import SatisfactionSurvey from "~/app/_Components/SatisfactionSurvey/SatisfactionSurvey";
import OurExpertise from "~/app/_Components/OurExpertise/OurExpertise";
import ServicesSection from "~/app/[locale]/services/_components/ServicesSection/ServicesSection";
import { ServicesCategory } from "~/constants/priceList";
import { getAboutPage } from "~/lib/sanity/queries";

export default async function About() {
  const tMenu = await getTranslations("Menu");
  const aboutPage = await getAboutPage();

  if (!aboutPage) {
    // Fallback if no data in Sanity yet
    return (
      <>
        <PageBanner
          pageTitle={tMenu("AboutUs")}
          homePageUrl="/"
          homePageText={tMenu("Home")}
          activePageText={tMenu("AboutUs")}
          bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        />
        <div className="container py-5">
          <p>About page content is being configured. Please check back soon.</p>
        </div>
        <ServicesSection />
      </>
    );
  }

  return (
    <>
      <PageBanner
        pageTitle={tMenu("AboutUs")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("AboutUs")}
        bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
      />
      <AboutContent mainSection={aboutPage.mainSection} />
      <OurExpertise aboutPage={aboutPage} />
      {aboutPage.satisfactionSurvey.showSection && (
        <SatisfactionSurvey satisfactionSurvey={aboutPage.satisfactionSurvey} />
      )}
      {/*<Services />*/}
      {/*<ServicesSection />*/}
      {/*// In your AboutUs component:*/}
      <ServicesSection />
    </>
  );
}
