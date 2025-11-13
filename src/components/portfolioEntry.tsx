"use client";
import React from "react";
import Link from "next/link";
import styles from "./portfolioEntry.module.css";

interface PortfolioEntryProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  link: string;
  external?: boolean;
  reverse?: boolean; 
}

export default function PortfolioEntry({
  title,
  description,
  imageSrc,
  alt,
  link,
  external = false,
  reverse = false,
}: PortfolioEntryProps) {
  // Layout direction
  const containerClassName = [
    styles.project,
    reverse ? styles.reverse : "",
  ].join(" ");

  // Image block 
  const ImageBlock = external ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt={alt} className={styles["project-img"]} />
    </a>
  ) : (
    <Link href={link}>
      <img src={imageSrc} alt={alt} className={styles["project-img"]} />
    </Link>
  );

  // Button block
  const ButtonBlock = external ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      Learn More
    </a>
  ) : (
    <Link href={link} className={styles.button}>
      Learn More
    </Link>
  );

  return (
    <div className={containerClassName}>
      {ImageBlock}

      <div className={styles["project-details"]}>
        <p className={styles["project-name"]}>{title}</p>
        <p className={styles["project-description"]}>{description}</p>
        {ButtonBlock}
      </div>
    </div>
  );
}
