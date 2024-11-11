import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Link } from "~/i18n/routing";

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
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-indigo-600">404</p>
              <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Page not found
              </h1>
              <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}
