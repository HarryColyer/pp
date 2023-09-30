import React, { useState } from "react";
import { Telephone } from "react-bootstrap-icons";
import axios from "axios";

function Contact() {
  const [state, setState] = useState({
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isCompanyValid, setCompanyValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isSubjectValid, setSubjectValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);
  const [isFormSent, setFormSent] = useState(false)

  const { company, email, subject, message } = state;

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateCompanyInput();
    validateEmailInput();
    validateSubjectInput();
    validateMessageInput();
    for (let item in state) {
      if (state[item].length === 0) {
        return;
      }
    }
    axios
      .post("/api/contact", state)
      .then((response) => {
        setFormSent(response.data.success) // You can handle the response as needed
        // Optionally, show a success message to the user or clear the form fields
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally, show an error message to the user
      });
  };

  const validateCompanyInput = () =>
    company.length > 0 ? setCompanyValid(true) : setCompanyValid(false);

  const validateEmailInput = () =>
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? setEmailValid(true)
      : setEmailValid(false);

  const validateSubjectInput = () =>
    subject.length > 0 ? setSubjectValid(true) : setSubjectValid(false);

  const validateMessageInput = () => {
    message.length > 0 ? setMessageValid(true) : setMessageValid(false);
  };

  return (
    <div className="contact-page my-5">
      {!isFormSent ? <form className="contact-form shadow" onSubmit={handleSubmit}>
        <h3 className="pp-color mb-3">Contact Us</h3>
        <label htmlFor="company">
          {isCompanyValid ? (
            "Company Name"
          ) : (
            <span className="pp-color">Please enter your Company/Name</span>
          )}
        </label>
        <input
          autoComplete="off"
          className={isCompanyValid ? "" : "wrong"}
          name="company"
          type="text"
          value={company}
          onChange={handleChange}
        />
        <label htmlFor="email">
          {isEmailValid ? (
            "Email"
          ) : (
            <span className="pp-color">Please enter a valid email address</span>
          )}
        </label>
        <input
          autoComplete="off"
          className={isEmailValid ? "" : "wrong"}
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="subjecct">
          {isSubjectValid ? (
            "Subject"
          ) : (
            <span className="pp-color">Please enter a subject</span>
          )}
        </label>
        <input
          autoComplete="off"
          className={isSubjectValid ? "" : "wrong"}
          name="subject"
          type="text"
          value={subject}
          onChange={handleChange}
        />
        <label htmlFor="message">
          {isMessageValid ? (
            "Message"
          ) : (
            <span className="pp-color">Please enter a message</span>
          )}
        </label>
        <textarea
          autoComplete="off"
          className={isMessageValid ? "" : "wrong"}
          onChange={handleChange}
          name="message"
          id=""
          cols="30"
          rows="5"
          value={message}
        ></textarea>
        <button type="submit" className="form-btn">
          Send
        </button>
      </form> : <h3 className="success">Message has been sent</h3>}
      <section className="call-panel shadow">
        <h4>Prefer to speak to us directly?</h4>
        <a href="tel:07950887657" className="call-btn">
          <Telephone /> Call Us
        </a>
      </section>
    </div>
  );
}

export default Contact;
