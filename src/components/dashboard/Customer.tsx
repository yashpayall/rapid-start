import { Customerscard, Customertaskstodo } from "../common/Helper";
import { RightArrowIcon } from "../common/Icons";

const Customer = () => {
  return (
    <>
      <div className="lg:max-w-[403px] flex flex-col md:flex-row max-md:justify-between lg:items-start gap-6 lg:flex-col w-full bg-white rounded-xl shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] pb-5 p-3 sm:px-6">
        <div className="pb-2 w-full md:w-[50%] lg:w-full">
          <div className=" flex items-center justify-between py-6">
            <p className=" font-DMSans text-[20px] text-[#353E5C] font-normal leading-[120%]">
              Customers
            </p>
            <button
              type="submit"
              className=" font-Manrope cursor-pointer text-[14px] font-bold leading-[120%] text-[#8C39FF]"
            >
              View all
            </button>
          </div>
          <div className=" flex flex-col gap-y-2">
            {Customerscard.map((item, index) => (
              <div
                key={index}
                className=" cursor-pointer py-3 flex items-center gap-x-3"
              >
                <img className=" w-[48px]" src={item.img} alt="" />
                <div className=" w-full">
                  <p className=" text-[#353E5C] text-[14px] sm:text-[16px] font-Manrope font-bold leading-[125%]">
                    {item.name}
                  </p>
                  <p className="mt-1 font-Manrope text-[12px] sm:text-[14px] font-normal leading-[120%] text-[#6D758F]">
                    {item.email}
                  </p>
                </div>
                <div>{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-[#E1E4ED] bg-[#F6F7F9] w-full md:w-[50%] lg:w-full shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] mt-6">
          <div className="p-3 sm:p-6 flex items-center justify-between">
            <p className=" font-DMSans text-[20px] text-[#353E5C] font-normal leading-[120%]">
              Tasks To Do
            </p>
            <button
              type="submit"
              className=" font-Manrope cursor-pointer text-[14px] font-bold leading-[120%] text-[#8C39FF]"
            >
              View all
            </button>
          </div>
          <div className=" pb-3 px-3 sm:px-6 flex flex-col gap-1 h-[327px]">
            {Customertaskstodo.map((item, index) => (
              <div
                key={index}
                className=" flex py-3 items-center gap-1 justify-between"
              >
                <div className=" flex max-sm:w-[120px] items-center sm:gap-1">
                  <p
                    className="w-[90px] font-Manrope text-[14px] font-normal leading-4"
                    style={{ color: `${item.dateColor}` }}
                  >
                    {item.date}
                  </p>
                  <div>
                    {item.isDelayed}
                    {item.icon}
                  </div>
                </div>
                <div className="w-[157px] ">
                  <p
                    className="text-left max-sm:text-[12px] max-sm:pl-2 text-sm font-Manrope font-normal leading-4"
                    style={{ color: `${item.taskColor}` }}
                  >
                    {item.task}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" bg-white flex items-center justify-between pl-6 pr-8 rounded-b-xl py-2">
            <p className="text-[#7E92A2] text-[16px] font-Manrope font-normal leading-5">
              Add new task
            </p>
            <button type="submit">
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Customer;
