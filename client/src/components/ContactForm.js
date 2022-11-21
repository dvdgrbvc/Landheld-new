import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Senden");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Wird gesendet...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Senden");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className="form-class" onSubmit={handleSubmit}>
      <div className="form-data">
        <div className="form-info">
          <label htmlFor="name" className="text-style">
            Name:
          </label>
          <input className="name" type="text" id="name" required />
        </div>

        <div className="form-info">
          <label htmlFor="email" className="text-style">
            Email:
          </label>
          <input className="email" type="text" id="email" required />
        </div>
      </div>
      <div className="message-box">
        <label htmlFor="message" className="text-style">
          Nachricht:
        </label>
        <textarea className="message" id="message" required />
      </div>
      <button className="submit" type="submit">
        {status}
      </button>
    </form>
  );
};

export default ContactForm;
