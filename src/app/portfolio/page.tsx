import React from "react";
import styles from "./portfolio.module.css";
import PortfolioEntry from "@/components/portfolioEntry";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

import Comment, { IComment } from "@/components/comment";
import CommentForm from "@/components/commentForm";

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

  const primaryProject = projects[0] as (typeof projects)[0] & {
    comments?: IComment[];
  };

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

      <section style={{ marginTop: "2.5rem", padding: "0 1rem 2rem" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Comments
        </h2>

        <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
          {(!primaryProject.comments ||
            primaryProject.comments.length === 0) && (
            <p style={{ color: "#666", textAlign: "center" }}>
              No comments yet.
            </p>
          )}

          {(primaryProject.comments ?? []).map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>

        <div style={{ marginTop: 16 }}>
          <CommentForm type="portfolio" />
        </div>
      </section>
    </main>
  );
}
