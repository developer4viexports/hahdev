import React from "react";
import { Box, Container, Typography, Button, CardMedia } from "@mui/material";

// Example background color and text color
const backgroundColor = "#000";
const textColor = "#fff";

export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor,
        color: textColor,
        py: { xs: 6, md: 10 }, // top/bottom padding
      }}
    >
      <Container maxWidth="lg">
        {/* Wrapper for text + image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          {/* Left Content (Text) */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              About Us
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              At The Home Away From Home Developments Inc., we are dedicated to providing seamless and effective
              property management solutions for both Short-Term & Long-Term
              Rentals. Our mission is to maximize your property's potential
              while ensuring an exceptional guest experience and hassle-free
              ownership for you.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              For Short-Term Rentals, we focus on cleaning, guest communication,
              listing optimization, and maintenance to keep your property fully
              booked and highly rated. Whether you own an apartment, vacation
              home, or luxury estate, our goal is to transform your space into a
              profitable investment without the stress.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              For Long-Term Rentals, our services include tenant screening, rent
              collection, lease management, and reliable maintenance. We handle
              every detail to ensure consistent cash flow and long-term value
              for your property.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              At The Home Away From Home Developments Inc., we believe in building lasting relationships through
              reliability, transparency, and consistent results—because your
              success is our priority. Let us manage your rental so you can
              focus on what matters most!
            </Typography>
          </Box>

          {/* Right Content (Image) */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              image="https://images.pexels.com/photos/2789238/pexels-photo-2789238.jpeg?auto=compress&cs=tinysrgb&w=1600" // Replace with your image
              alt="About us living room"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 4, // small rounding
                // If you want the top-right corner more rounded, try:
                // borderTopRightRadius: 40
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* Callout Box */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            p: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
            color: "#000",
            maxWidth: { xs: "100%", md: 600 },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            We strive to offer you best possible homes to stay.
          </Typography>
          {/* If you want a button or extra text, add here */}
          <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
            Our commitment to quality and service ensures that every property we
            manage is equipped to provide a comfortable, welcoming environment
            for every guest.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
