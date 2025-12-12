// src/components/CommentForm.tsx
"use client";

import { useState, FormEvent } from "react";

type CommentFormProps = {
  type: "blog" | "portfolio";
  slug?: string; // only required for blog
};

export default function CommentForm({ type, slug }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const trimmedUser = user.trim();
    const trimmedComment = comment.trim();

    if (!trimmedUser || !trimmedComment) {
      setError("Both fields are required.");
      return;
    }

    if (type === "blog" && !slug) {
      setError("Missing blog slug.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const endpoint =
      type === "blog"
        ? `/api/Blogs/${slug}/comment`
        : `/api/portfolio/comment`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: trimmedUser,
          comment: trimmedComment,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit comment");
      }

      setUser("");
      setComment("");

      if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "1.5rem",
        padding: "1.5rem",
        background: "var(--clr-card-bg)",
        border: "1px solid var(--clr-border)",
        borderRadius: "var(--radius)",
        display: "grid",
        gap: "0.75rem",
        maxWidth: 600,
        marginLeft: "auto", 
        marginRight: "auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ display: "grid", gap: "0.25rem" }}>
        <label htmlFor="comment-user" style={{ fontSize: "0.9rem" }}>
          Name
        </label>
        <input
          id="comment-user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={{
            padding: "0.65rem 1rem",
            borderRadius: "var(--radius)",
            border: "1px solid var(--clr-border)",
            background: "var(--clr-card-bg)",
            color: "var(--clr-text)",
          }}
        />
      </div>

      <div style={{ display: "grid", gap: "0.25rem" }}>
        <label htmlFor="comment-text" style={{ fontSize: "0.9rem" }}>
          Comment
        </label>
        <textarea
          id="comment-text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          style={{
            padding: "0.65rem 1rem",
            borderRadius: "var(--radius)",
            border: "1px solid var(--clr-border)",
            background: "var(--clr-card-bg)",
            color: "var(--clr-text)",
            resize: "vertical",
          }}
        />
      </div>

      {error && (
        <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          padding: "0.6rem 1.2rem",
          borderRadius: "999px",
          border: "1px solid var(--clr-border)",
          background: "var(--clr-card-bg)",
          color: "var(--clr-text)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          cursor: "pointer",
          marginTop: "0.5rem",
          justifySelf: "center",
          opacity: isSubmitting ? 0.8 : 1,
          fontWeight: 600,
        }}
      >
        {isSubmitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}
