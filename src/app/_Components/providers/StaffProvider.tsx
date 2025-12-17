"use client";

import React, { createContext, useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { type AppStaffType } from "~/types/staff";
import { type LocaleT } from "~/types";

export interface StaffContextType {
  staff: AppStaffType[];
  isLoading: boolean;
  error: Error | null;
}

export const StaffContext = createContext<StaffContextType | null>(null);

interface StaffProviderProps {
  children: React.ReactNode;
}

export function StaffProvider({ children }: StaffProviderProps) {
  const locale = useLocale() as LocaleT;
  const [staff, setStaff] = useState<AppStaffType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Use API endpoint to get localized staff data
        const response = await fetch(`/api/staff?locale=${locale}`);
        if (!response.ok) {
          throw new Error("Failed to fetch staff data");
        }
        const data: AppStaffType[] = (await response.json()) as AppStaffType[];
        setStaff(data || []);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch staff"),
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaff();
  }, [locale]);

  const value: StaffContextType = {
    staff,
    isLoading,
    error,
  };

  return (
    <StaffContext.Provider value={value}>{children}</StaffContext.Provider>
  );
}

export function useStaffContext() {
  const context = React.useContext(StaffContext);
  if (!context) {
    throw new Error("useStaffContext must be used within StaffProvider");
  }
  return context;
}
