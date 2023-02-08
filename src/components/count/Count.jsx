import { useCount } from "../hooks/useCount";
import styled from "styled-components";
export const Count = () => {
  const { incrementHAndler, count, decrementHandler, reset } = useCount();
  const disabled = count === 0;
  return (
    <ButtonContainer>
      <p>{count}</p>
      <StyledButton onClick={() => incrementHAndler(5)}>increment</StyledButton>
      <StyledButton onClick={() => decrementHandler(2)}>decrement</StyledButton>
      <StyledButton onClick={reset} disabled={disabled}>
        reset
      </StyledButton>
    </ButtonContainer>
  );
};

const StyledButton = styled.button`
  width: 80px;
  height: 35px;
  border: none;
  margin-left: 1rem;
  border-radius: 10px;
  color: white;
  background-color: #b6b8b3;
  :disabled {
    background-color: grey;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 5rem;
  /* background-color: aqua; */
  width: 100%;
  height: 100px;
`;
