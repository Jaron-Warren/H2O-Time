import "./componentScheduleDetails.css";
import { ComponentScheduleDetailsDate } from "./componentScheduleDetailsDate";

export function ComponentScheduleDetails() {
  return (
    <>
      <div className="m-2 rounded-md border-2 border-slate-800 bg-slate-300 p-2">
        <h4 className="text-center underline">Monday June 10th</h4>
        <ul className="list-inside list-disc py-1">
          <ComponentScheduleDetailsDate />
        </ul>
      </div>
    </>
  );
}
