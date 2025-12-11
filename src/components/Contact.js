import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <section>
      <Container>
        <Typography variant="h4" color="primary" gutterBottom>
          Contact Me
        </Typography>
        <TextField label="Your Name" fullWidth margin="normal" />
        <TextField label="Your Email" fullWidth margin="normal" />
        <TextField label="Your Message" fullWidth multiline rows={4} margin="normal" />
        <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
          Send Message
        </Button>
      </Container>
    </section>
  );
};

export default Contact;
