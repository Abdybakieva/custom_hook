import React from "react";
import styled from "styled-components";
import { useTimer } from "../hooks/useTimer";

export const Timer = () => {
  const {
    timer,
    start,
    pause,
    valueHandler,
    // clickHandler,
    resetHandler,
    isCounting,
  } = useTimer();
  return (
    <div>
      <StyledInput
        type="number"
        onChange={(e) => {
          valueHandler(e.target.value);
        }}
      />
      {/* <button onClick={clickHandler}>Click me</button> */}
      <p>{timer}</p>
      {/* {!isCounting ? ( */}
      <StuledButton onClick={start}>Start</StuledButton>
      {/* ) : ( */}
      <StuledButton onClick={pause}>Pause</StuledButton>
      {/* )} */}

      <StuledButton onClick={resetHandler}>Reset</StuledButton>
    </div>
  );
};

const StuledButton=styled.button`
border: 2px solid beige;
margin-left: 1rem;
background-color: #f0ffff;
width: 120px;
height: 30px;
`

const StyledInput=styled.input`
  width: 80px;
  height: 20px;
  border-color: antiquewhite;
  border-radius: 8px;
`