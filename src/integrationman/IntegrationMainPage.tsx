import { EditIcons, PlusIcons } from "../components/common/Icons";
import integrationfirst from "../assets/img/integrationfirst.png";
import integrationsecond from "../assets/img/integrationsecond.png";

const IntegrationMainPage = () => {
  return (
    <>
      <div className="bg-[#F6F7F9] w-full p-3">
        <div className="flex max-md:flex-col items-center justify-between">
          <p className="text-[#353E5C] max-lg:text-[28px] font-DMSans text-[32px] font-normal leading-[120%]">
            Search all Integrations
          </p>
          <div className="flex max-sm:flex-wrap max-sm:gap-3 max max-md:justify-center max-md:mt-6 max-w-[432px] w-full items-center gap-6">
            <button
              type="submit"
              className="bg-[#F4ECFF] rounded-xl max-w-[142px] w-full max-md:h-[40px] h-[48px] flex items-center justify-center gap-2 text-[#A565FF] font-Manrope text-[16px] max-md:text-[12px] font-bold leading-[120%] border-[2px] border-[#F4ECFF] hover:bg-transparent duration-300">
              <EditIcons />
              Manage
            </button>
            <button
              type="submit"
              className="flex gap-2 max-md:gap-1 justify-center items-center rounded-lg bg-[#8C39FF] max-w-[266px] max-md:max-w-[200px] max-md:h-[40px] w-full h-[48px] text-white text-[16px] max-md:text-[12px] font-bold leading-[125%] hover:bg-transparent duration-300 border-[2px] border-[#8C39FF] hover:text-[#8C39FF] group">
              <PlusIcons />
              Add Custom Integration
            </button>
          </div>
        </div>
        <div className="mt-[33px] w-full">
          <img
            src={integrationfirst}
            alt="integraion-first"
            className="mx-auto w-full object-cover"
          />
          <img
            src={integrationsecond}
            alt="integraion-first"
            className="mx-auto w-full object-cover"
          />
        </div>
        <div className="bg-[#F4F7FE] max-w-[807px] w-full mx-auto my-14 py-4">
          <p className="text-black font-bold text-[16px] text-center">
            End of result
          </p>
          <p className="text-sm font-Manrope text-center font-medium text-gray-500 pt-3">
            Didnt't find what you were looking for ? Refine your search, or:
          </p>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="rounded-lg max-w-[200px] w-full h-[48px] max-sm:h-[40px] max-sm:max-w-[150px] text-white bg-[#20B69E] border-[2px] border-[#20B69E] hover:bg-transparent hover:text-[#20B69E] text-sm font-bold mx-auto duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationMainPage;
