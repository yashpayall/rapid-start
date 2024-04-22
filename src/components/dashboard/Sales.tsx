import SalesChart from "./SalesChart";

const Sales = () => {
  return (
    <div className="w-full md:w-[294px] h-[219px] flex flex-col gap-3 bg-white rounded-xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)]">
      <div className="px-6 pt-6 flex flex-col gap-1">
        <p className="text-[#353E5C] font-DMSans text-xl font-normal leading-6">
          Sales
        </p>
        <p className="text-[#6D758F] font-Manrope text-sm font-normal leading-[17px]">
          Last Year
        </p>
      </div>
      <div>
        <SalesChart />
      </div>
      <div className="px-6 flex gap-1 justify-between items-center">
        <p className="text-[#19213D] font-DMSans text-2xl font-normal leading-7">
          175k
        </p>
        <p className="text-[#FE566B] font-Manrope text-sm font-normal leading-[17px]">
          -16.2%
        </p>
      </div>
    </div>
  );
};

export default Sales;
