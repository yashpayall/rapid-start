import React from "react";
import { MenuthreedoitIcon } from "../common/Icons";
interface LayoutProps {
  name: string;
}

const Threedoitnav: React.FC<LayoutProps> = ({ name }) => {
  return (
    <>
      <div className=" flex items-center justify-between">
        <h1 className=" text-[#6D758F] font-DMSans text-[20px] font-normal leading-[120%]">
          {name}
        </h1>
        <MenuthreedoitIcon />
      </div>
    </>
  );
};

export default Threedoitnav;
