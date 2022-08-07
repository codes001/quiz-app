import React, { useState, useEffect } from "react";

function Timer() {
  let [count, setCount] = useState(20);
  const [active, setActive] = useState(false);
  const onStart = () => {
    setActive(true);
  };
  const onReset = () => {
    setActive(false);
    setCount(20)
  };
  const onHide = () => {};
  useEffect(() => {
    let timer;
    if(active && count > 0) {
        timer = setInterval(() => {
            console.log("Yeah");
            setCount(prev => prev - 1);
          }, 1000);
    } else clearInterval(timer)
    return () => clearInterval(timer)
  });
  return (
    <div className="timer shadow-md fixed right-10 top-0">
      <div>
        <h1 className="timer-text px-3">
          {count < 0 ? "" : ":"}
          {(count < 10 && count >= 0) ? `0${count}` : count}
        </h1>
      </div>
      <div className="controls grid grid-cols-3">
        <button onClick={() => onStart()} className="p-3 bg-gray-800">
          Start
        </button>
        <button onClick={() => onReset()} className="p-3 bg-gray-800">
          Reset
        </button>
        <button className="p-3 bg-gray-800">Hide</button>
      </div>
    </div>
  );
}

export default Timer;
