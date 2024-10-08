import React from "react";

import Image from "next/image";
import Link from "next/link";

import HeaderMenu from "~/components/header/components/header-menu";
import Logo from "~/components/logo/logo";

import { auth } from "../../../auth";

const Header = async () => {
  const session = await auth();

  return (
    <header className='flex justify-between items-center bg-gray-100 p-4'>
      <Link href='/'>
        <Logo />
      </Link>

      <div className='flex items-center gap-3'>
        <Image
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? "user_image"}
          width={40}
          height={40}
          className='rounded-full'
        />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
