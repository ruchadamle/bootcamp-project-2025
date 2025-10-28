import React from "react";
import blogs from "@/app/blogData";
import RestaurantReviews from "../posts/RestaurantReviews";
import StressBusters from "../posts/StressBusters";

// Map each slug to its corresponding component
const blogComponents: Record<string, React.FC> = {
  "restaurant-ratings-reviews": RestaurantReviews,
  "stress-busters-review": StressBusters,
};

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

// Needs to be async to await params
export default async function BlogPostPage({ params }: Params) {
  const resolved = await params;
  const blog = blogs.find((b) => b.slug === resolved.slug);

  if (!blog) return <p>Blog not found</p>;

  const Content = blogComponents[blog.slug];

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
        alt={blog.imageAlt}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
      />
      {Content ? <Content /> : <p>No content yet.</p>}
    </main>
  );
}
