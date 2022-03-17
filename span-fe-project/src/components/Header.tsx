import { DotsCircleHorizontalIcon } from "@heroicons/react/outline";
import React, { MouseEventHandler } from "react";

type Props = {
  heading: string;
  icon?: React.ReactNode;
  onClick?: MouseEventHandler;
};

export const Header = ({ heading, icon, onClick }: Props) => {
  return (
    <div className="px-4 py-2 flex flex-row h-full items-center align-middle">
      <div className="flex-[0_0_10%] mr-12" onClick={onClick}>
        {icon}
      </div>
      <h1 className="flex-[0 0 20%] text-7xl text-left text-zinc-600 drop-shadow-xl">{heading}</h1>
    </div>
  );
};
