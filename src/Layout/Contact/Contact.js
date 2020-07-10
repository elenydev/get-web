import React from 'react'
import styled from 'styled-components'
import ButtonOne from '../../Components/Buttons/ButtonOne'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import {db} from '../../services/firebase'

const MenuFooter= styled.div`
    background: black;
    color: white;
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 0.7em;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 5%;
    padding-bottom: 20px;

p{
    display: block;
    width: 100%;
    padding: 2px;
}
`


const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
margin-top: 30px;
align-items: center;
background-color: black;
padding-bottom: 50px;

`;

const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 70%;
position: relative;
flex-wrap: wrap;
padding-top: 40px;
height: 100%;
`
const Header= styled.h1`
color: #EA2AD7;
font-size: 9em;
font-weight: 900;
margin-bottom: 10%;
width: 100%;
color: white;
letter-spacing: 1px;
position: relative;
top: 10%;
z-index:1;
align-self: start;
&:before{
     content: '';
     width: 50%;
     position: absolute;
     display: block;
     height: 5px;
     background: #EA2AD7;
    bottom: -10%;

 }

@media(orientation: landscape ) and (max-width: 968px){
    &:before{
    bottom: -3%;
 }
}
@media(orientation: landscape) and (max-width: 900px){
    padding-top: 50%;
}
@media(max-width: 767px){
     padding-top: 30%;
    font-size: 1.5em;
}
@media(min-width: 768px){
    font-size: 2em;
    
}
@media(min-width: 961px){
font-size: 4em;
padding-top: 5%;
}
`

const LeftContainer =  styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 48%;
flex-wrap: wrap;
@media(max-width: 760px){
    width: 100%;
}
`
const LeftContainerContent = styled.div`
word-wrap: break-word;
width: 100%;
padding: 10px;
color: white;
font-weight: 700;
`
const RightContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 48%;
flex-wrap: wrap;
@media(max-width: 760px){
    width: 100%;
}
`
const RightContainerContent = styled.div`
word-wrap: break-word;
width: 100%;
padding: 10px;
color: white;


`
const Paragraph = styled.p`
margin-top: 10px;
display: block;
width: 100%;
font-weight: 900;
position: relative;
&:before{
    content:'';
    display: block;
    width: 50%;
    position: absolute;
    height: 2px;
    background: #EA2AD7;
    bottom: -10%;
    @media(max-width: 760px){
        width: 100%;
    }
}
`
const Form = styled.form`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
margin-top: 60px;

input{
    width: 45%;
    border: 2px solid #EA2AD7;
    padding: 5px 15px 2px;
    user-select: none;
    outline: none;
    margin: 3px 0;
    &::placeholder{
        color: darkgray;
    }
}
textarea{
    width: 95%;
    border: 2px solid #EA2AD7;
    user-select: none;
    outline: none;
    margin: 5px 0;
    height: 300px;
    &::placeholder{
        color: darkgray;
        padding: 10px;
    }

}
@media(max-width: 760px){
    input,textarea{ 
    width: 100%;
    padding: 5px 15px 2px;
    }
    textarea{
        height: 160px;
    }
}
`


const Contact  = () =>{

    const { handleSubmit, register, errors } = useForm();

    const sendMail = async (values,e) => {
    await db.collection('Emails').add(values);
    e.target.reset();
    }
    return (
        <>
            <Wrapper>
                <Container>
                    <LeftContainer>
                        <Header>
                            Get in Touch
                        </Header>
                        <LeftContainerContent>
                            Creating the best solutions, impressive designs and best support from our side.
                            Tell us about your needs, we'd love to collaborate with you
                            <Paragraph>godevdamian@gmail.com</Paragraph>
                        </LeftContainerContent>
                    </LeftContainer>
                    <RightContainer>
                        <RightContainerContent>
                            <Form onSubmit={handleSubmit(sendMail)} id="contact">
                                <input type="text" ref={register({ required: true })} name="fullname" placeholder={errors.message ? 'This field is required' : 'Full name'}/>
                                <input type="text" ref={register({ required: true })} name="companymail" placeholder={errors.message ? 'Put correct email' : 'Company email'} />
                                <textarea name="message" ref={register({ required: true })} placeholder={errors.message ? 'This field is required' : 'Your message'}></textarea>
                                <ButtonOne value="Submit" type="submit"></ButtonOne>
                            </Form>
                        </RightContainerContent>
                    </RightContainer>
                </Container>

                
            </Wrapper>
            <MenuFooter>
            <p>Design & Development</p>
                        <div>Damian Czarnota</div>
                        <p><a href="https://www.linkedin.com/in/damian-czarnota-0913b71b0/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a></p>
            </MenuFooter>
        
        </>
    )

}
export default Contact