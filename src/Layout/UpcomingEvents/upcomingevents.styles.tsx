import styled from "styled-components";
import Event1 from "../../assets/logos/Event1.jpg";
import { HashLink as Link } from "react-router-hash-link";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
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
  align-self: start;
  &:before {
    content: "";
    width: 40%;
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
  &:last-child {
    &:before {
      background: black;
      width: 100%;
      height: 3px;
    }
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px 5px;
  border: 2px solid #ea2ad7;
  box-shadow: -4px 4px 0 0 #ea2ad7;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s ease-in;
  margin: 3px 0;
  font-size: 0.65em;
  &:hover {
    box-shadow: 4px -4px 0 0 #ea2ad7;
  }
`;

export const Paragraph = styled.p`
  color: #ea2ad7;
  padding: 5px 0;
`;

export const Card = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 5px;
  box-shadow: 0 3px 11px #00000029;
  margin: 40px 5px;

  @media (min-width: 760px) {
    padding: 25px;
    max-width: 400px;
  }
`;

export const CardImage = styled.div`
  height: 150px;
  width: 150px;
  background-image: url(${Event1});
  background-position: 50% 50%;
  background-size: cover;
  margin-top: 5px;

  @media (min-width: 760px) {
    height: 300px;
    width: 300px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  max-width: 300px;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardContentHeader = styled.h3`
  font-weight: 900;
  padding: 10px 0;
`;

export const CardContentText = styled.div`
  word-wrap: break-word;
`;

export const CardParagraph = styled.p`
  padding: 7px 0;
  font-weight: 900;
  width: 400%;
  @media (min-width: 760px) {
    width: 100%;
  }
`;

export const Offer = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;
  box-shadow: 0 3px 11px #00000029;
  padding: 5px 5px;
  transition: 0.4s;
  &:hover {
    background-color: lightgray;
  }

  button {
    font-size: 0.6em;
  }
  @media (min-width: 760px) {
    padding: 20px 30px;
    margin: 20px 0;
  }
`;

export const OfferHeader = styled.h4`
  font-size: 0.8em;
  font-weight: 900;
  @media (min-width: 760px) {
    font-size: 1.5em;
  }
`;

export const OfferContent = styled.div`
  text-decoration: inherit;
  font-weight: 700;
  padding-right: 10px;
  font-size: 0.9em;
`;
