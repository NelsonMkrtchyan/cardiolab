import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { news, type NewsI } from "~/constants/news";

const useNews = () => {
  const locale: string = useLocale();
  const { slug } = useParams();

  const currentNewsList = news[locale as "en" | "ru" | "am"];

  const currentNews =
    currentNewsList.find((item) => item.id === Number(slug)) ?? null;

  function getAllIds(arr: NewsI[]) {
    return arr.map((item) => item.id);
  }

  const ids = getAllIds(currentNewsList);

  return { currentNews, availableNewsIds: ids };
};

export default useNews;
