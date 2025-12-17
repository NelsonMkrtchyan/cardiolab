"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import type { AppPodcastType } from "~/types/podcasts";
import {
  getPodcastDisplayTitle,
  getPodcastDisplayDescription,
  formatPodcastDate,
  getYouTubeThumbnail,
} from "~/types/podcasts";

interface CardProps {
  podcast: AppPodcastType;
  locale: "am" | "en" | "ru";
}

const Card = ({ podcast, locale }: CardProps) => {
  const [toggler, setToggler] = useState(false);

  const title = getPodcastDisplayTitle(podcast.title, locale);
  const description = getPodcastDisplayDescription(podcast.description, locale);
  const formattedDate = formatPodcastDate(podcast.publishedAt, locale);

  // Use thumbnail if available, otherwise generate from YouTube URL
  const thumbnailUrl =
    podcast.thumbnail || getYouTubeThumbnail(podcast.videoUrl);

  return (
    <>
      {podcast.videoUrl && (
        <FsLightbox toggler={toggler} sources={[podcast.videoUrl]} />
      )}
      <div
        className="col-sm-6 col-lg-4 podcast-card"
        onClick={() => setToggler(!toggler)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setToggler(!toggler);
          }
        }}
      >
        <div className="podcast-card-content-container">
          <div className="podcast-item">
            <div className="podcast-front">
              <h3>{title}</h3>
              {description && <p>{description}</p>}
            </div>
          </div>
          {thumbnailUrl && (
            <div
              className="video-area card-video"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            />
          )}
          <div className="podcast-item">
            <div className="podcast-front">
              <p className="text-muted text-small">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
