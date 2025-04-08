"use client";

import PageBanner from "~/app/_Disin_components/common/PageBanner";
import React from "react";
import { useTranslations } from "next-intl";
import DoctorGuideCards from "~/app/[locale]/doctorGuide/_components/DoctorGuideCards";

const Page = () => {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("DoctorGuide")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("DoctorGuide")}
        bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluksTbIS18CWlutzVsAX5GYHg2UMFhrJwcpLD1"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui0dOInUMdgQAzE8HpcawsFuGDr9USml2KXOR"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluz5nGPbCJcmH7QjURruLeMoFslfS6nVvkpdNb"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluKWZHxMRdDYjSWptezyXaocLl2MNEinROhP1C"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluI6zTKNEmOVFpZEU45sKoR6bt7NDSv82hyxfg"
      />

      <DoctorGuideCards />
    </>
  );
};

export default Page;
