import React from "react";
import { Edeitrang } from "../common/Helper";
interface Props {
  edeit: any;
}
const Rangeedeit: React.FC<Props> = ({ edeit }) => {
  return (
    <>
      <div
        className={`mt-6 pb-6 px-4 lg:px-8  flex flex-col gap-y-4 ${
          edeit === "rangedeit" ? "" : ""
        }`}
      >
        {Edeitrang.map((item, index) => (
          <div key={index} className=" cursor-pointer flex items-start gap-x-2">
            <img className=" w-[38px]" src={item.imgedeit} alt="" />
            <div>
              <h1 className=" font-Manrope text-[14px] leasding-[120%] text-[#6D758F] font-normal">
                <span className=" font-bold">{item.boldtext}</span> {item.text}
              </h1>
              <h2 className=" mt-1 font-Manrope text-[10px] font-normal leading-[120%] text-[#B4B9C9]">
                {item.today}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rangeedeit;
