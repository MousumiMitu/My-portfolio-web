import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o2waoil",
        "template_lbx7fhm",
        e.target,
        "user_rHoDHOT3NoYOdfXOTRxcU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className="contact-section  my-5">
      <div className="main-container my-5">
        <h2 className="py-3 text-light text-center">Contact me </h2>
        <form className="contact-form " onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <div>
            <input
              type="text"
              name="user_name"
              className="input-area"
              placeholder="name"
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="input-area"
            />
          </div>
          <div>
            <textarea
              name="message"
              className="input-area"
              placeholder="text..."
            />
          </div>
          <div>
            <input type="submit" value="Send" className="input-btn mt-3" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
