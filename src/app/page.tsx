import React from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default async function Page() {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center gap-8 md:gap-0 px-10 xl:px-0 w-full text-white'>
      <div className='flex flex-col justify-center md:pr-4 w-full md:w-1/2'>
        <h1 className='mb-4 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          Welcome.
        </h1>
        <div className='flex items-center mb-8'>
          <Input
            placeholder='Search...'
            className='border-white bg-transparent mr-2 px-4 sm:px-6 md:px-8 rounded-full w-full max-w-[500px] h-10 sm:h-12 md:h-14 text-sm text-white sm:text-base md:text-lg placeholder:text-white'
          />
        </div>
        <div className='flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0'>
          <Button variant='outline' className='text-black text-sm sm:text-base'>
            Get Started
          </Button>
          <Button
            variant='outline'
            className='border-white bg-transparent text-sm text-white sm:text-base'
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className='md:pl-4 w-full md:w-1/2 md:max-w-[500px]'>
        <h4 className='mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
          Landing page.
        </h4>
        <div className='text-sm sm:text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          assumenda et quis nemo autem soluta excepturi fugiat ea voluptas?
          Error ipsam doloribus qui praesentium ipsum explicabo esse iusto
          molestias soluta!
        </div>
      </div>
    </div>
  );
}
