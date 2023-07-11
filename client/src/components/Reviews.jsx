import React from "react"
import { useState } from "react"

const Reviews = () => {
  const [reviewForm, setReviewForm] = useState({name:'', content:''})
  const handleSubmitReview =(event)=> {
    event.preventDefault()
  }
  return(
    <div>
      <form onSubmit={handleSubmitReview}>
  <input type="text"
   value={reviewForm.name} 
   onChange={(event) => setReviewForm({ 
    ...reviewForm, name: event.target.value })} />
  <button type="submit">Submit Review</button>
</form>
   

    </div>
  )
}
export default Reviews