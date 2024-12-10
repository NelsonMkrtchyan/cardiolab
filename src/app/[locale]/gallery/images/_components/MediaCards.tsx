import { Link } from "~/i18n/routing";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useLastViewedPhoto } from "~/app/[locale]/gallery/_hooks/useLastViewedPhoto";
import { gallery } from "~/constants/Gallery";

const MediaCards = () => {
  const { slug, imageId } = useParams();
  const galleryFolder = gallery.images.find(
    (folder) => folder.id === Number(slug),
  );
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
  }, [slug, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <div className="media-area pt-100 pb-70">
        <div className="container">
          <div className="row g-2 justify-content-center">
            {galleryFolder.images.map(({ id, url }) => {
              return (
                <div key={id} className="col-sm-6 col-lg-3 media-container">
                  <Link
                    href={`/gallery/images/${slug as string}/image/${id}`}
                    ref={
                      id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                    }
                    shallow
                    className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${url})` }}
                    />
                  </Link>
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
