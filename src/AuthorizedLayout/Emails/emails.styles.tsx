import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 95%;
  min-height: 100%;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5% auto;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Header = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  width: 80%;
  margin-top: 30%;
  @media (min-width: 760px) {
    margin: 10% 0;
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

export const Email = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 15px 10px;
  box-shadow: 0 3px 11px #00000029;
  flex-wrap: wrap;
  word-wrap: break-word;
  min-height: 30%;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const EmailContent = styled.div`
  display: inline-block;
  max-width: 90%;
  margin: 7px 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 5px;
  border: 2px solid #ea2ad7;
  cursor: pointer;
  font-weight: 700;
`;
