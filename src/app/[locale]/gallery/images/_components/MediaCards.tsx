import { Link } from "~/i18n/routing";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useLastViewedPhoto } from "~/app/[locale]/gallery/_hooks/useLastViewedPhoto";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";
import { type GalleryFolderType } from "~/constants/Gallery";

interface MediaCardsPropsI {
  folder: GalleryFolderType;
}

const MediaCards = ({ folder }: MediaCardsPropsI) => {
  const { slug, imageId } = useParams();

  const { list } = folder;

  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !imageId && lastViewedPhotoRef.current !== null) {
      lastViewedPhotoRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      setLastViewedPhoto(null);
    }
  }, [slug, lastViewedPhoto, setLastViewedPhoto, imageId]);

  return (
    <>
      <div className="media-area pt-100 pb-70">
        <div className="container">
          <div className="row g-2 justify-content-center">
            {list.map(({ id, url }) => {
              return (
                <div key={id} className="col-sm-6 col-lg-3 media-container">
                  <div
                    className="card-container"
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      overflow: "hidden",
                      borderRadius: "8px",
                      marginBottom: "20px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Link
                      href={`/gallery/images/${slug as string}/image/${id}`}
                      ref={
                        id === Number(lastViewedPhoto)
                          ? lastViewedPhotoRef
                          : null
                      }
                      shallow
                      className="after:content after:shadow-highlight group relative block h-full w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                      style={{
                        position: "relative",
                        display: "block",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <ImageWithLoader
                          src={`${url}`}
                          alt={`Gallery image ${id}`}
                          className="gallery-image"
                          fill={true}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default MediaCards;
