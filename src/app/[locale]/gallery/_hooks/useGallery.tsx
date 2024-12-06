// import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { gallery } from "~/constants/Gallery";

const useGallery = () => {
  // const locale: string = useLocale();
  const { slug } = useParams();

  // const currentNewsList = news[locale as "en" | "ru" | "am"];

  const currentFolder =
    gallery.find((item) => item.id === Number(slug)) ?? null;

  // function getAllIds(arr: NewsI[]) {
  //   return arr.map((item) => item.id);
  // }
  //
  // const ids = getAllIds(currentNewsList);

  return { currentFolder };
};

export default useGallery;
