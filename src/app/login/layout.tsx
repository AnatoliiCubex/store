import type { PropsWithChildren } from "react";
import React from "react";

function layout({ children }: PropsWithChildren) {
  return <div className='flex justify-center items-center'>{children}</div>;
}

export default layout;
