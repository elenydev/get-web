import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Header,
  Announcement,
  AnnouncementContent,
  AnnouncementTitle,
  Button,
  P,
  Form,
} from "./announcements.styles";
import Navigation from "../Navigation/Navigation";
import { db } from "../../services/firebase";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";

const Announcements = (): JSX.Element => {
  const [announcements, setAnnouncements] = useState<Announcement[]>();
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    const unsubscribe = db.collection("Annoucements").onSnapshot((snapshot) => {
      if (snapshot.size) {
        const tmp: Announcement[] = [];
        snapshot.forEach((doc) => tmp.push({ id: doc.id, ...doc.data() }));
        setAnnouncements(tmp);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const deleteAnnouncement = async (id) => {
    await db
      .collection("Annoucements")
      .doc(id)
      .delete()
      .then(() => {
        console.log("success!, show alert now");
      })
      .catch((err) => {
        console.log("errorcode", err.code);
      });
  };

  const addAnnouncement = async (values) => {
    await db
      .collection("Annoucements")
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
        <Header>Announcements</Header>
        {announcements ? (
          announcements.map((announcement) => {
            return (
              <Announcement key={announcement.id}>
                <AnnouncementContent>
                  {announcement.Content}
                </AnnouncementContent>
                <AnnouncementTitle>{announcement.Title}</AnnouncementTitle>
                <Button onClick={() => deleteAnnouncement(announcement.id)}>
                  Delete
                </Button>
              </Announcement>
            );
          })
        ) : (
          <P>We don't have any annoucements</P>
        )}
        <Popup
          trigger={
            <Button style={{ margin: "0% 40%" }}>Add Announcement</Button>
          }
        >
          <Form onSubmit={handleSubmit(addAnnouncement)}>
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
              placeholder='Announcement'
            />

            <button type='submit'>Add</button>
          </Form>
        </Popup>
      </Wrapper>
    </>
  );
};
export default Announcements;
