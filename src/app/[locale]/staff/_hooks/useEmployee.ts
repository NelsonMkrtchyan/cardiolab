"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { type LocaleT } from "~/types";
import { type AppStaffType } from "~/types/staff";

const useEmployee = () => {
  const locale = useLocale() as LocaleT;
  const { slug } = useParams();
  const [currentEmployee, setCurrentEmployee] = useState<AppStaffType | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const PLACEHOLDER_IMAGE =
    "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluSH3gZgnEW7pyXzGrTZQb21kmdgPfAOJ8h3NC";

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        setError(null);
        // Use API endpoint to get localized staff data
        const response = await fetch(`/api/staff?locale=${locale}`);
        if (!response.ok) {
          throw new Error("Failed to fetch staff data");
        }
        const allStaff: AppStaffType[] =
          (await response.json()) as AppStaffType[];
        // Find staff member by ID
        const staffId = Number(slug);
        const employee = allStaff.find((staff) => staff.id === staffId);
        setCurrentEmployee(employee ?? null);
      } catch (err) {
        console.error("Error fetching employee:", err);
        setError(
          err instanceof Error ? err : new Error("Failed to fetch employee"),
        );
        setCurrentEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchEmployee();
    }
  }, [slug, locale]);

  const employeeDoNotExist = !currentEmployee && !loading;

  console.log("currentEmployee", currentEmployee);

  return {
    employeeDoNotExist,
    name: currentEmployee?.name ?? null,
    role: currentEmployee?.role ?? null,
    image: currentEmployee?.image ?? PLACEHOLDER_IMAGE,
    personalInfo: currentEmployee?.personalInfo,
    loading,
    error,
  };
};

export default useEmployee;
