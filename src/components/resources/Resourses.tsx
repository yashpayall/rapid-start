import { Resoursescard } from "../common/Helper";
import { Readmoreicon } from "../common/Icons";

const Resourses = () => {
  return (
    <div className="max-w-[1340px] w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {Resoursescard.map((item: any, index: any) => (
          <div
            className="max-w-[293px] w-full mx-auto flex flex-col gap-6 rounded-[12px] bg-white shadow-[0px,4px,6px,-1px_rgba(0,0,0,0.10),0px,2px,4px,-2px_rgba(0,0,0,0.10)]"
            key={index}
          >
            <img
              src={item.img}
              alt="agreement img"
              className="w-full h-[186px] rounded-t-[12px]"
            />
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col gap-2">
              <p className=" font-dmsans font-bold text-[20px] leading-6 text-[#353E5C] max-lg:line-clamp-2">
                {item.heading}
              </p>
              <p className=" font-manrope font-normal text-[16px] leading-5 text-[#6D758F] line-clamp-4">
                {item.decs}
              </p>
              <div className="flex items-center justify-start gap-1 p-1 w-full">
                <button className=" font-manrope font-bold text-[14px] leading-4 text-[#8C39FF]">
                  Read more
                </button>
                <div>
                  <Readmoreicon />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resourses;
