import "~/styles/globals.css";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container my-36 flex h-full w-full items-center justify-center border-2">
      <div className="container relative flex grow flex-col px-4">
        <h2>LOCALE</h2>
        <h5>Not Found</h5>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
