import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();

    const user = (body.user ?? "").trim();
    const commentText = (body.comment ?? "").trim();

    if (!user || !commentText) {
      return NextResponse.json(
        { error: "User and comment are required." },
        { status: 400 }
      );
    }

    const project = await Project.findOne().orFail();

    project.comments = project.comments || [];
    project.comments.push({
      user,
      comment: commentText,
      time: new Date(),
    } as any);

    await project.save();

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unable to add portfolio comment:", err);
    return NextResponse.json(
      { error: "Unable to add comment." },
      { status: 400 }
    );
  }
}
