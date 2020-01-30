import React from 'react';
import './homepage.styles.scss'
import NavBar from '../components/navbar/navbar'
import Typical from 'react-typical'
import {
  Container,
  Row,
  Col
} from 'reactstrap'


const HomePage = () => {
  

  return (
    <div>
      <NavBar/>
      <div className='hero'>
        <div className='overlay'>
        <Container>
          <Row>
            <Col className='typical text-center text-white' sm="12">
              <p>
                Resposive Web Design
                <Typical
                  loop={Infinity}
                  steps={[
                    'fast and creative,',
                    2000,
                    'flexible and outstanding!',
                    2000
                  ]}
                />
              </p>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
  )
}

export default HomePage