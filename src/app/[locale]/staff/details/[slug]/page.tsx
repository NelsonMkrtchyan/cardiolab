"use client";
import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import DetailsContent from "~/app/[locale]/staff/_components/DetailsContent";
import { useTranslations } from "next-intl";
import useEmployee from "~/app/[locale]/staff/_hooks/useEmployee";
import NotFound from "~/app/[locale]/not-found";

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
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluksTbIS18CWlutzVsAX5GYHg2UMFhrJwcpLD1"
        bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui0dOInUMdgQAzE8HpcawsFuGDr9USml2KXOR"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluz5nGPbCJcmH7QjURruLeMoFslfS6nVvkpdNb"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluKWZHxMRdDYjSWptezyXaocLl2MNEinROhP1C"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluI6zTKNEmOVFpZEU45sKoR6bt7NDSv82hyxfg"
      />

      {currentEmployee && <DetailsContent employee={currentEmployee} />}

      {!currentEmployee && <NotFound />}

      {/*<div className="pb-100">*/}
      {/*  <AppointmentFormTwo />*/}
      {/*</div>*/}
    </>
  );
}
