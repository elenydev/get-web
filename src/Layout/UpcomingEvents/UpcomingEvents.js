import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Event1 from '../../assets/logos/Event1.jpg'
import Event2 from '../../assets/logos/Event2.jpg'
import Event3 from '../../assets/logos/Event3.jpg'
import ButtonOne from '../../Components/Buttons/ButtonOne'
import { HashLink as Link } from 'react-router-hash-link';
import {db} from '../../services/firebase'


const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background-color: white;

`;

const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 70%;
position: relative;
flex-wrap: wrap;
padding-top: 40px;
`
const Header= styled.h1`
color: #EA2AD7;
font-size: 9em;
font-weight: 900;
margin-bottom: 40px;
width: 100%;
color: black;
letter-spacing: 1px;
position: relative;
top: 10%;
z-index:1;
align-self: start;
&:before{
     content: '';
     width: 40%;
     position: absolute;
     display: block;
     height: 5px;
     background: #EA2AD7;
    bottom: -10%;

 }

@media(orientation: landscape ) and (max-width: 968px){
    &:before{
    bottom: -3%;
 }
}
@media(orientation: landscape) and (max-width: 900px){
    padding-top: 50%;
}
@media(max-width: 767px){
     padding-top: 30%;
    font-size: 1.5em;
}
@media(min-width: 768px){
    font-size: 2em;
    
}
@media(min-width: 961px){
font-size: 4em;
padding-top: 5%;
}
&:last-child{
    &:before{
        background:black;
        width: 100%;
        height: 3px;
    }
}
`;
const Links= styled(Link)`
text-decoration: none;
`

const Paragraph = styled.p`
color: #EA2AD7;
padding: 5px 0;
`;

const Card= styled.div`
display: flex;
flex: 0 0 auto;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 45%;
box-shadow: 0 3px 11px #00000029;
margin: 40px 5px;

@media(max-width: 760px){
    flex-direction: column;
    min-width: 100%;
}

`
const CardImage= styled.div`
height: 300px;
width: 300px;
background-image: url(${Event1});
background-position: 50% 50%;
background-size: cover;
margin-top: 5px;

@media(max-width:760px) {
    height: 150px;
    width: 150px;
}
`
const CardContent = styled.div`
display: flex;
max-width: 300px;
padding: 10px;
flex-wrap: wrap;
justify-content: space-between;

@media(max-width:760px){
   
}
`
const CardContentHeader = styled.h3`
font-weight: 900;
padding-bottom: 10px;
`
const CardContentText = styled.div`
word-wrap:break-word;
`
const CardParagraph = styled.p`
padding: 7px 0;
font-weight: 900;
width: 100%;
@media(max-width: 760px){
    width: 40%;
}
`
const Offer = styled.div `
display: flex;
flex: 0 0 auto;
width: 70%;
align-items: center;
justify-content: space-around;
margin: 30px 0;
box-shadow: 0 3px 11px #00000029;
padding: 20px 30px;
transition: .4s;
&:hover{
    background-color: lightgray;
}

@media(max-width: 760px){
    width: 100%;
    padding: 5px 5px;
    margin: 20px 0;
    button{
    font-size: 0.6em;

}
}
`
const OfferHeader = styled.h4`
font-size: 1.5em;
font-weight: 900;
@media(max-width: 760px){
    font-size: 0.8em;
}
`
const OfferContent = styled.div`
text-decoration: inherit;
font-weight: 700;
padding-right: 10px;
@media(max-width:760px ){
    font-size: 0.6em;
}
`

const UpcomingEvents = () =>{
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
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection('JobOffers').onSnapshot(snapshot => {
            if(snapshot.size){
                const tmp = [];
                snapshot.forEach(doc => tmp.push({id: doc.id, ...doc.data()}));
                setOffers(tmp);
            }
        })
        return () =>{
            unsubscribe();
        }
    
        }, [])



    return (
        <>
            <Wrapper id="events">
                <Container>
                {events.length === 0 && <Header>We <Paragraph>don't plan</Paragraph>any events for now :)</Header>}
                <Header>Our <Paragraph>Upcoming</Paragraph>events</Header>
                {events.length >=1 &&
                <Card>
                    <CardImage/>
                    <CardContent>
                        <CardContentHeader>{events[events.length-1].Title}</CardContentHeader>
                        <CardContentText>{events[events.length-1].Content}</CardContentText>
                        <CardParagraph>{events[events.length-1].Date}</CardParagraph>
                        <ButtonOne value={'Sing Up'}></ButtonOne>
                    </CardContent>
                </Card>
                }
                {events.length >=2 && 
                <Card>
                    <CardImage style={{backgroundImage:`url(${Event2})`}}/>
                    <CardContent>
                        <CardContentHeader>{events[events.length-2].Title}</CardContentHeader>
                        <CardContentText>{events[events.length-2].Content}</CardContentText>
                        <CardParagraph>{events[events.length-2].Date}</CardParagraph>
                        <ButtonOne value={'Sing Up'}></ButtonOne>
                    </CardContent>
                </Card>
                }
                {events.length >=3 &&
                <Card>
                    <CardImage style={{backgroundImage:`url(${Event3})`}}/>
                    <CardContent>
                        <CardContentHeader>{events[events.length-3].Title}</CardContentHeader>
                        <CardContentText>{events[events.length-3].Content}</CardContentText>
                        <CardParagraph>{events[events.length-3].Date}</CardParagraph>
                        <ButtonOne value={'Sing Up'}></ButtonOne>
                    </CardContent>
                </Card>
                }

                {offers.length === 0 && <Header id="career">We don't have any work offers for now :(</Header>}
                {offers.length >=1 && 
                offers.map( offer =>{
                    return(
                    <Offer key={offer.id}>
                        <OfferHeader>{offer.Title}</OfferHeader>
                        <OfferContent>{offer.Location}</OfferContent>
                        <Links to ='/#contact'scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}><ButtonOne value={'Apply'}></ButtonOne></Links>
                    </Offer>
                    )
                })
                }
                </Container>
            </Wrapper>
        </>
    )
}
export default UpcomingEvents