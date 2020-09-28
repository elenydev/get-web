import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 13vh;
  background: black;
  color: white;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  flex-wrap: wrap;
  z-index: 50;
`;

export const Logo = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding-right: 10%;
  align-self: center;
  height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  transition: 0.3s ease-in;
  background-color: black;
  position: relative;
  z-index: 5;
  flex-direction: column;
  height: 100vh;
  background-color: black;
  width: 100vw;
  left: ${(props: { visible: boolean }) => (props.visible ? `0%` : `-100%`)};
  transform: translateX(0%);

  @media (min-width: 960px) {
    width: 20%;
    left: ${(props) => (props.visible ? `-60%` : `-150%`)};
    transform: translateX(100%);
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: white;
  list-style-type: none;
  margin: 10px;
  font-weight: 600;
  cursor: pointer;
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
    &:before {
      display: none;
    }
  }
`;

export const Burger = styled.div`
  cursor: pointer;
  display: block;
  position: relative;
  padding-left: 30px;
  width: 10%;
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

  p {
    display: block;
    width: 100%;
    padding: 2px;
  }
`;
