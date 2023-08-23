import "./componentScheduleDetails.css";
import { ComponentScheduleDetailsDate } from "./componentScheduleDetailsDate";

export function ComponentScheduleDetails({
  activeDateSchedule,
  changeActiveDate,
  activeDate,
  toggleSchedule,
}) {
  return (
    <>
      <div className="m-2 flex flex-col rounded-md border-2 border-slate-800 bg-slate-50 p-2">
        <button
          className="w-2/5 self-center border border-slate-600 bg-yellow-200"
          onClick={() => changeActiveDate(new Date())}
        >
          Go To Today
        </button>
        <h4 className="text-center underline">{activeDate.toDateString()}</h4>
        <ul className="list-inside list-disc py-1">
          {activeDateSchedule?.map((zone) => {
            return (
              <ComponentScheduleDetailsDate
                name={zone.name}
                id={zone.id}
                key={zone.id}
                toggleSchedule={toggleSchedule}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
