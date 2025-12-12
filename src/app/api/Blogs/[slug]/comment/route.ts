import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = { params: Promise<{ slug: string }> };

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();

  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();

  try {
    const body = await req.json();
    const user = (body.user ?? "").trim();
    const comment = (body.comment ?? "").trim();

    if (!user || !comment) {
      return NextResponse.json(
        { error: "User and comment are required." },
        { status: 400 }
      );
    }

    const blog = await Blog.findOne({ slug: normalizedSlug }).orFail();

    blog.comments = blog.comments || [];
    blog.comments.push({
      user,
      comment,
      time: new Date(),
    } as any);

    await blog.save();

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unable to add comment:", err);
    return NextResponse.json(
      { error: "Unable to add comment." },
      { status: 400 }
    );
  }
}
