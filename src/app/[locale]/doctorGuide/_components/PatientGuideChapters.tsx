"use client";

import { useLocale } from "next-intl";
import DoctorGuideChapterCard from "~/app/[locale]/doctorGuide/_components/DoctorGuideChapterCard";
import { doctorGuides } from "~/constants/doctorGuide";

const DoctorGuideChapters = () => {
  const locale: string = useLocale();
  const localisedDoctorGuides = doctorGuides[locale as "en" | "ru" | "am"];
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="expertise-item">
            <div className="row">
              {localisedDoctorGuides.map((guide) => {
                return (
                  <>
                    <DoctorGuideChapterCard guide={guide} />
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

export default DoctorGuideChapters;
