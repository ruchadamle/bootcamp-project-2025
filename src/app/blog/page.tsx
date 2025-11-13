import React from "react";
import blogs from "@/app/blogData";
import BlogPreview from "@/components/blogPreview";

export default function BlogsPage() {
  return (
    <main>
      <h1>My Blog</h1>
      {blogs.map((blog) => (
        <BlogPreview key={blog.slug} {...blog} />
      ))}
    </main>
  );
}
