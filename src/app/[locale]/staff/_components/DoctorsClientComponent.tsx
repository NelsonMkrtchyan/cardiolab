"use client";

import { useStaffData } from "../../_hooks/useStaffData";
import Card from "~/app/[locale]/staff/_components/Card";
import React from "react";
import Loader from "~/app/_Components/Loader";
import ErrorMessage from "~/app/_Components/ErrorMessage";
import { categorizedStaffOrder } from "~/constants/staff";
import { useTranslations } from "next-intl";

const PLACEHOLDER_IMAGE = "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluSH3gZgnEW7pyXzGrTZQb21kmdgPfAOJ8h3NC";

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
                  employee.category === category && employee.visibility?.showInStaffPage,
              );

              if (filteredStaff.length === 0) return null;

              return (
                <React.Fragment key={category}>
                  <div className="ptb-30 container">
                    <div className="section-title">
                      <h2>{tStaff(category)}</h2>
                    </div>
                  </div>

                  <div className={"staff-cards-area"}>
                    {filteredStaff.map((employee) => {
                      const employeeWithPlaceholder = {
                        ...employee,
                        image: employee.image || PLACEHOLDER_IMAGE,
                      };
                      return (
                        <div
                          key={`${category}-${employee.id}`}
                          className="staff-cards-wrapper col-10 col-sm-6 col-lg-3"
                        >
                          <Card employee={employeeWithPlaceholder} />
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
