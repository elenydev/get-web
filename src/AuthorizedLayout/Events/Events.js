import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import {db} from '../../services/firebase'
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
display: flex;
width: 80%;
min-height: 100%;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
margin: 7% auto;
@media(max-width: 768px){
    width: 95%;
    margin: 100px auto;
}
`
const Event = styled.div`
display: flex;
width: 80%;
align-items: center;
justify-content: space-around;
padding: 10px 10px;
flex-wrap: wrap;
box-shadow: 0 3px 11px #00000029;
margin: 10px 0;
@media(max-width: 760px){
    width: 100%;
    flex-flow: column;
}
`
const EventContent = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
word-wrap: break-word;
margin: 5px;
width: 60%;
`
const EventTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
width: 20%;
@media(max-width: 760px){
    width: 100%;
}
`
const EventDate = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
width: 10%;
`

const Header = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    width: 80%;
    margin: 5% 0;
`
const Button = styled.button`
display: block;
padding: 10px 5px;
border: 2px solid #EA2AD7;
cursor: pointer;
font-weight: 700;
@media(max-width: 760px){
    padding: 5px 3px;
    margin: 5px 30%;
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
const Form = styled.form`
padding: 2px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
    input{
        padding: 5px 3px;
        outline: none;
        margin: 2px;
    }
    button{
        display: block;
        padding: 2px;
        border: 2px solid #EA2AD7;
        cursor: pointer;
        font-weight: 700;

    }
`


const Events = () => {
    const [Events, setEvents] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('Events').onSnapshot(snapshot => {
            if(snapshot.size){
                const tmp = [];
                snapshot.forEach(doc => tmp.push({id: doc.id, ...doc.data()}));
                setEvents(tmp);
            }
        })
        return () =>{
            unsubscribe();
        }
    
        }, [])
    const { handleSubmit, register} = useForm();
    const deleteEvent = async (id) => {
        await db.collection('Events').doc(id).delete()
        .then(() => { 
            console.log('success!, show alert now'); 
        }) 
        .catch(err => { 
            console.log('errorcode', err.code); 
        });
    }
    const addEvent = async (values) =>{
        await db.collection('Events').add(values)
        .then(() => { 
            console.log('success!, show alert now'); 
        }) 
        .catch(err => { 
            console.log('errorcode', err.code); 
        });
    }

    return(
        <>
        <Navigation />
        <Wrapper>
        <Header>Planned events </Header>
        {Events.length === 0 && <P>We don't have any planned events </P>}
        {Events.map( event => {
            return(
                <Event key={event.id}>
                    <EventContent>{event.Content}</EventContent>
                    <EventTitle>{event.Title}</EventTitle>
                    <EventDate>{event.Date}</EventDate>
                    <Button onClick={() => deleteEvent(event.id)}>Delete</Button>
                </Event>
            )
        })}
         <Popup trigger={<Button style={{margin: '0% 40%'}}>Add Event</Button>} >
                    <Form onSubmit={handleSubmit(addEvent)}>
                    <input type="text" ref={register({ required: true })} name="Title" placeholder="Short Title" />
                    <input type="text" ref={register({ required: true })} name="Content" placeholder="Info about event" />
                    <input type="text" ref={register({ required: true })} name="Date" placeholder="dd-mm-yy" />
                    
                    <button type="submit">Add</button>
                    </Form>
        </Popup>
        </Wrapper>
        </>
    )

}
export default Events