import React, { useState } from "react";
import styled from "styled-components";
import Design from "./Components/Design";
import Customer from "./Components/Customer";
import Minds from "./Components/Minds";
import Experience from "./Components/Experience";
import Solutions from "./Components/Solutions";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  position: relative;
  flex-wrap: wrap;
  padding-top: 40px;
`;

const Header = styled.h1`
  color: #ea2ad7;
  font-weight: 900;
  margin-bottom: 40px;
  width: 100%;
  color: black;
  letter-spacing: 1px;
  font-size: 1.5em;
  padding-top: 15%;
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

const Paragraph = styled.p`
  color: #ea2ad7;
  padding: 5px 0;
`;

const UlList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  margin: 60px 0;
  list-style-type: none;
  align-self: start;
  @media (max-width: 765px) {
    justify-content: space-around;
    width: 100%;
    margin: 30px 0;
  }
`;

const LiItem = styled.li`
  margin: 10px 0;
  font-size: 1.5em;
  font-weight: 700;
  cursor: pointer;
  width: 50%;
  color: gray;
  align-self: center;
  justify-self: center;
  text-align: center;
  transition: 0.2s ease-in;

  &:hover,
  &:active {
    color: black;
  }
  @media (min-width: 765px) {
    font-size: 1.5em;
    width: 100%;
    align-self: start;
  }
`;

const Content = styled.div`
  margin: 10px;
  display: block;
  width: 100%;
  line-height: 1.2;
  @media (min-width: 764px) {
    width: 55%;
    margin: 30px;
  }
`;

const WhyUs = () => {
  const [content, setContent] = useState(Design);
  return (
    <Wrapper id='offer'>
      <Container>
        <Header>
          Why u should <Paragraph>Get Web</Paragraph> from us?
        </Header>

        <UlList>
          <LiItem onClick={() => setContent(Design)}>Great Design</LiItem>
          <LiItem onClick={() => setContent(Experience)}>Experience</LiItem>
          <LiItem onClick={() => setContent(Minds)}>Creative Minds</LiItem>
          <LiItem onClick={() => setContent(Customer)}>
            Customer Satisfaction
          </LiItem>
          <LiItem onClick={() => setContent(Solutions)}>
            Modern Solutions
          </LiItem>
        </UlList>

        <Content>{content}</Content>
        <Header> Discover our skills!</Header>
      </Container>
    </Wrapper>
  );
};

export default WhyUs;
