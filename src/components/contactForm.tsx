"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.css";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateEmail(value: string) {
    return /\S+@\S+\.\S+/.test(value);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError("Please fill out all fields.");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: trimmedName,
          reply_to: trimmedEmail,
          message: trimmedMessage,
        },
        PUBLIC_KEY
      );

      setSuccess("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h2>Contact Me</h2>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}

      <button type="submit" disabled={isSubmitting} className={styles.submit}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
