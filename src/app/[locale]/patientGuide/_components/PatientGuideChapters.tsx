"use client";

import PatientGuideChapterCard from "~/app/[locale]/patientGuide/_components/PatientGuideChapterCard";
import { useLocale } from "next-intl";
import { patientGuides } from "~/constants/patientGuide";

const PatientGuideChapters = () => {
  const locale: string = useLocale();
  const localisedPatientGuides = patientGuides[locale as "en" | "ru" | "am"];
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="expertise-item">
            <div className="row">
              {localisedPatientGuides.map((guide) => {
                return (
                  <>
                    <PatientGuideChapterCard guide={guide} />
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

export default PatientGuideChapters;
