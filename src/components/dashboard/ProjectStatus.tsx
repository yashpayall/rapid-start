import ProjectStausChart from "./ProjectStausChart";
import { ProjectStatusMoneyIcon, ThreedotsIcon } from "../common/Icons";

const ProjectStatus = () => {
  return (
    <div className="lg:max-w-[400px] w-full h-auto sm:h-[449px] flex flex-col items-start p-4 sm:p-6 bg-white rounded-xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)]">
      <div className="flex gap-1 items-start justify-between w-full">
        <p className="text-[#353E5C] text-xl font-DMSans font-normal leading-6">
          Project Status
        </p>
        <button type="submit">
          <ThreedotsIcon />
        </button>
      </div>
      <div className="flex flex-col gap-4 sm:gap-[30px] items-center justify-center max-w-[944px] lg:max-w-[352px] w-full pt-4 sm:pt-6">
        <div className="flex gap-3 justify-between w-full">
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-[#FFE2C8]">
              <ProjectStatusMoneyIcon />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#353E5C] text-[16px] font-Manrope font-normal leading-5">
                $4,3742
              </p>
              <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                Your Earnings
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[#81E492] font-Manrope text-sm font-normal leading-4">
              +10.2%
            </p>
          </div>
        </div>
        <ProjectStausChart />
        <div className="flex flex-col gap-4 justify-center w-full">
          <div className="flex gap-4 items-center justify-between">
            <p className="text-[#353E5C] text-[16px] font-Manrope font-normal leading-5">
              Donates
            </p>
            <div className="flex gap-4 justify-end">
              <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                $756.26
              </p>
              <p className="text-[#FE566B] text-sm font-Manrope font-normal leading-4">
                -139.34
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <p className="text-[#353E5C] text-[16px] font-Manrope font-normal leading-5">
              Podcasts
            </p>
            <div className="flex gap-4 justify-end">
              <p className="text-[#6D758F] text-sm font-Manrope font-normal leading-4">
                $2,207.03
              </p>
              <p className="text-[#FE566B] text-sm font-Manrope font-normal leading-4">
                +576.24
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectStatus;
