import React, { useState, useEffect } from "react";
import Event2 from "../../assets/logos/Event2.jpg";
import Event3 from "../../assets/logos/Event3.jpg";

import { db } from "../../services/firebase";
import {
  Wrapper,
  Container,
  Header,
  Paragraph,
  Card,
  CardImage,
  CardContent,
  CardContentHeader,
  CardContentText,
  CardParagraph,
  Links,
  Offer,
  OfferContent,
  OfferHeader,
} from "./upcomingevents.styles";

const UpcomingEvents = (): JSX.Element => {
  const [events, setEvents] = useState<Events[]>();
  const [offers, setOffers] = useState<JobOffer[]>();

  useEffect(() => {
    const unsubscribe1 = db.collection("Events").onSnapshot((snapshot) => {
      if (snapshot.size) {
        const tmp: Events[] = [];
        snapshot.forEach((doc) => tmp.push({ id: doc.id, ...doc.data() }));
        setEvents(tmp);
      }
    });
    const unsubscribe2 = db.collection("JobOffers").onSnapshot((snapshot) => {
      if (snapshot.size) {
        const tmp: JobOffer[] = [];
        snapshot.forEach((doc) => tmp.push({ id: doc.id, ...doc.data() }));
        setOffers(tmp);
      }
    });
    return () => {
      return unsubscribe1(), unsubscribe2();
    };
  }, []);

  return (
    <>
      <Wrapper id='events'>
        <Container>
          {events
            ? events.length === 0 && (
                <Header>
                  We <Paragraph>don't plan</Paragraph>any events for now :)
                </Header>
              )
            : null}

          <Header>
            Our <Paragraph>Upcoming</Paragraph>events
          </Header>

          {events
            ? events.length >= 1 && (
                <Card>
                  <CardImage />
                  <CardContent>
                    <CardContentHeader>
                      {events[events.length - 1].Title}
                    </CardContentHeader>
                    <CardContentText>
                      {events[events.length - 1].Content}
                    </CardContentText>
                    <CardParagraph>
                      {events[events.length - 1].Date}
                    </CardParagraph>
                    <Links
                      to='/#contact'
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "smooth", block: "end" })
                      }
                    >
                      Sign up
                    </Links>
                  </CardContent>
                </Card>
              )
            : null}

          {events
            ? events.length >= 2 && (
                <Card>
                  <CardImage style={{ backgroundImage: `url(${Event2})` }} />
                  <CardContent>
                    <CardContentHeader>
                      {events[events.length - 2].Title}
                    </CardContentHeader>
                    <CardContentText>
                      {events[events.length - 2].Content}
                    </CardContentText>
                    <CardParagraph>
                      {events[events.length - 2].Date}
                    </CardParagraph>
                    <Links
                      to='/#contact'
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "smooth", block: "end" })
                      }
                    >
                      Sign up
                    </Links>
                  </CardContent>
                </Card>
              )
            : null}

          {events
            ? events.length >= 3 && (
                <Card>
                  <CardImage style={{ backgroundImage: `url(${Event3})` }} />
                  <CardContent>
                    <CardContentHeader>
                      {events[events.length - 3].Title}
                    </CardContentHeader>
                    <CardContentText>
                      {events[events.length - 3].Content}
                    </CardContentText>
                    <CardParagraph>
                      {events[events.length - 3].Date}
                    </CardParagraph>
                    <Links
                      to='/#contact'
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "smooth", block: "end" })
                      }
                    >
                      Sign up
                    </Links>
                  </CardContent>
                </Card>
              )
            : null}

          {offers ? (
            offers.length === 0 ? (
              <Header id='career'>
                We don't have any work offers for now :(
              </Header>
            ) : (
              <Header id='career'>Our work offers</Header>
            )
          ) : null}

          {offers
            ? offers.length >= 1 &&
              offers.map((offer) => {
                return (
                  <Offer key={offer.id}>
                    <OfferHeader>{offer.Title}</OfferHeader>
                    <OfferContent>{offer.Location}</OfferContent>
                    <Links
                      to='/#contact'
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "smooth", block: "end" })
                      }
                    >
                      Apply
                    </Links>
                  </Offer>
                );
              })
            : null}
        </Container>
      </Wrapper>
    </>
  );
};
export default UpcomingEvents;
