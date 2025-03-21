"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Tabs, TabPanel } from "react-tabs";
import { FaPlay } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const VideoIntro: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const tComponents = useTranslations("Components");

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/watch?v=znyBJC7NDOk&ab_channel=CardioLab&autoplay=1",
          "https://www.youtube.com/watch?v=ksAkHj7KceI&ab_channel=CardioLab",
          "https://www.youtube.com/watch?v=OD9Ni0_I3Tc&ab_channel=CardioLab",
        ]}
      />

      <div className="video-wrap pb-70">
        <Tabs>
          <TabPanel>
            <div
              className="video-area"
              style={{ backgroundImage: `url(/images/intro-video-bg.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={() => setToggler(!toggler)}
                        className="popup-youtube"
                      >
                        <FaPlay className="icon" />
                      </div>

                      <div className="video-content">
                        <h3>{tComponents("VideoSection.title")}</h3>
                        <p>{tComponents("VideoSection.description")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default VideoIntro;
