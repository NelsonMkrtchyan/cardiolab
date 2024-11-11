import { db } from "~/server/db";
import React from "react";
import SectionPlaceholder from "~/app/_components/SectionPlaceholder";
import { Video } from "~/app/_components/TemporaryComponents/Video";
import { SectionTitle } from "~/app/_components/TemporaryComponents/SectionTitle";
import {
  benefitOne,
  Benefits,
  benefitTwo,
} from "~/app/_components/TemporaryComponents/Benefits";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const posts = await db.query.posts.findMany();
  console.log("posts", posts);

  return (
    <>
      <SectionPlaceholder title={"Landing First Section"} />

      {/*#############*/}
      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video videoId={"znyBJC7NDOk?si=X5dZoiD2cHbFcXdT"} />

      {/*#############*/}

      {/*#############*/}
      <Benefits data={benefitOne} />

      <Benefits imgPos="right" data={benefitTwo} />

      {/*#############*/}

      <SectionPlaceholder title={"Some Section"} />
    </>
  );
};

export default HomePage;
