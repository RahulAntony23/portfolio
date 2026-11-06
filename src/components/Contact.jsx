import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/resume.js";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  // useRef: a handle to a real DOM element. EmailJS reads the <form> fields from it.
  const formRef = useRef(null);

  // status is a tiny state machine: "idle" -> "sending" -> "success" | "error"
  const [status, setStatus] = useState("idle");

  // CONTROLLED INPUTS: React state is the single source of truth for what is typed.
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });

  // One handler for every field: the input's `name` attribute picks the key.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value })); // copy old state, change one key
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop the browser's default full-page form submit
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section__eyebrow">Get in touch</p>
        <h2 className="section__title">Contact</h2>

        <div className="contact__grid">
          <div className="contact__cards">
            <a className="card contact__card" href={`mailto:${profile.email}`}>
              <span className="contact__icon"><FiMail /></span>
              <div>
                <h4>Email</h4>
                <p>{profile.email}</p>
              </div>
            </a>
            <a className="card contact__card" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact__icon"><FiLinkedin /></span>
              <div>
                <h4>LinkedIn</h4>
                <p>Rahul Antony J</p>
              </div>
            </a>
            <a className="card contact__card" href={profile.whatsapp} target="_blank" rel="noreferrer">
              <span className="contact__icon"><FaWhatsapp /></span>
              <div>
                <h4>WhatsApp</h4>
                <p>Text me</p>
              </div>
            </a>
          </div>

          <form className="card form" ref={formRef} onSubmit={handleSubmit}>
            <h3>Send me a message</h3>
            {/* name="" values must match the variables in your EmailJS template */}
            <input name="name" placeholder="Your name" value={values.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your email" value={values.email} onChange={handleChange} required />
            <input name="subject" placeholder="Subject" value={values.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={values.message} onChange={handleChange} required />

            <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {/* role="status" makes screen readers announce the result */}
            <p role="status" className={`form__status ${status === "success" ? "ok" : status === "error" ? "err" : ""}`}>
              {status === "success" && "Thanks! Your message was sent."}
              {status === "error" && "Something went wrong. Please email me directly."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
