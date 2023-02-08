import { useState } from "react";

export const useInput = (initialState) => {
  const [inputText, setInputText] = useState(initialState || "");
  const [isInputValid, setInputValid] = useState(false);

  const getValue = (e, type) => {
    switch (type) {
      case "email":
        setInputText(e.target.value);
        setInputValid(inputText.includes("@"));
        break;
      case "password":
        setInputText(e.target.value);
        setInputValid(inputText.trim().length >= 6);
        break;
      case "number":
        setInputText(e.target.value);
        setInputValid(inputText > 0);
        break;
      default:
    }
  };

  return {
    getValue,
    isInputValid,
  };
};
