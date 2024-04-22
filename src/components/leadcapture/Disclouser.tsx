import { Disclosure } from "@headlessui/react";
import { Chevronicon } from "../common/Icons";
import { Disclosuremap } from "../common/Helper";

export default function Example() {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full flex flex-col">
        {Disclosuremap.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg py-3">
                  <span className="text-[#353E5C] font-Manrope text-[16px] font-normal leading-[125%]">
                    {item.name}
                  </span>
                  <div
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  >
                    <Chevronicon />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className=" pb-2 pt-4 text-sm text-gray-500">
                  {item.des}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
