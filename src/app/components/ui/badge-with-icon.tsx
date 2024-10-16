import React from "react";

type Props = {
  icon: React.ReactNode;
  count: number;
};

const BadgeWithIcon = (props: Props) => {
  const { icon, count } = props;

  return (
    <div className='relative'>
      {icon}
      <span className='-top-2 -right-2 absolute flex justify-center items-center bg-purple-500 rounded-full w-4 h-4 text-white text-xs'>
        {count}
      </span>
    </div>
  );
};

export default BadgeWithIcon;
