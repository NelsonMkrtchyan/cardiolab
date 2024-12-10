import Image from "next/image";
import { type ImageProps } from "~/types";
import { useRouter } from "~/i18n/routing";
import { useParams } from "next/navigation";
import { useLastViewedPhoto } from "~/app/[locale]/gallery/_hooks/useLastViewedPhoto";
import { gallery } from "~/constants/Gallery";
import SharedModal from "~/app/[locale]/gallery/images/_components/SharedModal";

const Carousel = ({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
}) => {
  const router = useRouter();
  const { slug, imageId } = useParams();
  const images = gallery.images.find(
    (folder) => folder.id === Number(slug),
  ).images;
  const [, setLastViewedPhoto] = useLastViewedPhoto();

  function closeModal() {
    setLastViewedPhoto(currentPhoto.id);
    router.push(`/gallery/images/${slug as string}`, undefined, {
      shallow: true,
    });
  }

  function changePhotoId(newVal: number) {
    if (newVal >= 0 && newVal < images.length) {
      router.push(
        `/gallery/images/${slug as string}/image/${images[newVal].id}`,
        undefined,
        { shallow: true },
      );
    }
  }

  return (
    <>
      <div className="media-image-carousel-wrapper position-fixed w-100 h-100 d-flex align-items-center justify-content-center start-0 top-0">
        <button
          className="media-image-carousel-btn position-absolute w-100 h-100 start-0 top-0"
          onClick={closeModal}
        >
          <Image
            src={currentPhoto.url}
            className="pe-none h-100 w-100"
            alt="blurred background"
            priority={true}
            fill
          />
        </button>
        <SharedModal
          index={index}
          changePhotoId={changePhotoId}
          images={images}
          currentPhoto={currentPhoto}
          closeModal={closeModal}
          navigation={true}
        />
      </div>
    </>
  );
};

export default Carousel;
