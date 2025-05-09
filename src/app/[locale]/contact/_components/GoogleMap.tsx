"use client";

import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-area">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011.1713805387996!2d44.4892700995798!3d40.178709741018636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406ab92d0a44c263%3A0xa55dafc31955e32c!2sCardioLab%20Medical%20Center!5e0!3m2!1sen!2sam!4v1744544127491!5m2!1sen!2sam"
        // width="600"
        height="550"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
