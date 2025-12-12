import React from "react";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import Comment, { IComment } from "@/components/comment";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  await connectDB();

  const blog = await BlogModel.findOne({ slug: slug.toLowerCase() })
    .lean<{
      title: string;
      slug: string;
      date: Date;
      description: string;
      image: string;
      image_alt: string;
      content: string;
      comments?: IComment[];
    }>()
    .exec();

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const date = blog.date ? new Date(blog.date) : null;
  const formattedDate =
    date && !isNaN(date.getTime())
      ? date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  return (
    <article style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ marginBottom: 0 }}>{blog.title}</h1>
      {formattedDate && (
        <p style={{ color: "#666", marginTop: 4 }}>{formattedDate}</p>
      )}

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.image_alt}
          style={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 8,
            margin: "1.5rem 0",
            display: "block",
          }}
        />
      )}

      <div
        style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <section style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 18 }}>Comments</h2>
        <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
          {(!blog.comments || blog.comments.length === 0) && (
            <p style={{ color: "#666" }}>No comments yet.</p>
          )}
          {(blog.comments ?? []).map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </section>
    </article>
  );
}
