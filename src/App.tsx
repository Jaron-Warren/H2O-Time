import { useEffect, useState } from "react";
import "./App.css";
import { ComponentScheduleDetails } from "./componentScheduleDetails";
import { ComponentZone } from "./componentZone";
import { ComponentZoneModal } from "./componentZoneModal";
import { ComponentScheduleCalendar } from "./componentScheduleCalendar";

type zoneData = {
  id: string;
  name: string;
  frequency: number;
  nextOccurance: Date;
  scheduleMissed: {
    date: any;
  };
};

function App() {
  //all zone data
  const [zoneData, setZoneData] = useState<any>(() => {
    const localValue = localStorage.getItem("ZoneData");
    if (localValue == null) {
      return [];
    }
    const storedData = JSON.parse(localValue);
    return storedData.map((storedzone) => {
      return {
        ...storedzone,
        nextOccurance: new Date(storedzone.nextOccurance),
      };
    });
  });

  //selected calendar day
  const [activeDate, changeActiveDate] = useState<Date>(new Date());

  //zone data for selected day
  const [activeDateSchedule, changeActiveDateSchedule] = useState<any>(
    zoneData.filter(
      (zone) => zone.nextOccurance.toDateString() === activeDate.toDateString()
    )
  );

  //update local storage
  useEffect(() => {
    localStorage.setItem("ZoneData", JSON.stringify(zoneData));
  }, [zoneData]);

  //update zone data for selected day
  useEffect(() => {
    changeActiveDateSchedule(
      zoneData.filter(
        (zone) =>
          zone.nextOccurance.toDateString() === activeDate.toDateString()
      )
    );
  }, [activeDate, zoneData]);

  function toggleSchedule(id) {
    setZoneData((currentZoneData) => {
      return currentZoneData.map((zone) => {
        if (zone.id === id) {
          let oldDate = zone.nextOccurance;
          return { ...zone, nextOccurance: new Date() };
        }

        return zone;
      });
    });
  }

  function addZone(name, frequency) {
    setZoneData((currentZoneData) => {
      return [
        ...currentZoneData,
        {
          id: crypto.randomUUID(),
          name,
          frequency,
          nextOccurance: new Date(),
          scheduleMissed: {},
        },
      ];
    });
  }

  function editZone(id, name, frequency) {
    setZoneData((currentZoneData) => {
      return currentZoneData.map((Zone) => {
        if (Zone.id === id) {
          return { ...Zone, name: name, frequency: frequency };
        }
        return Zone;
      });
    });
  }

  function deleteZone(id) {
    setZoneData((currentZones) => {
      return currentZones.filter((Zone) => Zone.id !== id);
    });
  }

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
        <div className="rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <ComponentScheduleDetails
              activeDateSchedule={activeDateSchedule}
              changeActiveDate={changeActiveDate}
              activeDate={activeDate}
              toggleSchedule={toggleSchedule}
            />
            <ComponentScheduleCalendar
              activeDate={activeDate}
              changeActiveDate={changeActiveDate}
            />
          </div>
        </div>
        <div id="zones">
          <div className="flex flex-row">
            <span className="whiteShadow mr-4 font-bold">Zones:</span>
            <ComponentZoneModal addZone={addZone} />
          </div>
        </div>
        <div className="mb-3 grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="m-2 flex flex-col gap-y-3">
            <div className="flex flex-row justify-evenly border-b-2 border-slate-600 p-1">
              <span>Zone Name</span>
              <span>Frequency</span>
              <span>Next Occurance</span>
              <span></span>
            </div>
            {zoneData?.length === 0 && <div>Create a zone to get started!</div>}
            {zoneData?.map((zone) => {
              return (
                <ComponentZone
                  {...zone}
                  editZoneFunc={editZone}
                  deleteZoneFunc={deleteZone}
                  key={zone.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
