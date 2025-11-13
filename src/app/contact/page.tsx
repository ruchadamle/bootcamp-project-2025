"use client";
import React from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main>
      <h1 className={styles["page-title"]}>Contact Information</h1>
      <form className={styles.contactForm} id="contact-form">
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
        </p>

        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" required />
        </p>

        <p>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="user_message"
            rows={2}
            required
          ></textarea>
        </p>

        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </main>
  );
}
