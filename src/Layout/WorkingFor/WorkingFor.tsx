import React from "react";
import {
  Wrapper,
  Container,
  Header,
  Element,
  Paragraph,
} from "./workingfor.styles";
import Logo1 from "../../assets/logos/logo1.jpg";
import Logo2 from "../../assets/logos/logo2.jpg";
import Logo3 from "../../assets/logos/logo3.jpg";
import Logo4 from "../../assets/logos/logo4.jpg";
import Logo5 from "../../assets/logos/logo5.jpg";
import Logo6 from "../../assets/logos/logo6.png";

const WorkingFor = (): JSX.Element => {
  return (
    <>
      <Wrapper id='partners'>
        <Container>
          <Header>
            We are <Paragraph>working</Paragraph> for:
          </Header>
          <Element>
            <img src={Logo1} alt='Ups' />
          </Element>
          <Element>
            <img src={Logo2} alt='Ups' />
          </Element>
          <Element>
            <img src={Logo3} alt='Ups' />
          </Element>
          <Element>
            <img src={Logo4} alt='Ups' />
          </Element>
          <Element>
            <img src={Logo5} alt='Ups' />
          </Element>
          <Element>
            <img src={Logo6} alt='Ups' />
          </Element>
        </Container>
      </Wrapper>
    </>
  );
};
export default WorkingFor;
