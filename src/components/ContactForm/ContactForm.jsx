import React, { Component } from "react";
import * as emailjs from "emailjs-com";
// import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
class ContactForm extends Component {
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
      to_name: "andrei.pirea@mail.com",
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
    
  };
  render() {
    return (
      <>
        {/* <h1 className="p-heading1">Get in Touch</h1> */}
        <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId="formBasicName">
            {/* <Label className="text-muted">Name</Label> */}
            <Input
              type="text"
              name="name"
              value={this.state.name}
              className="text-primary"
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
            />
          </FormGroup>

          <FormGroup controlId="formBasicEmail">
            {/* <Label className="text-muted">Email address</Label> */}
            <Input
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Email"
            />
          </FormGroup>
          
          <FormGroup controlId="formBasicSubject">
            {/* <Label className="text-muted">Phone</Label> */}
            <Input
              type="text"
              name="subject"
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Phone"
            />
          </FormGroup>
          <FormGroup controlId="formBasicMessage">
            {/* <Label className="text-muted">Message</Label> */}
            <Input
              type="textarea"
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
              placeholder="Message"
            />
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default ContactForm;
