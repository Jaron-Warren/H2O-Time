import "./App.css";
import { ComponentZoneModal } from "./componentZoneModal";

function App() {
  return (
    <>
      <div className="mx-1 flex max-h-screen min-h-screen flex-col gap-2 px-2">
        <header className="mt-3">
          <div className="mx-12 rounded-md bg-slate-500 p-2">
            <h1 className="text-center text-lg font-extrabold text-sky-400 underline decoration-wavy">
              H2O Time
            </h1>
          </div>
        </header>
        <div id="schedule">
          <span className="whiteShadow font-bold">Schedule:</span>
        </div>
        <div className="grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"></div>
        </div>
        <div id="zones">
          <div className="flex flex-row">
            <span className="whiteShadow mr-4 font-bold">Zones:</span>
            <ComponentZoneModal />
          </div>
        </div>
        <div className="mb-3 grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="m-2 flex flex-col gap-y-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
