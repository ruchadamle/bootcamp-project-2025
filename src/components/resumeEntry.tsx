"use client";
import React from "react";
import styles from "./resumeEntry.module.css";

interface ResumeEntryProps {
  title?: string;
  role?: string;
  subinfo?: string;
  date?: string;
  description?: string[];
}

export default function ResumeEntry({
  title,
  role,
  subinfo,
  date,
  description,
}: ResumeEntryProps) {
  return (
    <div className={styles.entry}>
      {/* Title or Role */}
      {title && <h3 className={styles.title}>{title}</h3>}
      {role && <h3 className={styles.role}>{role}</h3>}

      {/* Subinfo (like location or degree) */}
      {subinfo && <p className={styles.subinfo}>{subinfo}</p>}

      {/* Date */}
      {date && <p className={styles.date}>{date}</p>}

      {/* Description*/}
      {description && (
        <ul className={styles.descriptionList}>
          {description.map((point, i) => (
            <li key={i} className={styles.descriptionItem}>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
