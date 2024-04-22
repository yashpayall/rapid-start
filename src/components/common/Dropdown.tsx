import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { DropdownArrowDownIcon } from "./Icons";

const dropDownOptions = [
  { name: "Personal" },
  { name: "Business" },
  { name: "Family" },
  { name: "Holiday" },
  { name: "ETC" },
];

const Dropdown = () => {
  const [selected, setSelected] = useState(dropDownOptions[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className="relative ">
            <Listbox.Button className="flex items-center justify-between w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-white text-left border border-[#BEC2D0] sm:text-sm cursor-pointer">
              <span className="text-[16px] font-normal font-Manrope leading-[125%]">
                {selected.name}
              </span>
              <div
                className={`flex items-center justify-center transition-all duration-200 ease-in-out ${
                  open && "transform rotate-180"
                }`}
              >
                <DropdownArrowDownIcon />
              </div>
            </Listbox.Button>

            <Listbox.Options className="absolute mt-1 md:right-1 w-full overflow-auto bg-white p-2 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)] rounded-lg z-10">
              {dropDownOptions.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `rounded-[6px] font-Manrope w-full leading-[125%] cursor-pointer select-none py-2 text-[16px] px-4  ${
                      active
                        ? "bg-[#8C39FF] text-[#F4ECFF] font-bold "
                        : "text-[#6D758F] font-normal"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`font-Manrope text-[14px]  ${
                          selected ? "font-bold" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default Dropdown;
