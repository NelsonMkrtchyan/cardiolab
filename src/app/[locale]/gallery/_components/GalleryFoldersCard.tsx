"use client";

import { gallery } from "~/constants/Gallery";
import FolderCard from "~/app/[locale]/gallery/_components/FolderCard";

const GalleryFoldersCard = () => {
  return (
    <>
      <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row g-1 justify-content-center">
            {gallery.map((folder) => {
              return (
                <>
                  <FolderCard folder={folder} key={folder.id} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryFoldersCard;
