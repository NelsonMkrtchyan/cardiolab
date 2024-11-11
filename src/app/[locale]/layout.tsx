import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import React from "react";
import ScrollToTop from "~/app/_components/ScrollToTop";
import NavigationBar from "~/app/_components/NavigationBar";
import { Providers } from "~/app/[locale]/providers";
import Footer from "~/app/_components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";

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
    console.log("Should be not found");
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`bg-bgColor dark:bg-bgColorDark ${GeistSans.variable} flex flex-col`}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="flex h-screen w-full flex-col justify-between">
              <NavigationBar />
              <div className="w-full">{children}</div>
              <Footer />
              <ScrollToTop />
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
