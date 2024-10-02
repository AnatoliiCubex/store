import type { PropsWithChildren } from "react";

import localFont from "next/font/local";

import "~/app/styles/globals.css";

const geistSans = localFont({
  src: "../../styles/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../styles/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
