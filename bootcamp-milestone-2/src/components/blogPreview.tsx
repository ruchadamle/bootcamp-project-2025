import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/app/blogData";
import style from "./blogPreview.module.css";

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: Blog) {
  return (
    <Link href={`/blog/${slug}`} className={style.blogCard}>
      <h3 className={style.blogTitle}>{title}</h3>

      <div className={style.blogContent}>
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={250}
          className={style.blogImage}
        />
        <p className={style.blogDescription}>{description}</p>
        <p className={style.blogDate}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
}
