import { useState } from "react";
import Calendar from "react-calendar";
import "./componentScheduleCalendar.css";

export function ComponentScheduleCalendar({ activeDate, changeActiveDate }) {
  const today = new Date();

  return (
    <div className="flex justify-center px-2 py-2">
      <Calendar
        onChange={changeActiveDate}
        value={activeDate}
        maxDate={
          new Date(`December 31, ${(today.getFullYear() + 1).toString()}`)
        }
        minDate={new Date(`January 1, ${(today.getFullYear() - 1).toString()}`)}
        minDetail="decade"
      />
    </div>
  );
}
