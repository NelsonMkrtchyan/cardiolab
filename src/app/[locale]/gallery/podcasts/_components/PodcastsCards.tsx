"use client";

import React from "react";
import { useLocale } from "next-intl";
import { podcasts } from "~/constants/podcasts";
import { type LocaleT } from "~/types";
import Card from "~/app/[locale]/gallery/podcasts/_components/Card";

const PodcastsCards: React.FC = () => {
  const locale: string = useLocale();
  const localisedPodcasts = podcasts[locale as LocaleT].sort(
    (a, b) => b.id - a.id,
  );
  return (
    <>
      <div className="podcasts-area pt-100 pb-70">
        <div className="container">
          <div className="row g-1 justify-content-center">
            {localisedPodcasts.map((podcast) => {
              return (
                <>
                  <Card podcast={podcast} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastsCards;
