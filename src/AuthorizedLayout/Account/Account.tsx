import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Data,
  UpcomingEvents,
  P,
  Event,
  EventTitle,
  EventContent,
  EventDate,
  Announcement,
  Announcements,
  AnnouncementContent,
  AnnouncementTitle,
} from "./account.styles";
import { db } from "../../services/firebase";
import Navigation from "../Navigation/Navigation";

const Account = (): JSX.Element => {
  const [annoucements, setAnnoucements] = useState<Events[]>();
  const [events, setEvents] = useState<Events[]>();

  useEffect(() => {
    const unsubscribe1 = db.collection("Events").onSnapshot((snapshot) => {
      if (snapshot.size) {
        const tmp: Events[] = [];
        snapshot.forEach((doc) => tmp.push({ id: doc.id, ...doc.data() }));
        setEvents(tmp);
      }
    });
    const unsubscribe2 = db
      .collection("Annoucements")
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          const tmp: Events[] = [];
          snapshot.forEach((doc) => tmp.push({ id: doc.id, ...doc.data() }));
          setAnnoucements(tmp);
        }
      });
    return () => {
      return unsubscribe1(), unsubscribe2();
    };
  }, []);

  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, "0");
  let day = String(dateObj.getDate()).padStart(2, "0");
  let year = dateObj.getFullYear();
  let output = day + "/" + month + "/" + year;

  return (
    <>
      <Navigation />
      <Wrapper>
        <Data>Today is: {output}</Data>
        {events ? (
          <UpcomingEvents>
            <P>Upcoming Events</P>
            {events.length === 0 && <P>We don't plan eny events :(</P>}
            {events.length >= 1 && (
              <Event>
                <EventTitle>{events[events.length - 1].Title}</EventTitle>
                <EventContent>{events[events.length - 1].Content}</EventContent>
                <EventDate>{events[events.length - 1].Date}</EventDate>
              </Event>
            )}

            {events!.length >= 2 && (
              <Event>
                <EventTitle>{events[events.length - 2].Title}</EventTitle>
                <EventContent>{events[events.length - 2].Content}</EventContent>
                <EventDate>{events[events.length - 2].Date}</EventDate>
              </Event>
            )}
          </UpcomingEvents>
        ) : (
          <EventTitle>We don't have any incoming events</EventTitle>
        )}
        {annoucements ? (
          <Announcements>
            <P>Latest announcements</P>
            {annoucements.length === 0 && (
              <P>We don't have any annoucements :)</P>
            )}

            {annoucements.length >= 1 && (
              <Announcement>
                <AnnouncementTitle>
                  {annoucements[annoucements.length - 1].Title}
                </AnnouncementTitle>
                <AnnouncementContent>
                  {annoucements[annoucements.length - 1].Content}
                </AnnouncementContent>
              </Announcement>
            )}

            {annoucements.length >= 2 && (
              <Announcement>
                <AnnouncementTitle>
                  {annoucements[annoucements.length - 2].Title}
                </AnnouncementTitle>
                <AnnouncementContent>
                  {annoucements[annoucements.length - 2].Content}
                </AnnouncementContent>
              </Announcement>
            )}
          </Announcements>
        ) : (
          <AnnouncementTitle>We don't have any announcements</AnnouncementTitle>
        )}
      </Wrapper>
    </>
  );
};
export default Account;
