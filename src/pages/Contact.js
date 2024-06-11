import React, { useState } from 'react';
import { Typography, Box, Container, TextField, Button, Snackbar } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSent(true);
  
      setTimeout(() => {
        setIsSent(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }
  };

  const handleCloseSnackbar = () => {
    setIsSent(false);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundImage: 'url(/images/contact-bg.jpg)', backgroundSize: 'cover', py: 8, textAlign: 'center' }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          We would love to hear from you!
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </form>
        <Snackbar open={isSent} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Message sent successfully!" />
      </Container>
    </Box>
  );
};

export default Contact;
