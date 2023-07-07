import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="mx-1 flex max-h-screen min-h-screen flex-col gap-2 px-2">
        <header className="mt-3">
          <div className="rounded-md bg-slate-900 p-2">
            <h1 className="text-center text-lg font-extrabold text-sky-700 underline decoration-wavy">
              H2O Time
            </h1>
          </div>
        </header>
        <div id="schedule">
          <h2 className="font-bold">Schedule:</h2>
        </div>
        <div className="grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="background grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="m-2 rounded-md border-2 border-slate-800 bg-slate-300 p-2">
              <h4 className="text-center underline">Monday June 10th</h4>
              <ul className="list-inside list-disc py-1">
                <li className="italic">
                  zone 1{" "}
                  <span className="float-right border border-slate-600 bg-slate-400 px-1">
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
          </div>
        </div>
        <div id="zones">
          <div className="flex flex-row">
            <h2 className="mr-4 font-bold">Zones:</h2>
            <button className="rounded-md border-2 border-slate-900 bg-red-600 px-1.5 pb-1 font-bold leading-3">
              +
            </button>
          </div>
        </div>
        <div className="mb-3 grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="m-2 flex flex-col gap-y-3">
            <div className="flex flex-row justify-evenly border-b-2 border-slate-600 p-1">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                data-name="warning"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              <h4>Zone 1</h4>
              <span>every 3 days</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-evenly border-b-2 border-slate-600 p-1">
              <h4>Zone 1</h4>
              <span>every 3 days</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
