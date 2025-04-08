"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import useDoctorGuides from "~/app/[locale]/doctorGuide/_hooks/useDoctorGuides";
import GuideDetails from "~/app/[locale]/doctorGuide/_components/GuideDetails";

const Page = () => {
  const tMenu = useTranslations("Menu");

  const { currentDoctorGuide } = useDoctorGuides();
  return (
    <>
      <PageBanner
        pageTitle={tMenu("AccreditedTrainings")}
        homePageUrl="/doctorGuide"
        homePageText={tMenu("DoctorGuide")}
        activePageText={tMenu("AccreditedTrainings")}
        bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluksTbIS18CWlutzVsAX5GYHg2UMFhrJwcpLD1"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui0dOInUMdgQAzE8HpcawsFuGDr9USml2KXOR"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluz5nGPbCJcmH7QjURruLeMoFslfS6nVvkpdNb"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluKWZHxMRdDYjSWptezyXaocLl2MNEinROhP1C"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluI6zTKNEmOVFpZEU45sKoR6bt7NDSv82hyxfg"
      />
      {currentDoctorGuide && <GuideDetails currentGuide={currentDoctorGuide} />}
    </>
  );
};

export default Page;
