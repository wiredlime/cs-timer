import { useState, useRef } from "react";
import { formatTime } from "./formatTime.js";
const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const active = useRef();
  const refInterval = useRef();
  const prevTimeRef = useRef();
  prevTimeRef.current = formatTime;
  const [prevTimeStore, setPrevTimeStore] = useState();

  function runInterval(time) {
    if (active.current.disabled === true) {
      refInterval.current = setInterval(() => setTime(++time), 1000);
    } else {
      clearInterval(refInterval.current);
    }
  }

  const startTimer = (time) => {
    active.current.disabled = true;
    runInterval(time);
  };

  const stopTimer = (time) => {
    active.current.disabled = false;
    runInterval(time);
    setPrevTimeStore(`${prevTimeRef.current(time)}`);
  };

  const resetTimer = (time) => {
    active.current.disabled = false;
    setTime(0);
    runInterval(time);
    setPrevTimeStore(`${prevTimeRef.current(time)}`);
  };
  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    prevTimeStore,
    prevTimeRef,
    formatTime,
  };
};
export default useTimer;
