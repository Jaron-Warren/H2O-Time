import { useState } from "react";
import "./componentSchedule.css";

function App() {
  return (
    <>
      <div className="m-2 rounded-md border-2 border-slate-800 bg-slate-300 p-2">
        <h4 className="text-center underline">Monday June 10th</h4>
        <ul className="list-inside list-disc py-1">
          <li className="italic">
            zone 1{" "}
            <span className="float-right cursor-pointer border border-slate-600 bg-slate-400 px-1">
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
        </ul>
      </div>
    </>
  );
}

export default App;
