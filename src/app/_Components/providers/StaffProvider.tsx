"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { getAllStaff } from "~/lib/sanity/queries";
import { type EmployeeType } from "~/constants/staff";

export interface StaffContextType {
  staff: EmployeeType[];
  isLoading: boolean;
  error: Error | null;
}

export const StaffContext = createContext<StaffContextType | null>(null);

interface StaffProviderProps {
  children: React.ReactNode;
}

export function StaffProvider({ children }: StaffProviderProps) {
  const [staff, setStaff] = useState<EmployeeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getAllStaff();
        setStaff(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch staff"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const value: StaffContextType = {
    staff,
    isLoading,
    error,
  };

  return (
    <StaffContext.Provider value={value}>
      {children}
    </StaffContext.Provider>
  );
}

export function useStaffContext() {
  const context = React.useContext(StaffContext);
  if (!context) {
    throw new Error("useStaffContext must be used within StaffProvider");
  }
  return context;
}
