import React, { useState } from "react";

const Reviews = () => {
  const [reviewForm, setReviewForm] = useState({ name: "", content: "", photo: null });

  const handleSubmitReview = (event) => {
    event.preventDefault();
    
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setReviewForm({ ...reviewForm, photo: file });
  };

  return (
    <div>
      <form onSubmit={handleSubmitReview}>
        <input
          type="text"
          value={reviewForm.name}
          onChange={(event) => setReviewForm({ ...reviewForm, name: event.target.value })}
        />
       
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
