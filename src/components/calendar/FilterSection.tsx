import { useState } from "react";
import { calendarFilterOptions } from "../common/Helper";
import { CalendarFilterTickIcon } from "../common/Icons";

const FilterSection = () => {
  const [checkedState, setCheckedState] = useState(new Array(6).fill(false));

  // function to handle checkbox states
  const handleCheckBoxStateChange = (checkBoxId: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === checkBoxId ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <span className="text-[#B4B9C9] font-Manrope text-sm font-normal leading-[120%]">
        FILTER
      </span>
      <div className="flex flex-col items-start justify-start gap-3">
        {calendarFilterOptions.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-[6px]"
          >
            <input
              type="checkbox"
              id={`custom-checkbox-${index}`}
              name={item.tickText}
              value={item.tickText.toLowerCase()}
              checked={checkedState[index]}
              onChange={() => handleCheckBoxStateChange(index)}
              className="hidden"
            />
            <div
              onClick={() => handleCheckBoxStateChange(index)}
              className="w-[18px] h-[18px] flex items-center justify-center rounded
            shadow-[0px_2px_4px_0px_rgba(165,163,174,0.30)] cursor-pointer"
              style={{
                border: `1px solid ${item.tickBoxColor}`,
                background: `${
                  checkedState[index] ? `${item.tickBoxColor}` : "white"
                }`,
              }}
            >
              {checkedState[index] && <CalendarFilterTickIcon />}
            </div>
            <label
              className=" text-[#6D758F] font-Manrope text-sm font-normal leading-[120%] cursor-pointer"
              htmlFor={`custom-checkbox-${index}`}
            >
              {item.tickText}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
