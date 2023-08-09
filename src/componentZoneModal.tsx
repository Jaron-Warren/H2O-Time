import React from "react";
import { useRef, useState } from "react";

export function ComponentZoneModal({ addZone }) {
  let dialog = useRef<HTMLDialogElement>(null);
  const [dialogDisplay, setdDisplay] = useState("");
  const [zoneName, setZoneName] = useState("");
  const [zoneFreq, setZoneFreq] = useState(1);

  function showModal() {
    setdDisplay("display: flex");
    dialog.current?.showModal();
  }

  function closeModal() {
    // const dialog = document.getElementById("zoneModal") as HTMLDialogElement;
    dialog.current?.close();
    setdDisplay("");
  }

  function createZone(zoneName, zoneFreq) {
    addZone(zoneName, zoneFreq);
    setZoneName("");
    setZoneFreq(1);
    closeModal();
  }

  function checkBounds(e: any) {
    const dialogDimensions = dialog.current?.getBoundingClientRect();
    if (dialogDimensions) {
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.current?.close();
        setdDisplay("");
      }
    }
  }

  return (
    <>
      <button
        onClick={showModal}
        className="rounded-md border-2 border-slate-900 bg-green-600 px-1.5 pb-1 font-bold leading-3"
      >
        +
      </button>
      <dialog
        id="zoneModal"
        ref={dialog}
        onClick={(event) => checkBounds(event)}
        className={`${dialogDisplay} flex-col justify-center gap-2`}
      >
        <div className="font-bold">Zone name:</div>
        <input
          value={zoneName}
          onChange={(e) => setZoneName(e.target.value)}
          type="text"
          minLength={3}
          maxLength={15}
        />
        <div className="font-bold">Frequency in days:</div>
        <input
          value={zoneFreq}
          onChange={(e) => setZoneFreq(parseInt(e.target.value))}
          type="number"
          name="Frequency in days"
          min={1}
          max={30}
        />
        <button
          onClick={() => createZone(zoneName, zoneFreq)}
          className="mx-4 rounded-md border-2 border-slate-900 bg-green-500 font-bold"
        >
          Create
        </button>
        <button
          onClick={closeModal}
          className="mx-4 rounded-md border-2 border-slate-900 bg-red-500 font-bold"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
