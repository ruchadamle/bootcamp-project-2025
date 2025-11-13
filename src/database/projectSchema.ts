import mongoose, { Schema } from "mongoose";

type Project = {
  title: string;
  description: string;
  image: string;       
  image_alt: string;   
  link: string;       
};

const projectSchema = new Schema<Project>(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image:       { type: String, required: true, trim: true },
    image_alt:   { type: String, required: true, trim: true },
    link:        { type: String, required: true, trim: true },
  },
  { timestamps: true, collection: "projects" } 
);

const Project =
  (mongoose.models.Project as mongoose.Model<Project>) ||
  mongoose.model<Project>("Project", projectSchema);

export default Project;
