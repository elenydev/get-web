import React from 'react'
import styled from 'styled-components'
import ButtonOne from '../../../Components/Buttons/ButtonOne'
const Header = styled.h3`
width: 100%;
font-weight: 900;
padding-bottom: 15px;

`
const Content = styled.div`
display: block;
width: 100%;
word-wrap: break-word;
padding: 10px 0;
font-size: 1.1em;
padding-bottom: 15px;
line-height: 1.2
`

const Minds = () =>{
return(
    <>
    <Header>Creative Minds</Header>
    <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Content>
    <ButtonOne value={'Contact'}/>
    </>
)

}
export default Minds
