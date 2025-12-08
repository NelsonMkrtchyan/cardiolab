import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { type LocaleString } from "~/constants/staff";
import { type LocaleT } from "~/types";
import { getStaffById } from "~/lib/sanity/queries";

const useEmployee = () => {
  const locale: string = useLocale();
  const { slug } = useParams();
  const [currentEmployee, setCurrentEmployee] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        const employee = await getStaffById(Number(slug));
        setCurrentEmployee(employee);
      } catch (error) {
        console.error("Error fetching employee:", error);
        setCurrentEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchEmployee();
    }
  }, [slug]);

  const employeeDoNotExist = !currentEmployee && !loading;

  const getLocalizedValue = (field?: LocaleString | null): string | null => {
    if (!field) return null;
    const value = field[locale as LocaleT] ?? field.am;
    return typeof value === 'string' ? value : Array.isArray(value) ? value.join(', ') : null;
  };

  const name = currentEmployee ? getLocalizedValue(currentEmployee.name) : null;
  const role = currentEmployee ? getLocalizedValue(currentEmployee.role) : null;
  const image = currentEmployee?.image ?? null;

  return { employeeDoNotExist, name, role, image, personalInfo: currentEmployee?.personalInfo, loading };
};

export default useEmployee;
