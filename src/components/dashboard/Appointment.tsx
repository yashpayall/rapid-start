import background from "../../assets/img/background.png";
import { CalenderIcon } from "../common/Icons";

const Appointment = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-no-repeat bg-right-bottom xl:w-[50%] w-full p-6 bg-[#8C39FF] shadow-[0px 4px 6px -1px rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)] rounded-xl"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-white font-DMSans text-[24px] leading-[120%]">
          Next Appointment
        </h2>
        <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div className="bg-white w-[40px] h-[40px] rounded-xl flex justify-center items-center">
          <CalenderIcon />
        </div>
        <div>
          <h2 className="text-white font-DMSans text-[20px] font-bold leading-[120%]">
            Business Plan Stat
          </h2>
          <p className="text-[#F4ECFF] pt-1 font-Manrope text-[14px] font-normal leading-[120%]">
            Australia, VIC 3008
          </p>
        </div>
      </div>
      <p className="text-[#F4ECFF] font-Manrope text-[14px] font-normal leading-[120%] mt-6">
        Appointment Date
      </p>
      <p className="text-white font-DMSans font-normal text-[20px] leading-[120%] pt-1">
        Nov 13 2023, 13:00
      </p>
      <div className="flex mt-8 justify-between">
        <div>
          <p className="text-[#F4ECFF] font-Manrope text-[14px] font-normal leading-[120%]">
            Location
          </p>
          <p className="text-white font-DMSans text-[20px] font-normal leading-[120%]">
            Google Meets
          </p>
        </div>
        <div>
          <p className="text-[#F4ECFF] font-Manrope text-[14px] font-normal leading-[120%]">
            Attendees
          </p>
          <p className="text-white font-DMSans text-[20px] font-normal leading-[120%]">
            11
          </p>
        </div>
      </div>
      <div className="flex mt-8 justify-between">
        <div>
          <p className="text-[#F4ECFF] font-Manrope text-[14px] font-normal leading-[120%]">
            Attendees
          </p>
          <p className="text-white font-DMSans text-[20px] font-normal leading-[120%]">
            11
          </p>
        </div>
        <button
          type="submit"
          className="text-[#A565FF] border-[2px] border-white hover:text-white duration-300 hover:bg-transparent font-Manrope font-bold text-[16px] bg-white rounded-lg h-[48px] max-w-[135px] w-full"
        >
          See details
        </button>
      </div>
    </div>
  );
};

export default Appointment;
