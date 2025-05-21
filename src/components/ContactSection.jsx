import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import imageSrc from "../assets/images/contactUs.jpg"; // replace with your image path

export default function ContactSection() {
    return (
        <Box sx={{ backgroundColor: "#f5f5f5", py: { xs: 0, md: 12 } }}>
            {/* Header */}
            <Container maxWidth="md" sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' }, mb: 2, mt: 6 }}
                >
                    CONTACT US
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                    We're always here to answer your questions.
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                    Reach out and we'll get back to you as soon as possible.
                </Typography>
            </Container>

            {/* Content */}
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={imageSrc}
                            alt="Contact Us"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderBottomLeftRadius: { xs: 0, md: '80px' },
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                            }}
                        />
                    </Grid>

                    {/* Details */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                // backgroundColor: '#fff',
                                borderRadius: { xs: 0, md: 2 },
                                p: { xs: 3, md: 6 },
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h3"
                                sx={{ fontWeight: 600, mb: 3 }}
                            >
                                Reach Us
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                                <PhoneIcon fontSize="small" />
                                <Typography variant="body1">
                                    Phone : &nbsp;
                                    <Link href="tel:+17054658787" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                                        +1 705 465 8787
                                    </Link>
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                                <EmailIcon fontSize="small" />
                                <Typography variant="body1">
                                    Email : &nbsp;
                                    <Link href="mailto:enquiry@thehah.ca" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                                        enquiry@thehah.ca
                                    </Link>
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1, gap: 1 }}>
                                <LocationOnIcon fontSize="small" sx={{ mt: 0.2 }} />
                                <Box>
                                    <Typography variant="body1" sx={{ display: 'inline', fontWeight: 500 }}>
                                        Address : &nbsp;
                                    </Typography>
                                    <Typography variant="body1" sx={{ display: 'inline', color: '#333' }}>
                                        4635 Queen St Niagara Falls, ON L2E 2L7
                                    </Typography>
                                    <br />
                                    <Link
                                        href="https://maps.google.com?q=4635+Queen+St+Niagara+Falls+ON+L2E+2L7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ fontSize: '0.875rem', color: '#777', textDecoration: 'underline', mt: 0.5, display: 'inline-block' }}
                                    >
                                        Open in Google maps
                                    </Link>
                                </Box>
                            </Box>

                            {/* Social Icons */}
                            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                                <IconButton href="#" sx={{ color: '#555' }}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton href="#" sx={{ color: '#555' }}>
                                    <YouTubeIcon />
                                </IconButton>

                                <IconButton href="#" sx={{ color: '#555' }}>
                                    <WhatsAppIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
