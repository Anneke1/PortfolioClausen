import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_4g9ja08",
        "template_2asi8b5",
        form.current,
        "NG3tdSpe87jZyIQvq",
      )
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);

        e.target.reset();
        setIsSending(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Da ging was schief. Fehler: " + err.text);
        setIsSending(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header-centered">
        <h2 className="experience-title">Get In Touch</h2>
        <p className="about-subtitle">Do you have any questions left?</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Feel free to reach out through any of the following channels, or use
            the contact form.
          </p>

          <div className="info-item">
            <div className="info-icon">
              <HiMail />
            </div>
            <div>
              <span>Email</span>
              <p>clausenanneke@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <HiLocationMarker />
            </div>
            <div>
              <span>Location</span>
              <p>Wien, Österreich</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Please type your message..."
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSending}
              style={{ opacity: isSending ? 0.7 : 1 }}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
