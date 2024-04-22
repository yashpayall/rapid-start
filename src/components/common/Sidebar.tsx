import { Link, useLocation } from "react-router-dom";
import { CustomerRelation } from "../common/Helper";
import {
  ArrowleftIcons,
  CustomerrelationIcons2,
  LogoutIcons,
} from "../common/Icons";
import { useState } from "react";

interface Props {
  showSideBar: any;
}

const Sidebar: React.FC<Props> = ({ showSideBar }) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  return (
    <div
      className={`w-full h-full max-lg:absolute top-0 px-3 py-10 sm:py-14 z-20 bg-white transition-all duration-200 ease-in-out flex flex-col sm:shadow-xl
    ${active ? "sm:max-w-[210px]" : "max-w-[100px]"}
    ${showSideBar ? "left-0" : "left-[-100%]"}`}
    >
      <div
        className={`w-full flex items-center relative ${
          active ? "gap-4" : "gap-6"
        } ${active ? "justify-start sm:justify-center" : "justify-center"}`}
      >
        <span
          className={`group cursor-pointer bg-[#5858E8] p-2 rounded-lg ${
            active ? "hidden" : "block"
          }`}
        >
          <CustomerrelationIcons2 />
        </span>

        <button
          type="button"
          className={`max-w-[235px] w-full rounded-lg h-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#5858E8] border-[2px] border-[#5858E8] hover:bg-transparent hover:text-[#5858E8] text-white text-base font-bold cursor-pointer flex font-Manrope transition-all duration-200 ease-in-out group justify-center items-center gap-2 ${
            active ? "block" : "hidden"
          }`}
        >
          <span
            className={` line-clamp-1 max-w-[155px] w-full${
              active ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200 ease-in-out`}
          >
            Customer Relations
          </span>
        </button>
        <span
          onClick={() => setActive(!active)}
          className={`absolute py-2 px-2 duration-200 ease-in-out cursor-pointer bg-white rounded-[30%] ${
            active
              ? "right-[-0%] sm:right-[-20%] p-0 sm:pl-0"
              : "right-[-45%] sm:right-[-50%] rotate-180 pr-0"
          }`}
        >
          <ArrowleftIcons />
        </span>
      </div>

      {/* divider line */}
      <div className="mt-6 h-[1px] bg-[#E9EBF2] w-full"></div>

      {/* sidebar options */}
      <div className="flex flex-col flex-grow justify-between mt-6">
        <div className="flex flex-col gap-3 h-[65vh] overflow-y-auto">
          {CustomerRelation.map((item: any, index: any) => (
            <div key={index} className="flex items-center group gap-3">
              <Link
                to={item.linkUrl}
                className={`w-full gap-1 py-3 items-center rounded-[6px] hover:bg-[#F4ECFF] flex ${
                  active ? "px-4 justify-between" : "px-2 justify-center"
                } ${location.pathname === item.linkUrl && "bg-[#5858E8]"}`}
              >
                <div className="flex gap-[10px] items-center">
                  <span
                    className={`${
                      location.pathname === item.linkUrl
                        ? "text-white"
                        : "text-[#6D758F]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <h1
                    className={`font-Manrope text-[14px] font-bold group-hover:text-[#A565FF]  ${
                      active ? "block" : "hidden"
                    } ${
                      location.pathname === item.linkUrl
                        ? "text-white"
                        : "text-[#6D758F]"
                    }`}
                  >
                    {item.name}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button
          className={`w-full mt-3 gap-[10px] py-3 items-center rounded-[6px] hover:bg-[#F4ECFF] flex group ${
            active ? "px-4 justify-start" : "px-2 justify-center"
          }`}
        >
          <LogoutIcons />
          <h1
            className={`text-[#6D758F] font-Manrope text-[14px] font-bold group-hover:text-[#A565FF] ${
              active ? "block" : "hidden"
            }`}
          >
            Logout
          </h1>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
