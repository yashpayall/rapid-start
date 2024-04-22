import { Link } from "react-router-dom";
import { GmaillogoIcons, SyncIcons } from "../common/Icons";

const CrmSettings = () => {
  return (
    <div className="w-full mx-auto">
      <div className=" bg-white rounded-xl shadow-xl p-4 sm:p-6">
        <h1 className="text-[#353E5C] font-DMSans text-[32px] font-normal">
          All Customers
        </h1>
        <p className="text-[#6D758F] font-Manrope text-[14px] font-normal leading-[120%] pt-2">
          Manage your contact communication within RapidStart
        </p>
        <div className="flex flex-col">
          <label
            htmlFor="Email"
            className="text-[#353E5C] font-Manrope text-[14px] font-normal leading-[120%] mt-6">
            Email
          </label>
          <input
            type="email"
            className="max-w-[331px] w-full rounded-lg border-[1px] border-[#B4B9C9] h-10 md:h-[48px] placeholder:text-[#B4B9C9] font-Manrope font-normal leading-[125%] px-3 md:px-6 mt-1 outline-none"
          />
        </div>
        <div className="mt-[25px] flex max-sm:flex-col gap-4">
          <button
            type="submit"
            className="flex gap-2 max-sm:mx-auto justify-center items-center text-white max-w-[173px] w-full rounded-lg bg-[#8C39FF] h-10 md:h-[48px] border-[2px] border-[#8C39FF] hover:bg-transparent hover:text-[#8C39FF] duration-300 group">
            <SyncIcons />
            Sync emails
          </button>
          <button
            type="submit"
            className="flex max-sm:mx-auto hover:text-[#6D758F] duration-300 gap-2 max-w-[213px] w-full justify-center items-center text-[#A565FF] font-Manrope text-[16px] font-bold leading-[125%]">
            <GmaillogoIcons />
            Connect to gmail
          </button>
        </div>
        <p className="text-[#6D758F] font-Manrope text-[14px] font-normal pt-6">
          By connecting your email, you agree to RapidStart’
          <Link className="text-[#8C39FF] font-bold" to="">
            Privacy Policy{" "}
          </Link>
          and{" "}
          <Link className="text-[#8C39FF] font-bold" to="">
            Terms of Service.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CrmSettings;
