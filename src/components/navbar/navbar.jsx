import React, { useState, useEffect } from 'react';
import './Navbar.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {Link} from 'react-router-dom'





const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if(isTop !== true){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    })
  }, [])
  

  return(
    <Navbar  expand="md" className={scrolled ? 'fixed-top navbar-white' : 'fixed-top'} >
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