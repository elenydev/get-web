import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Header,
  Event,
  EventContent,
  EventTitle,
  EventDate,
  Button,
  P,
  Form,
} from "./events.styles";
import Navigation from "../Navigation/Navigation";
import { db } from "../../services/firebase";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";

const Events = (): JSX.Element => {
  const [Events, setEvents] = useState<Events[]>();

  useEffect(() => {
    const unsubscribe = db.collection("Events").onSnapshot((snapshot) => {
      if (snapshot.size) {
        const tmp: Events[] = [];
        snapshot.forEach((doc) => tmp.push({ id: doc.id, ...doc.data() }));
        setEvents(tmp);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const { handleSubmit, register } = useForm();
  const deleteEvent = async (id) => {
    await db
      .collection("Events")
      .doc(id)
      .delete()
      .then(() => {
        console.log("success!, show alert now");
      })
      .catch((err) => {
        console.log("errorcode", err.code);
      });
  };
  const addEvent = async (values) => {
    await db
      .collection("Events")
      .add(values)
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
        <Header>Planned events </Header>
        {Events ? (
          Events.map((event) => {
            return (
              <Event key={event.id}>
                <EventContent>{event.Content}</EventContent>
                <EventTitle>{event.Title}</EventTitle>
                <EventDate>{event.Date}</EventDate>
                <Button onClick={() => deleteEvent(event.id)}>Delete</Button>
              </Event>
            );
          })
        ) : (
          <P>We don't have any planned events </P>
        )}
        <Popup
          trigger={<Button style={{ margin: "0% 40%" }}>Add Event</Button>}
        >
          <Form onSubmit={handleSubmit(addEvent)}>
            <input
              type='text'
              ref={register({ required: true })}
              name='Title'
              placeholder='Short Title'
            />
            <input
              type='text'
              ref={register({ required: true })}
              name='Content'
              placeholder='Info about event'
            />
            <input
              type='text'
              ref={register({ required: true })}
              name='Date'
              placeholder='dd-mm-yy'
            />

            <button type='submit'>Add</button>
          </Form>
        </Popup>
      </Wrapper>
    </>
  );
};
export default Events;
