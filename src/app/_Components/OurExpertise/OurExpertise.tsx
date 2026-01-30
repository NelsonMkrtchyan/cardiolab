"use client";

import React from "react";
import SingleExpertise from "~/app/_Components/OurExpertise/components/SingleExpertise";
import {
  type SanityAboutPage,
  getOrderedSections,
  getLocalizedValue,
} from "~/types/aboutPage";
import { useLocale } from "next-intl";

interface OurExpertiseProps {
  aboutPage: SanityAboutPage;
}

const OurExpertise: React.FC<OurExpertiseProps> = ({ aboutPage }) => {
  const locale = useLocale() as "am" | "en" | "ru";
  const orderedSections = getOrderedSections(aboutPage);

  // Transform Sanity data to format expected by SingleExpertise
  const expertiseItems = orderedSections.map((section) => {
    const { type, data } = section;

    if (type === "mission") {
      return {
        id: 1,
        name: "Mission",
        title: {
          am: data.title.am,
          en: data.title.en ?? data.title.am,
          ru: data.title.ru ?? data.title.en ?? data.title.am,
        },
        description: {
          am: data.description.am,
          en: data.description.en ?? data.description.am,
          ru: data.description.ru ?? data.description.en ?? data.description.am,
        },
        className: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
      };
    } else if (type === "vision") {
      return {
        id: 2,
        name: "Vision",
        title: {
          am: data.title.am,
          en: data.title.en ?? data.title.am,
          ru: data.title.ru ?? data.title.en ?? data.title.am,
        },
        description: {
          am: data.description.am,
          en: data.description.en ?? data.description.am,
          ru: data.description.ru ?? data.description.en ?? data.description.am,
        },
        className:
          "d-flex h-100 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
      };
    } else if (type === "strategicPriorities") {
      return {
        id: 3,
        name: "OurStrategicDirections",
        title: {
          am: data.title.am,
          en: data.title.en ?? data.title.am,
          ru: data.title.ru ?? data.title.en ?? data.title.am,
        },
        description: {
          am: "",
          en: "",
          ru: "",
        },
        list: {
          am: data.items.map((item) => item.text.am),
          en: data.items.map((item) => item.text.en ?? item.text.am),
          ru: data.items.map(
            (item) => item.text.ru ?? item.text.en ?? item.text.am,
          ),
        },
        className: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
      };
    } else {
      // coreValues
      return {
        id: 4,
        name: "Values",
        title: {
          am: data.title.am,
          en: data.title.en ?? data.title.am,
          ru: data.title.ru ?? data.title.en ?? data.title.am,
        },
        description: {
          am: data.values.map((v) => ({
            title: v.title.am,
            description: v.description.am,
          })),
          en: data.values.map((v) => ({
            title: v.title.en ?? v.title.am,
            description: v.description.en ?? v.description.am,
          })),
          ru: data.values.map((v) => ({
            title: v.title.ru ?? v.title.en ?? v.title.am,
            description:
              v.description.ru ?? v.description.en ?? v.description.am,
          })),
        },
        className: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
      };
    }
  });

  return (
    <>
      <div className="speciality-area-wrapper pb-100">
        <div
          className={"background-image"}
          style={{ backgroundImage: "url(/images/map-bg.png)" }}
        />
        <div className="speciality-area container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-12">
              <div className="speciality-left">
                <div className="speciality-item">
                  <div className="row">
                    <div
                      className={
                        "col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 m-0 p-0"
                      }
                    >
                      {expertiseItems[0] && (
                        <SingleExpertise expertise={expertiseItems[0]} />
                      )}
                      {expertiseItems[2] && (
                        <SingleExpertise expertise={expertiseItems[2]} />
                      )}
                    </div>
                    <div
                      className={
                        "col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 m-0 p-0"
                      }
                    >
                      {expertiseItems[1] && (
                        <SingleExpertise expertise={expertiseItems[1]} />
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className={
                        "col-12 col-sm-12 col-md-12 col-l-12 col-xl-12 m-0 p-0"
                      }
                    >
                      {expertiseItems[3] && (
                        <SingleExpertise expertise={expertiseItems[3]} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurExpertise;
