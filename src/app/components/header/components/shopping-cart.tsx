"use client";

import React from "react";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

import BadgeWithIcon from "~/components/ui/badge-with-icon";

const ShoppingCart = () => {
  return (
    <Link href='/cart'>
      <BadgeWithIcon
        count={5}
        icon={
          <ShoppingCartIcon color='white' className='w-5 h-5 cursor-pointer' />
        }
      />
    </Link>
  );
};

export default ShoppingCart;
