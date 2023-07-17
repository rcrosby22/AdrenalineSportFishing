import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import About from './About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import { Card, CardContent } from '@mui/material';
import Gallery from '../components/Gallery';
import image1 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166114728.jpg';
import image2 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166211289.jpg';
import image3 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166136455.jpg';
import ReviewForm from '../components/ReviewForm/ReviewForm';

const Home = () => {
  const photos = [image1, image2, image3];

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

     <ReviewForm/>

      <div>
        <div className="py-8 flex flex-col items-center">
          <p>Explore our services and book your fishing adventure now</p>
          <Link to="/booking">Book Now</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
