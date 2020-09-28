import styled from "styled-components";
import Image1 from "../../assets/logos/person1.jpg";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding-bottom: 50px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  position: relative;
  flex-wrap: wrap;
  padding-top: 40px;
  height: 100%;
`;

export const Header = styled.h1`
  color: #ea2ad7;
  font-size: 2em;
  font-weight: 900;
  margin-bottom: 10%;
  width: 100%;
  padding-top: 10%;
  color: white;
  letter-spacing: 1px;
  position: relative;
  top: 10%;
  z-index: 1;
  align-self: start;
  &:before {
    content: "";
    width: 50%;
    position: absolute;
    display: block;
    height: 5px;
    background: #ea2ad7;
    bottom: -10%;
  }

  @media (min-width: 768px) {
    font-size: 2em;
  }
  @media (min-width: 961px) {
    font-size: 4em;
    padding-top: 5%;
  }
`;

export const Window = styled.div`
  display: flex;
  background: #101115;
  padding: 10px 30px 10px 10px;
  margin-bottom: 20px;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  margin-right: 1px;
  transition: 0.4s;
  border: 0.5px solid transparent;
  &:hover {
    transform: scale(1.05);
    border: 0.5px solid #ea2ad7;
  }
`;

export const DivImg = styled.div`
  width: 50px;
  height: 50px;
  flex: 0 0 auto;
  border-radius: 100%;
  margin-right: 20px;
  background-image: url(${Image1});
  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 760px) {
    width: 80px;
    height: 80px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: 0.7em;
  color: lightgray;
  @media (min-width: 760px) {
    font-size: 1em;
  }
`;
