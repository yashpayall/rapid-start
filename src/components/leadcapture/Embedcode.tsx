import codeimg from "../../assets/img/code-img.png";
import { Copyicon } from "../common/Icons";

const Embedcode = () => {
  return (
    <div className="w-full p-6 flex flex-col gap-4 rounded-xl bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10);]">
      <div className="flex justify-between">
        <h2 className=" font-DMSans text-[20px] font-normal leading-[120%] text-[#353E5C]">
          Embed Code
        </h2>
        <div className="flex items-center gap-1 cursor-pointer">
          <Copyicon />
          <p className=" font-Manrope text-[14px] font-bold leading-[120%] text-[#8C39FF]">
            Copy
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={codeimg} alt="code-img" />
      </div>
    </div>
  );
};

export default Embedcode;
