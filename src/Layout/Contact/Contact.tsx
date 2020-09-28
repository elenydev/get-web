import React from "react";
import ButtonOne from "../../Components/Buttons/ButtonOne";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { db } from "../../services/firebase";
import {
  Wrapper,
  Container,
  LeftContainer,
  Header,
  LeftContainerContent,
  Paragraph,
  RightContainer,
  RightContainerContent,
  Form,
  MenuFooter,
} from "./contact.styles";

const Contact = (): JSX.Element => {
  const { handleSubmit, register, errors } = useForm();

  const sendMail = async (values, e) => {
    await db.collection("Emails").add(values);
    e.target.reset();
  };
  return (
    <>
      <Wrapper>
        <Container>
          <LeftContainer>
            <Header>Get in Touch</Header>
            <LeftContainerContent>
              Creating the best solutions, impressive designs and best support
              from our side. Tell us about your needs, we'd love to collaborate
              with you
              <Paragraph>godevdamian@gmail.com</Paragraph>
            </LeftContainerContent>
          </LeftContainer>
          <RightContainer>
            <RightContainerContent>
              <Form onSubmit={handleSubmit(sendMail)} id='contact'>
                <input
                  type='text'
                  ref={register({ required: true })}
                  name='fullname'
                  placeholder={
                    errors.message ? "This field is required" : "Full name"
                  }
                />
                <input
                  type='text'
                  ref={register({ required: true })}
                  name='companymail'
                  placeholder={
                    errors.message ? "Put correct email" : "Company email"
                  }
                />
                <textarea
                  name='message'
                  ref={register({ required: true })}
                  placeholder={
                    errors.message ? "This field is required" : "Your message"
                  }
                ></textarea>
                <ButtonOne value='Submit' type='submit'></ButtonOne>
              </Form>
            </RightContainerContent>
          </RightContainer>
        </Container>
      </Wrapper>
      <MenuFooter>
        <p>Design & Development</p>
        <div>Damian Czarnota</div>
        <p>
          <a
            href='https://www.linkedin.com/in/damian-czarnota-0913b71b0/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </p>
      </MenuFooter>
    </>
  );
};
export default Contact;
