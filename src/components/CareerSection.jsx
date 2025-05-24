import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import logo from "../assets/images/HAH_White_logo.png";
import bg from "../assets/images/hero.png"


const regions = [
  { value: "north-america", label: "North America" },
  { value: "europe", label: "Europe" },
  { value: "asia", label: "Asia" },
];

export default function CareerSection() {
  const [region, setRegion] = useState("");

  return (
    <Box>
      {/* Banner */}
      <Box
        sx={{
          height: { xs: 200, md: 300 },
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: "#fff", fontWeight: 700, letterSpacing: 2 }}
        >
          CAREER
        </Typography>
      </Box>

      {/* Form */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: 600, mb: { xs: 3, md: 4 } }}
            >
              Want to Work with us?
            </Typography>

            <Grid container spacing={3}>
              {/* First + Last Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First Name *"
                  placeholder="Enter First Name..."
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last Name *"
                  placeholder="Enter Last Name..."
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Email + Phone */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email *"
                  placeholder="Enter Email..."
                  variant="outlined"
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone No. *"
                  placeholder="Enter Phone No..."
                  variant="outlined"
                  required
                  type="tel"
                />
              </Grid>

              {/* Region (full width) */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="What region are you applying for? *"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  variant="outlined"
                  required
                >
                  {regions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Position (full width) */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Write about what position you are applying for? *"
                  placeholder="Enter position..."
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Message (full width) */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Message *"
                  placeholder="Write about yourself..."
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                />
              </Grid>

              {/* Apply Now button */}
              <Grid item xs={12}>
                <Box sx={{ textAlign: "center", mt: { xs: 2, md: 4 } }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      textTransform: "none",
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      "&:hover": { backgroundColor: "#222" },
                    }}
                  >
                    Apply Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* No Openings */}
          <Box sx={{ textAlign: "center", mt: { xs: 4, md: 6 } }}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              No New Job Openings.....
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          py: { xs: 2, md: 8 },
          px: 2,
          textAlign: "center",
          // minHeight: { xs: "auto", md: "40vh" },
          display: "flex",
          alignItems: { xs: "end", md: "flex-end" },
          // minHeight: { xs: "750px" },
          backgroundColor: "#000"
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: { xs: 2, md: 0 },
              paddingBottom: "30px",
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant={{ xs: "body2", md: "body1" }}
                color="white"
              >
                HOME AWAY FROM HOME DEVELOPMENTS INC.<br />
              </Typography>
              <Typography
                variant="caption"
                color="white"
                sx={{ mt: 1 }}
              >
                To contact us, kindly complete the form below, and a member of
                our team <br /> will reach out to you shortly. Thank you for
                choosing.
              </Typography>
            </Box>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: { xs: 40, md: 50 },
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Box>
          <Typography variant="caption" color="white" sx={{ mt: 2 }}>
            © 2025 Home Away From Home Developments INC. · Premier Airbnb Hosting
            & Property Management.<br /> All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
