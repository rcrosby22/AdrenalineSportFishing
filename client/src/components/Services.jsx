import React from 'react';
import serviceImage1 from '../assets/images/Adrenaline_sport_fishing/FB_IMG_1689166244242.jpg';
import serviceImage2 from '/Users/rcrosby22/SEI-R-4-24/unit4/AdrenalineSportFishing/client/src/assets/images/Adrenaline_sport_fishing/WEB_Main-LakeErie.jpg';
import { Typography } from '@mui/material';

const Services = () => {
  return (
    <div className="services-container">
     <Typography variant="h6" align="center"className="services-title">
  SERVICES WE OFFER
</Typography>

<Typography variant="h2" align="center"className="services-heading">
Choose Your Fishing Experience
</Typography>
<Typography variant="body1" align="center">
At Adrenaline Sport Fishing, we offer a range of fishing charter services to meet the needs of anglers of all experience levels. Whether you’re looking for a full-day adventure in the sun, or a nice cruise scenic cruise sipping the wonderful regions rich Wine.
<br />
  <br />
No matter which charter you choose, you’ll have the opportunity to fish with top-of-the-line equipment and experienced captain who know the local waters like the back of his hand.
</Typography>


      <div className="services-list">
        <div className="service">
          <div className="service-image service-1">
            <img src={serviceImage1} alt="Service 1" className="service-image" />
          </div>
          <div className="service-content">
            <h6 className="service-title">Service 1</h6>
            <p className="service-description">Description of service 1</p>
          </div>
        </div>
        <div className="service">
          <div className="service-image service-2">
            <img src={serviceImage2} alt="Service 2" className="service-image" />
          </div>
          <div className="service-content">
            <h6 className="service-title">Service 2</h6>
            <p className="service-description">Description of service 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
