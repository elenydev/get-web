import React, { useState} from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import * as firebase from 'firebase';
import ButtonOne from '../../Components/Buttons/ButtonOne'
import "firebase/auth";
import {
    Link,
    Redirect
  } from "react-router-dom";  
import {useSelector} from 'react-redux'
import MainNav from '../../Layout/MainNav/MainNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import {fbAuth, gitAuth} from '../../services/firebase'
import { selectCurrentUser} from '../../auth/authSlice'

const MenuFooter= styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 0.7em;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 7%;
    background: black;
    color: white;

p{
    display: block;
    width: 100%;
    padding: 2px;
}
`
const Wrapper = styled.div`
color: black;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;

`
const Container = styled.div`
display: flex;
width: 40%;
height: 40%;
flex-wrap: wrap;
justify-content: center;
align-items: center;
box-shadow: 0 3px 11px #00000029;


@media(max-width: 760px){
    width: 90%;
    padding: 20px;
    height: 50%;
}
`
const FacebookBtn = styled.button`
display: block;
background-color: #3b5998;
color: white;
width: 150px;
padding: 10px 20px;
cursor: pointer;
@media(max-width: 760px){
    width: 100px;
}
`
const GithubBtn= styled.button`
display: block;
background-color: #24292e;
color: white;
width: 150px;
padding: 10px 20px;
cursor: pointer;
@media(max-width: 760px){
    width: 100px;
}
`
const Header = styled.h3`
display: block;
width: 100%;
text-align: center;
font-weight: 900;
`
const Form = styled.form`
display: flex;
width: 90%;
padding: 10px;
justify-content: center;
align-items: center;
flex-wrap:wrap;
    input{
        width: 47%;
        padding: 2px 5px;
        border: 2px solid #EA2AD7;
        margin: 5px;
        outline: none;
    }

@media(max-width: 980px){
    width: 100%;
    input{
        width: 90%;
        margin-bottom: 10px;
    }
}    
`
const ErrorSpan = styled.span`
display: block;
width: 90%;
text-align: center;
color: red;
padding: 10px;
`
const Login = () =>{
    const currentUser=useSelector(selectCurrentUser);
    const { handleSubmit, register} = useForm();
    const [error, setError] = useState('');
    const loginUser = (data) =>{
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function(error) {
            const errorMessage = error.message;
            setError(errorMessage);
          });
    setError('');
    }

    return(
        <>
        <MainNav />
        <Wrapper>
           <Container>
                <Header>Log in to control panel</Header>                
            <Form onSubmit={handleSubmit(loginUser)}>
            <input
                placeholder="Email"
                name="email"
                ref={register({
                pattern: {
                    value: "admin@admin.pl",
                    message: "invalid email or password"
                }
                })}
            />
            <input
                placeholder="Password"
                type="password"
                name="password"
                ref={register({
                pattern: {
                    value: "adminadmin",
                    message: "invalid email or password"
                }
                })}
            />
            <ButtonOne value="Log in" type="submit"/>
            </Form>
            <ErrorSpan>{error}</ErrorSpan>
                <FacebookBtn onClick={fbAuth}>Facebook</FacebookBtn>
                <GithubBtn onClick={gitAuth}>GitHub</GithubBtn>
                {currentUser ? <Redirect to="/account"/> : <Link to ="/login"></Link>}
           </Container>

        </Wrapper>
        <MenuFooter>
            <p>Design & Development</p>
            <div>Damian Czarnota</div>
            <p><a href="https://www.linkedin.com/in/damian-czarnota-0913b71b0/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a></p>   
        </MenuFooter>
      </>
    )


}
export default Login 