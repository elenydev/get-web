import React, { useState } from "react";
import {
  Wrapper,
  Logo,
  Links,
  Burger,
  NavList,
  Li,
  MenuFooter,
} from "./mainnav.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const MainNav = (props): JSX.Element => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const VisibilityHandler = () => {
    setMenuVisibility(!menuVisibility);
    console.log(menuVisibility);
  };

  return (
    <nav>
      <Wrapper>
        <Logo onClick={() => setMenuVisibility(false)}>
          <Links to='/'>
            get<span style={{ fontWeight: 900 }}>Web</span>{" "}
          </Links>
        </Logo>
        <Burger visible={menuVisibility} onClick={() => VisibilityHandler()}>
          <span> </span>
          <span> </span>
          <span> </span>
        </Burger>

        <NavList visible={menuVisibility}>
          <Li>
            <Links
              to='/#home'
              onClick={() => setMenuVisibility(false)}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              Home
            </Links>
          </Li>
          <Li>
            <Links
              to='/#offer'
              onClick={() => setMenuVisibility(false)}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              Offer
            </Links>
          </Li>
          <Li>
            <Links
              to='/login'
              onClick={() => setMenuVisibility(false)}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              Company
            </Links>
          </Li>
          <Li>
            <Links
              to='/#career'
              onClick={() => setMenuVisibility(false)}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Career
            </Links>
          </Li>
          <Li>
            <Links
              to='/#events'
              onClick={() => setMenuVisibility(false)}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Events
            </Links>
          </Li>
          <Li className='noBefore'>
            <Links
              to='/#contact'
              className='white'
              onClick={() => setMenuVisibility(false)}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              Contact us
            </Links>
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
export default MainNav;
