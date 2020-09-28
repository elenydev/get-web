import styled from "styled-components";

export const MenuFooter = styled.div`
  background: black;
  color: white;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 0.8em;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 5%;
  padding-bottom: 20px;

  p {
    display: block;
    width: 100%;
    padding: 2px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 30px;
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
  padding-top: 20%;
  font-size: 1.5em;
  font-weight: 900;
  margin-bottom: 10%;
  width: 100%;
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
    font-size: 2em;
    padding: 10px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 760px) {
    width: 48%;
  }
`;

export const LeftContainerContent = styled.div`
  word-wrap: break-word;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  line-height: 1.2;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 760px) {
    width: 48%;
  }
`;

export const RightContainerContent = styled.div`
  word-wrap: break-word;
  width: 100%;
  padding: 10px;
  color: white;
`;

export const Paragraph = styled.p`
  margin-top: 10px;
  display: block;
  width: 100%;
  font-weight: 900;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    height: 2px;
    background: #ea2ad7;
    bottom: -10%;
    @media (min-width: 760px) {
      width: 50%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 60px;

  input {
    width: 100%;
    border: 2px solid #ea2ad7;
    padding: 5px 15px 2px;
    user-select: none;
    outline: none;
    margin: 3px 0;
    &::placeholder {
      color: darkgray;
    }
  }
  textarea {
    width: 100%;
    border: 2px solid #ea2ad7;
    user-select: none;
    outline: none;
    margin: 5px 0;
    padding: 5px 15px 2px;
    height: 300px;
    &::placeholder {
      color: darkgray;
    }
  }
  @media (min-width: 760px) {
    input,
    textarea {
      padding: 5px 15px 2px;
    }
    input {
      width: 45%;
    }
    textarea {
      height: 160px;
      width: 95%;
    }
  }
`;
