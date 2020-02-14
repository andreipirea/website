import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, Container, Row } from 'reactstrap';
import './DescriptionSection.scss'

const more = 'Find out more'
const less = 'View less'

const DescriptionSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (

    <div className="description-section" id='about'>
      <div className="overlay">
        <Container className="text-center">
          <h2>About Us</h2>
          <h4>"Lorem ipsum dolor sit amet"<br/>(Lorem ipsum)</h4>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis hic voluptas deserunt perspiciatis sit explicabo laudantium unde laborum illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis hic voluptas deserunt perspiciatis sit explicabo laudantium unde laborum illum.?</p>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis hic voluptas deserunt perspiciatis sit explicabo laudantium unde laborum illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis hic voluptas deserunt perspiciatis sit explicabo laudantium unde laborum illum.?
              </CardBody>
            </Card>
          </Collapse>
          <a onClick={toggle} style={{ marginBottom: '1rem' }}>{isOpen ? less : more}</a>
      </Container>
    </div>
  </div>
  );
};

export default DescriptionSection;