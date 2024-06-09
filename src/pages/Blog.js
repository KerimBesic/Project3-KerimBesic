// src/pages/Blog.js
import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const posts = [
  { title: 'Exploring the Amazon Rainforest', content: 'Embark on a journey deep into the heart of the Amazon rainforest and discover its hidden wonders.', image: '/images/amazon.jpg', date: 'June 1, 2024' },
  { title: 'A Foodie\'s Guide to Tokyo', content: 'Indulge your taste buds in the culinary delights of Tokyo with our comprehensive foodie guide.', image: '/images/tokyo.jpg', date: 'June 3, 2024' },
  { title: 'Tips for Solo Travelers', content: 'Navigate the challenges of solo travel with our expert tips and advice for a safe and fulfilling journey.', image: '/images/solo.jpg', date: 'June 5, 2024' },
];

const Blog = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {post.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
