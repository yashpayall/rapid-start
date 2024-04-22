interface Props {
  textAreaLabel: any;
  textAreaPlaceholder: string;
  textAreaId: string;
  textAreaName: string;
}

const CustomTextAreaInput: React.FC<Props> = ({
  textAreaLabel,
  textAreaPlaceholder,
  textAreaId,
  textAreaName,
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-1">
      <span className="text-[#353E5C] font-normal text-sm leading-[120%]">
        {textAreaLabel}
      </span>
      <textarea
        id={textAreaId}
        name={textAreaName}
        placeholder={textAreaPlaceholder}
        className="h-[125px] w-full py-3 px-6 rounded-lg border border-solid border-[#B4B9C9] bg-white font-Manrope text-base font-normal leading-[125%] outline-none resize-none"
      ></textarea>
    </div>
  );
};

export default CustomTextAreaInput;
