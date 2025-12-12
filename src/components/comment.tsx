import React from "react";
import styles from "./comment.module.css";

export type IComment = {
  user: string;
  comment: string;
  time: string | Date;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: string | Date): string {
  const date = new Date(time);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.commentCard}>
      <div className={styles.commentHeader}>
        <h4 className={styles.commentUser}>{comment.user}</h4>
        <span className={styles.commentTime}>
          {parseCommentTime(comment.time)}
        </span>
      </div>
      <p className={styles.commentBody}>{comment.comment}</p>
    </div>
  );
}
