// import SharePost from "@/components/Blog/SharePost";
// import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BackgroundImage = (props: any) => {
  return (
    <>
      <div className="absolute mb-10 h-full w-full overflow-hidden rounded border-2 border-purple-800">
        {/*<div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">*/}
        <div className="relative h-full w-full">
          <Image
            // src="https://utfs.io/f/kPqN7718CWluN8A55Q0whQGd3M2OxKmW5Egjv7s4bfklP8Bq"
            src="https://utfs.io/f/kPqN7718CWluLVh9fIFM9GPald3WK8xTLcn5eompzqNkuiFI"
            alt="image"
            fill={true}
            className="object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default BackgroundImage;
