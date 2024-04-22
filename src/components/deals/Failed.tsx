import Threedoitnav from "./Threedoitnav";
import { Failedcard } from "../common/Helper";
import AddnewitemModal from "../common/AddNewItemModal";

const Failed = () => {
  return (
    <>
      <div className="max-w-[270px] w-full">
        <Threedoitnav name="Failed" />
        <div className="flex flex-col  gap-y-4 mt-5">
          {Failedcard.map((item, index) => (
            <div
              key={index}
              className=" shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)] bg-white rounded-xl p-6 w-full"
            >
              <button className=" py-1 px-2   rounded-[4px] bg-[#EEF9F5]">
                <h3
                  style={{
                    backgroundColor: item.bgcolor,
                    color: item.textcolor,
                  }}
                  className=" text-[#28C76f] font-Manrope font-medium text-[13px] leading-[14px]"
                >
                  {item.uxcode}
                </h3>
              </button>
              <h1 className=" mt-2 text-[#353E5C] font-Manrope text-[16px] font-normal leading-[130%]">
                {item.refind}
              </h1>
              <div className=" flex mt-4 items-center justify-between">
                <div className=" flex gap-x-3">
                  <div className=" flex gap-x-1 items-center">
                    {item.comment}
                    <h3 className=" text-[#6D758F] font-Manrope text-[10px] font-normal leading-[125%]">
                      {item.twelve}
                    </h3>
                  </div>
                  <div className=" flex gap-x-1 items-center">
                    {item.paperpin}
                    <h3 className=" text-[#6D758F] font-Manrope text-[10px] font-normal leading-[125%]">
                      {item.four}
                    </h3>
                  </div>
                </div>
                <div className=" flex items-center">
                  <img src={item.girlpurple} alt="girlpurle" />
                  <img className=" ml-[-8px]" src={item.bgby} alt="bgby" />
                </div>
              </div>
            </div>
          ))}
          <AddnewitemModal />
        </div>
      </div>
    </>
  );
};

export default Failed;
