import SalesOverviewChart from "./SalesOverviewchart";

const SalesOverview = () => {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)] px-1 sm:px-[17px] py-[26px] w-full">
      <div className="flex flex-col items-start gap-1 pl-4">
        <p className="text-[#353E5C] text-xl font-DMSans font-normal leading-6">
          Sales overview
        </p>
        <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
          <span className="text-[#63DE77]"> (+5) more</span> in 2021
        </p>
      </div>
      <div className="mt-[51px]">
        <SalesOverviewChart />
      </div>
    </div>
  );
};

export default SalesOverview;
