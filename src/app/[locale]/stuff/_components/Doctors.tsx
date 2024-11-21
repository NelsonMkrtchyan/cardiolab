"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { stuff } from "~/constants/stuff";
import Card from "~/app/[locale]/stuff/_components/Card";

const Doctors: React.FC = () => {
  const locale: string = useLocale();
  const localisedStuff = stuff[locale as "en" | "ru" | "am"];
  return (
    <>
      <div className="doctors-area doctors-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {localisedStuff.map((employee) => {
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
