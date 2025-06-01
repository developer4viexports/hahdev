import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
} from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import logo from "../assets/images/HAH_White_logo.png";
import { Link } from "react-router-dom";
import { WhatsApp } from "@mui/icons-material";

export default function Footer({ bgImg }) {
    return (
        <Box component="footer" sx={{ backgroundColor: "#000", color: "#fff" }}>
            {/* Banner + cards */}
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    py: { xs: 4, md: 10 },
                    minHeight: { xs: "65vh", md: "50vh" },
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        position: "absolute",
                        bottom: { xs: "-60%", md: "-40%" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        px: { xs: 1, sm: 4 },
                        width: "100%",
                    }}
                >
                    <Grid
                        container
                        alignItems="stretch"
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 2, md: 0 }}
                    >
                        {/* Contact Info Card */}
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    backgroundColor: "#636363",
                                    borderRadius: "6px 40px 6px 6px",
                                    p: { xs: 3, sm: 4 },
                                    color: "#F5E9D6",
                                    height: "100%",
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: { xs: 0, md: 3 }, fontWeight: 500 }}>
                                    Let’s connect
                                </Typography>
                                <Typography sx={{ mb: 1 }}>
                                    <strong>Phone</strong>
                                    <br />
                                    <a
                                        href="tel:+17054658787"
                                        style={{ color: "#F5E9D6", textDecoration: "none", cursor: "pointer" }}
                                    >
                                        +1 705 465 8787
                                    </a>
                                </Typography>

                                <Typography sx={{ mb: 1 }}>
                                    <strong>Email</strong>
                                    <br />
                                    <a
                                        href="mailto:enquiry@thehah.ca"
                                        style={{ color: "#F5E9D6", textDecoration: "none", cursor: "pointer" }}
                                    >
                                        enquiry@thehah.ca
                                    </a>
                                </Typography>

                                <Typography sx={{ mb: 2 }}>
                                    <strong>Address</strong>
                                    <br />
                                    <a
                                        href="https://maps.google.com?q=4635+Queen+St+Niagara+Falls+ON+L2E+2L7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: "#F5E9D6",
                                            textDecoration: "none",
                                            display: "inline-block",
                                            mt: 0.5,
                                            fontSize: '0.95rem',
                                            lineHeight: 1.5
                                        }}
                                    >
                                      Head Office - 4635 Queen St, Niagara Falls, ON L2E 2L7<br />
                                    </a>
                                    <a
                                        href="https://maps.app.goo.gl/UwpEPwci2EoBoyQk7?g_st=i&utm_campaign=ac-im"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: "#F5E9D6",
                                            textDecoration: "none",
                                            display: "inline-block",
                                            mt: 0.5,
                                            fontSize: '0.95rem',
                                            lineHeight: 1.5
                                        }}
                                    >
                                      Branch Office - 6725 Millcreek Dr Unit 1, Mississauga, ON L5N 5V3, Canada<br />
                                    </a>
                                </Typography>

                                <Box display="flex" mt={2}>
                                    <IconButton
                                        component="a"
                                        href="https://www.facebook.com/share/1ASUUXUgHf/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="small"
                                        sx={{ color: "#F5E9D6" }}
                                    >
                                        <Facebook fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                        component="a"
                                        href="https://www.instagram.com/thehah.ca/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="small"
                                        sx={{ color: "#F5E9D6" }}
                                    >
                                        <Instagram fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                        component="a"
                                        href="https://wa.me/17054658787"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="small"
                                        sx={{ color: "#F5E9D6" }}
                                    >
                                        <WhatsApp fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                        {/* Contact Form */}
                        <Grid item xs={12} md={7}>
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    borderRadius: "6px 6px 50px 6px",
                                    p: { xs: 2, sm: 4 },
                                    minHeight: { xs: "auto", md: "100%" },
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: { xs: 0, md: 3 }, fontWeight: 500, fontSize: { xs: "20px" } }}>
                                    We’d love to hear from you
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField fullWidth label="Email" variant="standard" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            multiline
                                            rows={1}
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="I accept the Terms and conditions"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#000",
                                                color: "#fff",
                                                "&:hover": { backgroundColor: "#222" },
                                            }}
                                        >
                                            SEND
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* Bottom legal text */}
            <Box
                sx={{
                    py: { xs: 2, md: 4 },
                    px: 2,
                    textAlign: "center",
                    display: "flex",
                    alignItems: { xs: "end", md: "flex-end" },
                    minHeight: { xs: "710px", md: "42vh" }
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "space-between",
                            gap: { xs: 4, md: 0 },
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
                                our team will reach out to you shortly. Thank you for
                                choosing us.
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
                    <Typography variant="caption" color="white" sx={{ mt: 2 }}>
                        © 2025 Home Away From Home Developments INC. · Premier Airbnb Hosting
                        & Property Management.<br /> All Rights Reserved.


                    </Typography>

                </Container>
            </Box>

            {/* Bottom legal text */}
            <Box
                sx={{
                    py: { xs: 2, md: 4 },
                    px: 2,
                    textAlign: "center",
                    display: "flex",
                    alignItems: { xs: "end", md: "flex-end" },
                    minHeight: { xs: "20px", md: "1vh" },
                    pb: { xs: 8, md: 0 }   // 64px padding on xs, 0 on md+
                }}
            >
                {/* …your content here… */}
            </Box>








        </Box >
    );
}

