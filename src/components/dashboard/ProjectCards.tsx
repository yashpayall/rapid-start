import { projects } from "../common/Helper";

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 w-full lg:max-w-[612px]">
      {projects.map((item, index) => (
        <div
          key={index}
          className="rounded-xl bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)] px-3 lg:px-6 py-2 sm:py-4 w-full max-w-[612px]  flex justify-between items-center"
        >
          <div className="flex gap-3 items-center">
            <div className="bg-[#E1E4ED] flex rounded-full w-[64px] h-[64px]"></div>
            <div>
              <p className="text-[#353E5C] font-Manrope text-[16px] font-bold leading-[120%]">
                {item.name}
              </p>
              <div className="flex mt-2 gap-3 items-center max-w-[114px] w-full">
                <div className="flex items-center gap-1">
                  <div>{item.icon}</div>
                  <p className="text-[#6D758F] text-[10px] font-normal font-Manrope leading-[120%]">
                    {item.comment}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {item.icn}
                  <p className="text-[#6D758F] text-[10px] font-normal font-Manrope leading-[120%]">
                    {item.view}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={item.img} alt="img" width={58} height={58} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectCards;
