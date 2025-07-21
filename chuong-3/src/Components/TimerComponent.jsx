import { useState, useEffect } from "react";

const TimerComponent = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    console.log("TimerComponent mounted or updated");
    const timerId = setInterval(() => {
      console.log("Timer tick");
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });
  return (
    <div>
      <h1>Timer {timer}</h1>
      <p>Timer componenmt will be implement herer,</p>
    </div>
  );
};
export default TimerComponent;
