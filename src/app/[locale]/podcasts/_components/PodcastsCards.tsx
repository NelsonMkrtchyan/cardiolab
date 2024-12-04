"use client";

import React from "react";
import Card from "~/app/[locale]/podcasts/_components/Card";
import { useLocale } from "next-intl";
import { podcasts } from "~/constants/podcasts";

const PodcastsCards: React.FC = () => {
  const locale: string = useLocale();
  const localisedPodcasts = podcasts[locale as "en" | "ru" | "am"];
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
