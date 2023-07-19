import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

const ServiceDetails = () => {
  return (
    <Paper elevation={3} className="service-details-container">
      <Typography variant="h2" gutterBottom>
        Our Fishing Charters
      </Typography>
      <Typography component="p">
        Our fishing charters offer an unforgettable experience for both beginners and experienced anglers alike.
        Whether you're an avid fisherman or just looking for a fun day on the water, our charters are perfect for you.
      </Typography>
      <Typography component="p">
        We accommodate groups of all sizes, with a minimum of <strong>2 people</strong> needed and a maximum of{' '}
        <strong>5 people</strong> per charter. Enjoy a personalized and comfortable fishing trip with our experienced crew.
      </Typography>
      <Typography component="p">
        We offer a variety of fishing opportunities, including <strong>steelhead</strong> and the best <strong>walleye fishing</strong> onboard.
        Join us for an adventure on Lake Erie that you'll cherish for a lifetime.
      </Typography>
      <Typography component="p">
        We are available for cruises and special events, such as{' '}
        <strong>8 Great Tuesdays</strong> over the summer. Create lasting memories with friends and family on our beautiful vessel.
      </Typography>
      <Grid container className="contact-details" spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">For Cruises and Special Events</Typography>
          <Typography>
            Contact us today to book your next fishing adventure or inquire about special rates for cruises and events.
            Reach us by <strong>phone</strong> at (814) 528-3817 or via <strong>email</strong> at squarigger@yahoo.com
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ServiceDetails;
