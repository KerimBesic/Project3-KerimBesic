import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, styled } from '@mui/material/styles';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to="/">TravelBlog</StyledLink>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <List sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ListItem button component={StyledLink} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={StyledLink} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={StyledLink} to="/shop">
              <ListItemText primary="Shop" />
            </ListItem>
            <ListItem button component={StyledLink} to="/blog">
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button component={StyledLink} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <StyledList>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/shop">
            <ListItemText primary="Shop" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/blog">
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </StyledList>
      </StyledDrawer>
    </Box>
  );
};

export default Navbar;
