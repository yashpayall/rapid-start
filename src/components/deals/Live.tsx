import { CommentprogressIcon, PaperclipprogressIcon } from "../common/Icons";
import Threedoitnav from "./Threedoitnav";
import purple from "../../assets/img/purpalb.png";
import AddnewitemModal from "../common/AddNewItemModal";

const Live = () => {
  return (
    <>
      <div className="max-w-[270px] w-full">
        <Threedoitnav name="Live" />
        <div className=" flex flex-col gap-y-4 mt-5">
          <div className="  shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)] bg-white rounded-xl p-6 w-full">
            <button className=" py-1 px-2   rounded-[4px] bg-[#FFECEF]">
              <h3 className=" text-[#FE566B] font-Manrope font-medium text-[13px] leading-[14px]">
                IOS App
              </h3>
            </button>
            <h1 className=" mt-2 text-[#353E5C] font-Manrope text-[16px] font-normal leading-[130%]">
              Food delivery ios app
            </h1>
            <div className=" flex mt-4 items-center justify-between">
              <div className=" flex gap-x-3">
                <div className=" flex gap-x-1 items-center">
                  <CommentprogressIcon />
                  <h3 className=" text-[#6D758F] font-Manrope text-[10px] font-normal leading-[125%]">
                    12
                  </h3>
                </div>
                <div className=" flex gap-x-1 items-center">
                  <PaperclipprogressIcon />
                  <h3 className=" text-[#6D758F] font-Manrope text-[10px] font-normal leading-[125%]">
                    4
                  </h3>
                </div>
              </div>
              <img src={purple} alt="purple" />
            </div>
          </div>
          <AddnewitemModal />
        </div>
      </div>
    </>
  );
};

export default Live;
