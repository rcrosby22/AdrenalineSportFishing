import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm/ReviewForm';


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
      <h2>Your feeback is appreciated!</h2>
      <ReviewForm/>
     
     
    </div>
  );
};

export default Reviews;

