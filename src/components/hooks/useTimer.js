import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [inputText, setInputText] = useState("");
  const [isCounting, setIsCounting] = useState(false);

  const minute = inputText * 60;

  const valueHandler = (value) => {
    setInputText(value);
  };

  // const clickHandler=()=>{
  //   setTimer(minute)
  //   setInputText("")
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimer((time) => time && time - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  const start = () => {
    setTimer(minute);
    setIsCounting(true);
    setInputText("");
  };

  const pause = () => {
    setIsCounting(false);
  };
  const resetHandler = () => {
    setTimer(0);
  };
  return {
    valueHandler,
    // clickHandler,
    timer,
    start,
    pause,
    isCounting,
    resetHandler,
  };
};
