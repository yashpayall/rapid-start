import React from "react";
import { Event } from "./BigCalender";
import { eventColors } from "../common/Helper";

const CustomAgenda: React.FC<{ event: Event }> = ({ event }) => {
  const titleColor =
    eventColors[event.label as keyof typeof eventColors].primaryColor;

  return (
    <div className="custom-agenda w-full py-[7px] px-3 flex items-center justify-start gap-[10px]">
      <div
        className="w-[10px] h-[10px] bg-red-400 rounded-full"
        style={{ backgroundColor: `${titleColor}` }}
      ></div>
      <span className="text-[13px] text-base font-normal leading-[107%] line-clamp-1 text-[#6D758F]">
        {event.title}
      </span>
    </div>
  );
};

export default CustomAgenda;
