"use client";
import React, { ReactNode } from "react";
import styles from "./resumeSection.module.css";

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
