import React, {useState} from 'react';
import styled from 'styled-components'
import {
    Link
  } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import ButtonOne from '../../Components/Buttons/ButtonOne'
import {auth} from "../../services/firebase";


const Wrapper= styled.div`
display: flex;
width: 100%;
height: 13vh;
background: black;
color: white;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
flex-wrap: wrap;
z-index:50;
@media(orientation: landscape) {
    padding: 0;
}

`;

const Logo = styled.div`
cursor: pointer;
font-size: 1.4rem;
text-transform: uppercase;
letter-spacing: 3px;
display: flex;
align-items: center;
justify-content: center;
width: 90%;
padding-right: 10%;
align-self: center;
height: 100%;
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
z-index: 5;
flex-direction: column;
height: 100vh;
background-color: black;
width: 20%;
transform: translateX(100%);
left: ${props => props.visible ? `-60%` : `-150%`};
@media(max-width: 960px){
    width: 100vw;   
    left: ${props => props.visible ? `0%` : `-100%`};
    transform: translateX(0%);
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
    cursor: pointer;
    display: block;
    position: relative;
    padding-left: 10px;
    width: 10%;
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

    display: flex;
    width: 100%;
    text-align: center;
    font-size: 0.7em;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 5%;


p{
    display: block;
    width: 100%;
    padding: 2px;
}
`


const Navigation = (props) =>{
    const [menuVisibility, setMenuVisibility] =useState (false);
    
    const VisibilityHandler = () =>{
        setMenuVisibility(!menuVisibility)
        
    }
    return(
        <nav>
            <Wrapper>
                <Burger  visible={menuVisibility} onClick={() => VisibilityHandler()}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </Burger>
                <Logo onClick={() => setMenuVisibility(false)}>
                    <Links to='/account'>Panel</Links>
                </Logo>
                
                
                    <NavList visible={menuVisibility}>
                        <Li> 
                            <Links to="/account/tasks" onClick={() => setMenuVisibility(false)}
                            >Tasks</Links>
                        </Li>
                        <Li> 
                            <Links to ="/account/employers" onClick={() => setMenuVisibility(false)}
                            >Employers</Links>
                        </Li>
                        <Li> 
                            <Links to ='/account/events' onClick={() => setMenuVisibility(false)}
                            >Events</Links>
                        </Li>
                        <Li> 
                            <Links to ='/account/announcements' onClick={() => setMenuVisibility(false)}
                            >Announcements</Links>
                        </Li>
                        <Li> 
                            <Links to ='/account/job' onClick={() => setMenuVisibility(false)}
                            >Job offers</Links>
                        </Li>
                        <Li> 
                            <Links to ='/account/emails' onClick={() => setMenuVisibility(false)}
                            >Emails</Links>
                        </Li>
                        <Li className='noBefore' onClick={() => auth().signOut()}> 
                            <ButtonOne value={'Log out'} >eLo</ButtonOne>
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
export default Navigation