// import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { gallery } from "~/constants/Gallery";
// import {LocaleT} from "~/types";

const useGallery = () => {
  // const locale: string = useLocale();
  const { slug } = useParams();

  // const currentNewsList = news[locale as LocaleT];

  const currentImageFolders =
    gallery.images.find((item) => item.id === Number(slug)) ?? null;

  const currentVideoFolders =
    gallery.videos.find((item) => item.id === Number(slug)) ?? null;

  // function getAllIds(arr: NewsI[]) {
  //   return arr.map((item) => item.id);
  // }
  //
  // const ids = getAllIds(currentNewsList);

  return { currentImageFolders, currentVideoFolders };
};

export default useGallery;
