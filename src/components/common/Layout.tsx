import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { MenuBtn, ModalCrossIcons } from "./Icons";
import { useLocation } from "react-router-dom";
import Selectdeals from "../deals/Selectdeals";
import AddNewClientHeaderBtn from "./AddNewClientHeaderBtn";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="overflow-hidden w-full mx-auto h-screen flex bg-[#f6f7f9]">
      {/* sidebar section */}
      <Sidebar showSideBar={showSideBar} />

      {/* children section */}
      <div
        className={`w-full 4xl:max-w-full min-h-full lg:max-h-full overflow-hidden scrollbar flex flex-col`}
      >
        <div className="flex flex-col px-3 lg:px-10 overflow-auto">
          {/* header */}
          <div className="w-full mx-auto pt-8 md:pt-14 pb-6 md:pb-8 flex items-start md:items-center gap-2 justify-between">
            <span className="text-[#19213D] font-DMSans text-2xl sm:text-3xl md:text-[40px] font-bold leading-[120%] line-clamp-1">
              Welcome back, Andrew
            </span>
            <div className="flex flex-col-reverse md:flex-row items-end md:items-center justify-center gap-3 flex-shrink-0">
              {(location.pathname === "/contact" ||
                location.pathname === "/projects" ||
                location.pathname === "/resources") && (
                <AddNewClientHeaderBtn />
              )}
              {location.pathname === "/deals" && <Selectdeals />}
              {showSideBar ? (
                <button
                  className="w-7 sm:w-8 h-7 sm:h-8 lg:hidden text-[#A565FF] hover:rotate-180 transition-all duration-700 ease-in-out flex items-center justify-center"
                  onClick={() => setShowSideBar((prev) => !prev)}
                >
                  <ModalCrossIcons />
                </button>
              ) : (
                <button
                  className="w-7 sm:w-8 h-7 sm:h-8 lg:hidden text-[#A565FF] hover:rotate-180 transition-all duration-700 ease-in-out flex items-center justify-center"
                  onClick={() => setShowSideBar((prev) => !prev)}
                >
                  <MenuBtn />
                </button>
              )}
            </div>
          </div>

          {/* children section */}
          <div className="pb-8 sm:pb-14">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
