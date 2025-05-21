import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// import offerImage from "../assets/images/offerImage.jpg"; // replace with your image path

const offers = [
    {
        title: "Listing Creation & Optimization:",
        text: "We craft compelling listings with strategic titles, descriptions, and professional visuals that boost visibility and conversions.",
    },
    {
        title: "Dynamic Pricing Strategy:",
        text: "Using intelligent tools, we adjust your rates in real-time based on market trends, demand, and competition—ensuring optimal earnings.",
    },
    {
        title: "24/7 Guest Communication:",
        text: "We handle all inquiries, bookings, and guest support with professionalism and promptness to ensure 5-star reviews.",
    },
    {
        title: "Coordination with On-Ground Teams:",
        text: "We coordinate with the cleaners, maintenance teams, and check-in services to ensure smooth day-to-day operations.",
    },
    {
        title: "Performance Monitoring & Review Management:",
        text: "Regular reporting and feedback analysis help us continuously improve listing performance and guest satisfaction.",
    },
];

export default function WhatWeOfferSection({wosImg}) {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${wosImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 4, md: 8 },
            }}
        >
            {/* Left-half overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: { xs: "100%", md: "50%" },
                    height: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                }}
            />

            <Container
                maxWidth="lg"
                sx={{ position: "relative", zIndex: 1, color: "#fff" }}
            >
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pr: { xs: 0, md: 4 } }}>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
                            >
                                What We Offer
                            </Typography>

                            {offers.map((offer, idx) => (
                                <Box key={idx} sx={{ mb: 3 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
                                    >
                                        {offer.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ lineHeight: 1.6, fontSize: { xs: '0.875rem', md: '1rem' } }}
                                    >
                                        {offer.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    {/* Empty right half just shows background image */}
                    <Grid item xs={12} md={6} />
                </Grid>
            </Container>
        </Box>
    );
}
