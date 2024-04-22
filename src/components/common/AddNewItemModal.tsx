import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Input from "./Input";
import Addnewitem from "../deals/Addnewitem";

export default function AddnewitemModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type="button" onClick={openModal}>
          <Addnewitem />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className=" py-3 px-6 border border-[#8C39FF] rounded-lg bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)]">
                    <Input
                      type="text"
                      placeholder="Add content"
                      id=""
                      name=""
                    />
                  </div>
                  <div className=" flex items-center gap-x-6 mt-4">
                    <button
                      className=" text-white text-[16px] font-Manrope  font-bold leading-[125%] hover:bg-white hover:text-[#6D758F] bg-[#8C39FF] rounded-lg py-3  px-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                      onClick={closeModal}
                    >
                      Add
                    </button>
                    <button
                      className=" hover:text-white text-[16px] font-Manrope  font-bold leading-[125%] bg-white text-[#6D758F] hover:bg-[#8C39FF] rounded-lg py-3  px-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                      onClick={closeModal}
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
