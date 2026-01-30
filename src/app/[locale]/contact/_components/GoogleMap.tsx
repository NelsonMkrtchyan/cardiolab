"use client";

import React from "react";
import { useLocale } from "next-intl";
import { type MapSection, getLocalizedValue } from "~/types/contactPage";

interface GoogleMapProps {
  mapSection: MapSection;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ mapSection }) => {
  const locale = useLocale() as "am" | "en" | "ru";
  const title = getLocalizedValue(mapSection.title, locale);

  return (
    <>
      <div className="landing-section map-area">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <iframe
          src={mapSection.googleMapsEmbedUrl}
          height="550"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
