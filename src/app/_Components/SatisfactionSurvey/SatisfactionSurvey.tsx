"use client";

import React from "react";
import { useLocale } from "next-intl";
import {
  type SatisfactionSurveySection,
  getLocalizedValue,
} from "~/types/aboutPage";

interface SatisfactionSurveyProps {
  satisfactionSurvey: SatisfactionSurveySection;
}

const SatisfactionSurvey: React.FC<SatisfactionSurveyProps> = ({
  satisfactionSurvey,
}) => {
  const locale = useLocale() as "am" | "en" | "ru";

  const title = getLocalizedValue(satisfactionSurvey.title, locale);
  const buttonText = getLocalizedValue(satisfactionSurvey.buttonText, locale);

  return (
    <>
      <div className="survey-area-wrapper">
        <div className="survey-area-background" />
        <div className="survey-area">
          <div className="survey-content">
            <h1>{title}</h1>
          </div>
          <div className="survey-btn">
            <div className="button-type-2">
              <a target="_blank" href={satisfactionSurvey.surveyUrl}>
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SatisfactionSurvey;
