import React, { useState } from 'react';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
 
    console.log('Submitting review:', name, comment, image);
    // Reset form 
    setName('');
    setComment('');
    setImage(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Submit Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block font-bold mb-1">
            Comment:
          </label>
          <textarea
            id="comment"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-bold mb-1">
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
