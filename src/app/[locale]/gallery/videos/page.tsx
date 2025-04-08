import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useTranslations } from "next-intl";
import PodcastsCards from "~/app/[locale]/podcasts/_components/PodcastsCards";

export default function Page() {
  const tMenu = useTranslations("Menu");

  return (
    <>
      <PageBanner
        pageTitle={tMenu("Gallery.Videos")}
        homePageUrl="/gallery"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Videos")}
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluksTbIS18CWlutzVsAX5GYHg2UMFhrJwcpLD1"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui0dOInUMdgQAzE8HpcawsFuGDr9USml2KXOR"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluz5nGPbCJcmH7QjURruLeMoFslfS6nVvkpdNb"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluKWZHxMRdDYjSWptezyXaocLl2MNEinROhP1C"
        bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluI6zTKNEmOVFpZEU45sKoR6bt7NDSv82hyxfg"
      />
      <PodcastsCards />
    </>
  );
}
