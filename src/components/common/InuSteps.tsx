import {
  InuStep1Icon,
  InuStep2Icon,
  InuStep3Icon,
  InuStep4Icon,
} from "./Icons";

interface InuStepsProps {
  currentStep: number;
}
const InuSteps = ({ currentStep }: InuStepsProps) => {
  let color1,
    color2,
    color3,
    color4,
    svg1,
    svg2,
    svg3,
    svg4,
    divBgColor1,
    divBgColor2,
    divBgColor3,
    divBgColor4,
    borderColor1,
    borderColor2,
    borderColor3,
    borderColor4;

  if (currentStep === 1) {
    color1 = "text-[#8C39FF]";
    color2 = "text-[#BEC2D0]";
    color3 = "text-[#BEC2D0]";
    color4 = "text-[#BEC2D0]";

    svg1 = "fill-[#8C39FF]";
    svg2 = "fill-[#BEC2D0]";
    svg3 = "fill-[#BEC2D0]";
    svg4 = "fill-[#BEC2D0]";

    borderColor1 = "border-[#8C39FF]";
    borderColor2 = "border-[#BEC2D0]";
    borderColor3 = "border-[#BEC2D0]";
    borderColor4 = "border-[#BEC2D0]";

    divBgColor1 = "bg-[#E9D9FF]";
    divBgColor2 = "bg-[#F6F7F9]";
    divBgColor3 = "bg-[#F6F7F9]";
    divBgColor4 = "bg-[#F6F7F9]";
  } else if (currentStep === 2) {
    color1 = "text-[#8C39FF]";
    color2 = "text-[#8C39FF]";
    color3 = "text-[#BEC2D0]";
    color4 = "text-[#BEC2D0]";

    svg1 = "fill-[#8C39FF]";
    svg2 = "fill-[#8C39FF]";
    svg3 = "fill-[#BEC2D0]";
    svg4 = "fill-[#BEC2D0]";

    borderColor1 = "border-[#8C39FF]";
    borderColor2 = "border-[#8C39FF]";
    borderColor3 = "border-[#BEC2D0]";
    borderColor4 = "border-[#BEC2D0]";

    divBgColor1 = "bg-[#E9D9FF]";
    divBgColor2 = "bg-[#E9D9FF]";
    divBgColor3 = "bg-[#F6F7F9]";
    divBgColor4 = "bg-[#F6F7F9]";
  } else if (currentStep === 3) {
    color1 = "text-[#8C39FF]";
    color2 = "text-[#8C39FF]";
    color3 = "text-[#8C39FF]";
    color4 = "text-[#BEC2D0]";

    svg1 = "fill-[#8C39FF]";
    svg2 = "fill-[#8C39FF]";
    svg3 = "fill-[#8C39FF]";
    svg4 = "fill-[#BEC2D0]";

    borderColor1 = "border-[#8C39FF]";
    borderColor2 = "border-[#8C39FF]";
    borderColor3 = "border-[#8C39FF]";
    borderColor4 = "border-[#BEC2D0]";

    divBgColor1 = "bg-[#E9D9FF]";
    divBgColor2 = "bg-[#E9D9FF]";
    divBgColor3 = "bg-[#E9D9FF]";
    divBgColor4 = "bg-[#F6F7F9]";
  } else if (currentStep === 4) {
    color1 = "text-[#8C39FF]";
    color2 = "text-[#8C39FF]";
    color3 = "text-[#8C39FF]";
    color4 = "text-[#8C39FF]";

    svg1 = "fill-[#8C39FF]";
    svg2 = "fill-[#8C39FF]";
    svg3 = "fill-[#8C39FF]";
    svg4 = "fill-[#8C39FF]";

    borderColor1 = "border-[#8C39FF]";
    borderColor2 = "border-[#8C39FF]";
    borderColor3 = "border-[#8C39FF]";
    borderColor4 = "border-[#8C39FF]";

    divBgColor1 = "bg-[#E9D9FF]";
    divBgColor2 = "bg-[#E9D9FF]";
    divBgColor3 = "bg-[#E9D9FF]";
    divBgColor4 = "bg-[#E9D9FF]";
  }

  return (
    <div className="flex items-center justify-center flex-nowrap mt-16 sm:mt-[114px] mb-24">
      <div className="flex flex-col items-center justify-center relative">
        <div
          className={`border-[2px] ${borderColor1} rounded-full
          h-10 w-10 flex items-center justify-center ${divBgColor1}`}
        >
          <InuStep1Icon svg1={svg1} />
        </div>
        <h2
          className={`font-Manrope -bottom-8 absolute line-clamp-2 text-base text-center font-normal leading-[130%]
          ${color1} xs:leading-[35px]`}
        >
          About
        </h2>
      </div>

      {/* hr line 1 */}
      <div
        className={`block w-[40px] md:w-[96px] h-[2px] 
          rounded-[5px] ${divBgColor2}`}
      ></div>

      <div className="flex items-center justify-center flex-col relative">
        <div
          className={`border-[2px] ${borderColor2} rounded-full
          h-10 w-10 flex items-center justify-center ${divBgColor2}`}
        >
          <InuStep2Icon svg2={svg2} />
        </div>
        <h2
          className={`font-Manrope -bottom-8 absolute line-clamp-2 text-base text-center font-normal leading-[130%]
          ${color2} xs:leading-[35px]`}
        >
          Logo
        </h2>
      </div>

      {/* hr line 2 */}
      <div
        className={`block w-[40px] md:w-[96px] h-[2px] 
          rounded-[5px] ${divBgColor3}`}
      ></div>

      <div className="flex flex-col items-center justify-center relative">
        <div
          className={`border-[2px] ${borderColor3} rounded-full
           h-10 w-10 flex items-center justify-center ${divBgColor3}`}
        >
          <InuStep3Icon svg3={svg3} />
        </div>
        <h2
          className={`font-Manrope -bottom-8 absolute line-clamp-2 text-base text-center font-normal leading-[130%]
          ${color3} xs:leading-[35px]`}
        >
          Styles
        </h2>
      </div>

      {/* hr line 3 */}
      <div
        className={`block w-[40px] md:w-[96px] h-[2px] 
          rounded-[5px] ${divBgColor4}`}
      ></div>

      <div className="flex items-center justify-center flex-col relative">
        <div
          className={`border-[2px] ${borderColor4} rounded-full
          h-10 w-10 flex items-center justify-center ${divBgColor4}`}
        >
          <InuStep4Icon svg4={svg4} />
        </div>
        <h2
          className={`font-Manrope -bottom-8 absolute line-clamp-2 text-base text-center font-normal leading-[130%]
          ${color4} xs:leading-[35px]`}
        >
          Preview
        </h2>
      </div>
    </div>
  );
};

export default InuSteps;
