import chartimage from "../../assets/img/sessionsChart-image.png";

const Sessions = () => {
  return (
    <div className="w-full sm:w-[228px] h-auto sm;h-[219px] p-4 sm:p-6 flex flex-col gap-3 bg-white rounded-xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)]">
      <div className="flex flex-col gap-1 items-start">
        <p className="text-[#353E5C] text-xl font-DMSans font-normal leading-6">
          Sessions
        </p>
        <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
          This Month
        </p>
      </div>
      <div className="px-1">
        <img
          src={chartimage}
          alt="chart img"
          className="w-full sm:w-[180px] h-[120px] sm:h-[73px]"
        />
      </div>
      {/* <SessionChartImageIcon /> */}
      <div className="flex gap-1 items-center justify-between">
        <p className="text-[#353E5C] text-2xl font-DMSans font-normal leading-6">
          45.1k
        </p>
        <p className="text-[#81E492] text-sm font-Manrope font-normal leading-4">
          +12.6%
        </p>
      </div>
    </div>
  );
};

export default Sessions;
