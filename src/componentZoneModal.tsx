import { useRef } from "react";

export function ComponentZoneModal() {
  let dialog = useRef<HTMLDialogElement>(null);

  function showModal() {
    dialog.current?.showModal();
  }

  function closeModal() {
    // const dialog = document.getElementById("zoneModal") as HTMLDialogElement;
    dialog.current?.close();
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
      >
        <button
          onClick={closeModal}
          className="rounded-md border-2 border-slate-900 bg-red-500 px-1.5 pb-1 font-bold leading-3"
        >
          Close
        </button>
        <span>this is a dialog</span>
      </dialog>
    </>
  );
}
