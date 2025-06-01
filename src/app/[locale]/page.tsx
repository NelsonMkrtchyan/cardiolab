import React from "react";
// import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";
import MeetOurStaff from "~/app/_Disin_components/common/MeetOurStaff";
import AppointmentForm from "~/app/_Components/Landing/AppointmentForm/AppointmentForm";
// import FeedbackSlider from "~/app/_Components/FeedbackSlider/FeedbackSlider";
import LandingSlider from "~/app/_Components/LandingSlider/LandingSlider";
// import VideoIntro from "~/app/_Components/VideoIntro/VideoIntro";
import AboutUsSection from "~/app/_Components/Landing/AboutUsSection/AboutUsSection";
// import SatisfactionSurvey from "~/app/_Components/SatisfactionSurvey/SatisfactionSurvey";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  return (
    <>
      <LandingSlider />

      <AboutUsSection />

      {/*<VideoIntro />*/}

      <MeetOurStaff />

      {/*<FeedbackSlider />*/}

      <AppointmentForm />

      {/*<SatisfactionSurvey />*/}

      {/*<LatestBlogPost />*/}
    </>
  );
};

export default HomePage;
