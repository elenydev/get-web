import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Header,
  Employe,
  EmployeEmail,
  EmployeName,
  EmployeRole,
  AddTask,
  Form,
  P,
} from "./employers.styles";
import Navigation from "../Navigation/Navigation";
import Popup from "reactjs-popup";
import { db } from "../../services/firebase";
import { useForm } from "react-hook-form";
import { hire, dismiss, sendTask } from "./employersFunctions";

const Employers = (): JSX.Element => {
  const [employers, setEmployer] = useState<Employee[]>();
  const { handleSubmit, register, errors } = useForm();

  useEffect(() => {
    const unsubscribe = db.collection("Employers").onSnapshot((snapshot) => {
      if (snapshot.size) {
        const tmp: Employee[] = [];
        snapshot.forEach((doc) => tmp.push({ id: doc.id, ...doc.data() }));
        setEmployer(tmp);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Navigation />
      <Wrapper>
        <Header>Our team</Header>

        {employers ? (
          employers.map((employe) => {
            return (
              <Employe key={employe.id}>
                <EmployeName>{employe.fullname}</EmployeName>
                <EmployeRole>{employe.role}</EmployeRole>
                <EmployeEmail>{employe.email}</EmployeEmail>

                <Popup trigger={<AddTask>Add task</AddTask>}>
                  <Form onSubmit={handleSubmit(sendTask)}>
                    <input
                      type='text'
                      ref={register({ required: true })}
                      name='content'
                      placeholder={
                        errors.message
                          ? "This field is required"
                          : "What to do?"
                      }
                    />
                    <input
                      type='text'
                      ref={register({ required: true })}
                      name='person'
                      value={employe.fullname}
                      style={{ display: "none" }}
                    />
                    {/* BE SMART :) */}
                    <button type='submit'>Add</button>
                  </Form>
                </Popup>
                <AddTask onClick={() => dismiss(employe.id)}>Dismiss</AddTask>
              </Employe>
            );
          })
        ) : (
          <P>We don't have any emails</P>
        )}
        <Popup
          trigger={<AddTask style={{ margin: "0 40%" }}>Hire employe</AddTask>}
        >
          <Form onSubmit={handleSubmit(hire)}>
            <input
              type='text'
              ref={register({ required: true })}
              name='fullname'
              placeholder={
                errors.message ? "This field is required" : "Fullname"
              }
            />
            <input
              type='text'
              ref={register({ required: true })}
              name='role'
              placeholder={errors.message ? "This field is required" : "Role"}
            />
            <input
              type='text'
              ref={register({ required: true })}
              name='email'
              placeholder={errors.message ? "This field is required" : "Email"}
            />
            <button type='submit'>Hire</button>
          </Form>
        </Popup>
      </Wrapper>
    </>
  );
};
export default Employers;
