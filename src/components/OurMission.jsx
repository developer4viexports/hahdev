import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import sampleImage from "../assets/images/About/low-angle-shot-facade-white-modern-building-blue-clear-sky.png";

export default function OurMission() {
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
                >
                    {/* IMAGE (Left on larger screens, top on mobile) */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={sampleImage}
                            alt="Beautiful Property"
                            sx={{
                                width: "100%",
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
                                },
                            }}
                        >
                            Our Mission
                        </Typography>

                        <Typography paragraph>
                            At Home Away From Home Developments Inc. our mission is to redefine luxury in property management and hospitality. As a premier Airbnb host and property management company, we transform every stay into a luxurious retreat—a true home away from home.
                        </Typography>

                        <Typography paragraph>
                            Partnering with us means collaborating with a team that is passionate about unlocking the full potential of every property. We pride ourselves on a proactive mindset, meticulous attention to detail, and a steadfast commitment to exceptional service.
                        </Typography>

                        <Typography paragraph>
                            Our comprehensive property management and maintenance offerings are tailored to meet the unique needs of property owners. To learn more about how we can elevate your property, explore our Property Management & Maintenance services. If you’re interested in listing your property with us, please visit our Our Properties page, or connect with our dedicated team via our Contact page.
                        </Typography>

                        {/* <Typography paragraph>
                            Let The Home Away From Home Developments Inc. manage your rental, so you can relax and focus on what
                            matters most.
                        </Typography> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
