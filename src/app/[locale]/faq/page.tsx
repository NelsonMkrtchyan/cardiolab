import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import FaqContent from "~/app/[locale]/faq/_components/FaqContent";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="FAQ's"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      <FaqContent />
    </>
  );
}
