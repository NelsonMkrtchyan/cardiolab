import React from "react";
// import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";
import MeetOurStaff from "~/app/_Disin_components/common/MeetOurStaff";
import AboutUsSection from "~/app/_Disin_components/common/AboutUsSection";
import AppointmentForm from "~/app/_Disin_components/AppointmentForm";
// import FeedbackSlider from "~/app/_Components/FeedbackSlider/FeedbackSlider";
import LandingSlider from "~/app/_Components/LandingSlider/LandingSlider";
import VideoIntro from "~/app/_Components/VideoIntro/VideoIntro";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  return (
    <>
      <LandingSlider />

      <AboutUsSection />

      <VideoIntro />

      <MeetOurStaff />

      {/*<FeedbackSlider />*/}

      <AppointmentForm />

      {/*<LatestBlogPost />*/}
    </>
  );
};

export default HomePage;
