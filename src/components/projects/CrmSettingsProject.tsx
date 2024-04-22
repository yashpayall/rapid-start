import { FilterIcons } from "../common/Icons";
import DateCreatedDropdown from "./DateCreatedDropdown";

const CrmSettingsProject = () => {
  return (
    <>
      <div className="w-full mx-auto p-6 flex max-md:flex-col gap-6 justify-between">
        <div>
          <h1 className="text-[#353E5C] text-[32px] font-normal leading-[120%] font-DMSans">
            Projects
          </h1>
          <h1 className="text-[#63DE77] font-Manrope text-[16px] font-bold leading-[125%] pt-1">
            <span className="text-[#6D758F] font-normal">Total:</span> 136
            Projects
          </h1>
        </div>
        <div className="flex max-sm:flex-wrap gap-6 max-sm:gap-2 items-center justify-center max-w-[444px] w-full">
          <button
            type="submit"
            className="flex gap-2 justify-center items-center max-w-[120px] w-full h-[40px] sm:h-[48px] rounded-lg border-[2px] border-[#F4ECFF] hover:bg-transparent bg-[#F4ECFF] duration-300 text-[#A565FF] font-bold text-[16px] font-Manrope">
            <FilterIcons />
            Filter
          </button>
          <div>
            <DateCreatedDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrmSettingsProject;
