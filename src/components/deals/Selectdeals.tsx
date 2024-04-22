import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckselectIcon, PlusbluedasIcon } from "../common/Icons";

const options = [
  { name: "Select Kanbans" },
  { name: "Deals 1" },
  { name: "Deals 2" },
  { name: "Deals 3" },
  { name: "Deals 4" },
  { name: "Deals 5" },
];

export default function Selectdeals() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-52 sm:w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="flex items-center justify-between w-full px-4 md:px-6 py-2 md:py-3 cursor-default rounded-lg bg-white text-left border border-[#BEC2D0] sm:text-sm">
            <span className="text-[16px] font-normal font-Manrope text-[#B4B9C9] leading-[125%]">
              {selected.name}
            </span>
            <span className="pointer-events-none flex items-center">
              <CheckselectIcon />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full overflow-auto bg-white p-2 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)] rounded-lg ">
            {options.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `   rounded-[6px] font-Manrope w-full leading-[125%] cursor-pointer select-none py-2 text-[16px] px-4  ${
                    active
                      ? "bg-[#8C39FF] text-[#F4ECFF] font-bold "
                      : "text-[#6D758F] font-normal"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <span
                    className={` font-Manrope text-[14px] ${
                      selected ? "font-bold" : "font-normal"
                    }`}
                  >
                    {person.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
            <hr className=" w-full bg-[#E1E4ED] my-1" />
            <button className=" cursor-pointer bg-[#EFF6FF] rounded-[6px] w-full font-Manrope text-[#60A9FF] text-sm sm:text-base font-normal leading-[125%] py-2 px-4 flex items-center gap-x-2">
              <PlusbluedasIcon />
              <h2>Create a new Kaban</h2>
            </button>
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
