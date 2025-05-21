import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';

const API_ENDPOINT = `http://localhost:5000/api/contact`;

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: '', message: '' });

    // Basic client-side validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields.' });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log("data", data)
      if (!res.ok) {
        throw new Error(data.error || 'Server Error');
      }

      setFeedback({ type: 'success', message: '✅ Your message has been sent!' });
      setForm({ name: '', email: '', phone: '', subject: '', message: '', terms: false });
    } catch (err) {
      console.error(err);
      setFeedback({ type: 'error', message: '❌ Failed to send. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, md: 8 } }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: '#fff',
            p: { xs: 3, md: 6 },
            borderRadius: 2,
            borderBottomRightRadius: { xs: 2, md: '80px' },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 600, mb: { xs: 3, md: 4 } }}
          >
            We’d love to hear from you
          </Typography>

          {/* Feedback message */}
          {feedback.message && (
            <Typography
              color={feedback.type === 'error' ? 'error' : 'primary'}
              sx={{ mb: 2 }}
            >
              {feedback.message}
            </Typography>
          )}

          <Grid container spacing={4}>
            {/* Name */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Grid>
            {/* Email */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Your Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </Grid>
            {/* Subject */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Message */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Message"
                multiline
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Terms checkbox */}
            <Grid item xs={12}>
              <Box sx={{ borderTop: '1px solid #ccc', pt: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      checked={form.terms}
                      onChange={handleChange}
                    />
                  }
                  label="I accept the Terms and conditions"
                />
              </Box>
            </Grid>

            {/* Submit button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  mt: 1,
                  '&:hover': { backgroundColor: '#222' },
                }}
              >
                {loading ? 'Sending…' : 'SUBMIT'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
