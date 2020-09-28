import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 10px 5px;
  border: 2px solid #ea2ad7;
  box-shadow: -4px 4px 0 0 #ea2ad7;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s ease-in;
  margin: 3px 0;
  &:hover {
    box-shadow: 4px -4px 0 0 #ea2ad7;
  }
`;

const ButtonOne = (props: { value: string; type?: string }): JSX.Element => {
  return (
    <>
      <Button>{props.value}</Button>
    </>
  );
};
export default ButtonOne;
