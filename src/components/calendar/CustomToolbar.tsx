// CustomToolbar.tsx
import React from "react";
import { ToolbarProps } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarArrowLeftIcon, CalendarArrowRightIcon } from "../common/Icons";

const CustomToolbar: React.FC<ToolbarProps> = ({
  date,
  view,
  localizer,
  onView,
  onNavigate,
  label,
}) => {
  const navigate = (action: any) => {
    onNavigate(action);
  };

  const changeView = (viewName: any) => {
    onView(viewName);
  };

  return (
    <div className="w-full py-7 px-6 flex items-center justify-between">
      {/* next, prev and month show */}
      <div className="flex items-center justify-center gap-4">
        <button
          className="hover:bg-[#E1E4ED] hover:rounded-full transition-all duration-200 ease-out"
          onClick={() => navigate("PREV")}
        >
          <CalendarArrowLeftIcon />
        </button>

        <button
          className="hover:bg-[#E1E4ED] hover:rounded-full transition-all duration-200 ease-out flex items-center justify-center"
          onClick={() => navigate("NEXT")}
        >
          <CalendarArrowRightIcon />
        </button>
        <span className="text-[#6D758F] font-DMSans text-xl font-normal leading-[120%]">
          {label}
        </span>
      </div>

      {/* month, week, day, list */}
      <div className="rounded-[6px] divide-x divide-white overflow-hidden">
        <button
          className={`py-[10px] px-5 transition-all duration-300 ease-in-out ${
            view === "month" ? "bg-[#F4ECFF]" : "bg-[#E9D9FF]"
          }`}
          onClick={() => changeView("month")}
        >
          <span className="text-[#A565FF] font-Manrope text-base font-normal leading-[125%]">
            Month
          </span>
        </button>

        <button
          className={`py-[10px] px-5 transition-all duration-300 ease-in-out ${
            view === "week" ? "bg-[#F4ECFF]" : "bg-[#E9D9FF]"
          }`}
          onClick={() => changeView("week")}
        >
          <span className="text-[#A565FF] font-Manrope text-base font-normal leading-[125%]">
            Week
          </span>
        </button>

        <button
          className={`py-[10px] px-5 transition-all duration-300 ease-in-out ${
            view === "day" ? "bg-[#F4ECFF]" : "bg-[#E9D9FF]"
          }`}
          onClick={() => changeView("day")}
        >
          <span className="text-[#A565FF] font-Manrope text-base font-normal leading-[125%]">
            Day
          </span>
        </button>

        <button
          className={`py-[10px] px-5 transition-all duration-300 ease-in-out ${
            view === "agenda" ? "bg-[#F4ECFF]" : "bg-[#E9D9FF]"
          }`}
          onClick={() => changeView("agenda")}
        >
          <span className="text-[#A565FF] font-Manrope text-base font-normal leading-[125%]">
            List
          </span>
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
