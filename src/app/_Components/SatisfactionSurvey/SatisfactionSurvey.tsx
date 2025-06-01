import React from "react";
import { useTranslations } from "next-intl";

const SatisfactionSurvey = () => {
  const tGeneral = useTranslations("General");

  return (
    <>
      <div className="survey-area-wrapper">
        <div className="survey-area-background" />
        <div className="survey-area">
          <div className="survey-content">
            <h1>{tGeneral("PatientSatisfactionSurvey")}</h1>
          </div>
          <div className="survey-btn">
            <div className="button-type-1">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/16_lgUIGke1yXgtyiMcAfZYuUj1Ugb50EIfxU67MH7_A/edit?pli=1"
              >
                {tGeneral("Fill")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SatisfactionSurvey;
