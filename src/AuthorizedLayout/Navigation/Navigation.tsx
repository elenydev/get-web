import React, { useState } from "react";
import {
  Li,
  Links,
  Wrapper,
  Burger,
  Logo,
  NavList,
  MenuFooter,
} from "./navigation.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ButtonOne from "../../Components/Buttons/ButtonOne";
import { auth } from "../../services/firebase";

const Navigation = (props): JSX.Element => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const VisibilityHandler = () => {
    setMenuVisibility(!menuVisibility);
  };
  return (
    <nav>
      <Wrapper>
        <Burger visible={menuVisibility} onClick={() => VisibilityHandler()}>
          <span> </span>
          <span> </span>
          <span> </span>
        </Burger>
        <Logo onClick={() => setMenuVisibility(false)}>
          <Links to='/account'>Panel</Links>
        </Logo>

        <NavList visible={menuVisibility}>
          <Li>
            <Links to='/account/tasks' onClick={() => setMenuVisibility(false)}>
              Tasks
            </Links>
          </Li>
          <Li>
            <Links
              to='/account/employers'
              onClick={() => setMenuVisibility(false)}
            >
              Employers
            </Links>
          </Li>
          <Li>
            <Links
              to='/account/events'
              onClick={() => setMenuVisibility(false)}
            >
              Events
            </Links>
          </Li>
          <Li>
            <Links
              to='/account/announcements'
              onClick={() => setMenuVisibility(false)}
            >
              Announcements
            </Links>
          </Li>
          <Li>
            <Links to='/account/job' onClick={() => setMenuVisibility(false)}>
              Job offers
            </Links>
          </Li>
          <Li>
            <Links
              to='/account/emails'
              onClick={() => setMenuVisibility(false)}
            >
              Emails
            </Links>
          </Li>
          <Li className='noBefore' onClick={() => auth().signOut()}>
            <ButtonOne value={"Log out"}></ButtonOne>
          </Li>
          <MenuFooter>
            <p>Design & Development</p>
            <div>Damian Czarnota</div>
            <p>
              <a
                href='https://www.linkedin.com/in/damian-czarnota-0913b71b0/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </p>
          </MenuFooter>
        </NavList>
      </Wrapper>
    </nav>
  );
};
export default Navigation;
