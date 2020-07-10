import React from 'react'
import styled from 'styled-components'
import Logo1 from '../../assets/logos/logo1.jpg'
import Logo2 from '../../assets/logos/logo2.jpg'
import Logo3 from '../../assets/logos/logo3.jpg'
import Logo4 from '../../assets/logos/logo4.jpg'
import Logo5 from '../../assets/logos/logo5.jpg'
import Logo6 from '../../assets/logos/logo6.png'

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background-color: white;
margin-bottom: 5%;
`;

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 70%;
position: relative;
flex-wrap: wrap;
padding-top: 40px;
`
const Header= styled.h1`
color: #EA2AD7;
font-size: 9em;
font-weight: 900;
margin-bottom: 40px;
width: 100%;
color: black;
letter-spacing: 1px;
position: relative;
top: 10%;
z-index:1;
align-self: end;
text-align: center;
&:before{
     content: '';
     width: 40%;
     position: absolute;
     display: block;
     height: 4px;
     background: #EA2AD7;
    bottom: -10%;
    left: 50%;
    transform: translateX(-50%)

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
     padding-top: 5%;
    font-size: 1.5em;
}
@media(min-width: 768px){
    font-size: 2em;
    
}
@media(min-width: 961px){
font-size: 4em;
padding-top: 5%;
}

`;
const Paragraph = styled.span`
color: #EA2AD7;
padding: 5px 0;
`;
const Element = styled.div`
display: block;
width: 30%;
height: 30%;
text-align: center;
img{
    width: 70%;
    height: 70%
}
`

const WorkingFor = () =>{
    return (
        <>
        <Wrapper id="partners">
            <Container >
                <Header>
                    We are <Paragraph>working</Paragraph> for:
                </Header>
                <Element><img src={Logo1} alt="Ups"/></Element>
                <Element><img src={Logo2} alt="Ups"/></Element>
                <Element><img src={Logo3} alt="Ups"/></Element>
                <Element><img src={Logo4} alt="Ups"/></Element>
                <Element><img src={Logo5} alt="Ups"/></Element>
                <Element><img src={Logo6} alt="Ups"/></Element>
            </Container>
        </Wrapper>
        </>
    )
}
export default WorkingFor 