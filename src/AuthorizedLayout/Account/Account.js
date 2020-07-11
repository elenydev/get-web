import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {db} from "../../services/firebase"
import Navigation from '../Navigation/Navigation'

const Wrapper = styled.div`
display: flex;
width: 80%;
min-height: 100vh;
align-items: flex-start;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
margin: 5% auto;
@media(max-width: 760px) and (orientation: portrait){
    padding-top: 25%;
    width: 90%;

}
@media(max-width: 830px) and (orientation: landscape){
    margin: 10% auto;
}
`
const Data = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60%;
align-self: center;
height: 15%;
font-size: 1.5em;
box-shadow: 0 3px 11px #00000029;
font-weight: 900;
text-align: center;
margin-bottom: 1%;
padding: 10px 15px;
@media(max-width: 760px){
    width: 90%;
    font-size: 1em;
    align-self: center;
    margin: 3%;
}
`
const UpcomingEvents = styled.div`
display: flex;
width: 60%;
min-height: 71%;
align-items: center;
align-self: flex-start;
flex-wrap: wrap;
justify-content: center;
/* box-shadow: 0 3px 11px #00000029; */
padding: 15px 0;
@media(max-width: 760px){
    width: 90%;
    align-self: flex-end;
}
`
const Announcements = styled.div`
display: flex;
width: 30%;
min-height: 50%;
justify-content: center;
align-items: center;
align-self: flex-start;
flex-wrap: wrap;
padding: 15px 0;
/* box-shadow: 0 3px 11px #00000029; */
margin-bottom: 10px;
@media(max-width: 830px){
    width: 90%;
    align-self: center;
}
`
const Announcement = styled.div`
display: flex;
width: 80%;
align-items: center;
justify-content: space-between;
padding: 10px 10px;
flex-wrap: wrap;
box-shadow: 0 3px 11px #00000029;
margin: 10px 0;
@media(max-width: 760px){
    width: 90%;
}
`
const AnnouncementContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
word-wrap: break-word;
margin: 5px;
width: 100%;
`
const AnnouncementTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
width: 100%;
font-weight: 900;
`
const P = styled.p`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
font-weight: 900;
margin: 5px 0;
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
width: 80%;
`
const EventTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
width: 80%;
font-weight: 900;
`
const EventDate = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
width: 80%;
`


const Account = () =>{
    const [annoucements, setAnnoucements] = useState([]);
    const [events, setEvents] = useState([]);

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

    useEffect(() => {
        const unsubscribe = db.collection('Annoucements').onSnapshot(snapshot => {
            if(snapshot.size){
                const tmp = [];
                snapshot.forEach(doc => tmp.push({id: doc.id, ...doc.data()}));
                setAnnoucements(tmp);
            }
        })
        return () =>{
            unsubscribe();
        }
    
        }, []) 
           

    let dateObj = new Date(); 
    let month = String(dateObj.getMonth() + 1).padStart(2, '0'); 
    let day = String(dateObj.getDate()).padStart(2, '0'); 
    let year = dateObj.getFullYear(); 
    let output = day + '/' + month + '/' + year; 

    
    return(
        <>
        <Navigation />
            <Wrapper>
            <Data>Today is: {output}</Data>
            <UpcomingEvents>
                <P>Upcoming Events</P>
            {events.length === 0 && <P>We don't plan eny events :(</P>}
                {events.length >= 1 &&
                <Event>
                    <EventTitle>{events[events.length-1].Title}</EventTitle>
                    <EventContent>{events[events.length-1].Content}</EventContent>
                    <EventDate>{events[events.length-1].Date}</EventDate>
                </Event>
                }
                {events.length >= 2 &&
                <Event>
                    <EventTitle>{events[events.length-2].Title}</EventTitle>
                    <EventContent>{events[events.length-2].Content}</EventContent>
                    <EventDate>{events[events.length-2].Date}</EventDate>
                </Event>
                }
                
            </UpcomingEvents>
            <Announcements>
                <P>Latest announcements</P>
            {annoucements.length === 0 && <P>We don't have any annoucements :)</P>}
                {annoucements.length >= 1 &&  
                <Announcement>
                    <AnnouncementTitle>{annoucements[annoucements.length-1].Title}</AnnouncementTitle>
                    <AnnouncementContent>{annoucements[annoucements.length-1].Content}</AnnouncementContent>
                </Announcement>}
                {annoucements.length >= 2 &&  
                <Announcement>
                    <AnnouncementTitle>{annoucements[annoucements.length-2].Title}</AnnouncementTitle>
                    <AnnouncementContent>{annoucements[annoucements.length-2].Content}</AnnouncementContent>
                </Announcement>}
            </Announcements>
            
            
            
            </Wrapper>        
        </>
    )

}
export default Account
