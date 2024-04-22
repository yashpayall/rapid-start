import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ModalCrossIcons, PlusIcons } from "./Icons";
import CustomInputWithLabel from "./CustomInputWithLabel";

export default function AddNewClientHeaderBtn() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={openModal}
          type="submit"
          className="w-[100px] sm:w-[160px] md:w-[194px] h-10 md:h-12 flex gap-1 md:gap-2 justify-center items-center bg-[#8C39FF] rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-white font-Manrope text-sm sm:text-base font-bold group border-[2px] border-[#8C39FF] hover:text-[#8C39FF] hover:bg-transparent duration-300"
        >
          <span className="max-sm:hidden">
            <PlusIcons />
          </span>
          Add <span className="max-sm:hidden">new</span> client
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center relative">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative max-w-[280px] sm:max-w-[500px] lg:max-w-[800px] xl:max-w-[1029px] w-full mx-auto max-h-[80vh] p-4 md:p-8 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)] bg-white rounded-lg overflow-auto">
                  <div className="absolute top-3 md:top-6 right-3 md:right-6">
                    <div
                      className="cursor-pointer hover:rotate-90 duration-200 ease-in-out"
                      onClick={closeModal}
                    >
                      <ModalCrossIcons />
                    </div>
                  </div>
                  <p className="text-center text-[#4B465C] font-DMSans text-xl md:text-[32px] font-normal">
                    Add New Client
                  </p>
                  <form
                    action=""
                    className="w-full flex flex-col gap-3 sm:gap-4"
                  >
                    <div className="flex max-sm:flex-col gap-3 sm:gap-6 mt-4 md:mt-[34px] w-full">
                      <CustomInputWithLabel
                        inputLabel="First Name"
                        inputPlaceholder="First Name"
                        inputType="text"
                        inputId="First Name"
                        inputName="First Name"
                      />
                      <CustomInputWithLabel
                        inputLabel="Last Name"
                        inputPlaceholder="Last Name"
                        inputType="text"
                        inputId="Last Name"
                        inputName="Last Name"
                      />
                    </div>

                    <CustomInputWithLabel
                      inputLabel="Company"
                      inputPlaceholder="Company"
                      inputType="text"
                      inputId="Company"
                      inputName="Company"
                    />

                    <CustomInputWithLabel
                      inputLabel="Phone number"
                      inputPlaceholder="Phone number"
                      inputType="number"
                      inputId="Phone number"
                      inputName="Phone number"
                    />

                    <CustomInputWithLabel
                      inputLabel="Email"
                      inputPlaceholder="Email"
                      inputType="email"
                      inputId="Email"
                      inputName="Email"
                    />

                    <CustomInputWithLabel
                      inputLabel="Source"
                      inputPlaceholder="English"
                      inputType="text"
                      inputId="Source"
                      inputName="Source"
                    />
                  </form>
                  <div className="flex gap-6 my-5 sm:my-6 justify-center">
                    <button
                      type="submit"
                      className="max-w-[105px] w-full h-9 md:h-[48px] rounded-lg bg-[#7367F0] text-white text-[16px] font-bold font-Manrope border-[2px] border-[#7367F0] hover:text-[#7367F0] hover:bg-transparent duration-300"
                    >
                      Submit
                    </button>
                    <button
                      type="submit"
                      className="max-w-[102px] w-full h-9 md:h-[48px] rounded-lg border-[2px] bg-[#F4ECFF] text-[#A565FF] text-[16px] font-bold font-Manrope border-[#F4ECFF] hover:text-[#7367F0] hover:bg-transparent duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
