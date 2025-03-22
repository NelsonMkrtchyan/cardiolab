"use client";

import React from "react";
import { useLocale } from "next-intl";
import { staff } from "~/constants/staff";
import Card from "~/app/[locale]/staff/_components/Card";
import { type LocaleT } from "~/types";

const Doctors = () => {
  const locale: string = useLocale();
  const localisedStaff = staff[locale as LocaleT];
  return (
    <>
      <div className="doctors-area doctors-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {localisedStaff.map((employee) => {
              return (
                <>
                  <Card employee={employee} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
