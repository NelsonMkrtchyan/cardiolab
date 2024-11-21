import React from "react";
import HeroSlider from "~/app/_Disin_components/HeroSlider";
import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";
import MeetOurStuff from "~/app/_Disin_components/common/MeetOurStuff";
import VideoIntro from "~/app/_Disin_components/common/VideoIntro";
import AboutUs from "~/app/_Disin_components/common/AboutUs";
import Stats from "~/app/_Disin_components/common/Stats";
import AppointmentForm from "~/app/_Disin_components/AppointmentForm";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  return (
    <>
      <HeroSlider />
      {/*<ContactInfo />*/}
      <AboutUs />
      <VideoIntro />
      <MeetOurStuff />
      <div className="pb-50">
        <Stats />
      </div>
      <AppointmentForm />

      <LatestBlogPost />
    </>
  );
};

export default HomePage;
