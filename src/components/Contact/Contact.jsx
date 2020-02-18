import React, { Component } from "react";
import * as emailjs from "emailjs-com";
// import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Container
} from "reactstrap";
// import './ContactForm.scss'
import "./Contact.scss";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
// import ContactForm from '../ContactForm/ContactForm'



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
    "& .MuiFormControl-root":{
      width:'100%'
    },
  },
}));




class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      name:name,
      from_name: email,
      to_name: "andrei.pirea@outlook.com",
      subject: subject,
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_Rj2jO9Gf",
      templateParams,
      "user_0bOWGwAZIiDBNkBtb3E3o"
    );
    this.resetForm();
    alert('Email sent successfully!')
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
    
  }

  render() {
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
        <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId="formBasicName">
            {/* <Label className="text-muted">Name</Label> */}
            <TextField
              required
              type="text"
              name="name"
              value={this.state.name}
              className="text-primary"
              onChange={this.handleChange.bind(this, "name")}
              id="outlined-basic" label="Name" variant="outlined"
            />
          </FormGroup>
          <Row>
          <Col  xs="6">
          <FormGroup controlId="formBasicEmail">
            {/* <Label className="text-muted">Email address</Label> */}
            <TextField
            required
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, "email")}
              id="outlined-basic" label="Email" variant="outlined"
            />
          </FormGroup>
          </Col>
          <Col  xs="6">
          <FormGroup controlId="formBasicSubject">
            {/* <Label className="text-muted">Phone</Label> */}
            <TextField
            required
              type="text"
              name="subject"
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              id="outlined-basic" label="Phone" variant="outlined"
            />
          </FormGroup>
          </Col>
          </Row>
          <FormGroup controlId="formBasicMessage">
            {/* <Label className="text-muted">Message</Label> */}
            <TextField
              required
              multiline
              rows="4"
              type="textarea"
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
              id="outlined-basic" label="Message" variant="outlined"
            />
          </FormGroup>
          <Button variant="primary" type="submit" color="success">
            SEND
          </Button>
        </Form>
      </Container>
    </div>
  );
  }
};

export default Contact;
