import { useParams } from "next/navigation";
import { galleryImages, galleryVideos } from "~/constants/Gallery";

const useGallery = () => {
  const { slug } = useParams();

  const currentImageFolder =
    galleryImages.find((item) => item.id === Number(slug)) ?? null;

  const currentVideoFolder =
    galleryVideos.find((item) => item.id === Number(slug)) ?? null;

  return {
    galleryImages,
    galleryVideos,
    currentImageFolder,
    currentVideoFolder,
  };
};

export default useGallery;
