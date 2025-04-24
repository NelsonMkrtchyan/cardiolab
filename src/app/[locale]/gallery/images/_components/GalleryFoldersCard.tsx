"use client";

import FolderCard from "~/app/[locale]/gallery/images/_components/FolderCard";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";

const GalleryFoldersCard = () => {
  const { galleryImages } = useGallery();

  return (
    <>
      <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row g-1 justify-content-center">
            {galleryImages.map((folder) => {
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
