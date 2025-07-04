"use client";
import React from "react";
import PageBanner from "~/app/_Components/PageBanner/PageBanner";
import DetailsContent from "~/app/[locale]/staff/_components/DetailsContent";
import { useTranslations } from "next-intl";
import useEmployee from "~/app/[locale]/staff/_hooks/useEmployee";
import { useParams } from "next/navigation";
import NotFound from "~/app/[locale]/not-found";
import ImagesDB from "~/constants/ImageDatabase.json";

export default function page() {
  const tMenu = useTranslations("Menu");
  const { slug } = useParams();
  const { employeeDoNotExist, name, role, image, personalInfo } = useEmployee();
  const staffId = slug ? parseInt(slug as string, 10) : undefined;
  return (
    <>
      <PageBanner
        pageTitle={name ?? tMenu("EmployeeDetails")}
        homePageUrl="/staff"
        homePageText={tMenu("Staff")}
        activePageText={tMenu("EmployeeDetails")}
        bgImage={`${ImagesDB.AbstractImages.abstract_two}`}
      />

      {!employeeDoNotExist && (
        <DetailsContent name={name} role={role} image={image} personalInfo={personalInfo} staffId={staffId} />
      )}

      {employeeDoNotExist && <NotFound />}

      {/*<div className="pb-100">*/}
      {/*  <AppointmentFormTwo />*/}
      {/*</div>*/}
    </>
  );
}
