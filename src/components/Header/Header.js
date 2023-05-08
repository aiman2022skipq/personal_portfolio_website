import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Checkbox, Label, Ball } from './HeaderStyles';

const Header = () =>  (
  <Container>

    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color:"white", marginBottom:"20px"}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>          
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons>
        <Checkbox className="checkbox" type="checkbox" id="checkbox" />
        <Label htmlFor="checkbox" className="label">
          <FontAwesomeIcon icon={faSun} style={{color: "#f39c12",}} />
          <FontAwesomeIcon icon={faMoon} style={{color: "#f1c40f",}} />
          <Ball />
        </Label>
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
