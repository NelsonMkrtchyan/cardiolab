"use client";

import React from "react";
import { Link } from "~/i18n/routing";

interface PageBannerProps {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
  bgImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  bgImage,
}) => {
  return (
    <div className="page-title-area">
      <div
        className={"page-title-background-section"}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="d-table">
        <div className="d-table-cell">
          <div className="page-title-item">
            <h1>{pageTitle}</h1>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li className="active">{activePageText}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
