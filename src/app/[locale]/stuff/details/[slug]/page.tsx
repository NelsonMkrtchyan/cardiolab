"use client";
import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import DetailsContent from "~/app/[locale]/stuff/_components/DetailsContent";
import { useTranslations } from "next-intl";
import useEmployee from "~/app/[locale]/stuff/_hooks/useEmployee";
import NotFound from "~/app/[locale]/not-found";

export default function Page() {
  const tMenu = useTranslations("Menu");
  const { currentEmployee } = useEmployee();
  return (
    <>
      <PageBanner
        pageTitle={currentEmployee?.name ?? tMenu("EmployeeDetails")}
        homePageUrl="/"
        homePageText={tMenu("Stuff")}
        activePageText={tMenu("EmployeeDetails")}
        bgImage="/images/page-banner2.jpg"
      />

      {currentEmployee && <DetailsContent employee={currentEmployee} />}

      {!currentEmployee && <NotFound />}

      {/*<div className="pb-100">*/}
      {/*  <AppointmentFormTwo />*/}
      {/*</div>*/}
    </>
  );
}
