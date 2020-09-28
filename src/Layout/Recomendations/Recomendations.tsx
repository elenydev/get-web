import React from "react";
import Image2 from "../../assets/logos/person2.jpg";
import Image3 from "../../assets/logos/person3.jpg";
import Image4 from "../../assets/logos/person4.jpg";
import Image5 from "../../assets/logos/person5.jpg";
import Image6 from "../../assets/logos/person6.jpg";
import {
  Wrapper,
  Container,
  Header,
  Window,
  DivImg,
  Paragraph,
} from "./recomendations.styles";
const Recomendations = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <Container>
          <Header>Client's opinions</Header>
          <Window>
            <DivImg />
            <Paragraph>"Perfect work and perfect design"</Paragraph>
          </Window>
          <Window>
            <DivImg style={{ backgroundImage: ` url(${Image2})` }} />
            <Paragraph>"Their support is awesome!"</Paragraph>
          </Window>
          <Window>
            <DivImg style={{ backgroundImage: ` url(${Image3})` }} />
            <Paragraph>"Great components for my agency"</Paragraph>
          </Window>
          <Window>
            <DivImg style={{ backgroundImage: ` url(${Image4})` }} />
            <Paragraph>"Perfect solutions for my network"</Paragraph>
          </Window>
          <Window>
            <DivImg style={{ backgroundImage: ` url(${Image5})` }} />
            <Paragraph>"Best designers, best company"</Paragraph>
          </Window>
          <Window>
            <DivImg style={{ backgroundImage: ` url(${Image6})` }} />
            <Paragraph>"Great work and great partners"</Paragraph>
          </Window>
        </Container>
      </Wrapper>
    </>
  );
};
export default Recomendations;
