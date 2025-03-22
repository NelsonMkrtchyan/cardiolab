import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import Doctors from "~/app/[locale]/staff/_components/Doctors";

export default function Page() {
  const tMenu = useTranslations("Menu");
  return (
    <>
      <PageBanner
        pageTitle={tMenu("Staff")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("Staff")}
        bgImage="/images/page-banner4.jpg"
      />

      <Doctors />
    </>
  );
}
