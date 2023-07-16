import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Gallery = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000); // Switch photo every 5 seconds

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
      <Typography variant="h3" align="center" gutterBottom>
          Our Past Adventures!
        
        </Typography>
        <Paper elevation={3}>
          <img
            src={photos[currentPhotoIndex]}
            alt={`Photo ${currentPhotoIndex + 1}`}
            onClick={handleNext}
            onContextMenu={(e) => {
              e.preventDefault();
              handlePrev();
            }}
            style={{
              cursor: 'pointer',
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover', // Ensure the image fills the container
              maxHeight: '300px' // Set a maximum height for consistent sizing
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Gallery;
