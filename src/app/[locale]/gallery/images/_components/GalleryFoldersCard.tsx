"use client";

import FolderCard from "~/app/[locale]/gallery/images/_components/FolderCard";
import useGallery from "~/app/[locale]/gallery/_hooks/useGallery";

const GalleryFoldersCard = () => {
  const { galleryImages, loading, error } = useGallery();

  if (loading) {
    return (
      <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row g-1 justify-content-center">
            <div className="col-12 text-center">
              <p>Loading galleries...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row g-1 justify-content-center">
            <div className="col-12 text-center">
              <p className="text-danger">Error loading galleries: {error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row g-1 justify-content-center">
            <div className="col-12 text-center">
              <p>No galleries found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row g-1 justify-content-center">
            {galleryImages
              .sort((a, b) => {
                if (a.order !== undefined && b.order !== undefined) {
                  return a.order - b.order;
                }
                if (a.publishedAt && b.publishedAt) {
                  return (
                    new Date(a.publishedAt).getTime() -
                    new Date(b.publishedAt).getTime()
                  );
                }
                return 0;
              })
              .map((folder) => {
                return <FolderCard folder={folder} key={folder.id} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryFoldersCard;
