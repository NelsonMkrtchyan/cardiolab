import "~/styles/globals.css";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 pt-28 dark:bg-gray-dark sm:py-24 sm:pt-32 md:py-32 md:pt-40 lg:px-8">
        <div className="text-center">
          <p className="dark:text-lime text-base font-semibold text-primary">
            404
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-700 dark:text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="dark:bg-lime dark:hover:bg-lime/80 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
