import { activeprojects } from "../common/Helper";
import { ThreedotsIcon } from "../common/Icons";

const ActiveProjects = () => {
  return (
    <div className="rounded-xl shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] md:h-[449px] xl:max-w-[400px] w-full">
      <div className="flex justify-between px-4 lg:px-6 pt-4 lg:pt-6 items-start h-[69px]">
        <div className="flex flex-col gap-1">
          <p className="text-[#353E5C] font-DMSans text-[20px] font-normal">
            Active Projects
          </p>
          <p className="text-[#6D758F] font-Manrope text-[14px] font-normal mt-1">
            Average 72% completed
          </p>
        </div>
        <button type="submit">
          <ThreedotsIcon />
        </button>
      </div>
      <div className="p-4 lg:p-6 flex flex-col gap-4 overflow-auto">
        {activeprojects.map((item, index) => (
          <div
            className="flex items-center max-xl:justify-between xl:gap-4 h-[37px] max-sm:w-[559px] w-full"
            key={index}
          >
            <img src={item.img} alt="img" width={32} height={27} />
            <div className="w-[120px]">
              <p className="text-[#353E5C] font-Manrope text-[16px] font-normal">
                {item.language}
              </p>
              <p className="text-[#B4B9C9] font-Manrope text-[14px]">
                {item.quality}
              </p>
            </div>
            <div className="bg-[#F1F0F2] w-[119px] h-[8px] rounded-[30px]">
              <div
                className="h-[8px] rounded-[30px]"
                style={{
                  backgroundColor: item.bgcolor,
                  width: item.width,
                }}
              ></div>
            </div>
            <p className="text-[#353E5C] text-[16px] font-Manrope font-normal">
              {item.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveProjects;
