import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 95%;
  min-height: 100%;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 100px auto;
  @media (min-width: 768px) {
    width: 80%;

    margin: 7% auto;
  }
`;
export const Employe = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px 10px;
  flex-wrap: wrap;
  box-shadow: 0 3px 11px #00000029;
  margin: 10px 0;
  @media (min-width: 760px) {
    width: 80%;
    flex-direction: row;
  }
`;

export const EmployeName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const EmployeRole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const EmployeEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: 25%;
`;

export const AddTask = styled.button`
  display: block;
  padding: 5px 3px;
  border: 2px solid #ea2ad7;
  cursor: pointer;
  font-weight: 700;
  margin: 8px 20%;

  @media (min-width: 760px) {
    padding: 10px 5px;
    margin: 0;
  }
`;

export const P = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  margin: 10px 0;
`;

export const Header = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  width: 80%;
  margin: 5% 0;
`;

export const Form = styled.form`
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  input {
    padding: 5px 3px;
    outline: none;
    margin: 2px;
  }
  button {
    display: block;
    padding: 2px;
    border: 2px solid #ea2ad7;
    cursor: pointer;
    font-weight: 700;
  }
`;
