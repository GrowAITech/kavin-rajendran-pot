import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // Import the Resume icon
import './Header.css';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Kavin Rajendran
          </Typography>

          {/* Main navigation buttons */}
          <div className="nav-buttons">
            {['About', 'Skills', 'Projects', 'Contact'].map((text) => (
              <ScrollLink key={text} to={text.toLowerCase()} smooth={true}>
                <Button className="animated-button" sx={{ color: "#fff" }}>{text}</Button>
              </ScrollLink>
            ))}

          

            {/* Menu button to open dropdown for additional options */}
            <Button
              onClick={handleMenuClick}
              className="animated-button"
              sx={{ color: "#fff" }}
            >
              <MenuIcon />
            </Button>

            {/* Dropdown menu for additional links */}
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem component="a" href="/Resume.pdf" download="Kavin_Resume">
                <PictureAsPdfIcon style={{ marginRight: '8px' }} /> Resume
              </MenuItem>
              <MenuItem component="a" href="https://github.com/kavin888-coder" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ marginRight: '8px' }} /> GitHub
              </MenuItem>
              <MenuItem component="a" href="https://www.linkedin.com/in/kavin-rajendran-b47919252/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ marginRight: '8px' }} /> LinkedIn
              </MenuItem>
              <MenuItem component="a" href="https://www.instagram.com/kongu_kavin._/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ marginRight: '8px' }} /> Instagram
              </MenuItem>
            </Menu>
          </div>

          {/* Hamburger menu for mobile screens */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div style={{ width: 250 }} role="presentation">
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
          <List>
            {/* Main navigation items */}
            {['About', 'Skills', 'Projects', 'Contact'].map((text) => (
              <ListItem button key={text} onClick={toggleDrawer(false)}>
                <ScrollLink to={text.toLowerCase()} smooth={true}>
                  <ListItemText primary={text} />
                </ScrollLink>
              </ListItem>
            ))}
            {/* Additional options in the drawer */}
            <ListItem button component="a" href="/Resume.pdf" download="Kavin_Resume" onClick={toggleDrawer(false)}>
              <ListItemText primary="Resume" />
            </ListItem>
            <ListItem button component="a" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" onClick={toggleDrawer(false)}>
              <ListItemText primary="GitHub" />
            </ListItem>
            <ListItem button component="a" href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" onClick={toggleDrawer(false)}>
              <ListItemText primary="LinkedIn" />
            </ListItem>
            <ListItem button component="a" href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" onClick={toggleDrawer(false)}>
              <ListItemText primary="Instagram" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
