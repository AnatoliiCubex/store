import React from "react";

import Image from "next/image";
import Link from "next/link";

import { NAVIGATION_LINKS } from "~/basics/constants/common.constant";
import HeaderMenu from "~/components/header/components/header-menu";
import Logo from "~/components/logo/logo";
import { Button } from "~/components/ui/button";

import { auth } from "../../../auth";

const Header = async () => {
  const session = await auth();

  return (
    <header className='top-0 right-0 left-0 z-50 fixed flex justify-between items-center border-white bg-transparent backdrop-blur-lg backdrop-filter p-4 border-b'>
      <Link href='/'>
        <Logo />
      </Link>

      <div className='flex items-center gap-3'>
        {NAVIGATION_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button className='p-0 font-bold text-white' variant='link'>
              {link.label}
            </Button>
          </Link>
        ))}

        <Image
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? "user_image"}
          width={40}
          height={40}
          className='ml-5 rounded-full'
        />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
