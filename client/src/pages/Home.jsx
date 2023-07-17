import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import About from './About'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import { Card, CardContent } from '@mui/material'
import Gallery from '../components/Gallery'
import image1 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166114728.jpg'
import image2 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166211289.jpg'
import image3 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166136455.jpg'
import ReviewForm from '../components/ReviewForm/ReviewForm'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import imageMil from '/Users/rcrosby22/SEI-R-4-24/unit4/AdrenalineSportFishing/client/src/assets/images/Adrenaline_sport_fishing/IMG-20140827-170323.jpg'
const Home = () => {
  const photos = [image1, image2, image3]

  return (
    <div>
      <div id="hero" className="flex items-center justify-center">
        <h1>WELCOME TO ADRENALINE SPORT FISHING CHARTERS</h1>
        <h2 className="subtitle">Join us aboard our 28ft fishing machine</h2>
      </div>

      <Services />

      <br />

      <About />

      <br />

      <Gallery photos={photos} />
      <Box
        sx={{
          backgroundColor: '#f0f0f0', // Set the background color
          padding: '15rem' // Set the padding
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: 'creme',
                padding: '1rem'
              }}
            ></Box>
            {/* Content of the first section */}
          </Grid>
          <Grid item xs={6}>
            {/* Content of the second section */}
          </Grid>
        </Grid>
      </Box>

      {/* Military section */}
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 50, 0.8)', // Set the background color
          padding: '10rem' // Set the padding
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'left' }}>
            <img
              src={imageMil}
              alt="Adrenaline Sport Fishing"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                marginLeft: '0'
              }}
            />
            {/* Content of the first section */}
          </Grid>
          <Grid item xs={6}>
            {/* Content of the second section */}
          </Grid>
        </Grid>
      </Box>

      <ReviewForm />

      <div>
        <div className="py-8 flex flex-col items-center">
          <p>Explore our services and book your fishing adventure now</p>
          <Link to="/booking">Book Now</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
