"use client";

import React from "react";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";

function Page() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center gap-5 m-auto text-white'>
      <h1 className='font-bold text-4xl'>Page not found</h1>

      <Button
        onClick={() => router.back()}
        variant={"outline"}
        className='text-black'
      >
        Go back <ArrowRightIcon className='ml-2 w-5 h-5' />
      </Button>
    </div>
  );
}

export default Page;
