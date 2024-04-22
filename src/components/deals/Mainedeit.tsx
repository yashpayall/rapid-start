import Edeittaskdash from "./Edeittaskdash";
import { ActivityIcons, EditIcons } from "../common/Icons";
import Edittashdash from "./Edittashdash";
import Rangeedeit from "./Rangeedeit";
import { useState } from "react";

const Mainedeit = () => {
  const [edeit, setEdeit] = useState("penedeit");

  return (
    <div className=" max-w-[420px] bg-white shadow-2xl   rounded-lg w-full mx-auto">
      <Edeittaskdash />
      <div className=" pt-6 px-4 lg:px-8 ">
        <div className=" border-b border-b-[#DBDADE] flex items-center gap-x-4">
          <div
            onClick={() => setEdeit("penedeit")}
            className={`mb-[-1px] cursor-pointer  py-2  px-4 flex items-center gap-x-2 8C39FF ${
              edeit === "penedeit" ? "border-b border-b-[#8C39FF]" : ""
            }`}
          >
            <span
              className={`${
                edeit === "penedeit" ? "text-[#8C39FF]" : "text-[#6D758F]"
              }`}
            >
              <EditIcons />
            </span>
            <h3
              className={`text-[14px] font-Manrope font-bold  leading-[120%] ${
                edeit === "penedeit" ? "text-[#8C39FF]" : "text-[#6D758F]"
              }`}
            >
              Edit
            </h3>
          </div>
          <div
            onClick={() => setEdeit("rangedeit")}
            className={`py-2 cursor-pointer mb-[-1px] px-4 flex items-center gap-x-2  ${
              edeit === "rangedeit" ? "border-b border-b-[#8C39FF]" : ""
            }`}
          >
            <span
              className={`${
                edeit === "rangedeit" ? "text-[#8C39FF]" : "text-[#6D758F]"
              }`}
            >
              <ActivityIcons />
            </span>
            <h3
              className={`text-[14px] font-Manrope font-bold  leading-[120%] ${
                edeit === "rangedeit" ? "text-[#8C39FF]" : "text-[#6D758F]"
              } `}
            >
              Edit
            </h3>
          </div>
        </div>
      </div>
      {edeit === "penedeit" && <Edittashdash edeit={edeit} />}
      {edeit === "rangedeit" && <Rangeedeit edeit={edeit} />}
    </div>
  );
};

export default Mainedeit;
