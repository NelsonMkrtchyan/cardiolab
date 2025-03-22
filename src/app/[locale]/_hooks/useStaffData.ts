"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import type { employeeI } from "~/constants/staff";
import { type LocaleT } from "~/types";

export function useStaffData() {
  const locale = useLocale() as LocaleT;
  const [staff, setStaff] = useState<employeeI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStaffData() {
      try {
        setIsLoading(true);
        // Fetch from the API endpoint
        const response = await fetch(`/api/staff?locale=${locale}`);

        if (!response.ok) {
          throw new Error("Failed to fetch staff data");
        }

        const data: employeeI[] = (await response.json()) as employeeI[];
        setStaff(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    }

    void fetchStaffData().then();
  }, [locale]);

  return { staff, isLoading, error };
}
