import React from "react";
// import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";
import AppointmentForm from "~/app/_Components/Landing/AppointmentForm/AppointmentForm";
// import FeedbackSlider from "~/app/_Components/FeedbackSlider/FeedbackSlider";
import LandingSlider from "~/app/_Components/LandingSlider/LandingSlider";
// import VideoIntro from "~/app/_Components/VideoIntro/VideoIntro";
import AboutUsSection from "~/app/_Components/Landing/AboutUsSection/AboutUsSection";
import MeetOurStaff from "~/app/_Components/MeetOurStaff/MeetOurStaff";
// import ContactInfo from "~/app/_Disin_components/common/ContactInfo";
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

      {/*<ContactInfo />*/}

      {/*<Stats />*/}

      {/*<SatisfactionSurvey />*/}

      {/*<LatestBlogPost />*/}
    </>
  );
};

export default HomePage;
