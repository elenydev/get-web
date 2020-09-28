import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 13vh;
  background: black;
  color: white;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  flex-wrap: wrap;
  padding-top: 15px;
  z-index: 50;
  @media (orientation: landscape) {
    padding: 0;
  }
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-left: 50px;
  align-self: center;

  @media (min-width: 998px) {
    margin-left: 5%;
    align-self: flex-start;
    padding-left: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  transition: 0.3s ease-in;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  height: 100vh;
  width: 100vw;
  padding-bottom: 65px;
  right: ${(props: { visible: boolean }) => (props.visible ? `0%` : `-100%`)};
  margin: 0;
  position: relative;
  z-index: 5;

  @media (min-width: 998px) {
    height: fit-content;
    width: fit-content;
    right: 0;
    padding-bottom: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 5%;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: white;
  list-style-type: none;
  margin: 10px;
  font-weight: 600;
  font-size: 0.8em;
  cursor: pointer;
  &.white {
    color: black;
  }
`;

export const Li = styled.li`
  font-size: 1.1rem;
  margin: 5px;
  position: relative;
  transition: 0.4s ease-in;
  transition-delay: 0.4s;

  &:hover,
  &:active {
    &:before {
      content: "";
      display: block;
      width: 80%;
      height: 3px;
      background: #ea2ad7;
      position: absolute;
      top: 150%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &.noBefore {
    display: block;
    padding: 10px 5px;
    border: 2px solid #ea2ad7;
    box-shadow: -4px 4px 0 0 #ea2ad7;
    cursor: pointer;
    font-weight: 700;
    transition: 0.3s ease-in;
    margin: 3px 0;
    background-color: white;
    color: black;
    &:hover {
      box-shadow: 4px -4px 0 0 #ea2ad7;
    }
    &:before {
      display: none;
    }
  }
`;

export const Burger = styled.div`
  display: block;
  position: relative;
  padding-right: 10px;
  cursor: pointer;

  @media (min-width: 998px) {
    display: none;
  }
  span {
    display: block;
    width: 27px;
    height: 3px;
    background: white;
    margin: 3px 0px;
    transform-origin: 5px;
    transition: 0.3s ease-in;

    &:nth-child(1) {
      transform: ${(props) => (props.visible ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props: { visible: boolean }) =>
        props.visible ? "translateX(100%)" : "translateX(0)"};
      opacity: ${(props) => (props.visible ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.visible ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const MenuFooter = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 0.7em;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 5%;

  @media (min-width: 960px) {
    display: none;
  }
  p {
    display: block;
    width: 100%;
    padding: 2px;
  }
`;
