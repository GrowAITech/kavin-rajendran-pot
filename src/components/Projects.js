import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Box,
  List,
  ListItem,
} from '@mui/material';

// Import local images (ensure the correct path and file extensions)
import butcherShopImage from '../assets/projects/butchershop/image1.png'; // Replace with actual image URL
import projectImage2 from '../assets/projects/Ecom/image1.png'; // Replace with actual image URL
import projectImage3 from '../assets/projects/hms/image1.png'; // Replace with actual image URL

// Sample projects data with images
const projects = [
  {
    title: 'Project 1',
    description: 'Custom ERP System for Kongu Kari Kadai',
    imageUrl: butcherShopImage, // Use imported image
    details: [
      { label: 'Project Overview', content: `I have successfully developed a specialized Enterprise Resource Planning (ERP) system tailored for Kongu Kari Kadai, a renowned butcher shop 🥩. This project was driven by the need to enhance operational efficiency and streamline business processes.` },
      { label: 'Technologies Used', content: `Frontend: React.js, Backend: Node.js, Database: MongoDB.` },
      { label: 'Key Features', content: [
          '💳 Real-time Billing: Instantly generate invoices, manage transactions, and track payments.',
          '📦 Inventory Management: Monitor stock levels, track expiration dates, and receive timely reorder notifications.',
          '📊 Dashboard Overview: A user-friendly dashboard providing valuable insights into sales trends and inventory status.',
          '📈 Sales Reporting: Generate detailed reports to monitor business growth and KPIs.',
          '👥 Customer Management: Efficiently manage customer data and order histories.',
          '📅 Order Tracking: Keep track of customer orders from placement to delivery.',
          '🔔 Notification System: Alerts for low inventory levels and important updates.',
          '📈 Performance Analytics: Comprehensive analytics to evaluate sales performance.',
          '🛠️ User Roles and Permissions: Define roles for users ensuring secure access.',
          '💼 Custom Reporting Tools: Customizable report generation tools.',
        ],
      },
      { label: 'Development Process', content: [
          'Requirements Gathering: Collaborated with the business owner to identify key requirements.',
          'System Design: Developed wireframes and flowcharts.',
          'Implementation: Built frontend and backend components.',
          'Testing: Conducted thorough testing.',
          'Deployment: Successfully deployed the ERP system with staff training.',
        ],
      },
      { label: 'Outcome', content: `Delivered a fully functional ERP system that streamlines operations, boosts productivity, and supports long-term growth for Kongu Kari Kadai.` },
    ],
    gallery: [
      butcherShopImage,
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/008000',
    ],
  },
  {
    title: 'Project 2',
    description: 'Project 2 Description',
    imageUrl: projectImage2, // Use the correct image
    details: [
      { label: 'Project Overview', content: 'Full details about Project 2 including its features and technologies.' },
    ],
    gallery: [
      projectImage2,
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/FFFF00',
    ],
  },
  {
    title: 'Project 3',
    description: 'Project 3 Description',
    imageUrl: projectImage3, // Use the correct image
    details: [
      { label: 'Project Overview', content: 'Full details about Project 3 including its features and technologies.' },
    ],
    gallery: [
      projectImage3,
      'https://via.placeholder.com/150/FF00FF',
      'https://via.placeholder.com/150/00FFFF',
    ],
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <section>
      <Container>
        <Box
          sx={{
            backgroundColor: '#034e99', // Dark blue background
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
          <Typography variant="h4" align="center">
            My Projects
          </Typography>
        </Box>
        <Grid2 container spacing={4}>
          {projects.map((project, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <Card onClick={() => handleOpen(project)} style={{ cursor: 'pointer' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={project.title} // Descriptive alt text relevant to the project
                />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
  
      {/* Modal for project details */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            overflowY: 'auto',
            maxHeight: '90vh',
          }}
        >
          {selectedProject && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedProject.title}
              </Typography>
              {selectedProject.details.map((detail, index) => (
                <Box key={index} marginBottom={2}>
                  <Typography variant="h6" color="primary">{detail.label}</Typography>
                  {Array.isArray(detail.content) ? (
                    <List>
                      {detail.content.map((item, idx) => (
                        <ListItem key={idx} disablePadding>
                          <Typography variant="body1">{item}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="body1">{detail.content}</Typography>
                  )}
                </Box>
              ))}
              <Grid2 container spacing={2}>
                {selectedProject.gallery.map((image, idx) => (
                  <Grid2 item xs={12} sm={4} key={idx}>
                    <img
                      src={image}
                      alt={selectedProject.title} // Use the project title for context
                      style={{ width: '100%', borderRadius: '8px' }}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </>
          )}
        </Box>
      </Modal>
    </section>
  );
  
};

export default Projects;
