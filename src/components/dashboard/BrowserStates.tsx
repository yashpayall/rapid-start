import { browserStates } from "../common/Helper";
import { ThreedotsIcon } from "../common/Icons";

const BrowserStates = () => {
  return (
    <div className="rounded-xl sm:h-[449px] shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] lg:max-w-[400px] w-full">
      <div className="flex justify-between px-4 lg:px-6 pt-4 lg:pt-6 ">
        <div className="flex flex-col">
          <p className="text-[#353E5C] font-DMSans text-[20px] font-normal">
            Browser States
          </p>
          <p className="text-[#6D758F] font-Manrope text-[14px] font-normal mt-1">
            Counter April 2022
          </p>
        </div>
        <button type="submit">
          <ThreedotsIcon />
        </button>
      </div>
      <div className="p-4 lg:p-6 flex flex-col gap-5 max-sm:overflow-auto">
        {browserStates.map((item, index) => (
          <div
            className="flex items-center justify-between gap-4 h-[37px] max-sm:w-[559px]"
            key={index}
          >
            <img src={item.img} alt="img" width={32} height={27} />
            <div className="w-[200px]">
              <p className="text-[#353E5C] font-Manrope text-[16px] font-normal">
                {item.name}
              </p>
            </div>
            <p className="text-[#353E5C] text-[16px] font-Manrope font-normal w-[50px]">
              {item.value}
            </p>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowserStates;
