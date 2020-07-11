import React, {useState} from 'react';
import styled from 'styled-components'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import ButtonOne from '../../Components/Buttons/ButtonOne'
import { HashLink as Link } from 'react-router-hash-link';
 


const Wrapper= styled.div`
display: flex;
width: 100%;
height: 13vh;
background: black;
color: white;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
left: 0;
flex-wrap: wrap;
padding-top: 15px;
z-index:50;
@media(orientation: landscape) {
    padding: 0;
}
`;

const Logo = styled.div`
font-size: 1.4rem;
text-transform: uppercase;
letter-spacing: 3px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 5%;


@media(max-width: 998px){
    margin: auto;
    align-self: center; 
    padding-left: 50px;
}
`;

const NavList= styled.ul`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
list-style-type: none;
transition: 0.3s ease-in;
background-color: black;
position: relative;
z-index:5;
margin-right: 5%;

@media(max-width: 998px){
    flex-direction: column;
    height: 100vh;
    background-color: black;
    width: 100vw;   
    padding-bottom: 65px;
    right: ${props => props.visible ? `0%` : `-100%`};
    margin: 0;

}

`;

const Links=styled(Link)`
text-decoration: none;
color: white;
list-style-type: none;
margin: 10px;
font-weight: 600;
cursor: pointer;

`;

const Li = styled.li`
font-size: 1.1rem;
margin: 5px;
position: relative;
transition: 0.4s ease-in;
transition-delay: 0.4s;

&:hover, &:active{
    &:before{
    content: '';
    display: block;
    width: 80%;
    height: 3px;
    background: #EA2AD7;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -50%);
    }


}
&.noBefore{
    &:before{
        display: none;
    }
}
`;
const Burger = styled.div`
display: none;
cursor: pointer;
@media(max-width:998px){
    display: block;
    position: relative;
    padding-right: 10px;
   
}
    span{
        display: block;
        width: 27px;
        height: 3px;
        background: white;
        margin: 3px 0px;
        transform-origin: 5px;
        transition: .3s ease-in;
        
        &:nth-child(1){
        transform: ${props => props.visible ? 'rotate(45deg)': 'rotate(0)'}
        }
        &:nth-child(2){
        transform: ${props => props.visible ? 'translateX(100%)': 'translateX(0)'};
        opacity: ${props => props.visible ? '0' : '1'}    
        }
        &:nth-child(3){
        transform: ${props => props.visible ? 'rotate(-45deg)': 'rotate(0)'} 
        }
        
    }
`
const MenuFooter= styled.div`
display: none;
@media(max-width:960px){
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 0.7em;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 5%;

}
p{
    display: block;
    width: 100%;
    padding: 2px;
}
`


const MainNav = (props) =>{

    const [menuVisibility, setMenuVisibility] =useState (false);
    
    const VisibilityHandler = () =>{
        setMenuVisibility(!menuVisibility)
        console.log(menuVisibility);
    }
    return(
        <nav>
            <Wrapper>
           
                <Logo onClick={() => setMenuVisibility(false)}>
                    <Links to='/'>get<span style={{fontWeight: 900}}>Web</span> </Links>
                </Logo>
                <Burger  visible={menuVisibility} onClick={() => VisibilityHandler()}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </Burger>
                
                    <NavList visible={menuVisibility}>
                        <Li> 
                            <Links to="/#home" onClick={() => setMenuVisibility(false)}
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            >Home</Links>
                        </Li>
                        <Li> 
                            <Links to ="/#offer" onClick={() => setMenuVisibility(false)}
                              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            >Offer</Links>
                        </Li>
                        <Li> 
                            <Links to ='/login' onClick={() => setMenuVisibility(false)}
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            >Company</Links>
                        </Li>
                        <Li> 
                            <Links to ='/#career' onClick={() => setMenuVisibility(false)}
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >Career</Links>
                        </Li>
                        <Li> 
                            <Links to ='/#events' onClick={() => setMenuVisibility(false)}
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >Events</Links>
                        </Li>
                        <Li className='noBefore'> 
                            <Links to ='/#contact' onClick={() => setMenuVisibility(false)}
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            ><ButtonOne value={'Contact us'}/></Links>
                        </Li>
                        <MenuFooter >
                        <p>Design & Development</p>
                        <div>Damian Czarnota</div>
                        <p><a href="https://www.linkedin.com/in/damian-czarnota-0913b71b0/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a></p>
                        </MenuFooter>
                    </NavList>
                

           
            </Wrapper>
        </nav>
    )
    
}
export default MainNav