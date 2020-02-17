import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import "./Contact.scss";
// import Button from '@material-ui/core/Button';
// import Icon from "@material-ui/core/Icon";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
// import { TextareaAutosize } from "@material-ui/core";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import ContactForm from '../ContactForm/ContactForm'

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: "0 20px 40px 20px",
      width: 400
    }
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const iframe = {
  width: "61vh",
  height: "53vh",
  frameborder: "0",
  border: "0",
  allowfullscreen: ""
};


// =======================================================================

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andrei.pirea@mail.com',
    pass: '+Panaghia33'
  }
});

var mailOptions = {
  from: 'andrei.pirea@mail.com',
  to: 'andrei.pirea@mail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// =======================================================================

const Contact = () => {
  const classes = useStyles();
  return (
    <div className="contact-section" id="contact">
      <Container className="contact-container">
        <h2>Contact</h2>
        <Row>
          <Col className="text-center incons-col" sm-12>
            <div className="icons">
              <p>
                <PhoneAndroidIcon style={{ fontSize: 40 }} /> 0736.375.888
              </p>
            </div>
            <div className="icons">
              <p>
                <MailOutlineOutlinedIcon style={{ fontSize: 40 }} />{" "}
                andrei.pirea@mail.com
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {/* <Col className="text-center" sm-6>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11398.493351413079!2d26.027051142547343!3d44.42037439126668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200317b43282d%3A0xce9f1dd80cb2fa9!2sDrumul%20Taberei%2C%20Bucharest!5e0!3m2!1sen!2sro!4v1581591711641!5m2!1sen!2sro"
                style={iframe}
              ></iframe>
            </div>
          </Col> */}
          <Col className="text-center" sm-12>

          <ContactForm/>
            {/* <Form name="contact" method="post">
              <FormGroup>
                <Label for="name">Email</Label>
                <Input type="text" name="name" id="name" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Password</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Pnone"
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Password</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form> */}

            {/* <form className={classes.root} noValidate autoComplete="off" name='contact' method='POST' data-netlify='true'>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  type='text'
                  name='name'
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type='email'
                  name='email'
                />
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  type='text'
                  name='phone'
                />
                <TextareaAutosize
                  id="outlined-multiline-static"
                  label="Message"
                  placeholder="Write your content here"
                  multiline
                  rows="4"
                  variant="outlined"
                  name='message'
                />
                <Button
                  type='submit'
                  variant="contained"
                  color="primary"
                  className={classes.button}
                // endIcon={<Icon>send</Icon>}
                >
                  Send
                </Button>
              </form> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
