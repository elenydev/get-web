import React from 'react'
import styled from 'styled-components'
import Image1 from '../../assets/logos/person1.jpg'
import Image2 from '../../assets/logos/person2.jpg'
import Image3 from '../../assets/logos/person3.jpg'
import Image4 from '../../assets/logos/person4.jpg'
import Image5 from '../../assets/logos/person5.jpg'
import Image6 from '../../assets/logos/person6.jpg'


const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
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
const Window = styled.div`
display: flex;
background: #101115;
padding: 10px 30px 10px 10px;
margin-bottom: 20px;
border-radius: 50px;
align-items: center;
justify-content: space-between;
flex: 0 0 auto;
margin-right: 1px;
transition: .4s;
border: .5px solid transparent;
&:hover{
    transform: scale(1.05);
    border: .5px solid #EA2AD7
}

`;
const DivImg = styled.div`
width: 80px;
height: 80px;
flex: 0 0 auto;
border-radius: 100%;
margin-right: 20px;
background-image: url(${Image1});
background-position: 50% 50%;
background-size: cover;

@media(max-width: 760px){
    width: 50px;
    height: 50px;
}
`
const Paragraph = styled.p`
font-weight: 700;
font-size: 1em;
color: lightgray;
@media(max-width: 760px){
    font-size: 0.7em;
}
`


const Recomendations = () =>{
    return (
        <>
        <Wrapper>
            <Container>
                <Header>
                    Client's opinions
                </Header>
                <Window>
                    <DivImg />
                    <Paragraph>"Perfect work and perfect design"</Paragraph>
                </Window>
                <Window>
                    <DivImg style={{backgroundImage:` url(${Image2})`}}/>
                    <Paragraph>"Their support is awesome!"</Paragraph>
                </Window>
                <Window>
                    <DivImg style={{backgroundImage:` url(${Image3})`}} />
                    <Paragraph>"Great components for my agency"</Paragraph>
                </Window>
                <Window>
                    <DivImg style={{backgroundImage:` url(${Image4})`}} />
                    <Paragraph>"Perfect solutions for my network"</Paragraph>
                </Window>
                <Window>
                    <DivImg style={{backgroundImage:` url(${Image5})`}} />
                    <Paragraph>"Best designers, best company"</Paragraph>
                </Window>
                <Window>
                    <DivImg style={{backgroundImage:` url(${Image6})`}} />
                    <Paragraph>"Great work and great partners"</Paragraph>
                </Window>
            </Container>
            
        </Wrapper>
        </>
       
    )
}
export default Recomendations