import React from 'react';
import { Typography, Container } from '@mui/material';
import './Hero.css'; // Custom CSS for Hero

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
      <Typography variant="h5" className="fade-in">
      Hi there! This is
        </Typography>
       <Typography variant="h3" color="#004E69" gutterBottom className="fade-in">
       Kavin Rajendran
         </Typography>
        <Typography variant="h5" className="fade-in">
        "Passionate about building websites.<br></br> Bringing ideas to life through code!"
        </Typography>
         {/* <Button variant="contained" color="secondary" className="fade-in" style={{ marginTop: '20px' }}>
          View My Work
        </Button> */}
      </Container>
    </div>
  );
};

export default Hero;
