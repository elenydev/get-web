import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';
const Header = styled.h3`
width: 100%;
font-weight: 900;
padding-bottom: 15px;

`
const Links= styled(Link)`
text-decoration: none;
text-decoration: none;
color: black;
padding: 10px 5px;
border: 2px solid #EA2AD7;
box-shadow: -4px 4px 0 0 #EA2AD7;;
cursor: pointer;
font-weight: 700;
transition: .3s ease-in;
margin: 3px 0;
font-size: 0.65em;
&:hover{
    box-shadow: 4px -4px 0 0 #EA2AD7;;
}
`
const Content = styled.div`
display: block;
width: 100%;
word-wrap: break-word;
padding: 10px 0;
font-size: 1.1em;
padding-bottom: 15px;
line-height: 1.2;
`

const Solutions = () =>{
return(
    <>
    <Header>Modern Solutions</Header>
    <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Content>
     <Links to ='/#contact'scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Contact</Links>
    </>
)

}
export default Solutions