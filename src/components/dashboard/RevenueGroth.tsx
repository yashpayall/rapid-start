import RevenuGrothChart from "./RevenuGrothChart";

const RevenueGroth = () => {
  return (
    <div className="max-md:w-full">
      <div className="flex justify-between gap-1 h-[219px] w-full md:w-[295px] items-start px-3 py-6 bg-white rounded-xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)]">
        <div className="flex flex-col justify-between items-start h-full">
          <div className="flex items-start flex-col">
            <p className="text-[#353E5C] font-DMSans text-xl font-normal leading-6">
              Revenue Groth
            </p>
            <p className="text-[#6D758F] font-Manrope text-sm font-normal leading-4">
              Weekly Report
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[#19213D] text-2xl font-DMSans font-normal leading-7">
              $4,673
            </p>
            <div className="flex items-center justify-center bg-[#EEF9F5] rounded px-2 py-1">
              <p className="text-[#63DE77] text-sm font-Manrope font-bold leadinh-4">
                +15.2%
              </p>
            </div>
          </div>
        </div>
        <div>
          <RevenuGrothChart />
        </div>
      </div>
    </div>
  );
};

export default RevenueGroth;
