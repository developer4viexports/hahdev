import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// import whyImage from "../assets/images/why-us.jpg"; // swap in your actual image

export default function WhyChooseUs({ points, wcuImag }) {


    return (
        <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 }, backgroundColor: "#f9f9f9" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center" direction={{ xs: "column", md: "row" }}>
                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={wcuImag}
                            alt="Why Choose Us"
                            sx={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: 2,
                                borderBottomLeftRadius: { xs: 2, md: "80px" },
                                borderTopRightRadius: 2,
                                borderBottomRightRadius: 2,
                                borderTopLeftRadius: 2,
                            }}
                        />
                    </Grid>

                    {/* Text */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: "20px", md: "2rem" } }}>
                            Why Choose Home Away from Home Developments Inc.?
                        </Typography>
                        {points.map((pt) => (
                            <Typography key={pt.title} variant="body1" sx={{ mb: 1.5 }}>
                                • <strong>{pt.title}</strong> – {pt.text}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
