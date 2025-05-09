"use client";

import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { aboutUsContent } from "~/constants/general";
import { LocaleComplexString } from "~/constants/staff";
import Image from "next/image";

const OurExpertise: React.FC = () => {
  const locale: string = useLocale();

  return (
    <>
      <div className="speciality-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-12">
              <div
                className="speciality-left"
                style={{ backgroundImage: "url(/images/map-bg.png)" }}
              >
                <div className="speciality-item">
                  <div className="row m-0">
                    {aboutUsContent.map((content, index) => {
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                      const title: string | string[] =
                        content.title[locale] ?? content.title.am;

                      const description:
                        | string
                        | {
                            title: string;
                            description?: string;
                          }[] =
                        content.description[locale] ?? content.description.am;

                      return (
                        <>
                          <div
                            className={`col-sm-10 col-lg-10 ${index % 2 !== 0 ? "right ms-auto" : ""}`}
                          >
                            <div className="speciality-inner">
                              <div className={"container"}>
                                <div
                                  className={
                                    "col align-items-center justify-content-center d-flex"
                                  }
                                >
                                  <div>
                                    <Image
                                      src="https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r"
                                      alt="CardioLab Logo"
                                      width={35}
                                      height={35}
                                      style={{ marginRight: "20px" }}
                                      className="icon largest-icon-size mb-4"
                                    />
                                  </div>

                                  <div>
                                    {Array.isArray(title) ? (
                                      title.map((line, i) => (
                                        <h3 key={i}>{line}</h3>
                                      ))
                                    ) : (
                                      <h3>{title}</h3>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className={"container"}>
                                <div className={"row justify-content-center"}>
                                  {Array.isArray(description) ? (
                                    description.map((item, i) => (
                                      <div
                                        key={i}
                                        className="col-sm-6 col-lg-4 mb-4"
                                      >
                                        <div className="department-item">
                                          <h3>{item.title}</h3>
                                          {item.description && (
                                            <p>{item.description}</p>
                                          )}
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    <p>{description}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}

                    {/*<div className="col-sm-6 col-lg-8">*/}
                    {/*  <div className="speciality-inner">*/}
                    {/*    <FaRegCheckCircle className="icon largest-icon-size mb-4" />*/}
                    {/*    <h3>{tAbout("Titles.Vision")}</h3>*/}
                    {/*    <p>{tAbout("Vision")}</p>*/}
                    {/*  </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-sm-6 col-lg-8 right ms-auto">*/}
                    {/*  <div className="speciality-inner">*/}
                    {/*    <FaRegCheckCircle className="icon largest-icon-size mb-4" />*/}
                    {/*    <h3>{tAbout("Titles.Mission")}</h3>*/}
                    {/*    <p>{tAbout("Mission")}</p>*/}
                    {/*  </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-sm-6 col-lg-8">*/}
                    {/*  <div className="speciality-inner">*/}
                    {/*    <FaRegCheckCircle className="icon largest-icon-size mb-4" />*/}
                    {/*    <h3>{tAbout("Titles.Values")}</h3>*/}
                    {/*    <p>{tAbout("Values")}</p>*/}
                    {/*  </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-sm-6 col-lg-8 right ms-auto">*/}
                    {/*  <div className="speciality-inner">*/}
                    {/*    <FaRegCheckCircle className="icon largest-icon-size mb-4" />*/}
                    {/*    <h3>{tAbout("Titles.OurStrategicDirections")}</h3>*/}
                    {/*    <ul>*/}
                    {/*      <li> {tAbout("OurStrategicDirections.one")}</li>*/}
                    {/*      <li> {tAbout("OurStrategicDirections.two")}</li>*/}
                    {/*      <li> {tAbout("OurStrategicDirections.three")}</li>*/}
                    {/*    </ul>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="col-lg-5 pr-0">*/}
            {/*  <div*/}
            {/*    className="speciality-item speciality-right"*/}
            {/*    style={{ backgroundImage: `url(/images/about4.jpg)` }}*/}
            {/*  >*/}
            {/*    <Image*/}
            {/*      src="/images/about4.jpg"*/}
            {/*      alt="Speciality"*/}
            {/*      width={845}*/}
            {/*      height={850}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
