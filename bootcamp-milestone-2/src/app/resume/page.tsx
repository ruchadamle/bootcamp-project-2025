"use client";

import React from "react";
import styles from "./resume.module.css";
import ResumeSection from "@/components/resumeSection";
import ResumeEntry from "@/components/resumeEntry";

export default function ResumePage() {
  return (
    <main>
      <h1 className={styles["page-title"]}>Resume</h1>

      <div className={styles["download-wrapper"]}>
        <a
          href="/Resume_RuchaDamle.pdf"
          download
          className={styles["download-btn"]}
        >
          Download Resume
        </a>
      </div>

      <div className={styles.resume}>
        {/* Education and Coursework (two columns) */}
        <div className={styles["section-grid"]}>
          <ResumeSection title="Education">
            <ResumeEntry
              title="California Polytechnic State University, San Luis Obispo"
              subinfo="Bachelor of Science in Computer Science"
              date="Expected Graduation: May 2027"
            />
          </ResumeSection>

          <ResumeSection title="Coursework">
            <ul className={styles.list}>
              <li>Data Structures</li>
              <li>Project Based Object Oriented Program and Design</li>
              <li>Computer Organization</li>
              <li>Discrete Structures</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Intro to Database Systems</li>
            </ul>
          </ResumeSection>
        </div>

        {/* Experience */}
        <ResumeSection title="Experience">
          <ResumeEntry
            role="Robotics Research Intern @ Santa Clara University Robotics System Lab"
            subinfo="Santa Clara, CA | July 2025 – Aug. 2025"
            description={[
              "Configured and maintained Linux/Unix-based environments for robotics development and sensor data processing.",
              "Automated deployment and testing scripts using Bash and Python, enhancing system reproducibility and uptime.",
              "Integrated new hardware and optimized software pipelines, restoring full mobility and hardware-software communication.",
              "Conducted unit and integration testing to ensure functionality and maintainability across robotic systems.",
            ]}
          />
          <ResumeEntry
            role="Software Development Engineering Intern @ Eye BeamIt"
            subinfo="SF Bay Area | June 2024 – Oct. 2024"
            description={[
              "Optimized complex SQL queries and database systems, boosting performance by 40% and improving data integrity.",
              "Developed scripts and automated workflows to streamline internal testing and data-handling processes.",
              "Supported iOS app development and evaluated transition to React Native for cross-platform compatibility.",
              "Collaborated in a small agile team, independently designing and debugging features with limited oversight.",
              "Delivered technical demos to 120+ attendees, explaining complex ideas clearly to diverse audiences.",
            ]}
          />
          <ResumeEntry
            role="Computer Science Tutor @ Ohlone College"
            subinfo="Fremont, CA | Aug. 2024 – June 2025"
            description={[
              "Tutored students in C++, Java, and Python, focusing on data structures, algorithms, and object-oriented programming.",
              "Guided students in debugging and code optimization using test-driven development.",
            ]}
          />
          <ResumeEntry
            role="Research Intern @ Stanford Science Small Groups"
            subinfo="Stanford, CA | Sep. 2023 – Dec. 2023"
            description={[
              "Researched applications of IoT for assistive technologies alongside a Stanford postdoctoral researcher.",
              "Conducted a literature review and presented findings to an audience of 50+ peers and postdoctoral researchers.",
            ]}
          />
        </ResumeSection>

        {/* Projects */}
        <ResumeSection title="Projects">
          <ResumeEntry
            title="Network Packet Router Simulator"
            subinfo="Languages & Technologies: Python, React, Flask, Vercel, Render"
            description={[
              "Developed a network router simulator with Dijkstra-based routing and real-time packet visualization.",
              "Built a Flask backend and React frontend with interactive ForceGraph graphs and hop-by-hop packet animation.",
              "Deployed on Vercel and Render for live demos and tested packet delivery across multiple topologies.",
            ]}
          />
          <ResumeEntry
            title="Huffman Compression Algorithm"
            subinfo="Languages: C++"
            description={[
              "Developed a lossless file compression tool applying greedy algorithms and binary tree structures.",
              "Implemented a custom bit-level I/O system for efficient encoding and decoding.",
              "Conducted rigorous testing and validation to ensure maintainable software performance.",
            ]}
          />
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title="Skills">
          <ul className={styles.list}>
            <li>
              <strong>Programming:</strong> C++, Python, Java, SQL, JavaScript
            </li>
            <li>
              <strong>Technical Skills:</strong> React, Git, ROS2, Docker,
              Linux, Database Systems, Software Design, Debugging, Networking
              Fundamentals (IP routing, Ethernet switching), Version Control,
              Unit &amp; Integration Testing, Agile Development
            </li>
            <li>
              <strong>Languages:</strong> English (Fluent), Marathi (Fluent),
              Spanish (Beginner)
            </li>
          </ul>
        </ResumeSection>
      </div>
    </main>
  );
}
