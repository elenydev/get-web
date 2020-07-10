import React from 'react'
import styled from 'styled-components'

const Button= styled.button`
display: block;
padding: 10px 5px;
border: 2px solid #EA2AD7;
box-shadow: -4px 4px 0 0 #EA2AD7;;
cursor: pointer;
font-weight: 700;
transition: .3s ease-in;
&:hover{
    box-shadow: 4px -4px 0 0 #EA2AD7;;
}
`

const ButtonOne = (props) =>{

    return (
        <>
        <Button>{props.value}</Button>
        </>

    )
}
export default ButtonOne
