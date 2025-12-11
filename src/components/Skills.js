// src/components/Skills.js

import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material'; // Import Box from Material-UI
import { makeStyles } from '@mui/styles';

// Skill images (replace these with your actual image URLs)
const skillImages = {
  "React.js": require("../assets/images/react.png"), // React logo
  "Next.js": require("../assets/images/next.png"), // Next.js logo
  "UI/UX Design": require("../assets/images/uiux.png"), // UI/UX placeholder
  "Node.js": require("../assets/images/node.png"), // Node.js logo
  "HTML": require("../assets/images/html.png"), // HTML logo
  "CSS": require("../assets/images/css.png"), // CSS logo
  "JavaScript": require("../assets/images/javascript.png"), // JavaScript logo
};

const skillsData = [
  { title: "React.js", description: "Efficient and scalable front-end development." },
  { title: "Next.js", description: "Optimized server-side rendering." },
  { title: "UI/UX Design", description: "Intuitive and user-friendly interfaces." },
  { title: "Node.js", description: "Robust backend services." },
  { title: "HTML", description: "Building the structure of web pages." },
  { title: "CSS", description: "Styling and layout of web pages." },
  { title: "JavaScript", description: "Adding interactivity to web pages." },
];

// Styles for the skills card
const useStyles = makeStyles((theme) => ({
  card: {
    width: '250px', // Fixed width for larger square shape
    height: '250px', // Fixed height for larger square shape
    transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth hover effect
    '&:hover': {
      transform: 'translateY(-15px) scale(1.05)', // Animate upwards and slightly enlarge on hover
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Larger shadow on hover
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
    padding: theme.spacing(2),
  },
  skillImage: {
    width: 'auto', // Adjusted width for better fit
    height: 'auto', // Maintain aspect ratio
    marginBottom: '10px',
    marginLeft: '30px',
  },
  skillsContainer: {
    display: 'flex',
    justifyContent: 'center', // Center all items horizontally
    flexWrap: 'wrap', // Allow items to wrap
    padding: theme.spacing(2),
    gap: theme.spacing(2), // Space between cards
  },
  skillTitle: {
    backgroundColor: '#003366', // Initial dark blue background for the skill title
    color: '#fff', // White text color for contrast
    padding: '5px 10px', // Padding around the text
    borderRadius: '10px 10px 0px 0px', // Optional: rounded corners
    transition: 'background-color 0.3s ease', // Smooth transition for hover
    '&:hover': {
      backgroundColor: '#069ED6', // Lighter blue on hover
    },
  },
  skillDescription: {
    backgroundColor: '#003366', // Dark blue background for the description
    color: '#fff', // White text color
    padding: '5px 10px', // Padding around the text
    borderRadius: '0px 0px 10px 10px', // Optional: rounded corners
  },
  heading: {
    backgroundColor: '#ca472b', // Dark blue background
    color: '#fff', // White text color
    padding: '10px', // Padding inside the element
    borderRadius: '5px',
    height: "50px",
    width: "200px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center", // Optional: rounded corners
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  fadeInEffect: {
    animation: '$fadeIn 0.5s ease-in-out',
  },
  '@keyframes slideIn': {
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  },
  slideEffect: {
    animation: '$slideIn 1s ease-in-out',
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <section id="skills" style={{ padding: '40px 0' }}>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:'center'}}>
        <Typography variant="h4" align="center" gutterBottom className={classes.heading}>
          My Skills
        </Typography>
      </Box>
      <Box className={classes.skillsContainer}>
        {skillsData.map((skill) => (
          <Card className={`${classes.card} ${classes.slideEffect}`} key={skill.title}>
            <CardContent>
              <img
                src={skillImages[skill.title]}
                alt={skill.title}
                className={classes.skillImage}
              />
              <Typography
                variant="h6"
                component="div"
                align="center"
                className={`${classes.skillTitle} ${classes.fadeInEffect}`}
              >
                {skill.title}
              </Typography>
              <Typography
                variant="body2"
                align="center"
                className={classes.skillDescription}
              >
                {skill.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </section>
  );
};

export default Skills;
