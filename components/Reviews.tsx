"use client";
import { useState, type CSSProperties } from "react";
const reviews = [
  { name: "Furkan Yilmaz", role: "International Performance Marketer", text: "Uplane’s technology-driven and data-led approach enables the creation of far more precise and high-performing campaigns compared to traditional methods." },
  { name: "Pritam Shah", role: "Global Head of Performance Marketing", text: "Uplane brings a whole new level of speed and efficiency to performance marketing. Testing, optimization, and reacting to results now happen at a pace that was previously impossible to achieve manually." },
  { name: "Furkan Yilmaz", role: "International Performance Marketer", text: "Uplane’s technology-driven and data-led approach enables the creation of far more precise and high-performing campaigns compared to traditional methods." },
];


export function Reviews() {
  const [active, setActive] = useState(0);
  const visibleReviews = [...reviews, ...reviews];
  const move = (direction: number) => setActive((current) => (current + direction + reviews.length) % reviews.length);

  return (
    <div className="reviews-carousel" aria-label="Customer testimonials">
      <button className="reviews-arrow reviews-prev" type="button" onClick={() => move(-1)} aria-label="Previous testimonial">‹</button>
      <div className="reviews-viewport">
        <div className="reviews-track" style={{ "--slide-offset": `${active * 338}px` } as CSSProperties}>
          {visibleReviews.map((review, index) => (
            <article className={`review-card ${index % reviews.length === active ? "review-active" : ""}`} key={index} aria-hidden={index % reviews.length !== active && index % reviews.length !== (active + 1) % reviews.length && index % reviews.length !== (active + reviews.length - 1) % reviews.length}>
              <div className="stars">★★★★★</div>
              <p>{review.text}</p>
              <div className="review-person">
                <span className="avatar">{review.name.charAt(0)}</span>
                <span className="review-person-copy"><b>{review.name}</b><small>{review.role}</small></span>
                <span className="review-link">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <button className="reviews-arrow reviews-next" type="button" onClick={() => move(1)} aria-label="Next testimonial">›</button>
      <div className="reviews-pagination" aria-label="Choose testimonial">
        {reviews.map((review, index) => <button type="button" key={index} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} />)}
      </div>
    </div>
  );
}
