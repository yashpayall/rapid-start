import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { useEffect, useState } from "react";
import { CalendarArrowLeftIcon, CalendarArrowRightIcon } from "../common/Icons";
import { calendarEventsData } from "../common/Helper";
import { Event } from "./BigCalender";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default function Calender() {
  let today = startOfToday();
  let [events, setEvents] = useState<Event[]>([]);
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let lastDayCurrentMonth = endOfMonth(firstDayCurrentMonth);

  // populate the events
  useEffect(() => {
    setEvents(calendarEventsData);
  }, []);

  // Calculate the start and end of the calendar view
  let startCalendar = startOfWeek(firstDayCurrentMonth, { weekStartsOn: 0 });
  let endCalendar = endOfWeek(lastDayCurrentMonth, { weekStartsOn: 0 });

  // days array including days from the previous and next months
  let days = eachDayOfInterval({
    start: startCalendar,
    end: endCalendar,
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const handleDayClick = (day: any) => {
    setSelectedDay(day);
  };

  return (
    <div className="sm:max-w-[266px] w-full py-3 px-4 flex flex-col gap-3">
      {/* month and arrow btns area */}
      <div className="w-full h-[34px] flex items-center justify-between">
        <span className="font-Manrope text-[#353E5C] text-base font-normal leading-[125%]">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </span>
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={previousMonth}
            className="w-7 h-7 flex items-center justify-center hover:bg-[#E1E4ED] rounded-full transition-all ease-in-out duration-200"
          >
            <span className="sr-only">Previous month</span>
            <CalendarArrowLeftIcon aria-hidden="true" />
          </button>
          <button
            onClick={nextMonth}
            type="button"
            className="w-7 h-7 flex items-center justify-center hover:bg-[#E1E4ED] rounded-full transition-all ease-in-out duration-200"
          >
            <span className="sr-only">Next month</span>
            <CalendarArrowRightIcon aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* week day area*/}
      <div className="grid grid-cols-7 text-center text-[#6D758F] text-[13px] font-medium leading-[107%] font-PublicSans">
        <div className="h-[34px] flex items-center justify-center">Sun</div>
        <div className="h-[34px] flex items-center justify-center">Mon</div>
        <div className="h-[34px] flex items-center justify-center">Tue</div>
        <div className="h-[34px] flex items-center justify-center">Wed</div>
        <div className="h-[34px] flex items-center justify-center">Thu</div>
        <div className="h-[34px] flex items-center justify-center">Fri</div>
        <div className="h-[34px] flex items-center justify-center">Sat</div>
      </div>

      {/* dates area */}
      <div className="grid grid-cols-7 text-base font-normal leading-[125%]">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(dayIdx === 0 && colStartClasses[getDay(day)])}
          >
            <button
              type="button"
              onClick={() => handleDayClick(day)}
              className={classNames(
                isSameMonth(day, firstDayCurrentMonth) && "text-[#6D758F]",
                !isSameMonth(day, firstDayCurrentMonth) && "text-[#B4B9C9]",
                isEqual(day, selectedDay) && "text-[#63DE77]",
                !isEqual(day, selectedDay) && isToday(day) && "text-[#63DE77]",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-[#6D758F]",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, selectedDay) && isToday(day) && "bg-[#EEF9F5]",
                isEqual(day, selectedDay) && !isToday(day) && "bg-[#E1E4ED]",
                !isEqual(day, selectedDay) && "hover:bg-gray-200",
                (isEqual(day, selectedDay) || isToday(day)) &&
                  "font-semibold text-sm",
                "mx-auto flex w-[34px] h-[34px] items-center justify-center rounded-full relative"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
              <div className="w-1 h-1 mx-auto absolute -bottom-1">
                {events.some((reminder: any) =>
                  isSameDay(reminder.start, day)
                ) && <div className="w-1 h-1 rounded-full bg-[#A565FF]"></div>}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
