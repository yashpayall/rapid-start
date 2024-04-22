import React from "react";

interface Props {
  inputLabel: any;
  inputPlaceholder: string;
  inputType: any;
  inputId: any;
  inputName: any;
}

const CustomInputWithLabel: React.FC<Props> = ({
  inputLabel,
  inputPlaceholder,
  inputType,
  inputId,
  inputName,
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-1">
      <span className="text-[#353E5C] font-normal text-sm leading-[120%]">
        {inputLabel}
      </span>
      <input
        id={inputId}
        name={inputName}
        type={inputType}
        placeholder={inputPlaceholder}
        className="w-full py-2 sm:py-3 px-3 sm:pl-6 rounded-lg border border-solid border-[#B4B9C9] bg-white font-Manrope text-base font-normal leading-[125%] outline-none"
      />
    </div>
  );
};

export default CustomInputWithLabel;
