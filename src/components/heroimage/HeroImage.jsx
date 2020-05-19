import React from 'react'
import Typical from 'react-typical'
import './HeroImage.scss'
import { Link } from "react-router-dom";
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

import {
  Container,
  Row,
  Col
} from 'reactstrap'


const HeroImage = () => {

  return (
    <div>
      <div className='hero' id='hero-image'>
        <div className='overlay'>
          <Container>
            <Row>
              <Col className='typical text-center text-white' sm="12">
                <p>
                  React Web Application
                  </p>
                {<Typical
                    loop={Infinity}
                    steps={[
                      'fast and creative,',
                      2000,
                      'flexible and outstanding!',
                      2000
                    ]}
                  />}
                
                <UncontrolledDropdown >
                  <DropdownToggle >
                    Projects
                </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem>
                      <Link to="/taskmanager">Task Manager</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/weather">Weather</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default HeroImage