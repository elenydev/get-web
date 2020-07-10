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
const Offer = styled.div`
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
}
`
const OfferContent = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
word-wrap: break-word;
margin: 5px;
width: 60%;
`
const OfferLocation = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
width: 30%;
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

const JobOffer = () => {
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
    const { handleSubmit, register} = useForm();

    const addOffer = async (values) =>{
    await db.collection('JobOffers').add(values);
    }
    const deleteOffer = async (id) =>{
        await db.collection('JobOffers').doc(id).delete();
    }


    return(
        <>
        <Navigation />
        <Wrapper>
            <Header>Job Offers</Header>
            {offers.length === 0 && <P>We don't have any offers</P>}
            {offers.map( offer => {
                return(
                    <Offer key={offer.id}>
                        <OfferContent>{offer.Title}</OfferContent>
                        <OfferLocation>{offer.Location}</OfferLocation>
                        <Button onClick={() => deleteOffer(offer.id)}>Delete</Button>
                    </Offer>
                    
                )
            })}
            <Popup trigger={<Button style={{margin: '0% 40%'}}>Add Offer</Button>} position="center">
                    <Form onSubmit={handleSubmit(addOffer)}>
                    <input type="text" ref={register({ required: true })} name="Title" placeholder="Job position" />
                    <input type="text" ref={register({ required: true })} name="Location" placeholder="Location" />
                    
                    <button type="submit">Add</button>
                    </Form>
            </Popup>
        </Wrapper>
        </>
    )

}
export default JobOffer