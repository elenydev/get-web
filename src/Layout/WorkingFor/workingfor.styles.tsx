import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 5%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  position: relative;
  flex-wrap: wrap;
  padding-top: 40px;
`;

export const Header = styled.h1`
  color: #ea2ad7;
  font-weight: 900;
  margin-bottom: 40px;
  width: 100%;
  color: black;
  letter-spacing: 1px;
  position: relative;
  top: 10%;
  z-index: 1;
  align-self: end;
  padding-top: 5%;
  text-align: center;
  &:before {
    content: "";
    width: 40%;
    position: absolute;
    display: block;
    height: 4px;
    background: #ea2ad7;
    bottom: -10%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    font-size: 2em;
  }
  @media (min-width: 961px) {
    font-size: 4em;
    padding-top: 5%;
  }
`;

export const Paragraph = styled.span`
  color: #ea2ad7;
  padding: 5px 0;
`;

export const Element = styled.div`
  display: block;
  width: 30%;
  height: 30%;
  text-align: center;
  img {
    width: 70%;
    height: 70%;
  }
`;
