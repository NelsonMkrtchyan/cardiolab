import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Link from "next/link";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <>
      <html suppressHydrationWarning lang="en">
        <body
          className={`bg-[#FCFCFC] dark:bg-black ${GeistSans.variable} flex flex-col`}
        >
          <div className="flex h-screen w-full flex-col justify-between border-2 border-purple-800">
            <div className="container my-36 flex h-full w-full items-center justify-center border-2">
              <div className="container relative flex grow flex-col px-4">
                <h2>LOCALE</h2>
                <h5>Not Found</h5>
                <p>Could not find requested resource</p>
                <Link href="/">Return Home</Link>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
