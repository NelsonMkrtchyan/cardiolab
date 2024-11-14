import { db } from "~/server/db";
import React from "react";
import HeroSlider from "~/app/_Disin_components/HeroSlider";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const posts = await db.query.posts.findMany();
  console.log("posts", posts);
  const t = await getTranslations("Common");
  return (
    <>
      <HeroSlider />
      <h1> {t("slogan")}</h1>
    </>
  );
};

export default HomePage;
