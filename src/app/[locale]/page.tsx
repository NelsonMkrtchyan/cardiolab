import React from "react";
import HeroSlider from "~/app/_Disin_components/HeroSlider";
import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";
import MeetOurStaff from "~/app/_Disin_components/common/MeetOurStaff";
import VideoIntro from "~/app/_Disin_components/common/VideoIntro";
import AboutUsSection from "~/app/_Disin_components/common/AboutUsSection";
import AppointmentForm from "~/app/_Disin_components/AppointmentForm";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  return (
    <>
      <HeroSlider />

      <AboutUsSection />

      <VideoIntro />

      <MeetOurStaff />

      <AppointmentForm />

      {/*<LatestBlogPost />*/}
    </>
  );
};

export default HomePage;
