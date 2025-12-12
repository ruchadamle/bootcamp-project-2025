import mongoose, { Schema } from "mongoose";

export type ProjectComment = {
  user: string;
  comment: string;
  time: Date;
};

type Project = {
  title: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
  comments?: ProjectComment[];
};

const commentSchema = new Schema<ProjectComment>(
  {
    user: { type: String, required: true, trim: true },
    comment: { type: String, required: true, trim: true },
    time: { type: Date, default: Date.now },
  },
  { _id: false }
);

const projectSchema = new Schema<Project>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true, trim: true },
    image_alt: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  { timestamps: true, collection: "projects" }
);

const Project =
  (mongoose.models.Project as mongoose.Model<Project>) ||
  mongoose.model<Project>("Project", projectSchema);

export default Project;
