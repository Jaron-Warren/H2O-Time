import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-2 px-2">
        <header>
          <div>
            <h1>H2O Time</h1>
          </div>
        </header>
        <div id="schedule">
          <h2>Schedule:</h2>
        </div>
        <div className="grow">
          <h4>Monday June 10th</h4>
          <ul>
            <li>zone 1</li>
          </ul>
        </div>
        <div id="zones">
          <div>
            <h2>Zones:</h2>
            <button>+</button>
          </div>
        </div>
        <div className="grow">
          <img src="" alt="Warning" />
          <h4>Zone 1</h4>
          <span>every 3 days</span>
        </div>
      </div>
    </>
  );
}

export default App;
