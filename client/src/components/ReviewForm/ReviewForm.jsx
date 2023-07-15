import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './ReviewForm.css'
import { FormControl } from '@mui/material'
import axios from 'axios'

const ReviewForm = (props) => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newReview = await axios.post('http://localhost:3001/reviews/review', {
      name,
      comment
    })
    console.log('Submitting review:', newReview)
    props.setReviews(props.reviews.concat([newReview.data]))

    // Reset form
    setName('')
    setComment('')
  }

  return (
    <div className="ReviewForm">
      <h2 className="text-2xl font-bold mb-4">How was your trip!</h2>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            className="FormInput"
            label="Your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            className="FormInput"
            label="Comments"
            multiline
            rows={6}
            onChange={(e) => setComment(e.target.value)}
          />

          <Button type="submit" variant="contained" className="FormInput">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  )
}

export default ReviewForm
