import React from "react";
import "./review.css";

type ReviewCardProps = {
  text: string;
  author: string;
  avatar: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ text, author, avatar }) => (
  <article className="review-card" role="listitem">
    <div className="review-header">
      <img src={avatar} alt={author} className="review-avatar" />
      <p className="review-author">— {author}</p>
    </div>

    <p className="review-text">{text}</p>
  </article>
);

export default ReviewCard;
