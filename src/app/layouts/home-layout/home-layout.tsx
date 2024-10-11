import type { PropsWithChildren } from "react";

import { Inter } from "next/font/google";

import { HEADER_HEIGHT } from "~/basics/constants/common.constant";
import Header from "~/components/header/header";
import "~/styles/globals.css";

import { auth } from "../../../auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default async function HomeLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <html lang='en'>
      <body
        className={`${inter.className}  antialiased flex flex-col min-h-screen`}
        style={{
          backgroundImage:
            "url('https://asset.gecdesigns.com/img/background-templates/abstract-wavy-purple-and-pink-gradient-background-design-sr31012402-1706715431755-cover.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {session?.user ? <Header /> : null}
        <main className={`flex flex-grow w-full pt-[${HEADER_HEIGHT}px]`}>
          {children}
        </main>
      </body>
    </html>
  );
}
