import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function GlobalIntroSection() {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: { xs: 2, md: 3 },
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            lineHeight: 1.4,
          }}
        >
          Your property. Our expertise. Anywhere in the world.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 700,
            mx: "auto",
            fontSize: { xs: "0.95rem", md: "1.125rem" },
            lineHeight: 1.6,
            mb: { xs: 3, md: 4 },
          }}
        >
          Whether you&apos;re a frequent traveler, overseas property owner, or investor managing multiple rentals, Home Away From Home Developments Inc. takes the stress out of hosting. With our remote Airbnb co-hosting service, you gain a dedicated team that runs your property like a local—while you sit back and enjoy the returns.
        </Typography>
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.3)",
            width: { xs: "60%", md: "40%" },
            mx: "auto",
          }}
        />
      </Container>
    </Box>
  );
}
