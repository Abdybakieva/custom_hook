import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const incrementHAndler = (number) => {
    setCount((prev) => prev + number);
  };
  const decrementHandler = (number) => {
    if (count && count >= number) {
      setCount((prev) => prev - number);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return { incrementHAndler, count, decrementHandler, reset };
};
