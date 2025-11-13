import mongoose, { Schema, Document, Model } from "mongoose";

// Blog type
type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string; 
  image: string;
  image_alt: string;
  content: string;
};

// Blog schema
const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    date: { type: Date, default: Date.now },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

// Defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
