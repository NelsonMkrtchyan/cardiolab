"use client";

import { useStaffData } from "../../_hooks/useStaffData";
import Card from "~/app/[locale]/staff/_components/Card";
import React from "react";
import Loader from "~/app/_Components/Loader";
import ErrorMessage from "~/app/_Components/ErrorMessage";
import { categorizedStaffOrder } from "~/constants/staff";
import { useTranslations } from "next-intl";

export default function DoctorsClientComponent() {
  const tStaff = useTranslations("Staff");

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
            {categorizedStaffOrder.map((category) => {
              const filteredStaff = staff.filter(
                (employee) =>
                  employee.category === category && employee.visibility,
              );

              if (filteredStaff.length === 0) return null;

              return (
                <>
                  <div className="ptb-30 container">
                    <div className="section-title">
                      <h2>{tStaff(category)}</h2>
                    </div>
                  </div>

                  <div className={"staff-cards-area"}>
                    {filteredStaff.map((employee) => {
                      return (
                        <div
                          key={employee.id}
                          className="staff-cards-wrapper col-sm-6 col-lg-3"
                        >
                          <Card employee={employee} />
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
