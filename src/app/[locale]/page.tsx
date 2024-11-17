import React from "react";
import HeroSlider from "~/app/_Disin_components/HeroSlider";
import LatestBlogPost from "~/app/_Disin_components/common/LatestBlogPost";
import MeetOurStuff from "~/app/_Disin_components/common/MeetOurStuff";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  return (
    <>
      <HeroSlider />
      <MeetOurStuff />
      <LatestBlogPost />
    </>
  );
};

export default HomePage;
