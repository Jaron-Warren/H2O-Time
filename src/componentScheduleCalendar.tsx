import { useState } from "react";
import Calendar from "react-calendar";
import "./componentScheduleCalendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function ComponentScheduleCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  const today = new Date();

  return (
    <div className="flex justify-center px-2 py-2">
      <Calendar
        onChange={onChange}
        value={value}
        maxDate={
          new Date(`December 31, ${(today.getFullYear() + 1).toString()}`)
        }
        minDate={new Date(`January 1, ${(today.getFullYear() - 1).toString()}`)}
      />
    </div>
  );
}
