import { useRef, useState } from "react";
import "./componentZone.css";

export function ComponentZone() {
  let dialog = useRef<HTMLDialogElement>(null);
  const [dialogDisplay, setdDisplay] = useState("");

  function showModal() {
    setdDisplay("display: flex");
    dialog.current?.showModal();
  }

  function saveModal() {
    dialog.current?.close();
    setdDisplay("");
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
      <div className="flex flex-row justify-evenly border-b-2 border-slate-600 p-1">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 cursor-help"
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
          onClick={showModal}
          className="h-6 w-6 cursor-pointer"
          data-name="edit"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </div>
      {/* edit dialog */}
      <dialog
        id="editModal"
        ref={dialog}
        onClick={(event) => checkBounds(event)}
        className={`${dialogDisplay} flex-col justify-center gap-2`}
      >
        <div className="font-bold">Zone name:</div>
        <input type="text" />
        <div className="font-bold">Frequency in days:</div>
        <input type="number" name="Frequency in days" min={1} max={365} />
        <button
          onClick={saveModal}
          className="mx-4 rounded-md border-2 border-slate-900 bg-green-500 font-bold"
        >
          Save Changes
        </button>
        <button
          onClick={closeModal}
          className="mx-4 rounded-md border-2 border-slate-900 bg-red-500 font-bold"
        >
          Cancel
        </button>
        <button
          onClick={closeModal}
          className="mx-4 rounded-md border-2 border-slate-900 bg-orange-600 font-bold"
        >
          Delete
        </button>
      </dialog>
    </>
  );
}
