import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const teamMembers = [
  { name: 'Tarik Dautovic', position: 'Travel Guide', image: '/images/guide1.jpg' },
  { name: 'Kasim Besic', position: 'Travel Blogger', image: '/images/blogger1.jpg' },
  { name: 'Amila Mehic', position: 'Photographer', image: '/images/photographer1.jpg' },
];

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            About TravelBlog
          </Typography>
          <Typography variant="h6" component="p">
            We are passionate about exploring the world and sharing our experiences with you.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.position}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
