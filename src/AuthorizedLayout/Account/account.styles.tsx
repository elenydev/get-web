import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5% auto;
  padding-top: 25%;
  @media (min-width: 760px) {
    padding-top: 0%;
    width: 80%;
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
  height: 15%;
  font-size: 1em;
  box-shadow: 0 3px 11px #00000029;
  font-weight: 900;
  text-align: center;
  margin: 3%;
  padding: 10px 15px;
  @media (min-width: 760px) {
    width: 60%;
    font-size: 1em;
  }
`;

export const UpcomingEvents = styled.div`
  display: flex;
  width: 60%;
  min-height: 71%;
  align-items: center;
  align-self: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  /* box-shadow: 0 3px 11px #00000029; */
  padding: 15px 0;
  @media (max-width: 760px) {
    width: 90%;
    align-self: flex-end;
  }
`;

export const Announcements = styled.div`
  display: flex;
  width: 90%;
  min-height: 50%;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  flex-wrap: wrap;
  padding: 15px 0;
  margin-bottom: 10px;

  @media (min-width: 830px) {
    width: 30%;
  }
`;

export const Announcement = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  flex-wrap: wrap;
  box-shadow: 0 3px 11px #00000029;
  margin: 10px 0;
  @media (min-width: 760px) {
    width: 80%;
  }
`;

export const AnnouncementContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  margin: 5px;
  width: 100%;
`;

export const AnnouncementTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: 100%;
  font-weight: 900;
`;

export const P = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  margin: 5px 0;
`;

export const Event = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px 10px;
  flex-wrap: wrap;
  box-shadow: 0 3px 11px #00000029;
  margin: 10px 0;
  @media (min-width: 760px) {
    width: 80%;
    flex-direction: row;
  }
`;

export const EventContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  word-wrap: break-word;
  margin: 5px;
  width: 80%;
`;

export const EventTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: 80%;
  font-weight: 900;
`;

export const EventDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: 80%;
`;
