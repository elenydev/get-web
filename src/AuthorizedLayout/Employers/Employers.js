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
const Employe = styled.div`
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
const EmployeName = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
`
const EmployeRole = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
`
const EmployeEmail = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
`
const AddTask = styled.button`
display: block;
padding: 10px 5px;
border: 2px solid #EA2AD7;
cursor: pointer;
font-weight: 700;
@media(max-width: 760px){
    padding: 5px 3px;
    margin: 8px 20%;
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
const Header = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    width: 80%;
    margin: 5% 0;
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

const Employers = () => {
    const [employers, setEmployer] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('Employers').onSnapshot(snapshot => {
            if(snapshot.size){
                const tmp = [];
                snapshot.forEach(doc => tmp.push({id: doc.id, ...doc.data()}));
                setEmployer(tmp);
            }
        })
        return () =>{
            unsubscribe();
        }
    
        }, [])
    const { handleSubmit, register, errors } = useForm();

    const sendTask = async (values,e) => {
    await db.collection('Tasks').add(values);
    e.target.reset();
    }
    const dismiss = async (id) =>{
        await db.collection('Employers').doc(id).delete();

    }
    const hire = async (values) =>{
        await db.collection('Employers').add(values);
    }
    return(
        <>
        <Navigation />
        <Wrapper>
            <Header>Our team</Header>
            {employers.length === 0 && <P>We don't have any emails</P>}
            {employers.map( employe => {
                return(
                <Employe key={employe.id}>
                    <EmployeName>{employe.fullname}</EmployeName>
                    <EmployeRole>{employe.role}</EmployeRole>
                    <EmployeEmail>{employe.email}</EmployeEmail>
                    
                    <Popup trigger={<AddTask>Add task</AddTask>} position="center">
                    <Form onSubmit={handleSubmit(sendTask)}>
                    <input type="text" ref={register({ required: true })} name="content" placeholder={errors.message ? 'This field is required' : 'What to do?'}/>
                    <input type="text" ref={register({ required: true })} name="person" value={employe.fullname} style={{display: 'none'}}/>
                    {/* BE SMART :) */}
                    <button type="submit">Add</button>
                    </Form>
                    </Popup>
                    <AddTask onClick={() => dismiss(employe.id)}>Dismiss</AddTask>
                    
                </Employe>
                )
            })}
            <Popup trigger={<AddTask style={{margin: '0 40%'}}>Hire employe</AddTask>} position="center">
                    <Form onSubmit={handleSubmit(hire)}>
                    <input type="text" ref={register({ required: true })} name="fullname" placeholder={errors.message ? 'This field is required' : 'Fullname'}/>
                    <input type="text" ref={register({ required: true })} name="role" placeholder={errors.message ? 'This field is required' : 'Role'}  />
                    <input type="text" ref={register({ required: true })} name="email" placeholder={errors.message ? 'This field is required' : 'Email'}  />
                    <button type="submit">Hire</button>
                    </Form>
                    </Popup>
        </Wrapper>
        </>
    )

}
export default Employers