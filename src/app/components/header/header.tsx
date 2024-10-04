import React from "react";

import Image from "next/image";

import { logout } from "~/app/basics/utils/actions.util";
import { Button } from "~/app/components/ui/button";
import { auth } from "~/auth";

const Header = async () => {
  const session = await auth();

  return (
    <header className='flex justify-between items-center bg-gray-100 p-4'>
      <div className='flex items-center gap-4'>
        <Image
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? "user_image"}
          width={48}
          height={48}
          className='rounded-full'
        />
        <h1 className='font-bold text-lg'>{session?.user?.name}</h1>
      </div>
      <form action={logout}>
        <Button type='submit'>Sign out</Button>
      </form>
    </header>
  );
};

export default Header;
