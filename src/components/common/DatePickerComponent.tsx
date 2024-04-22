import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  date: any;
  setDate: any;
  dateLabel: any;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({
  date,
  setDate,
  dateLabel,
}) => {
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="w-full flex flex-col items-start justify-center gap-1">
      <span className="text-[#353E5C] font-normal font-Manrope text-sm leading-[120%]">
        {dateLabel}
      </span>
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg border border-solid border-[#B4B9C9] bg-white font-Manrope text-base font-normal leading-[125%] outline-none"
      />
    </div>
  );
};

export default DatePickerComponent;
