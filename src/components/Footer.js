import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0D47A1', padding: '20px', color: '#fff', textAlign: 'center' }}>
      <Container>
        <Typography variant="body1">© 2024 Kavin R. All Rights Reserved.</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
