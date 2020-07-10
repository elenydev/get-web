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
const Header = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    width: 80%;
    margin: 5% 0;
`

const Task = styled.div`
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
const TaskContent = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
word-wrap: break-word;
margin: 5px;
width: 60%;
`
const TaskPerson = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
width: 30%;
`
const AddTask = styled.button`
display: block;
padding: 10px 5px;
border: 2px solid #EA2AD7;
cursor: pointer;
font-weight: 700;
margin: 10px 30%;
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
const DeleteTask = styled.button`
display: block;
padding: 10px 5px;
border: 2px solid #EA2AD7;
cursor: pointer;
font-weight: 700;
margin: 5px;
@media(max-width: 760px){
    padding: 5px 3px;
    margin: 5px 5%;
}
`


const TasksManager = () => {
    const [tasks, setTasks] = useState([]);
    const [employers, setEmployer] = useState([]);
    const [editContent, setEditContent] = useState();

    useEffect(() => {
        const unsubscribeTasks = db.collection('Tasks').onSnapshot(snapshot => {
            if(snapshot.size){
                const tmpTasks = [];
                snapshot.forEach(doc => tmpTasks.push({id: doc.id, ...doc.data()}));
                setTasks(tmpTasks);
            }
        })
        const unsubscribeEmploye = db.collection('Employers').onSnapshot(snapshot => {
            if(snapshot.size){
                const tmpEmploye = [];
                snapshot.forEach(doc => tmpEmploye.push({id: doc.id, ...doc.data()}));
                setEmployer(tmpEmploye);
            }
        })
        
        return () =>{
            unsubscribeTasks();
            unsubscribeEmploye();
        }
        }, []);
    
    const { handleSubmit, register} = useForm();
    
    const sendTask = async (values,e) => {
    await db.collection('Tasks').add(values);
    e.target.reset();
    }
    const deleteTask = async (id) =>{
        await db.collection('Tasks').doc(id).delete();
    }
    const handleChange = (e) =>{
    setEditContent(e.target.value);
    
    }
    const editTask = async (event, id) => {
    event.preventDefault();
        await db.collection('Tasks').doc(id).update({
            content: editContent
        });
    }
    return(
        <>
        <Navigation />
        <Wrapper>
            <Header> Task Management</Header>
            {tasks.length === 0 && <P>We don't have any tasks</P>}
            {tasks.map(task => {
                return(
                    <Task key={task.id}>
                        <TaskContent>{task.content}</TaskContent>
                        <TaskPerson>{task.person}</TaskPerson>
                        <DeleteTask onClick={() => deleteTask(task.id)}>Delete</DeleteTask>
                    <Popup trigger={<DeleteTask>Edit</DeleteTask>} position="center" closeOnSubmit>
                        <Form>
                            <input type="text" name="content" onChange={handleChange} defaultValue={task.content}/>
                            <button type="submit" onClick={(event) => editTask(event, task.id)}>Edit</button>
                        </Form>
                    </Popup> 
                    </Task>

                )
            })}
            <Popup trigger={<AddTask>Add task</AddTask>} position="center">
                    <Form onSubmit={handleSubmit(sendTask)}>
                    <input type="text" ref={register({ required: true })} name="content" />
                    <select ref={register({ required: true })} name="person" placeholder="Select employe">
                        {employers.map(employe =>{
                            return(
                                <option value={employe.fullname}>{employe.fullname}</option>
                            )
                        })}
                    </select>
                    {/* BE SMART :) */}
                    <button type="submit">Add</button>
                    </Form>
                    </Popup>
        </Wrapper>
        </>
    )

}
export default TasksManager