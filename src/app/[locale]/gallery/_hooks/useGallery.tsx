"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { type AppGalleryType } from "~/types/gallery";

const useGallery = () => {
  const { slug } = useParams();
  const locale = useLocale();
  const [galleries, setGalleries] = useState<AppGalleryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/galleries?locale=${locale}`);

        if (!response.ok) {
          throw new Error("Failed to fetch galleries");
        }

        const data = (await response.json()) as AppGalleryType[];
        setGalleries(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching galleries:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch galleries");
      } finally {
        setLoading(false);
      }
    };

    void fetchGalleries();
  }, [locale]);

  const galleryImages = galleries.filter((g) => g.type === "images");
  const galleryVideos = galleries.filter((g) => g.type === "videos");

  const currentImageFolder =
    galleryImages.find((item) => item.slug === slug || item.id === Number(slug)) ?? null;

  const currentVideoFolder =
    galleryVideos.find((item) => item.slug === slug || item.id === Number(slug)) ?? null;

  return {
    galleryImages,
    galleryVideos,
    currentImageFolder,
    currentVideoFolder,
    loading,
    error,
  };
};

export default useGallery;
