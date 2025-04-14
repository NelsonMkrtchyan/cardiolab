"use client";
import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import DetailsContent from "~/app/[locale]/staff/_components/DetailsContent";
import { useTranslations } from "next-intl";
import useEmployee from "~/app/[locale]/staff/_hooks/useEmployee";
import NotFound from "~/app/[locale]/not-found";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function Page() {
  const tMenu = useTranslations("Menu");
  const { currentEmployee } = useEmployee();
  return (
    <>
      <PageBanner
        pageTitle={currentEmployee?.name ?? tMenu("EmployeeDetails")}
        homePageUrl="/"
        homePageText={tMenu("Staff")}
        activePageText={tMenu("EmployeeDetails")}
        // bgImage={`${ImagesDB.AbstractImages.abstract_one}`}
        bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_three}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_four}`}
        // bgImage={`${ImagesDB.AbstractImages.abstract_five}`}
      />

      {currentEmployee && <DetailsContent employee={currentEmployee} />}

      {!currentEmployee && <NotFound />}

      {/*<div className="pb-100">*/}
      {/*  <AppointmentFormTwo />*/}
      {/*</div>*/}
    </>
  );
}
