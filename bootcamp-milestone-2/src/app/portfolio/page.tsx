"use client";
import React from "react";
import styles from "./portfolio.module.css";
import PortfolioEntry from "@/components/portfolioEntry";

export default function PortfolioPage() {
  return (
    <main>
      <h1 className={styles["page-title"]}>Portfolio</h1>

      <PortfolioEntry
        title="Rucha's Personal Website"
        description="A personal website showcasing my work and projects."
        imageSrc="/headshot.jpg"
        alt="A headshot of Rucha Damle"
        link="/"
      />

      <PortfolioEntry
        title="Router Simulator"
        description="A network router simulator built with Python."
        imageSrc="/router-sim.jpg"
        alt="A screenshot of the Router Simulator"
        link="https://router-simulator-omega.vercel.app/"
        external
        reverse
      />
    </main>
  );
}
