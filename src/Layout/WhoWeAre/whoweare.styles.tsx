import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: black;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
`;
export const Links = styled(Link)`
  text-decoration: none;
`;
export const Header = styled.h1`
  color: #ea2ad7;
  font-weight: 900;
  color: white;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  padding-top: 15%;

  &:before {
    content: "";
    width: 40%;
    position: absolute;
    display: block;
    height: 6px;
    background: #ea2ad7;
    bottom: -10%;
  }

  @media (min-width: 768px) {
    font-size: 5.5em;
    padding-top: 7%;
  }
  @media (min-width: 961px) {
    font-size: 9em;
  }
`;

export const Paragraph = styled.p`
  color: #ea2ad7;
  padding: 5px 0;
`;

export const SubText = styled.div`
  display: block;
  color: white;
  font-weight: 700;
  width: 70%;
  letter-spacing: 1px;
  padding-bottom: 3%;
  font-size: 1.1em;
  position: relative;

  @media (min-width: 960px) {
    font-size: 1.3em;
  }
  &:before {
    content: "";
    width: 100%;
    position: absolute;
    display: block;
    height: 6px;
    background: #ea2ad7;
    bottom: -4%;
  }
`;

export const Circle = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border: 2px solid #ea2ad7;
  border-radius: 50%;
  padding: 10px 10px;
  color: white;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 0.8em;
  flex-wrap: wrap;
  position: absolute;
  right: 10%;
  top: 45%;
  text-align: center;
  @media (min-width: 960px) {
    width: 100px;
    height: 100px;
    padding: 20px 10px;
    font-size: 1.2em;
    top: 54%;
  }
`;
