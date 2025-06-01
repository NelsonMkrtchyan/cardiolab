"use client";

import { useLocale } from "next-intl";
import { doctorGuides } from "~/constants/doctorGuide";
import { type LocaleT } from "~/types";
import BlueCard from "~/app/_Components/cards/BlueCard";

const DoctorGuideCards = () => {
  const locale: string = useLocale();
  const localisedDoctorGuides = doctorGuides[locale as LocaleT];
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="blue-card container">
          <div className="blue-card-item">
            <div className="row">
              {localisedDoctorGuides.map((guide) => {
                const { title, description, icon, path } = guide;

                return (
                  <>
                    <BlueCard
                      icon={icon}
                      path={`/doctorGuide${path}`}
                      title={title}
                      description={description}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorGuideCards;
