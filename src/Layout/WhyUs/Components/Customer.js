import React from 'react'
import styled from 'styled-components'
import ButtonOne from '../../../Components/Buttons/ButtonOne'
import { HashLink as Link } from 'react-router-hash-link';
const Header = styled.h3`
width: 100%;
font-weight: 900;
padding-bottom: 15px;

`
const Links= styled(Link)`
text-decoration: none;
`
const Content = styled.div`
display: block;
width: 100%;
word-wrap: break-word;
padding: 10px 0;
font-size: 1.1em;
padding-bottom: 15px;

`

const Customer = () =>{
return(
    <>
    <Header>Customer Satisfaction</Header>
    <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Content>
    <Links to ='/#contact'scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}><ButtonOne value={'Contact'}></ButtonOne></Links>
    </>
)

}
export default Customer