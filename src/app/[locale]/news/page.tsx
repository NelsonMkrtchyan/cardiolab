import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import BlogGrid from "~/app/[locale]/news/_components/BlogGrid";

export default function Page() {
  const tMenu = useTranslations("Menu");
  return (
    <>
      <PageBanner
        pageTitle={tMenu("News")}
        homePageUrl="/"
        homePageText={tMenu("Home")}
        activePageText={tMenu("News")}
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluksTbIS18CWlutzVsAX5GYHg2UMFhrJwcpLD1"
        bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui0dOInUMdgQAzE8HpcawsFuGDr9USml2KXOR"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluz5nGPbCJcmH7QjURruLeMoFslfS6nVvkpdNb"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluKWZHxMRdDYjSWptezyXaocLl2MNEinROhP1C"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluI6zTKNEmOVFpZEU45sKoR6bt7NDSv82hyxfg"
      />

      <BlogGrid />
    </>
  );
}
