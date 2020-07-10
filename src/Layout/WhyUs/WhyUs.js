import React, {useState} from 'react'
import styled from 'styled-components'
import Design from './Components/Design'
import Customer from './Components/Customer'
import Minds from './Components/Minds'
import Experience from './Components/Experience'
import Solutions from './Components/Solutions'

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
align-self: start;
&:before{
     content: '';
     width: 40%;
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
&:last-child{
    &:before{
        background:black;
        width: 100%;
        height: 3px;
    }
}
`;
const Paragraph = styled.p`
color: #EA2AD7;
padding: 5px 0;
`;

const UlList=styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
width: 30%;
margin: 60px 0;
list-style-type: none;
align-self: start;
@media(max-width:765px){
justify-content: space-around;
width: 100%;
margin: 30px 0;
}
`
const LiItem=styled.li`
margin: 10px 0;
font-size: 1.5em;
font-weight: 700;
cursor: pointer;
width: 100%;
color: gray;
align-self: start;
transition: .2s ease-in;

&:hover, &:active {
    color: black;
}
@media(max-width:765px){
    font-size: 1em;
    width: 50%;
    align-self: center;
    justify-self: center;
    text-align: center;
}
`
const Content=styled.div`
margin: 30px;
display: block;
width: 55%;
@media(max-width: 764px){
    width: 100%;
    margin: 10px
    
}
` 
const WhyUs = () =>{
    const [content, setContent] = useState(Design);
    return(
        <Wrapper id="offer">
            <Container>
                <Header>
                    Why u should <Paragraph>Get Web</Paragraph> from us?
                </Header>
                <UlList>
                    <LiItem onClick={() => setContent(Design)}>Great Design</LiItem>
                    <LiItem onClick={() => setContent(Experience)}>Experience</LiItem>
                    <LiItem onClick={() => setContent(Minds)}>Creative Minds</LiItem>
                    <LiItem onClick={() => setContent(Customer)}>Customer Satisfaction</LiItem>
                    <LiItem onClick={() => setContent(Solutions)}>Modern Solutions</LiItem>
                </UlList>
                <Content>
                    {content}
                </Content>
                <Header > Discover our skills!</Header>
            </Container>
        </Wrapper>
    )

}

export default WhyUs