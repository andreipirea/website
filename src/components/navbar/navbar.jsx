import React, { useState } from 'react';
import './Navbar.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <Navbar  expand="md" className='fixed-top'>
      <Link to='/'>
        <NavbarBrand >andrei pirea</NavbarBrand>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
              <Link to='/taskmanager'>Task Manager</Link>
          </NavItem>
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
      </Collapse>
    </Navbar>
  )
}

export default NavBar