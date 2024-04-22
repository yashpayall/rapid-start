import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AddEventModalClockIcon } from "../common/Icons";
import CustomInputWithLabel from "../common/CustomInputWithLabel";
import CustomTextAreaInput from "../common/CustomTextAreaInput";
import Dropdown from "../common/Dropdown";
import DatePickerComponent from "../common/DatePickerComponent";
import PurpleAddBtn from "../common/PurpleAddBtn";
import LightPurpleAddBtn from "../common/LightPurpleAddBtn";

interface EventModalProps {
  eventModalOpen: any;
  closeModal: any;
}

const AddEventModal: React.FC<EventModalProps> = ({
  eventModalOpen,
  closeModal,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [allDay, setAllDay] = useState(false);

  return (
    <Transition appear show={eventModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-[420px] w-full transform overflow-hidden bg-white transition-all rounded-xl">
                {/* top section */}
                <div className="w-full flex items-center justify-between py-5 sm:pt-7 sm:pb-5 px-6 sm:px-8 border-b-[1px] border-b-[#DBDADE]">
                  <span className=" text-[#19213D] font-DMSans text-xl font-normal leading-[120%]">
                    Add Event
                  </span>
                  <button
                    onClick={closeModal}
                    className="flex items-center justify-center hover:rotate-90 transition-all duration-300 ease-in-out"
                  >
                    <AddEventModalClockIcon />
                  </button>
                </div>

                {/* bottom section */}
                <div className="w-full h-[74vh] overflow-y-auto py-5 sm:py-6 px-6 sm:px-8 flex flex-col items-start justify-start gap-4">
                  {/* title */}
                  <CustomInputWithLabel
                    inputLabel="Title"
                    inputPlaceholder="Event Title"
                    inputType="text"
                    inputId="Title"
                    inputName="Title"
                  />

                  {/* dropdown to choose label */}
                  <div className="w-full">
                    <span className="text-[#353E5C] font-normal text-sm leading-[120%]">
                      Label
                    </span>
                    <Dropdown />
                  </div>

                  {/* start date picker */}
                  <DatePickerComponent
                    date={startDate}
                    setDate={setStartDate}
                    dateLabel="Start Date"
                  />

                  {/* end date picker */}
                  <DatePickerComponent
                    date={endDate}
                    setDate={setEndDate}
                    dateLabel="End Date"
                  />

                  {/* all day selector */}
                  <div className="flex items-center justify-center gap-3">
                    <div
                      onClick={() => setAllDay((prev) => !prev)}
                      className={`w-[52px] p-2 flex items-center rounded-[32px] border-[2px] cursor-pointer ${
                        allDay
                          ? "justify-end border-[#8C39FF]"
                          : "justify-start border-[#B4B9C9]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${
                          allDay ? "bg-[#8C39FF]" : "bg-[#6D758F]"
                        }`}
                      ></div>
                    </div>
                    <span className="text-[#353E5C] font-normal font-Manrope text-sm leading-[120%]">
                      All Day
                    </span>
                  </div>

                  {/* event url */}
                  <CustomInputWithLabel
                    inputLabel="Event URL"
                    inputPlaceholder="https://www.google.com"
                    inputType="text"
                    inputId="Event URL"
                    inputName="Event URL"
                  />

                  {/* add guests */}
                  <CustomInputWithLabel
                    inputLabel="Add Guests"
                    inputPlaceholder="example@gmail.com"
                    inputType="text"
                    inputId="Add Guests"
                    inputName="Add Guests"
                  />

                  {/* location */}
                  <CustomInputWithLabel
                    inputLabel="Location"
                    inputPlaceholder="Enter Location"
                    inputType="text"
                    inputId="Location"
                    inputName="Location"
                  />

                  {/* description */}
                  <CustomTextAreaInput
                    textAreaLabel="Description"
                    textAreaPlaceholder=""
                    textAreaId="description"
                    textAreaName="description"
                  />

                  {/* add and cancel button */}
                  <div className="w-full flex items-center justify-start gap-4 sm:gap-6">
                    <div className="max-w-[79px] w-full">
                      <PurpleAddBtn
                        btnIcon=""
                        btnText="Add"
                        btnClickFunction={() => console.log("clicked!")}
                      />
                    </div>
                    <div className="max-w-[102px] w-full">
                      <LightPurpleAddBtn
                        btnIcon=""
                        btnText="Cancel"
                        btnClickFunction={() => console.log("clicked!")}
                      />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddEventModal;
