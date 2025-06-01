import React, { Suspense } from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import { useTranslations } from "next-intl";
import DoctorsClientComponent from "~/app/[locale]/staff/_components/DoctorsClientComponent";
import Loader from "~/app/_Components/Loader";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");
  return (
    <>
      <PageBanner
        pageTitle={tMenu("Staff")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Staff")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      <Suspense fallback={<Loader />}>
        <DoctorsClientComponent />
      </Suspense>
    </>
  );
}
