import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { type EmployeeType, type LocaleString, staff } from "~/constants/staff";
import { type LocaleT } from "~/types";

const useEmployee = () => {
  const locale: string = useLocale();
  const { slug } = useParams();

  const currentEmployee: EmployeeType | null =
    staff.find((employee) => employee.id === Number(slug)) ?? null;

  const employeeDoNotExist = !currentEmployee;

  const getLocalizedValue = (field?: LocaleString | null): string | null => {
    if (!field) return null;
    return field[locale as LocaleT] ?? field.am ?? null;
  };

  const name = currentEmployee ? getLocalizedValue(currentEmployee.name) : null;
  const role = currentEmployee ? getLocalizedValue(currentEmployee.role) : null;
  const image = currentEmployee?.image ?? null;

  return { employeeDoNotExist, name, role, image };
};

export default useEmployee;
