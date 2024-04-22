import { SalesDotIcon, ThreedotsIcon, VisitsDotIcon } from "../common/Icons";
import SalesCharttwo from "./SalesCharttwo";

const Salestwo = () => {
  return (
    <div className="lg:max-w-[453px] w-full h-auto sm:h-[473px] flex flex-col items-start p-6 bg-white rounded-xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)]">
      <div className="flex gap-1 items-start justify-between w-full">
        <div className="flex flex-col gap-1 items-start">
          <p className="text-[#353E5C] text-xl font-DMSans font-normal leading-6">
            Sales
          </p>
          <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
            Last 6 Months
          </p>
        </div>
        <button type="submit">
          <ThreedotsIcon />
        </button>
      </div>
      <div className="flex flex-col gap-4 sm:gap-10 items-center justify-center w-full pt-6">
        <SalesCharttwo />
        <div className="flex gap-4 items-center justify-center w-full">
          <div className="flex gap-2 items-center justify-center">
            <SalesDotIcon />
            <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
              Sales
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <VisitsDotIcon />
            <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
              Visits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salestwo;
