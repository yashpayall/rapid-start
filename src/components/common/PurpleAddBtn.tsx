interface BtnProps {
  btnIcon: any;
  btnText: string;
  btnClickFunction: any;
}

const PurpleAddBtn: React.FC<BtnProps> = ({
  btnIcon,
  btnText,
  btnClickFunction,
}) => {
  return (
    <button
      onClick={() => btnClickFunction()}
      className="w-full bg-[#A565FF] py-3 px-4 sm:px-6 flex items-center justify-center gap-2 rounded-lg shadow-[0px_2px_4px_0px_rgba(165,163,174,0.30)] border border-[#A565FF] hover:bg-transparent transition-all duration-200 ease-in-out group"
    >
      {btnIcon && (
        <span className="group-hover:text-[#A565FF] text-white transition-all duration-200 ease-in-out">
          {btnIcon}
        </span>
      )}
      <span className=" text-white font-Manrope text-base font-bold leading-[125%] group-hover:text-[#A565FF] transition-all duration-200 ease-in-out">
        {btnText}
      </span>
    </button>
  );
};

export default PurpleAddBtn;
