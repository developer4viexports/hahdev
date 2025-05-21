import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

export default function AboutUs({ data, direction = 'row', image }) {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 }, // Vertical padding (smaller on mobile, larger on desktop)
        px: { xs: 2, sm: 4 }, // Horizontal padding
        backgroundColor: "#f9f9f9", // Example background; customize or remove
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }} // More spacing on desktop
          alignItems="center"
          direction={{ xs: "column", md: direction }}
        >
          {/* IMAGE (Left on larger screens, top on mobile) */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={image}
              alt="Beautiful Property"
              sx={{
                width: "100%",
                maxHeight: { sx: "300px", md: "400px" },
                borderRadius: 2, // Rounded corners
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* TEXT (Right on larger screens, bottom on mobile) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "1.75rem", // Slightly smaller on mobile
                  sm: "2rem",
                  md: "2rem"
                },
              }}
            >
              {data?.heading}
            </Typography>

            <Typography paragraph>
              {data?.sub1}
            </Typography>

            <Typography paragraph>
              {data?.sub2}
            </Typography>

            <Typography paragraph>
              {data?.sub3}
            </Typography>

            <Typography paragraph>
              {data?.sub4}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
