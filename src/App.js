// src/App.js

import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';  // Import the Skills component
import EducationTimeline from './components/Timeline'; // Assuming you have an EducationTimeline component
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll'; // This enables smooth scrolling between sections
import './App.css'; // Custom CSS file for any additional styles

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Global CSS reset from Material-UI */}
      <Header /> {/* Your navigation header */}
      
      {/* Defining each section wrapped in an Element for smooth scrolling */}
      <Element name="home">
        <Hero /> {/* Hero/landing section */}
      </Element>
      
      <Element name="about">
        <About /> {/* About section */}
      </Element>
      
      <Element name="skills"> {/* Scroll target for the Skills section */}
        <Skills /> {/* Skills section */}
      </Element>
      
      <Element name="timeline">
        <EducationTimeline /> {/* Timeline/Education section */}
      </Element>
      
      <Element name="projects">
        <Projects /> {/* Projects/portfolio section */}
      </Element>
      
      <Element name="contact">
        <Contact /> {/* Contact section */}
      </Element>

      <Footer /> {/* Footer at the bottom of the page */}
    </ThemeProvider>
  );
}

export default App;
