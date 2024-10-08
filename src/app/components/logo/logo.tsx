import React from "react";

const Logo = () => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='flex-shrink-0'
    >
      <rect width='40' height='40' rx='8' fill='#FFFFFF' />
      <path
        d='M20 8L30 28H10L20 8Z'
        fill='#000000'
        stroke='#FFFFFF'
        strokeWidth='2'
      />
      <circle cx='20' cy='22' r='4' fill='#FFFFFF' />
      <path
        d='M15 30H25'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Logo;
