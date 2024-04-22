interface ColorCardProps {
  colorData: any;
  selectedTheme: any;
  setSelectedTheme: any;
}

const ColorChooseCard: React.FC<ColorCardProps> = ({
  colorData,
  selectedTheme,
  setSelectedTheme,
}) => {
  return (
    <div
      onClick={() => setSelectedTheme(colorData)}
      className={`p-4 rounded-xl border-[2px] flex flex-col items-start justify-center gap-3 cursor-pointer hover:scale-105 transition-all duration-200 ease-out
      ${
        selectedTheme === colorData ? "border-[#8C39FF]" : "border-gray-400"
      } font-Manrope text-xs w-fit`}
    >
      <span className="text-black font-bold">{colorData.colorName}</span>
      <span className="text-gray-400">{colorData.colorMeaning}</span>
      <div className="grid grid-cols-4 grid-rows-2 w-[165px] h-[65px]">
        {colorData.colorCodes.map((color: any, index: any) => (
          <div key={index} style={{ background: `${color}` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ColorChooseCard;
