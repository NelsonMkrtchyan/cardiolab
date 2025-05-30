"use client";
import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import DetailsContent from "~/app/[locale]/staff/_components/DetailsContent";
import { useTranslations } from "next-intl";
import useEmployee from "~/app/[locale]/staff/_hooks/useEmployee";
import NotFound from "~/app/[locale]/not-found";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function _page() {
  const tMenu = useTranslations("Menu");
  const { employeeDoNotExist, name, role, image } = useEmployee();
  return (
    <>
      <PageBanner
        pageTitle={name ?? tMenu("EmployeeDetails")}
        homePageUrl="/"
        homePageText={tMenu("Staff")}
        activePageText={tMenu("EmployeeDetails")}
        bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
      />

      {!employeeDoNotExist && (
        <DetailsContent name={name} role={role} image={image} />
      )}

      {employeeDoNotExist && <NotFound />}

      {/*<div className="pb-100">*/}
      {/*  <AppointmentFormTwo />*/}
      {/*</div>*/}
    </>
  );
}
