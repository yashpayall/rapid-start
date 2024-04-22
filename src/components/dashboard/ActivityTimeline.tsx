import {
  ActivityTimelineAppGuideLineIcon,
  ActivityTimelineDot3Icon,
  ActivityTimelineDot4Icon,
  ActivityTimelineIcon,
  ActivityTimelineTestingResultsIcon,
  ActivitytimelineDot1Icon,
  ActivitytimelineDot2Icon,
  ThreedotsIcon,
} from "../common/Icons";
import avatar from "../../assets/img/avatar.png";

const ActivityTimeline = () => {
  return (
    <div className="rounded-xl h-[423px] shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] xl:max-w-[612px] w-full">
      <div className="flex justify-between items-center px-6 pt-6">
        <div className="flex gap-4 items-center">
          <ActivityTimelineIcon />
          <p className="text-[#353E5C] font-DMSans text-[20px] font-normal leading-6">
            Activity Timeline
          </p>
        </div>
        <button type="submit">
          <ThreedotsIcon />
        </button>
      </div>
      <div className="overflow-auto">
        <div className="flex flex-col px-6 pt-6 w-[616px] sm:max-w-[1215px] sm:w-full">
          <div className="flex gap-6 items-center w-full h-[124px]">
            <div className="flex flex-col h-full w-3">
              <div className="z-10">
                <ActivitytimelineDot1Icon />
              </div>
              <div className="w-[1px] h-[112px] mx-[9px] bg-[#B4B9C9]"></div>
            </div>
            <div className="pb-[30px] flex flex-col gap-3 items-start w-full">
              <div className="w-full">
                <div className="flex items-start justify-between w-full">
                  <p className="text-[#353E5C] text-[16px] font-Manrope font-normal leading-5">
                    Client Meeting
                  </p>
                  <p className="text-[#B4B9C9] text-[10px] font-Manrope font-normal leading-3">
                    Today
                  </p>
                </div>
                <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                  Project meeting with john @10:15am
                </p>
              </div>
              <div className="flex gap-3 items-start justify-start h-[41px]">
                <img src={avatar} alt="avatar" width={38} height={38} />
                <div className="flex flex-col justify-start">
                  <p className="text-[#353E5C] text-[16px] font-Manrope font-normal leading-5">
                    Lester McCarthy (Client)
                  </p>
                  <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                    CEO of Infibeam
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center w-full h-[71px]">
            <div className="flex flex-col h-full w-3">
              <div className="z-10">
                <ActivitytimelineDot2Icon />
              </div>
              <div className="w-[1px] h-[63px] mx-[9px] bg-[#B4B9C9]"></div>
            </div>
            <div className="pb-[30px] flex flex-col gap-3 items-start w-full">
              <div className="w-full">
                <div className="flex items-start justify-between w-full">
                  <p className="text-[#353E5C] text-[16px] font-Manrope font-normal leading-5">
                    Create a new project for client
                  </p>
                  <p className="text-[#B4B9C9] text-[10px] font-Manrope font-normal leading-3">
                    2 Day’s Ago
                  </p>
                </div>
                <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                  Add files to new design folder
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center w-full h-[103px]">
            <div className="flex flex-col h-full w-3">
              <div className="z-10">
                <ActivityTimelineDot3Icon />
              </div>
              <div className="w-[1px] h-[98px] mx-[9px]  bg-[#B4B9C9]"></div>
            </div>
            <div className="pb-[30px] flex flex-col gap-3 items-start w-full">
              <div className="w-full">
                <div className="flex items-start justify-between w-full">
                  <p className="text-[#353E5C] text-[16px] font-Manrope font-normal leading-5">
                    Shared 2 New Project Files
                  </p>
                  <p className="text-[#B4B9C9] text-[10px] font-Manrope font-normal leading-3">
                    6 Day’s Ago
                  </p>
                </div>
                <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                  Sent by Mollie Dixon
                </p>
              </div>
              <div className="flex gap-3 items-start justify-start h-5">
                <div className="flex justify-start gap-2 items-center">
                  <ActivityTimelineAppGuideLineIcon />
                  <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                    App Guidelines
                  </p>
                </div>
                <div className="flex justify-start gap-2 items-center">
                  <ActivityTimelineTestingResultsIcon />
                  <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                    Testing Results
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center w-full h-[41px]">
            <div className="flex flex-col h-full w-3">
              <div className="z-10">
                <ActivityTimelineDot4Icon />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start w-full pb-1">
              <div className="w-full">
                <div className="flex items-start justify-between w-full">
                  <p className="text-[#353E5C] text-[16px] font-Manrope font-normal leading-5">
                    Project status updated
                  </p>
                  <p className="text-[#B4B9C9] text-[10px] font-Manrope font-normal leading-3">
                    10 Day’s Ago
                  </p>
                </div>
                <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                  WooCommerce iOS App Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivityTimeline;
