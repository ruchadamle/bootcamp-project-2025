import React from "react";
import connectDB from "../../../database/db";
import Blog from "../../../database/blogSchema";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await connectDB();

  const blog = await Blog.findOne({ slug: slug.toLowerCase() })
    .lean<{
      title: string;
      slug: string;
      date: Date;
      description: string;
      image: string;
      image_alt: string;
      content: string;
    }>()
    .exec();

  if (!blog) return <p>Blog not found</p>;

  return (
    <main style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
      <h1>{blog.title}</h1>
      <p>
        {new Date(blog.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <img
        src={blog.image}
        alt={blog.image_alt}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
      />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </main>
  );
}
