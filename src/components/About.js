import React, { useEffect, useRef, useState } from 'react';
import { Typography, Container, Card, CardMedia, Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const cardImages = [
  require("../assets/about images/image1.png"),
  require("../assets/about images/image2.png"),
  require("../assets/about images/image3.png"),
  require("../assets/about images/image4.png"),
  require("../assets/about images/image5.png"),
  require("../assets/about images/image6.png"),
  require("../assets/about images/image7.png"),
  require("../assets/about images/image8.png"),
  require("../assets/about images/image9.png"),
  require("../assets/about images/image10.png"),
];

const About = () => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: 1, behavior: 'smooth' });
          }
        }
      }, 10);
    };

    if (isScrolling) startScrolling();

    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  // Function to manually scroll left
  const scrollLeft = () => {
    setIsScrolling(false); // Stop automatic scrolling on manual scroll
    scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  // Function to manually scroll right
  const scrollRight = () => {
    setIsScrolling(false); // Stop automatic scrolling on manual scroll
    scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  // Resume auto-scrolling after manual control
  const resumeScrolling = () => {
    setIsScrolling(true);
  };

  return (
    <Box component="section" id="about" sx={{ backgroundColor: '#f0f0f5', py: 8, minHeight: '100vh' }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 4,
            py: 1,
            px: 2,
            background: 'linear-gradient(45deg, #ff1744, #ff6d00)',
            color: '#fff',
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          About Me
        </Typography>

        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
          I’m a passionate web developer specializing in building dynamic and responsive web applications.
          With a strong focus on both front-end and back-end technologies, I create user-friendly and
          performance-driven solutions.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
          My technical skills span across modern technologies like <strong>React.js</strong>, <strong>Node.js</strong>,
          and <strong>Next.js</strong>. I enjoy working on intuitive designs and optimizing applications
          for scalability and performance.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
          I believe in continuous learning and am always seeking new opportunities to sharpen my skills.
          Whether it’s designing a user interface, optimizing database performance, or experimenting with
          the latest web technologies, I am deeply committed to creating impact through code.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          When I’m not coding, you’ll find me exploring new tools or contributing to open-source projects.
          My goal is to leverage my expertise to build scalable, secure, and impactful digital products.
        </Typography>

        {/* Scrolling Image Section with manual controls */}
        <Box sx={{ position: 'relative', width: '100%', mt: 4 }}>
          <IconButton
            onClick={scrollLeft}
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: '#ff1744',
              color: '#fff',
              '&:hover': { backgroundColor: '#d50000' },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'hidden',
              py: 4,
              whiteSpace: 'nowrap',
              '&:hover': { animationPlayState: 'paused' },
            }}
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={resumeScrolling}
          >
            {cardImages.map((image, index) => (
              <Card
                key={index}
                className="image-card"
                sx={{
                  minWidth: 250,
                  height: 250,
                  mr: 2,
                  flexShrink: 0,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  backgroundColor: '#fff',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: '#ff1744',
                  },
                  '&:hover .image-hover': {
                    filter: 'brightness(0.8)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={`Image ${index + 1}`}
                  image={image}
                  className="image-hover"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </Card>
            ))}
          </Box>

          <IconButton
            onClick={scrollRight}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: '#ff1744',
              color: '#fff',
              '&:hover': { backgroundColor: '#d50000' },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
