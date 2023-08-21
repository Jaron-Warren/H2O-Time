import "./componentScheduleDetails.css";
import { ComponentScheduleDetailsDate } from "./componentScheduleDetailsDate";

export function ComponentScheduleDetails({
  activeDateSchedule,
  changeActiveDate,
}) {
  return (
    <>
      <div className="m-2 flex flex-col rounded-md border-2 border-slate-800 bg-slate-50 p-2">
        <button
          className="w-1/2 self-center border border-slate-600 bg-yellow-200"
          onClick={() => changeActiveDate(new Date())}
        >
          Go To Today
        </button>
        <h4 className="text-center underline">Monday June 10th</h4>
        <ul className="list-inside list-disc py-1">
          <ComponentScheduleDetailsDate />
        </ul>
      </div>
    </>
  );
}
