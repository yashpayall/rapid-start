import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowDownIcons } from "../common/Icons";

interface Person {
  name: string;
}

const people: Person[] = [
  { name: "Newest" },
  { name: "Arlene" },
  { name: "Newest" },
  { name: "Tom" },
  { name: "Newest" },
  { name: "Newest" },
];

export default function AllCustomerNewestDropdown() {
  const [selected, setSelected] = useState<Person>(people[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (person: Person) => {
    setSelected(person);
    setIsOpen(false);
  };

  return (
    <div className="w-[140px] max-sm:w-[200px]">
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative ">
          <Listbox.Button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex justify-center items-center gap-16 sm:gap-2 w-full cursor-pointer rounded-lg border-[1px] border-[#B4B9C9] h-[48px] max-sm:h-[40px] text-[#353E5C] font-Manrope text-[16px] max-sm:text-[14px] font-normal">
            <span className="block truncate">{selected.name}</span>
            <span
              className={`pointer-events-none ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}>
              <ArrowDownIcons />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#8C39FF] text-white" : "text-gray-900"
                    }`
                  }
                  value={person}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium " : "font-normal "
                        }`}>
                        {person.name}
                      </span>
                      {selected ? "" : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
