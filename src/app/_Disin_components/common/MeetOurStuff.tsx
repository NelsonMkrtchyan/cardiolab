"use client";

import { useLocale, useTranslations } from "next-intl";
import { stuff } from "~/constants/stuff";
import Card from "~/app/[locale]/stuff/_components/Card";
import React from "react";
import { Link } from "~/i18n/routing";

const MeetOurStuff = () => {
  const locale: string = useLocale();
  const localisedStuff = stuff[locale as "en" | "ru" | "am"];
  const tGeneral = useTranslations("General");

  return (
    <>
      {/*<div className="doctors-area doctors-area-two pt-100 pb-70">*/}
      {/*  <div className="container">*/}
      {/*    <div className="row justify-content-center">*/}
      {/*      {localisedStuff.slice(0, 3).map((employee) => {*/}
      {/*        return (*/}
      {/*          <>*/}
      {/*            <Card employee={employee} />*/}
      {/*          </>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="doctors-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>{tGeneral("MeetOurStuff")}</h2>
          </div>

          <div className="row justify-content-center">
            {localisedStuff.slice(0, 3).map((employee) => {
              return (
                <>
                  <Card employee={employee} />
                </>
              );
            })}
          </div>

          <div className="doctor-btn">
            <Link href="/stuff">{tGeneral("SeeAll")}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurStuff;
