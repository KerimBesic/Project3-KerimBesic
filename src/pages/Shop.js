import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const products = [
  { name: 'Mountain Adventure Backpack', description: 'A sturdy backpack designed for rugged mountain trails.', image: '/images/backpack.jpg', price: '$59.99' },
  { name: "Traveler's Notebook", description: 'Perfect for jotting down thoughts and memories on the go.', image: '/images/notebook.jpg', price: '$19.99' },
  { name: 'Vintage World Map Poster', description: 'Decorate your walls with this beautiful vintage world map poster.', image: '/images/poster.jpg', price: '$29.99' },
];

const Shop = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
