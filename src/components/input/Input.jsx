import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";

export const Input = () => {
  const { getValue, isInputValid } = useInput();
  return (
    <>
      <ContainerP>
        {isInputValid ? (
          <StyledP bgColor="green">TRUE</StyledP>
        ) : (
          <StyledP bgColor="red" bShadow="0 0 10px rgba(173, 17, 17, 0.884)">
            FALSE
          </StyledP>
        )}
      </ContainerP>

      <StyledInput type="email" onChange={(e) => getValue(e, "email")} />
      <StyledInput type="password" onChange={(e) => getValue(e, "password")} />
      <StyledInput type="number" onChange={(e) => getValue(e, "number")} />
    </>
  );
};

const StyledInput = styled.input`
  margin-bottom: 5rem;
  border: 1px solid grey;
  border-radius: 5px;
  width: 120px;
  height: 25px;
  margin-left: 1rem;
  background-color: beige;
  
`;
const StyledP = styled.p`
  background-color: ${(props) => props.bgColor};
  box-shadow: ${props =>props.bShadow};
  border: 1px solid black;
  width: 150px;
  height: 30px;
  border-radius: 20px;
`;


const ContainerP=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`