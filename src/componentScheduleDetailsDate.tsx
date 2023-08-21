import "./componentScheduleDetailsDate.css";

export function ComponentScheduleDetailsDate() {
  return (
    <>
      <li className="border-b-2 pb-1 italic">
        zone 1{" "}
        <span className="float-right cursor-pointer border border-slate-600 bg-slate-300 px-1">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            data-name="check mark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </li>
    </>
  );
}
