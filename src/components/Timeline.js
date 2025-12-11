import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LinkIcon from '@mui/icons-material/Link';
import './Timeline.css';

const EducationTimeline = () => {
  const experiences = [
    {
      type: 'Work',
      icon: <WorkIcon color="secondary" />,
      title: 'CubeAISolutions Tech Pvt Ltd',
      details: `Senior Web Developer (August 2024 - Present)\n
      React Developer (May 2024 - August 2024)\n
      Frontend Web Developer (February 2024 - May 2024)`,
      link: 'https://www.cubeaisolutions.com/', // Actual link to CubeAISolutions
      color: '#0e2c0a',
    },
    {
      type: 'Work',
      icon: <WorkIcon color="secondary" />,
      title: 'AiTecHive Pvt Ltd',
      details: 'Frontend Developer Intern (October 2023 - February 2024)',
      link: 'https://www.aitechive.com/', // Actual link to AiTecHive
      color: '#250740',
    },
    {
      type: 'Education',
      icon: <SchoolIcon color="primary" />,
      title: 'Sri Eshwar College of Engineering',
      details: 'Graduated 2024 - 7.75/10',
      link: 'https://sece.ac.in/', // Actual link to the college
      color: '#870414',
    },
    {
      type: 'Education',
      icon: <SchoolIcon color="primary" />,
      title: 'MAM Metric Hrs Sec School',
      details: 'Graduated 2020 - 69%',
      link: 'https://www.example.com/mam-metric-hrs-sec-school', // Replace with actual link
      color: '#1e88e5',
    },
  ];

  return (
    <section>
      <Container>
        <Box
          sx={{
            backgroundColor: '#f13e09', // Dark blue background
          color: '#fff', // White text color
          padding: '10px', // Padding inside the element
          borderRadius: '5px',
          height: '50px',
          width: '200px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px', // Add space below the header
          }}
        >
          <Typography variant="h4" color='#fff' >
            My Journey 
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                className="card"
                sx={{ backgroundColor: experience.color, color: '#fff' }}
                style={{ animationDelay: `${index * 0.1}s`, animation: 'dropIn 0.5s ease' }} // Delay for animation
              >
                <CardContent>
                  <Box display="flex" alignItems="center">
                    {experience.icon}
                    <Typography variant="h6" sx={{ marginLeft: 2 }}>
                      {experience.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    {experience.details.split('\n').map((line, i) => (
                      <Box key={i}>{line}</Box>
                    ))}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, display: 'flex', alignItems: 'center' }}>
                    <LinkIcon sx={{ marginRight: 1 }} />
                    <a href={experience.link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                      Visit Website
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default EducationTimeline;
