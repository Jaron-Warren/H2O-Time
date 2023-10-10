import { useEffect, useState } from "react";
import "./App.css";
import { ComponentScheduleDetails } from "./componentScheduleDetails";
import { ComponentZone } from "./componentZone";
import { ComponentZoneModal } from "./componentZoneModal";
import { ComponentScheduleCalendar } from "./componentScheduleCalendar";

interface zoneData {
  id: string;
  name: string;
  frequency: number;
  nextOccurance: Date;
}

function App() {
  //all zone data
  const [zoneData, setZoneData] = useState<zoneData | any>(() => {
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

  //clicking checkmark active day
  function toggleSchedule(id) {
    setZoneData((currentZoneData) => {
      return currentZoneData.map((zone) => {
        if (zone.id === id) {
          const newDate = new Date();
          const skipDays = newDate.getDate() + zone.frequency;
          newDate.setDate(skipDays);
          return {
            ...zone,
            nextOccurance: newDate,
          };
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
      <div className="mx-1 flex max-h-screen min-h-screen flex-col gap-2">
        <header className="mt-3">
          <h1 className="title text-center text-6xl font-extrabold text-blue-700">
            <span className="">H2O Time</span>
          </h1>
        </header>
        <div id="schedule">
          <span className="font-bold">Schedule:</span>
        </div>
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
        <div id="zones">
          <div className="flex flex-row">
            <span className="mr-4 font-bold">Zones:</span>
            <ComponentZoneModal addZone={addZone} />
          </div>
        </div>
        <div className="mb-3 rounded-md border-2 border-slate-800 bg-slate-50 p-2">
          <div className="table w-full">
            <div className="table-header-group border-b-2 border-slate-600 p-1">
              <div className="table-row">
                <div className="table-cell text-center font-extrabold underline">
                  !
                </div>
                <div className="table-cell text-center font-bold underline">
                  Name
                </div>
                <div className="table-cell text-center font-bold underline">
                  Freq
                </div>
                <div className="table-cell text-center font-bold underline">
                  Next Date
                </div>
                <div className="table-cell text-center font-bold underline">
                  Edit
                </div>
              </div>
            </div>
            <div className="table-row-group">
              {zoneData?.length === 0 && (
                <div>Create a zone to get started!</div>
              )}
              {zoneData?.map((zone: zoneData) => {
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
      </div>
    </>
  );
}

export default App;
