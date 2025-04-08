"use client";

import React from "react";
import PageBanner from "~/app/_Disin_components/common/PageBanner";
import { useLocale, useTranslations } from "next-intl";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";
import { getLocalisedName } from "~/utils/helpers";
import MediaCards from "~/app/[locale]/gallery/images/_components/MediaCards";

export default function Page() {
  const locale: string = useLocale();

  const tMenu = useTranslations("Menu");
  const { currentImageFolders } = useGallery();

  return (
    <>
      <PageBanner
        pageTitle={
          currentImageFolders?.name
            ? getLocalisedName({
                object: currentImageFolders.name,
                locale,
              })
            : tMenu("Gallery.Folder")
        }
        homePageUrl="/gallery/images"
        homePageText={tMenu("Gallery.Gallery")}
        activePageText={tMenu("Gallery.Folder")}
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluksTbIS18CWlutzVsAX5GYHg2UMFhrJwcpLD1"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWlui0dOInUMdgQAzE8HpcawsFuGDr9USml2KXOR"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluz5nGPbCJcmH7QjURruLeMoFslfS6nVvkpdNb"
        // bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluKWZHxMRdDYjSWptezyXaocLl2MNEinROhP1C"
        bgImage="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluI6zTKNEmOVFpZEU45sKoR6bt7NDSv82hyxfg"
      />

      {currentImageFolders && <MediaCards />}
    </>
  );
}
