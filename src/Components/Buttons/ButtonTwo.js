import React from 'react'
import styled from 'styled-components'

const Button= styled.button`
display: block;
padding: 10px 5px;
border: 2px solid #EA2AD7;
cursor: pointer;
font-weight: 700;

`

const ButtonOne = (props) =>{

    return (
        <>
        <Button>{props.value}</Button>
        </>

    )
}
export default ButtonOne
