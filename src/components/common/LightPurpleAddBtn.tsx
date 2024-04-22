interface BtnProps {
  btnIcon: any;
  btnText: string;
  btnClickFunction: any;
}

const LightPurpleAddBtn: React.FC<BtnProps> = ({
  btnIcon,
  btnText,
  btnClickFunction,
}) => {
  return (
    <button
      onClick={() => btnClickFunction()}
      className="w-full bg-[#F4ECFF] py-3 px-4 sm:px-6 flex items-center justify-center gap-2 rounded-lg border border-[#F4ECFF] hover:bg-transparent transition-all duration-200 ease-in-out group"
    >
      {btnIcon && (
        <span className=" text-[#A565FF] transition-all duration-200 ease-in-out">
          {btnIcon}
        </span>
      )}
      <span className="text-[#A565FF] font-Manrope text-base font-bold leading-[125%] transition-all duration-200 ease-in-out">
        {btnText}
      </span>
    </button>
  );
};

export default LightPurpleAddBtn;
