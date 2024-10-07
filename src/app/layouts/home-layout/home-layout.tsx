import type { PropsWithChildren } from "react";

import localFont from "next/font/local";

import Header from "~/app/components/header/header";
import "~/app/styles/globals.css";
import { auth } from "~/auth";

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

export default async function HomeLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {session?.user ? <Header /> : null}
        <main>{children}</main>
      </body>
    </html>
  );
}
