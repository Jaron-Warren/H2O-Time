import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="grid-cols-1">
          <h1>H2O Time</h1>
        </div>
      </header>
      <div id="schedule" className="">
        <h2>Schedule:</h2>
        <div>
          <div>
            <h4>Monday June 10th</h4>
            <ul>
              <li>zone 1</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="zones">
        <div className="flex flex-row">
          <h2>Zones:</h2>
          <button>+</button>
        </div>
        <div>
          <img src="" alt="Warning" />
          <h4>Zone 1</h4>
          <span>every 3 days</span>
        </div>
      </div>
    </>
  );
}

export default App;
