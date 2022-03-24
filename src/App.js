import React from "react";
import "./App.css";

import useTimer from "./useTimer.js";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    prevTimeStore,
    formatTime,
  } = useTimer(0);

  return (
    <div className="app-container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={() => stopTimer(time)}>
            Stop
          </button>
          <button
            ref={active}
            className="button"
            onClick={() => startTimer(time)}
          >
            Start
          </button>
          <button className="button" onClick={() => resetTimer(time)}>
            Reset
          </button>
        </div>
        <div className="record">
          <p>Last stop at: {prevTimeStore ? `${prevTimeStore}` : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
