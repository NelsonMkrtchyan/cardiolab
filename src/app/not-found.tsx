import { Link } from "~/i18n/routing";
import React from "react";
import { Montserrat } from "next/font/google";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   display: "swap",
// });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  style: ["normal", "italic"], // Optional: specify styles
});

export default function GlobalNotFound() {
  return (
    <>
      <html suppressHydrationWarning lang="am">
        <body className={montserrat.className}>
          <div className="error-area">
            <div className="error-item">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="error-text">
                    <h1>404!</h1>
                    <p>Sorry! The Page Not Found</p>
                    <span>
                      Oops! The page you are looking for does not exit. it might
                      been moved or deleted.
                    </span>

                    <Link href="/">Return to Home</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
