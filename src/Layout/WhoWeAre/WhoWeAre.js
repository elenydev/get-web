import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';

const Wrapper = styled.div`
display: flex;
height: 100vh;
background-color: black;
justify-content: center;
align-items: center;
width: 100%;
flex-wrap: wrap;

`
const HeaderWrapper= styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
align-items: center;
width: 70%;

`
const Links= styled(Link)`
text-decoration: none;
`
const Header= styled.h1`
color: #EA2AD7;
font-size: 9em;
font-weight: 900;
color: white;
letter-spacing: 1px;
position: relative;
z-index:1;
padding-top: 7%;

&:before{
     content: '';
     width: 40%;
     position: absolute;
     display: block;
     height: 6px;
     background: #EA2AD7;
    bottom: -10%;

 }
 @media(orientation: landscape ) and (max-width: 968px){
    &:before{
    bottom: 0%;
 }
 }
 @media(max-width: 960px){
     padding-top: 15%;
    font-size: 3.5em;
}
@media(min-width: 768px){
    font-size: 5.5em;
}
@media(min-width: 961px){
font-size: 9em;
}
`;

const Paragraph = styled.p`
color: #EA2AD7;
padding: 5px 0;
`;
const SubText= styled.div`
display: block;
color: white;
font-weight: 700;
width: 70%;
letter-spacing: 1px;
padding-bottom: 3%;
font-size: 1.1em;
position: relative;

    @media(min-width:960px){
    font-size: 1.3em;
    }
&:before{
    content: '';
     width: 100%;
     position: absolute;
     display: block;
     height: 6px;
     background: #EA2AD7;
    bottom:-4%;
}
`;
const Circle = styled.div`
display: flex;
width: 100px;
height: 100px;
border: 2px solid #EA2AD7;
border-radius: 50%;
padding: 20px 10px;
color: white;
justify-content: center;
align-items: center;
font-weight: 900;
font-size: 1.2em;
flex-wrap: wrap;
position: absolute;
right: 10%;
top: 54%;
text-align: center;
@media(max-width:960px){
    width: 20%;
    height: 12%;
    padding: 10px 10px;
    font-size: 0.8em;
    top: 56%;
}
@media(orientation: landscape ) and (max-width: 960px){
    height: 22%;
    top: 35%;

}
`

const WhoWeAre = () =>{

    return(
        <Wrapper id="home">
            <HeaderWrapper >
                <Header>You wanna <Paragraph>Get Web</Paragraph> from us?</Header>
             
            </HeaderWrapper>
            <SubText>Just check our offer and let us create your website that u will be proud off!</SubText>
            <Links to ='/#contact'scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                <Circle>See more 
                    <FontAwesomeIcon icon={faArrowCircleDown} style={{
                    position: 'absolute',
                    bottom: '-60%',
                    display: 'block',
                    width: '35',
                    height: '35',
                     }} />
                </Circle> 
            </Links>
        </Wrapper>
        
    )

}
export default WhoWeAre;