import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isResetVisible, setIsResetVisible] = useState(false);
  const intervalRef = useRef(null);
  const renderCount = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsResetVisible(true);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning((prevState) => !prevState);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSec) => {
    const min = Math.floor(timeInSec / 60);
    const sec = timeInSec % 60;
    return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  renderCount.current++;

  return (
    <div className="timer-app">
      <h1>{formatTime(time)}</h1>
      <p className="num_of_component">
        Number of component renders: {renderCount.current}
      </p>
      <p className="line"></p>
      {isRunning ? (
        <button className="pause_btn" onClick={toggleTimer}>
          <img src="../pause.png"></img>
          <span>Pause</span>
        </button>
      ) : (
        <button className="play_btn" onClick={toggleTimer}>
          <img src="../Icon.png"></img>
          <span>Play</span>
        </button>
      )}
      {isResetVisible && (
        <button className="reset_btn" onClick={resetTimer}>
          Reset
        </button>
      )}
    </div>
  );
};

export { Timer };
