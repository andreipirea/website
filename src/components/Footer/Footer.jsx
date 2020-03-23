import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll"


const Footer = () => {
  return(
    <div className='footer-section'>
      <Container>
        <Row>
          <Col className='text-center' sm-3>
            
          </Col>
          <Col className='text-center' sm-6>
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
          </Col>
          <Col className='text-center' sm-3>
            
          </Col>
        </Row>
      <hr/>
      </Container>
      <Container>
        <Row>
          <Col className='text-left' sm-4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil iste dignissimos esse ad perferendis ex delectus consequuntur. Voluptate, vel dicta.</p>
          </Col>
          <Col className='text-center' sm-4>
          
          </Col>
          <Col className='text-center' sm-4>
            <FacebookIcon color='primary' style={{ fontSize: 40 }}/>{' '}
            <TwitterIcon color='primary' style={{ fontSize: 40 }}/>{' '}
            <LinkedInIcon color='primary' style={{ fontSize: 40 }}/>{' '}
            <GitHubIcon color='primary' style={{ fontSize: 40}}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer