import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
        clearInterval(intervalId);
        console.log("aborted")
    };
  });
  return (
    <p className="lead">
      This is the current time {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
