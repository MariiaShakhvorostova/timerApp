import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const mins = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${mins}`);
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <header className="header">
        <div className="time">{currentTime}</div>
        <div className="icons"></div>
      </header>
    </div>
  );
};

export { Clock };
