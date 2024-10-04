import React from "react";

import { LogOut, Menu, Settings } from "lucide-react";
import Link from "next/link";

import { logout } from "~/app/basics/utils/actions.util";
import { Button } from "~/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/app/components/ui/dropdown-menu";

const HeaderMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='focus-visible:ring-transparent focus:ring-transparent'
        >
          <Menu className='w-5 h-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem className='h-10'>
          <Link href='/settings' className='flex items-center w-full'>
            <Settings className='mr-2 w-4 h-4' />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='h-10'>
          <form action={logout} className='w-full'>
            <Button
              type='submit'
              variant='ghost'
              className='flex justify-start items-center p-0 w-full'
            >
              <LogOut className='mr-2 w-4 h-4' />
              <span>Logout</span>
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
