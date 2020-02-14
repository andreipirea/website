import React from 'react'
import Typical from 'react-typical'
import './HeroImage.scss'

import {
  Container,
  Row,
  Col
} from 'reactstrap'


const HeroImage = () => {

  return(
    <div>
      <div className='hero'id='hero-image'>
        <div className='overlay'>
        <Container>
          <Row>
            <Col className='typical text-center text-white' sm="12">
              <p>
                React Web Application
                {<Typical
                  loop={Infinity}
                  steps={[
                    'fast and creative,',
                    2000,
                    'flexible and outstanding!',
                    2000
                  ]}
                />}
              </p>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
  )
}

export default HeroImage