import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import logo from "../assets/images/HAH_White_logo.png";

function Footer2() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#000",
        px: { xs: "10px", md: "50px" },
        pt: "64px",
        pb: "64px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 0 },       // increased mobile gap to 32px
            paddingBottom: "30px",
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant={{ xs: "body2", md: "body1" }}
              color="white"
            >
              HOME AWAY FROM HOME DEVELOPMENTS INC.
              <br />
            </Typography>
            <Typography
              variant="caption"
              color="white"
              sx={{ mt: 2 }}
            >
              To contact us, kindly complete the form below, and a member of
              our team will reach out to you shortly. Thank you for choosing.
            </Typography>
          </Box>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: { xs: 40, md: 50 },
              width: "auto",
              maxWidth: { xs: 180, md: 250 },
              mx: { xs: "auto", md: 0 },
              display: "block",
              scale: { xs: 1.8, md: 1 },  // changed from 0 → 1 for desktop visibility
            }}
          />
        </Box>


        <Typography
          variant="caption"
          color="white"
          sx={{ mt: { xs: 4, md: 2 } }}  // increased top margin on mobile to 32px
        >
          © 2025 Home Away From Home Developments INC. · Premier Airbnb Hosting
          & Property Management.<br /> All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer2;
