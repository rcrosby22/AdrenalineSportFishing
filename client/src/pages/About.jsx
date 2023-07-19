import React from 'react'
import { Grid, Typography } from '@mui/material'
import aboutImage1 from '/Users/rcrosby22/SEI-R-4-24/unit4/AdrenalineSportFishing/client/src/assets/images/Adrenaline_sport_fishing/FB_IMG_1689166436220.jpg'

const About = () => {
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid
        item
        xs={12}
        md={6}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ flex: 1, height: '100%' }}>
          <img
            src={aboutImage1}
            alt="About Us"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" gutterBottom style={{ color: '#1976d2' }}>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to Adrenaline Sport Fishing Charters! I'm Captain Pat Crosby,
          and my lifelong passion for fishing and being on the water has led me
          to create an unforgettable fishing experience for you and your family
          or friends.
        </Typography>
        <Typography variant="body1" gutterBottom>
          With my 200-ton masters license and 1600-ton mates license, combined
          with years of experience serving on various types of vessels, from
          wooden square-rigged tall ships to cement carriers and petroleum
          carriers, I bring a wealth of knowledge and expertise to each fishing
          charter.
        </Typography>
        <Typography variant="body1">
          At Adrenaline Sport Fishing Charters, we specialize in offshore
          fishing in the beautiful Great Lakes. Our goal is to provide you with
          a truly memorable fishing adventure, where you can enjoy the thrill of
          reeling in the big catch while surrounded by the stunning scenery of
          the Great Lakes.
        </Typography>
        <Typography variant="body1">
          Join us on board and experience the excitement and joy of fishing with
          Adrenaline Sport Fishing Charters. You're in the right place as we
          navigate the waters and create lasting memories on each fishing
          charter. Book your trip with us today!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default About
