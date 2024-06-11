import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const featuredDestinations = [
  { id: 1, name: 'Paris', price: 1299.99, image: '/images/paris.jpg' },
  { id: 2, name: 'Bali', price: 999.99, image: '/images/bali.jpg' },
  { id: 3, name: 'New York', price: 1099.99, image: '/images/nyc.jpg' },
];

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to TravelBlog
          </Typography>
          <Typography variant="h6" component="p">
            Discover amazing destinations and travel tips!
          </Typography>
          <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
            Subscribe
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here.
              </DialogContentText>
              <TextField autoFocus margin="dense" label="Email Address" type="email" fullWidth variant="standard" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination) => (
            <Grid item key={destination.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {destination.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From ${destination.price.toFixed(2)}
                  </Typography>
                  <Button href={`/shop/${destination.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Travel Tips
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Here are some helpful tips for your next adventure:
        </Typography>
        <ul>
          <li>Research your destination before you go.</li>
          <li>Pack light and bring only the essentials.</li>
          <li>Stay hydrated and take breaks during long trips.</li>
          <li>Learn a few basic phrases in the local language.</li>
          <li>Be respectful of local customs and traditions.</li>
        </ul>
      </Container>

      <Container sx={{ py: 8 }}>
  <Typography variant="h4" component="h2" gutterBottom>
    Gallery
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={4}>
      <img src="/images/g1.jpg" alt="Gallery 1" style={{ width: '100%', borderRadius: '8px' }} />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <img src="/images/g2.jpg" alt="Gallery 2" style={{ width: '100%', borderRadius: '8px' }} />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <img src="/images/g3.jpg" alt="Gallery 2" style={{ width: '100%', borderRadius: '8px' }} />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <img src="/images/g4.jpg" alt="Gallery 2" style={{ width: '100%', borderRadius: '8px' }} />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <img src="/images/g5.jpg" alt="Gallery 2" style={{ width: '100%', borderRadius: '8px' }} />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <img src="/images/g6.jpg" alt="Gallery 2" style={{ width: '100%', borderRadius: '8px' }} />
    </Grid>
  </Grid>
</Container>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Discover More
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Explore our blog for more travel stories and inspiration!
        </Typography>
        <Button href="/blog" variant="contained" color="primary" sx={{ mt: 2 }}>
          Explore Blog
        </Button>
      </Container>

      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="body1" component="p">
            &copy; {new Date().getFullYear()} TravelBlog. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
