import { useState } from "react";
import { ThreedotsIcon } from "../common/Icons";
import EarningReports from "./EarningReports";
import { earningReportTabs } from "../common/Helper";

const EarningReport = () => {
  const [tab, setTab] = useState("");
  return (
    <div className="lg:max-w-[772px] w-full h-auto lg:h-[473px] flex flex-col items-start px-4 py-4 sm:p-6 bg-white rounded-xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)]">
      <div className="flex gap-1 items-start justify-between w-full">
        <div className="flex flex-col gap-2 items-start">
          <p className="text-[#353E5C] text-xl font-DMSans font-normal leading-6">
            Earning Reports
          </p>
          <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
            Yearly Earnings Overview
          </p>
        </div>
        <button type="submit">
          <ThreedotsIcon />
        </button>
      </div>
      <div className="pt-6 flex flex-col gap-4 sm:gap-8 w-full">
        <div className="flex flex-wrap justify-center lg:flex-nowrap items-center gap-3 w-full">
          {earningReportTabs.map((card, index) => (
            <div
              key={index}
              onClick={() => setTab(card.tab)}
              className={`flex flex-col gap-2 items-center justify-center p-2  sm:px-3 sm:py-[15px] cursor-pointer border rounded-[10px] w-[70px] sm:w-[100px] h-[70px] sm:h-[92px]  ${
                tab === card.tab
                  ? "border-[#A565FF] border-solid"
                  : "border-[#BEC2D0] border-dashed"
              }`}
            >
              <div
                className={`flex items-center justify-center p-[6px] rounded-md  ${
                  tab === card.tab ? "bg-[#F4ECFF]" : "bg-[#BEC2D0]"
                }`}
              >
                {tab === card.tab ? card.activeIcon : card.inactiveIcon}
              </div>
              <p className="text-[#6D758F] text-xs sm:text-[16px] font-Manrope font-normal leading-4 sm:leading-5">
                {card.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <EarningReports />
        </div>
      </div>
    </div>
  );
};
export default EarningReport;
