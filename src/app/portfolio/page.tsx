import React from "react";
import styles from "./portfolio.module.css";
import PortfolioEntry from "@/components/portfolioEntry";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

// Fetch projects from MongoDB
async function getProjects() {
  await connectDB();
  // Query for all projects
  try {
    const projects = await Project.find().lean().exec();
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
}

// Portfolio Page Component
export default async function PortfolioPage() {
  const projects = await getProjects();

  // Handle case with no projects
  if (!projects || projects.length === 0) {
    return (
      <main>
        <h1 className={styles["page-title"]}>Portfolio</h1>
        <p>No projects found.</p>
      </main>
    );
  }

  return (
    <main>
      <h1 className={styles["page-title"]}>Portfolio</h1>

      {projects.map((project: any) => (
        <PortfolioEntry
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.image}
          alt={project.image_alt}
          link={project.link}
        />
      ))}
    </main>
  );
}
