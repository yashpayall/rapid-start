import { BluePreviousBtnArrow } from "./Icons";

const BluePreviousBtn = () => {
  return (
    <div>
      <button
        type="submit"
        className="bg-[#F4ECFF] rounded-lg px-4 sm:px-6 py-2 sm:py-3 flex gap-1 sm:gap-2 justify-center items-center h-12 text-[#A565FF] text-[16px] font-Manrope font-bold leading-5 duration-300 hover:bg-white border-[2px] border-[#F4ECFF]"
      >
        <BluePreviousBtnArrow />
        <span>Previous</span>
      </button>
    </div>
  );
};

export default BluePreviousBtn;
