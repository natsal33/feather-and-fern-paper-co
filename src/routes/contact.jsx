import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_be0p4oo",
        "template_mfbxpw6",
        form.current,
        "xHUVCzuEFO2xdh_O4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="ContactPage" className="p-2 mb-4">
      <h2>Want a Consultation?</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <div id="inputName">
          <h4>First Name </h4>
          <Form.Control name="first_name" required></Form.Control>
          <br />
          <h4>Last Name </h4>
          <Form.Control name="last_name" required></Form.Control>
          <br />
        </div>
        <h4>Email </h4>
        <Form.Control name="email" required></Form.Control>
        <h4>When is your event?</h4>
        <Form.Control name="event_date" required type="date"></Form.Control>
        <h4>How many guests are you expecting?</h4>
        <Form.Control name="guest_count" required></Form.Control>
        <h4>Which products are you interested in?</h4>
        <Form.Check
          name="std_invitations"
          label="Save the Dates/Invitation Suites"
        />
        <Form.Check
          name="day_of_paper"
          label="Day-Of Paper (signs/menus/seating chart"
        />
        <Form.Check
          name="gifting_other"
          label="Gifting (Favors, Welcome Kits, Thank You Cards, Etc.)"
        />
        <h4>How did you hear about Hanna Chee Calligraphy?</h4>
        <Form.Select name="marketing_source">
          <option value="Friend/Family">Friends/Family</option>
          <option value="Vendor">Other Event Vendor</option>
          <option value="SocialMedia">Instagram/Facebook</option>
        </Form.Select>
        <h4>Any other details you'd like to share?</h4>
        <Form.Control
          name="other_details"
          as="textarea"
          rows="5"
          cols="50"
        ></Form.Control>
        <br />
        <Button type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
