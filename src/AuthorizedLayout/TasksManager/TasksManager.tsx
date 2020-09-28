import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import {
  Wrapper,
  Header,
  TaskContent,
  TaskPerson,
  DeleteTask,
  Task,
  Form,
  AddTask,
  P,
} from "./taskManager.styles";
import { db } from "../../services/firebase";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { deleteTask, sendTask } from "./taskManagerFunctions";

const PopUp: any = Popup;

const TasksManager = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>();
  const [employers, setEmployer] = useState<Employee[]>();
  const [editContent, setEditContent] = useState();
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    const unsubscribeTasks = db.collection("Tasks").onSnapshot((snapshot) => {
      if (snapshot.size) {
        const tmpTasks: Task[] = [];
        snapshot.forEach((doc) => tmpTasks.push({ id: doc.id, ...doc.data() }));
        setTasks(tmpTasks);
      }
    });
    const unsubscribeEmploye = db
      .collection("Employers")
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          const tmpEmploye: Employee[] = [];
          snapshot.forEach((doc) =>
            tmpEmploye.push({ id: doc.id, ...doc.data() })
          );
          setEmployer(tmpEmploye);
        }
      });

    return () => {
      unsubscribeTasks();
      unsubscribeEmploye();
    };
  }, []);

  const handleChange = (e) => {
    setEditContent(e.target.value);
  };
  const editTask = async (event, id) => {
    event.preventDefault();
    await db
      .collection("Tasks")
      .doc(id)
      .update({
        content: editContent,
      })
      .then(() => {
        console.log("success!, show alert now");
      })
      .catch((err) => {
        console.log("errorcode", err.code);
      });
  };

  return (
    <>
      <Navigation />
      <Wrapper>
        <Header> Task Management</Header>

        {tasks ? (
          tasks.map((task) => {
            return (
              <Task key={task.id}>
                <TaskContent>{task.content}</TaskContent>
                <TaskPerson>{task.person}</TaskPerson>
                <DeleteTask onClick={() => deleteTask(task.id)}>
                  Delete
                </DeleteTask>
                <PopUp trigger={<DeleteTask>Edit</DeleteTask>} closeOnSubmit>
                  <Form>
                    <input
                      type='text'
                      name='content'
                      onChange={handleChange}
                      defaultValue={task.content}
                    />
                    <button
                      type='submit'
                      onClick={(event) => editTask(event, task.id)}
                    >
                      Edit
                    </button>
                  </Form>
                </PopUp>
              </Task>
            );
          })
        ) : (
          <P>We don't have any tasks</P>
        )}
        <Popup trigger={<AddTask>Add task</AddTask>}>
          <Form onSubmit={handleSubmit(sendTask)}>
            <input
              type='text'
              ref={register({ required: true })}
              name='content'
            />
            <select
              ref={register({ required: true })}
              name='person'
              placeholder='Select employe'
            >
              {employers
                ? employers.map((employe) => {
                    return (
                      <option key={employe.id} value={employe.fullname}>
                        {employe.fullname}
                      </option>
                    );
                  })
                : null}
            </select>
            {/* BE SMART :) */}
            <button type='submit'>Add</button>
          </Form>
        </Popup>
      </Wrapper>
    </>
  );
};
export default TasksManager;
