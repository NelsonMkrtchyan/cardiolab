"use client";

import { useLocale } from "next-intl";
import { patientGuides } from "~/constants/patientGuide";
import BlueCard from "~/app/_Components/cards/BlueCard";
import { type LocaleT } from "~/types";

const PatientGuideCards = () => {
  const locale: string = useLocale();
  const localisedPatientGuides = patientGuides[locale as LocaleT];
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="blue-card container">
          <div className="blue-card-item">
            <div className="row">
              {localisedPatientGuides.map((guide) => {
                const { title, description, icon, path } = guide;
                return (
                  <>
                    <BlueCard
                      icon={icon}
                      path={`/patientGuide${path}`}
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

export default PatientGuideCards;
