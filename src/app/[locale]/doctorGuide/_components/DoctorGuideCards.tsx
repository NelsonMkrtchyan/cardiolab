"use client";

import { useLocale } from "next-intl";
import { doctorGuides } from "~/constants/doctorGuide";
import BlueCard from "~/app/_Disin_components/cards/BlueCard";

const DoctorGuideCards = () => {
  const locale: string = useLocale();
  const localisedDoctorGuides = doctorGuides[locale as "en" | "ru" | "am"];
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

export default DoctorGuideCards;
