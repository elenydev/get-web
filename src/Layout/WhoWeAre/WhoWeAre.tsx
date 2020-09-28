import React from "react";
import {
  Wrapper,
  HeaderWrapper,
  Header,
  SubText,
  Links,
  Circle,
  Paragraph,
} from "./whoweare.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const WhoWeAre = (): JSX.Element => {
  return (
    <Wrapper id='home'>
      <HeaderWrapper>
        <Header>
          You wanna <Paragraph>Get Web</Paragraph> from us?
        </Header>
      </HeaderWrapper>

      <SubText>
        Just check our offer and let us create your website that u will be proud
        off!
      </SubText>

      <Links
        to='/#offer'
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
      >
        <Circle>
          See more
          <FontAwesomeIcon
            icon={faArrowCircleDown}
            style={{
              position: "absolute",
              bottom: "-70%",
              display: "block",
              width: "35",
              height: "35",
            }}
          />
        </Circle>
      </Links>
    </Wrapper>
  );
};
export default WhoWeAre;
