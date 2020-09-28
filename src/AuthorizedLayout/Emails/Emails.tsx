import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Header,
  Email,
  P,
  EmailContent,
  Button,
} from "./emails.styles";
import Navigation from "../Navigation/Navigation";
import { db } from "../../services/firebase";

const Emails = (): JSX.Element => {
  const [emails, setEmails] = useState<Email[]>();

  useEffect(() => {
    const unsubscribe = db.collection("Emails").onSnapshot((snapshot) => {
      if (snapshot.size) {
        const tmp: Email[] = [];
        snapshot.forEach((doc) => tmp.push({ id: doc.id, ...doc.data() }));
        setEmails(tmp);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const DeleteMail = async (id) => {
    db.collection("Emails")
      .doc(id)
      .delete()
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
        <Header>Company emails:</Header>

        {emails ? (
          emails.map((email) => {
            return (
              <Email key={email.id}>
                <P style={{ justifyContent: "flex-start" }}>
                  From: {email.companymail}
                </P>

                <P style={{ justifyContent: "flex-start" }}>Message:</P>

                <EmailContent>{email.message}</EmailContent>

                <P style={{ justifyContent: "flex-end" }}>
                  Person: {email.fullname}
                </P>

                <Button onClick={() => DeleteMail(email.id)}>Delete</Button>
              </Email>
            );
          })
        ) : (
          <P>We don't have any emails</P>
        )}
      </Wrapper>
    </>
  );
};
export default Emails;
