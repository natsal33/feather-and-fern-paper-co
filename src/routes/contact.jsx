import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "./contact.css";

function Contact() {
  return (
    <div className="p-2 mb-4">
      <h2>Want a Consultation?</h2>
      <Form>
        <div id="inputName">
          <h4>First Name </h4>
          <Form.Control required></Form.Control>
          <h4>Last Name </h4>
          <Form.Control required></Form.Control>
        </div>

        <h4>When is your event?</h4>
        <Form.Control required type="date"></Form.Control>
        <h4>How many guests are you expecting?</h4>
        <Form.Control required></Form.Control>
        <h4>Which products are you interested in?</h4>
        <Form.Check label="Save the Dates/Invitation Suites" />
        <Form.Check label="Day-Of Paper (signs/menus/seating chart" />
        <Form.Check label="Gifting (Favors, Welcome Kits, Thank You Cards, Etc.)" />
        <h4>How did you hear about Hanna Chee Calligraphy?</h4>
        <Form.Select>
          <option value="Friend/Family">Friends/Family</option>
          <option value="Vendor">Other Event Vendor</option>
          <option value="SocialMedia">Instagram/Facebook</option>
        </Form.Select>
        <h4>Any other details you'd like to share?</h4>
        <Form.Control></Form.Control>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Contact;
