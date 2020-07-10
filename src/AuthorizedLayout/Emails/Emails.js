import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import {db} from '../../services/firebase'


const Wrapper = styled.div`
display: flex;
width: 80%;
min-height: 100%;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
margin: 5% auto;
@media(max-width: 768px){
    width: 95%;
}
`
const Header = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    width: 80%;
    margin: 10% 0;
@media(max-width: 760px){
    margin-top: 30%;
}
`
const P = styled.p`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
font-weight: 900;
margin: 10px 0;
`
const Email = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 80%;
padding: 15px 10px;
box-shadow: 0 3px 11px #00000029;
flex-wrap: wrap;
word-wrap: break-word;
min-height: 30%;
@media(max-width: 768px){
    width: 100%;
}
`
const EmailContent = styled.div`
display: inline-block;
/* justify-content: center;
align-items: center; */
max-width: 90%;
margin: 7px 0;
word-wrap: break-word;
overflow-wrap: break-word;
`
const Button = styled.button`
display: block;
padding: 10px 5px;
border: 2px solid #EA2AD7;
cursor: pointer;
font-weight: 700;

`

const Emails = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
    const unsubscribe = db.collection('Emails').onSnapshot(snapshot => {
        if(snapshot.size){
            const tmp = [];
            snapshot.forEach(doc => tmp.push({id: doc.id, ...doc.data()}));
            setEmails(tmp);
        }
    })
    return () =>{
        unsubscribe();
    }

    }, [])


    const DeleteMail = async (id) => {
        db.collection("Emails").doc(id).delete();
        console.log(id);
    }

    return(
        <>
        <Navigation />
        <Wrapper>
        <Header>Company emails:</Header>
        {emails.length === 0 && <P>We don't have any emails</P>}
        {emails.map(email => {
            return(
            <Email key={email.id}>
                <P style={{justifyContent: 'flex-start'}}>From: {email.companymail}</P>
                <P style={{justifyContent: 'flex-start'}}>Message:</P>
                <EmailContent>{email.message}</EmailContent>
                <P style={{justifyContent: 'flex-end'}}>Person: {email.fullname}</P>
                <Button onClick={() => DeleteMail(email.id)}>Delete</Button>
            </Email>
            )
        })}
        </Wrapper>
        </>
    )

}
export default Emails