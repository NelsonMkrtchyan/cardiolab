import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import ContactInfo from "~/app/[locale]/contact/_components/ContactInfo";
import { getTranslations } from "next-intl/server";
import GoogleMap from "~/app/[locale]/contact/_components/GoogleMap";
import ContactForm from "~/app/[locale]/contact/_components/ContactForm";
import ImagesDB from "~/constants/ImageDatabase.json";
import SatisfactionSurvey from "~/app/_Components/SatisfactionSurvey/SatisfactionSurvey";
import { getContactPage, getAboutPage } from "~/lib/sanity/queries";

export default async function Page() {
  const tMenu = await getTranslations("Menu");
  const contactPage = await getContactPage();
  const aboutPage = await getAboutPage();

  if (!contactPage) {
    return (
      <>
        <PageBanner
          pageTitle={tMenu("ContactUs")}
          homePageUrl="/"
          homePageText={tMenu("Home")}
          activePageText={tMenu("ContactUs")}
          bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        />
        <div className="container py-5">
          <p>
            Contact page content is being configured. Please check back soon.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <PageBanner
        pageTitle={tMenu("ContactUs")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("ContactUs")}
        bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
      />

      <ContactInfo contactInfo={contactPage.contactInfo} />

      <ContactForm contactForm={contactPage.contactForm} />

      {aboutPage?.satisfactionSurvey.showSection && (
        <SatisfactionSurvey satisfactionSurvey={aboutPage.satisfactionSurvey} />
      )}

      <GoogleMap mapSection={contactPage.mapSection} />
    </>
  );
}
