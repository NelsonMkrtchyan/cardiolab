"use client";
import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import ServiceDetailsContent from "~/app/[locale]/services/_components/ServiceDetailsContent";
import { useRouter } from "~/i18n/routing";
import { useTranslations } from "next-intl";

export default function Page() {
  const tMenu = useTranslations("Menu");
  const router = useRouter();

  return (
    <>
      <PageBanner
        pageTitle={tMenu("ServiceDetails")}
        homePageUrl="/services"
        homePageText={tMenu("Services")}
        activePageText={tMenu("ServiceDetails")}
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluksTbIS18CWlutzVsAX5GYHg2UMFhrJwcpLD1"
        bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui0dOInUMdgQAzE8HpcawsFuGDr9USml2KXOR"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluz5nGPbCJcmH7QjURruLeMoFslfS6nVvkpdNb"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluKWZHxMRdDYjSWptezyXaocLl2MNEinROhP1C"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluI6zTKNEmOVFpZEU45sKoR6bt7NDSv82hyxfg"
      />

      <ServiceDetailsContent />
    </>
  );
}
