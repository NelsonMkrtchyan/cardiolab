"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import type { AppPodcastType } from "~/types/podcasts";
import { getAllPodcasts } from "~/lib/sanity/queries";
import Card from "~/app/[locale]/gallery/podcasts/_components/Card";

const PodcastsCards: React.FC = () => {
  const locale = useLocale() as "am" | "en" | "ru";
  const [podcasts, setPodcasts] = useState<AppPodcastType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setError(null);
        const data = await getAllPodcasts();
        setPodcasts(data || []);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load podcasts";
        console.error("Error fetching podcasts:", err);
        setError("Unable to load podcasts. Please refresh the page.");
        setPodcasts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  if (loading) {
    return (
      <div className="podcasts-area pt-100 pb-70">
        <div className="container">
          <div className="py-5 text-center">Loading podcasts...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="podcasts-area pt-100 pb-70">
        <div className="container">
          <div
            style={{
              backgroundColor: "#f8d7da",
              color: "#721c24",
              padding: "15px 20px",
              borderRadius: "5px",
              marginBottom: "20px",
              border: "1px solid #f5c6cb",
            }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (podcasts.length === 0) {
    return (
      <div className="podcasts-area pt-100 pb-70">
        <div className="container">
          <div className="py-5 text-center">No podcasts available</div>
        </div>
      </div>
    );
  }

  // Already sorted by publishedAt desc from Sanity query
  const sortedPodcasts = podcasts;

  return (
    <div className="podcasts-area pt-100 pb-70">
      <div className="container">
        <div className="row g-1 justify-content-center">
          {sortedPodcasts.map((podcast) => (
            <Card key={`podcast-${podcast.id}`} podcast={podcast} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastsCards;
