"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoTop: React.FC = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop} className="go-top">
          <FaArrowUp className="icon" />
        </div>
      )}
    </>
  );
};

export default GoTop;
