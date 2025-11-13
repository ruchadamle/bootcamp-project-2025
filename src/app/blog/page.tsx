import React from "react";
import blogs from "@/app/blogData";
import connectDB from "@/database/db";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import { notFound } from "next/dist/client/components/navigation";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    notFound();
  }

  return (
    <main>
      <h1>My Blog</h1>
      {blogs.map((blog: any) => (
        <BlogPreview
          key={blog.slug}
          title={blog.title}
          date={blog.date.toISOString()}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.image_alt}
          slug={blog.slug}
        />
      ))}
    </main>
  );
}
