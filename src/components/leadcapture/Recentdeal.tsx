import Disclouser from "./Disclouser";

const Recentdeal = () => {
  return (
    <div className="w-full p-6 flex flex-col gap-4 rounded-xl bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10);]">
      <div className="flex justify-between ">
        <h2 className=" font-DMSans text-[20px] font-normal leading-[120%] text-[#353E5C]">
          Recent Deals
        </h2>
        <div className="flex items-center gap-1 cursor-pointer">
          <p className=" font-Manrope text-[14px] font-bold leading-[120%] text-[#8C39FF]">
            Reset
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <p className=" text-[#6D758F] font-Manrope text-[14px] font-normal leading-[120%]">
          Capture leads on your existing website with an embedded form.
          Customize it here, then embed it on your website.
        </p>
        <Disclouser />
      </div>
    </div>
  );
};

export default Recentdeal;
