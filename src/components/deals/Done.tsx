import Threedoitnav from "./Threedoitnav";
import { CommentprogressIcon, PaperclipprogressIcon } from "../common/Icons";
import blueg from "../../assets/img/bluedashimg.png";
import blueb from "../../assets/img/bluedashb.png";
import yellowg from "../../assets/img/yellowg.png";
import Girlprofile from "../../assets/img/girlprogress.png";
import AddnewitemModal from "../common/AddNewItemModal";

const Done = () => {
  return (
    <>
      <div className="max-w-[270px] w-full">
        <Threedoitnav name="Done" />
        <div className=" flex flex-col gap-y-4 mt-5">
          <div className="  shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)] bg-white rounded-xl p-6 w-full">
            <button className=" py-1 px-2   rounded-[4px] bg-[#E1E4ED]">
              <h3 className=" text-[#6D758F] font-Manrope font-medium text-[13px] leading-[14px]">
                App
              </h3>
            </button>
            <h1 className=" mt-2 text-[#353E5C] font-Manrope text-[16px] font-normal leading-[130%]">
              Forms & tables section
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
              <div className=" flex items-center"></div>
              <img src={Girlprofile} alt="girlprofile" />
              <img className="ml-[-34px]" src={blueg} alt="blueg" />
              <img className="ml-[-34px]" src={blueb} alt="blueb" />
              <img className="ml-[-34px]" src={yellowg} alt="yellowg" />
            </div>
          </div>
          <AddnewitemModal />
        </div>
      </div>
    </>
  );
};

export default Done;
