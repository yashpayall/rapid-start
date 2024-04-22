import { useState } from "react";
import { PlusAddEventIcon } from "../common/Icons";
import PurpleAddBtn from "../common/PurpleAddBtn";
import BigCalender from "./BigCalender";
import FilterSection from "./FilterSection";
import SmallCalender from "./SmallCalender";
import AddEventModal from "./AddEventModal";

const FinalCalendar = () => {
  let [eventModalOpen, setEventModalOpen] = useState(false);

  function closeModal() {
    setEventModalOpen(false);
  }

  function openModal() {
    setEventModalOpen(true);
  }

  return (
    <div className="max-lg:px-3">
      <div
        className="max-w-[1244px] w-full h-full mx-auto max-md:px-3 max-md:py-4 flex flex-col md:flex-row max-md:gap-4 items-center md:items-start justify-start md:justify-between rounded-xl bg-white 
        shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)]"
      >
        {/* left area */}
        <div className="md:h-[732px] md:overflow-y-auto flex flex-col divide-[#E1E4ED] divide-y-[1px] items-center justify-start flex-shrink-0 border-r-[1px] border-r-[#E1E4ED] max-md:border border-[#E1E4ED] max-md:rounded-xl">
          {/* add event button */}
          <div className="max-w-[160px] sm:max-w-[252px]s w-full min-h-[96px] flex items-center justify-center">
            <PurpleAddBtn
              btnIcon={<PlusAddEventIcon />}
              btnText="Add Event"
              btnClickFunction={openModal}
            />
          </div>

          {/* add event modal */}
          <AddEventModal
            eventModalOpen={eventModalOpen}
            closeModal={closeModal}
          />

          {/* small calender */}
          <div className="py-4 sm:py-5 sm:px-[17px]">
            <SmallCalender />
          </div>

          {/* filter area */}
          <div className="p-6 w-full h-full">
            <FilterSection />
          </div>
        </div>

        {/* right area */}
        <div className="max-w-[943px] w-full overflow-auto rounded-br-xl rounded-tr-xl big-calendar max-md:border max-md:border-t-[#E1E4ED] max-md:rounded-xl">
          <BigCalender />
        </div>
      </div>
    </div>
  );
};

export default FinalCalendar;
