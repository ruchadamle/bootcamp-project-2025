"use client";
import React from "react";
import Link from "next/link";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  return (
    <main>
      <h1 className={styles["page-title"]}>Portfolio</h1>

      <div className={styles.project}>
        <Link href="/">
          <img
            src="/headshot.jpg"
            alt="A headshot of Rucha Damle"
            className={styles["project-img"]}
          />
        </Link>

        <div className={styles["project-details"]}>
          <p className={styles["project-name"]}>Rucha&apos;s Personal Website</p>
          <p className={styles["project-description"]}>
            A personal website showcasing my work and projects.
          </p>

          <Link href="/" className={styles.button}>
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.project}>
        <Link href="/">
          <img
            src="/router-sim.jpg"
            alt="A screenshot of the Router Simulator"
            className={styles["project-img"]}
          />
        </Link>

        <div className={styles["project-details"]}>
          <p className={styles["project-name"]}>Router Simulator</p>
          <p className={styles["project-description"]}>
            A network router simulator built with Python.
          </p>

          <a
            href="https://router-simulator-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
