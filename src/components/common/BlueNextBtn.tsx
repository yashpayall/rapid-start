import { BlueNextBtnArrow } from "./Icons";

const BlueNextBtn = () => {
  return (
    <button className="duration-300 bg-[#8C39FF] hover:bg-transparent group border-[1px] border-[#8C39FF] flex items-center justify-center gap-x-1 sm:gap-x-2 py-2 sm:py-3 px-4 sm:px-6 rounded-lg ">
      <h2 className=" group-hover:text-[#8C39FF] font-Manrope text-white text-[16px] font-bold leading-[130%]">
        Next
      </h2>
      <BlueNextBtnArrow />
    </button>
  );
};

export default BlueNextBtn;
