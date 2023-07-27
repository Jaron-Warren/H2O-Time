import { useRef, useState } from "react";

export function ComponentZoneModal() {
  let dialog = useRef<HTMLDialogElement>(null);
  const [dialogDisplay, setdDisplay] = useState("");

  function showModal() {
    setdDisplay("display: flex");
    dialog.current?.showModal();
  }

  function closeModal() {
    // const dialog = document.getElementById("zoneModal") as HTMLDialogElement;
    dialog.current?.close();
    setdDisplay("");
  }

  function checkBounds(e: any) {
    const dialogDimensions = dialog.current?.getBoundingClientRect();
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
        <input type="text" />
        <div className="font-bold">Frequency in days:</div>
        <input type="number" name="Frequency in days" min={1} max={365} />
        <button
          onClick={closeModal}
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
