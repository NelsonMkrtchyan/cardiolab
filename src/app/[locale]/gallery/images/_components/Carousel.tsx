import Image from "next/image";
import { type ImageProps } from "~/types";
import { useRouter } from "~/i18n/routing";
import { useParams } from "next/navigation";
import { useLastViewedPhoto } from "~/app/[locale]/gallery/_hooks/useLastViewedPhoto";
import { gallery } from "~/constants/Gallery";
import SharedModal from "~/app/[locale]/gallery/images/_components/SharedModal";
import ImageWithLoader from "~/app/_Components/ImageWithLoader";

const Carousel = ({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
}) => {
  const router = useRouter();
  const { slug, imageId } = useParams();
  const galleryFolder = gallery.images.find(
    (folder) => folder.id === Number(slug),
  ) || { id: 0, title: "", images: [] };
  const images = galleryFolder.images;
  const [, setLastViewedPhoto] = useLastViewedPhoto();

  function closeModal() {
    // Set the last viewed photo ID to help with scrolling when returning to the gallery
    // Cast the ID to any to avoid type issues
    // This is safe because we know the hook can handle this value
    setLastViewedPhoto(currentPhoto.id as any);
    // Navigate back to the gallery page
    router.push(`/gallery/images/${slug as string}`);
  }

  function changePhotoId(newVal: number) {
    if (newVal >= 0 && newVal < images.length) {
      const imageId = images[newVal]?.id;
      if (imageId !== undefined) {
        // Navigate to the new image
        router.push(`/gallery/images/${slug as string}/image/${imageId}`);
      }
    }
  }

  return (
    <>
      <div
        className="media-image-carousel-wrapper position-fixed w-100 h-100 d-flex align-items-center justify-content-center start-0 top-0"
        style={{ zIndex: 9999 }}
      >
        {/* Dark backdrop with blur */}
        <div
          className="carousel-backdrop"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 1,
          }}
        ></div>

        {/* Background image (blurred) */}
        <div
          className="background-image-container position-absolute w-100 h-100 start-0 top-0"
          style={{ zIndex: 2, opacity: 0.15 }}
        >
          <ImageWithLoader
            src={currentPhoto.url}
            className="pe-none object-fit-contain"
            alt="blurred background"
            priority={true}
            fill={true}
          />
        </div>

        {/* Close button overlay */}
        <button
          className="media-image-carousel-btn position-absolute w-100 h-100 start-0 top-0"
          onClick={closeModal}
          style={{
            zIndex: 3,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        ></button>
        {/* Main content (SharedModal) */}
        <div style={{ position: "relative", zIndex: 5 }}>
          <SharedModal
            index={index}
            changePhotoId={changePhotoId}
            images={images}
            currentPhoto={currentPhoto}
            closeModal={closeModal}
            navigation={true}
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
