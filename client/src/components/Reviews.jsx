import React, { useState, useEffect } from 'react'
import ReviewForm from './ReviewForm/ReviewForm'
import axios from 'axios'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import  Box  from '@mui/material/Box'


const Reviews = ({ initialReviews, currentUser }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/reviews/review')
      setReviews(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching reviews:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/review/${id}`)
      // Refresh the reviews list after deleting
      fetchReviews()
    } catch (error) {
      console.error('Error deleting review:', error)
    }
  }



  return (
    <div className="reviews">
 

      {reviews.map((review) => (
        <Box key={review._id} sx={{width:300, padding:"20px",display: "inline-block",minHeight:"500px"}}>
        <Card className="comment" >
          <CardHeader></CardHeader>
          <CardContent>
            <Typography 
            variant="h3"
            >{review.name}
            </Typography>
            <Typography 
            variant="body1"
            >{review.comment}
            </Typography>
          </CardContent>
        </Card>
        </Box>
           
        
      ))}
      <ReviewForm reviews={reviews}
      setReviews={setReviews}/>
    </div>
  )
}

export default Reviews
