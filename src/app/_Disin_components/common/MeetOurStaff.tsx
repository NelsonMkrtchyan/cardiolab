"use client";

import { useLocale, useTranslations } from "next-intl";
import { staff } from "~/constants/staff";
import Card from "~/app/[locale]/staff/_components/Card";
import React from "react";
import { Link } from "~/i18n/routing";
import { type LocaleT } from "~/types";

const MeetOurStaff = () => {
  const locale: string = useLocale();
  const localisedStaff = staff[locale as LocaleT];
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="doctors-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>{tGeneral("MeetOurStaff")}</h2>
          </div>

          <div className="row justify-content-center">
            {localisedStaff.slice(0, 3).map((employee) => {
              return <Card key={employee.id} employee={employee} />;
            })}
          </div>

          <div className="button-type-1">
            <Link href="/staff">{tGeneral("SeeAll")}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurStaff;
