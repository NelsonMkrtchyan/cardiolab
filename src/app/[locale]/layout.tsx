// import "~/styles/globals.css";

// Styles from Disin
import "~/styles/bootstrap.min.css";
import "~/styles/animate.css";
import "~/styles/icofont.min.css";
import "~/styles/meanmenu.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles from Disin
import "~/styles/style.scss";
import "~/styles/responsive.scss";

import { type Metadata } from "next";
import React from "react";
import { Providers } from "~/app/[locale]/providers";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";

import { Montserrat } from "next/font/google";

import Navbar from "~/app/_Disin_components/layout/Navbar";
import TopHeader from "~/app/_Disin_components/layout/TopHeader";
import Footer from "~/app/_Disin_components/layout/Footer/Footer";
import GoTop from "~/app/_Disin_components/layout/GoTop";

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   display: "swap",
// });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Adjust weights as needed
  style: ["normal", "italic"], // Optional: specify styles
});

export const metadata: Metadata = {
  title: "CardioLab",
  description: "CardioLab",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang="am">
      <body className={montserrat.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <TopHeader />
            <Navbar />
            <div className="w-full">{children}</div>
            <GoTop />
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
