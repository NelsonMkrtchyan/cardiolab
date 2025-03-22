"use client";

import { useStaffData } from "../../_hooks/useStaffData";
import Card from "~/app/[locale]/staff/_components/Card";
import React from "react";
import Loader from "~/app/_Components/Loader";
import ErrorMessage from "~/app/_Components/ErrorMessage";

export default function DoctorsClientComponent() {
  const { staff, isLoading, error } = useStaffData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <div className="doctors-area doctors-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {staff.map((employee) => {
              return (
                <>
                  <Card employee={employee} disabled={true} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
