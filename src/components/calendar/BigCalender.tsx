import React, { useEffect, useState } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  EventPropGetter,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { eventColors, calendarEventsData } from "../common/Helper";
import CustomToolbar from "./CustomToolbar";
import CustomEvent from "./CustomEvent";
import CustomAgenda from "./CustomAgenda";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export type Event = {
  id: number;
  title: string;
  label: string;
  start: Date;
  end: Date;
  eventUrl: string;
  guests: string[];
  location: string;
  description: string;
};

interface BigCalenderProps {}

const BigCalender: React.FC<BigCalenderProps> = () => {
  const [eventsData, setEventsData] = useState<Event[]>([]);

  useEffect(() => {
    setEventsData(calendarEventsData);
  }, []);

  // for custom event
  const EventComponent = ({ event }: { event: any }) => (
    <CustomEvent currentEvent={event} />
  );

  // for styling events
  const eventStyleGetter: EventPropGetter<Event> = (event) => {
    const titleColor =
      eventColors[event.label as keyof typeof eventColors].primaryColor;
    const bgColor =
      eventColors[event.label as keyof typeof eventColors].secondaryColor;

    const style = {
      backgroundColor: bgColor,
      color: titleColor,
    };
    return {
      style: style,
    };
  };

  return (
    <Calendar
      views={{
        month: true,
        week: true,
        day: true,
        agenda: true,
      }}
      selectable
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={eventsData}
      startAccessor="start"
      endAccessor="end"
      components={{
        toolbar: CustomToolbar,
        event: EventComponent,
        agenda: { event: CustomAgenda },
      }}
      style={{ width: 943, height: 733 }}
      eventPropGetter={eventStyleGetter}
      onSelectEvent={(event) => alert(event.title)}
    />
  );
};

export default BigCalender;
