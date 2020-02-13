import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => {
  return(
    <div className='footer-section'>
      <Container>
        <Row>
          <Col className='text-center' sm-3>
            
          </Col>
          <Col className='text-center' sm-6>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
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