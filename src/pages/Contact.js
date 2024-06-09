import React from 'react';
import { Typography, Box, Container, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundImage: 'url(/images/contact-bg.jpg)', backgroundSize: 'cover', py: 8, textAlign: 'center' }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          We would love to hear from you!
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
