import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import "./review.css";
/* import avatarimages */
import JohnAvatar from "../../assets/avatars/john.jpg";
import JaneAvatar from "../../assets/avatars/jane.jpg";
import AliceAvatar from "../../assets/avatars/alice.jpg";
import BrooksAvatar from "../../assets/avatars/brooks.jpg";
import DanAvatar from "../../assets/avatars/dan.jpg";
import LindsayAvatar from "../../assets/avatars/lindsay.jpg";
import MuzniAvatar from "../../assets/avatars/muzni.jpg";
import DanielleAvatar from "../../assets/avatars/danielle.jpg";
import LanAvatar from "../../assets/avatars/lan.jpg";

type ReviewItem = {
  id: string;
  text: string;
  author: string;
  avatar: string;
};

const baseReviews: ReviewItem[] = [
  { id: "1", text: "TalentSphere helped us find the perfect candidate quickly!", author: "John Doe", avatar: JohnAvatar },
  { id: "2", text: "The process was seamless and the talent was top-notch.", author: "Jane Smith", avatar: JaneAvatar },
  { id: "3", text: "Highly recommend! They truly understand our needs.", author: "Alice Johnson", avatar: AliceAvatar },
  { id: "4", text: "Fast, professional and reliable — great experience.", author: "Brooks Powell", avatar: BrooksAvatar },
  { id: "5", text: "Our team ramped up quickly thanks to their hires.", author: "Dan Oshinsky", avatar: DanAvatar },
  { id: "6", text: "Consistent communication and quality candidates.", author: "Lindsay McCormick", avatar: LindsayAvatar },
  { id: "7", text: "Saved us time and money while improving output.", author: "Muzni", avatar: MuzniAvatar },
  { id: "8", text: "Very responsive and proactive in solving problems.", author: "Danielle Poreh", avatar: DanielleAvatar },
  { id: "9", text: "They understood our culture and hired accordingly.", author: "Lan Pham", avatar: LanAvatar },
];

const distribute = (items: ReviewItem[], cols: number) => {
  const out: ReviewItem[][] = Array.from({ length: cols }, () => []);
  items.forEach((it, idx) => {
    out[idx % cols].push(it);
  });
  return out;
};

const columns = distribute(baseReviews, 3);

const Review: React.FC = () => (
  <section className="reviews-root" aria-label="Customer reviews">
    <motion.div
      className="reviews-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {columns.map((col, colIndex) => (
        <motion.div
          key={colIndex}
          className={`review-column col-${colIndex}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: colIndex * 0.2 }}
        >
          <div className="review-viewport">
            <div className="review-track" role="list">

              {col.map((r) => (
                <ReviewCard
                  key={r.id}
                  text={r.text}
                  author={r.author}
                  avatar={r.avatar}
                />
              ))}

              {/* Duplicate for infinite scroll */}
              {col.map((r) => (
                <ReviewCard
                  key={`${r.id}-dup`}
                  text={r.text}
                  author={r.author}
                  avatar={r.avatar}
                />
              ))}

            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Review;
