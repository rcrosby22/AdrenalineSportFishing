import React from 'react'

import About from './About'
import Services from '../components/Services'

import Gallery from '../components/Gallery'
import image1 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166114728.jpg'
import image2 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166211289.jpg'
import image3 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166136455.jpg'
import ReviewForm from '../components/ReviewForm/ReviewForm'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import imageMil from '/Users/rcrosby22/SEI-R-4-24/unit4/AdrenalineSportFishing/client/src/assets/images/Adrenaline_sport_fishing/IMG-20140827-170323.jpg'
import ContactForm from '../components/ContactForm'
import ServiceDetails from '../components/ServiceDetails'
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
      <ServiceDetails />

      <Box
        sx={{
          backgroundColor: '#1976d2',
          padding: '10rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            sx={{
              background: '#1976d2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: '2rem'
            }}
          >
            <img
              src={imageMil}
              alt="Adrenaline Sport Fishing"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
                marginLeft: '-2rem'
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: '#f0f0f0',
              padding: '2rem',
              borderRadius: '10px'
            }}
          >
            <h1 style={{ color: '#1976d2' }}>SALUTE THE TROOPS DISCOUNT</h1>
            <p>
              Adrenaline Sport Fishing prides ourselves on the men and women who
              have served for this country - please let us know if you served to
              provide an additional 10% off
            </p>
            <div
              style={{
                color: '#1976d2',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ContactForm style={{ width: '100%', height: '100%' }} />{' '}
            </div>
          </Grid>
        </Grid>
      </Box>

      <ReviewForm />

      <div></div>
    </div>
  )
}

export default Home
