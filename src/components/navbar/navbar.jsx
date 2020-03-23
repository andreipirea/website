import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <Navbar
      expand="md"
      className={scrolled ? "fixed-top navbar-white" : "fixed-top"}
    >
      <Link to="/">
        <NavbarBrand>andrei pirea</NavbarBrand>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <LinkScroll
              activeClass="active"
              to="hero-image"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              Home
            </LinkScroll>
          </NavItem>
          <NavItem>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              About
            </LinkScroll>
          </NavItem>
          <NavItem>
            <LinkScroll
              activeClass="active"
              to="presentation"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              Presentation
            </LinkScroll>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Projects
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/taskmanager">Task Manager</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/weather">Weather</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              Contact
            </LinkScroll>
          </NavItem>
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
