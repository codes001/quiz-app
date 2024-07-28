import React, { useState, useEffect } from "react";

function Timer() {
  let [count, setCount] = useState(20);
  const [active, setActive] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const onStart = () => {
    setActive(true);
  };
  const onReset = () => {
    setActive(false);
    setCount(20);
  };
  const onHide = () => setShowTimer(false);
  useEffect(() => {
    let timer;
    if (active && count > 0) {
      timer = setInterval(() => {
        console.log("Yeah");
        setCount((prev) => prev - 1);
      }, 1000);
    } else clearInterval(timer);
    return () => clearInterval(timer);
  });
  return (
    <div>
        { showTimer ? 
      <div className="timer shadow-md fixed right-10 top-0">
        <div>
          <h1 className="timer-text px-3">
            00:
            {count < 10 && count >= 0 ? `0${count}` : count}
          </h1>
        </div>
        <div className="controls grid grid-cols-3">
          <button onClick={() => onStart()} className="px-3 py-2 bg-gray-800">
            Start
          </button>
          <button onClick={() => onReset()} className="px-3 py-2 bg-gray-800">
            Reset
          </button>
          <button onClick={() => onHide()} className="px-3 py-2 bg-gray-800">
            Hide
          </button>
        </div>
      </div> : <p onClick={() => setShowTimer(true)} className="text-3xl cursor-pointer font-bold border shadow bg-black p-4 text-white rounded-md"><i className="fa-solid fa-stopwatch"></i> Show Timer</p>
}
    </div>
  );
}

export default Timer;
