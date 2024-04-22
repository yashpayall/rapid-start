import React from "react";
import Input from "../common/Input";

const Previewformmobile = () => {
  return (
    <form action="" className="pt-2 w-full flex flex-col gap-4">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="Name"
            className="text-[14px] font-normal text-[#353E5C] leading-[17px] font-Manrope"
          >
            Name
          </label>
          <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] border-[#BEC2D0] border">
            <Input
              placeholder="eg. John Doe"
              id="Name"
              name="Name"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="email"
            className="text-[14px] font-normal text-[#353E5C] leading-[17px] font-Manrope"
          >
            Email
          </label>
          <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] border-[#BEC2D0] border">
            <Input
              placeholder="john.doe@gmail.com"
              id="email"
              name="email"
              type="email"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="Company"
            className="text-[14px] font-normal text-[#353E5C] leading-[17px] font-Manrope"
          >
            Company
          </label>
          <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] border-[#BEC2D0] border">
            <Input
              placeholder="John Corp International"
              id="Company"
              name="Company"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="Phone"
            className="text-[14px] font-normal text-[#353E5C] leading-[17px] font-Manrope"
          >
            Phone
          </label>
          <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] border-[#BEC2D0] border">
            <Input
              placeholder="0421 234 5678"
              id="Phone"
              name="Phone"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor="Message"
          className="text-[14px] font-normal text-[#353E5C] leading-[17px] font-Manrope"
        >
          Message
        </label>
        <div className="p-4 sm:p-6 rounded-[8px] border-[#BEC2D0] border w-full">
          <textarea
            placeholder="Hi, This is John Doe from John Corp International, I was wondering if...."
            id="Message"
            name="Message"
            className="w-full outline-none h-[135px]"
          />
        </div>
      </div>
      <div className="flex w-full gap-2 justify-between">
        <p className="text-[#6D758F] font-Manrope text-[10px] font-normal leading-[120%]">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-[#A565FF] px-[2px]"
          >
            Privacy Policy
          </a>
          and{" "}
          <a
            href="https://policies.google.com/terms"
            className="text-[#A565FF] px-[2px]"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
        <button
          type="submit"
          className="w-[88px] h-[48px] bg-[#8C39FF] rounded-[8px] border border-[#8C39FF] hover:bg-transparent text-white text-[16px] px-4 sm:px-6 py-2 sm:py-3 font-Manrope font-bold leading-[125%] hover:text-[#8C39FF]"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Previewformmobile;
