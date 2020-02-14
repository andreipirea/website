import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import './Contact.scss'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';





// ###############################################################################################

// "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "andrei.pirea@mail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

// ###############################################################################################





const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin:'0 20px 40px 20px',
      width: 400
    }
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const iframe = {
  width:"61vh",
  height:"53vh",
  frameborder:"0",
  border:'0',
  allowfullscreen:""
}

const Contact = () => {
  const classes = useStyles();
  return (
    <div className="contact-section" id='contact'>
      <Container className='contact-container'>
        <h2>Contact</h2>
        <Row>
          <Col className='text-center incons-col' sm-12>
            <div className='icons'><p><PhoneAndroidIcon style={{ fontSize: 40 }}/>  0736.375.888</p></div>
            <div className='icons'><p><MailOutlineOutlinedIcon style={{ fontSize: 40 }}/>  andrei.pirea@mail.com</p></div>
          </Col>
        </Row>
        <Row>
          <Col className='text-center' sm-6>
            <div >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11398.493351413079!2d26.027051142547343!3d44.42037439126668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200317b43282d%3A0xce9f1dd80cb2fa9!2sDrumul%20Taberei%2C%20Bucharest!5e0!3m2!1sen!2sro!4v1581591711641!5m2!1sen!2sro" style={iframe}></iframe>
            </div>
          </Col>
          <Col className='text-center' sm-6>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                placeholder="Write your content here"
                multiline
                rows="4"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                // endIcon={<Icon>send</Icon>}
              >
                Send
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact
