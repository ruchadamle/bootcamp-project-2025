import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(req: NextRequest, { params }: RouteContext) {
  await connectDB();

  const { slug } = await params;

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
