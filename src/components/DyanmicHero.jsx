import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Tabs,
  Tab,
} from "@mui/material";


function DyanmicHero({ heading, subheading, heroImg }) {
  console.log("-=-=-=-=-=-=-=hriImg", heroImg);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "40vh", md: "100vh" },
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        borderBottomRightRadius: "10%",
        backgroundColor: "#fff"
      }}
    >
      {/* Semi-transparent overlay for better text contrast */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          // backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            mb: 1,
            // Responsive font sizes
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "3rem",
            },
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            mb: 1,
            // Responsive font sizes
            fontSize: {
              xs: "1.5rem",
              sm: "1rem",
              md: "2.5rem",
            },
          }}
        >
          {subheading}
        </Typography>
      </Box>
    </Box>
  )
}

export default DyanmicHero