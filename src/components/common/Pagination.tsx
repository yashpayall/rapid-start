import { useState } from "react";
import { ArrowDownIcons } from "./Icons";
import { paginationdata } from "./Helper";

const Pagination = () => {
  const [pagination, setPagination] = useState("1");
  return (
    <div className="px-6 rounded-xl w-full mx-auto bg-white flex max-sm:flex-col gap-2 items-center justify-between py-6">
      <p className="text-[#B4B9C9] font-Manrope text-[14px] font-normal">
        Showing data 1 to 8 of 256K entries
      </p>
      <div className="flex gap-3 max-sm:gap-2 items-center justify-center">
        <div className="w-[36px] max-sm:w-[30px] max-sm:h-[30px]  cursor-pointer h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED] duration-300 hover:bg-[#8C39FF]">
          <div className="rotate-[80deg] ">
            <ArrowDownIcons />
          </div>
        </div>
        {paginationdata.map((item, index) => (
          <div
            key={index}
            onClick={() => setPagination(item.pagenumber)}
            className={`w-[36px] max-sm:w-[30px] max-sm:h-[30px] text-[14px] h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED] cursor-pointer duration-200 hover:bg-[#8C39FF] hover:text-white ${
              pagination === item.pagenumber
                ? "bg-[#8C39FF] text-white"
                : "bg-white text-black"
            }`}>
            {item.pagenumber}
          </div>
        ))}
        <div className="w-[36px] max-sm:w-[30px] max-sm:h-[30px] cursor-pointer h-[36px] flex justify-center items-center rounded-md border-[1px] duration-300 hover:bg-[#8C39FF] border-[#E1E4ED]">
          <div className="rotate-[270deg]">
            <ArrowDownIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
