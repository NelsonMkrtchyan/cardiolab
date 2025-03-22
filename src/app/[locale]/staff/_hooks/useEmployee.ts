import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { staff } from "~/constants/staff";
import { type LocaleT } from "~/types";

const useEmployee = () => {
  const locale: string = useLocale();
  const { slug } = useParams();

  const currentEmployee =
    staff[locale as LocaleT].find((employee) => employee.id === Number(slug)) ??
    null;

  return { currentEmployee };
};

export default useEmployee;
