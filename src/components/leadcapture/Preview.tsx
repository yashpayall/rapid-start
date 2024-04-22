import { useState } from "react";
import { Desktopicon, Mobileicon, Tabicon } from "../common/Icons";
import Previewform from "./Previewform";
import Previewformmobile from "./Previewformmobile";

const Preview = () => {
  const [previewtab, setPreviewtab] = useState("desktop");
  return (
    <div className="w-full p-6 flex flex-col gap-4 rounded-xl bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10);] h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-[#353E5C] font-DMSans text-[20px] font-normal leading-[120%]">
          Preview
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => setPreviewtab("mobile")}
            type="submit"
            className={`w-[28px] h-[28px] p-1 rounded-[4px] group hover:bg-[#8C39FF] border border-[#B4B9C9] ${
              previewtab === "mobile" ? "bg-[#8C39FF]" : ""
            }`}
          >
            <Mobileicon previewtab={previewtab} />
          </button>
          <button
            onClick={() => setPreviewtab("tab")}
            type="submit"
            className={`w-[28px] h-[28px] p-1 rounded-[4px]  group hover:bg-[#8C39FF] border border-[#B4B9C9] ${
              previewtab === "tab" ? "bg-[#8C39FF]" : ""
            }`}
          >
            <Tabicon previewtab={previewtab} />
          </button>
          <button
            onClick={() => setPreviewtab("desktop")}
            type="submit"
            className={`w-[28px] h-[28px] p-1 rounded-[4px] group hover:bg-[#8C39FF] border border-[#B4B9C9] ${
              previewtab === "desktop" ? "bg-[#8C39FF]" : ""
            }`}
          >
            <Desktopicon previewtab={previewtab} />
          </button>
        </div>
      </div>
      {previewtab === "mobile" && <Previewformmobile />}
      {previewtab === "tab" && <Previewform />}
      {previewtab === "desktop" && <Previewform />}
    </div>
  );
};

export default Preview;
