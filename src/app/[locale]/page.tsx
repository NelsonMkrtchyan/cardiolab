import React from "react";
import HeroSlider from "~/app/_Disin_components/HeroSlider";
import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";
import MeetOurStuff from "~/app/_Disin_components/common/MeetOurStuff";
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

      <MeetOurStuff />

      <AppointmentForm />

      <LatestBlogPost />
    </>
  );
};

export default HomePage;
