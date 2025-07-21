import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState({ hour: 0, minute: 0, second: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const countRef = useRef(0);
  const startWatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      countRef.current = setInterval(() => {
        setTimer((time) => {
          const newTime = { ...time };
          newTime.second++;
          if (newTime.second === 60) {
            newTime.second = 0;
            newTime.minute++;
          }
          if (newTime.minute === 60) {
            newTime.minute = 0;
            newTime.hour++;
          }
          return newTime;
        });
      }, 1);
    }
  };
  const stopWatch = () => {
    setIsRunning(false);
    clearInterval(countRef.current);
  };
  const resetWatch = () => {
    stopWatch();
    setTimer({ hour: 0, minute: 0, second: 0 });
  };

  return (
    <div>
      <h1>Dong ho bam gio</h1>
      <div>
        {timer.hour}:{timer.minute}:{timer.second}
      </div>
      <button onClick={startWatch}>START</button>
      <button onClick={stopWatch}>Stop</button>
      <button onClick={resetWatch}>reset</button>
    </div>
  );
};

export default StopWatch;
