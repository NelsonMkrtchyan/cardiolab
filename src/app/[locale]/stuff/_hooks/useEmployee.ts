import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { stuff } from "~/constants/stuff";

const useEmployee = () => {
  const locale: string = useLocale();
  const { slug } = useParams();
  const currentEmployee =
    stuff[locale as "en" | "ru" | "am"].find(
      (employee) => employee.id === Number(slug),
    ) ?? null;

  return { currentEmployee };
};

export default useEmployee;
