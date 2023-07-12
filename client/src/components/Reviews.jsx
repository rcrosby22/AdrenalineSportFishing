import React, { useState } from 'react';
import './App.css'

const Reviews = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      <div className="carousel">
        <button className="arrow prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="review-container">
          {reviews.map((review, index) => (
            <div
              key={review._id}
              className={`review ${index === currentIndex ? 'active' : ''}`}
            >
             
              <h3>{review.title}</h3>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
        <button className="arrow next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Reviews;

