import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// import cohostImage from "../assets/images/cohosting.jpg";  // replace with your image path

export default function CoHostingSection({ coHosting }) {
    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 6, md: 12 } }}>
            <Container maxWidth="lg">
                <Grid container alignItems="center" spacing={4} >
                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={coHosting}
                            alt="Airbnb Co-Hosting"
                            sx={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: 2,
                                borderBottomLeftRadius: { xs: 2, md: "80px" },
                            }}
                        />
                    </Grid>

                    {/* Text */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, mb: 3, lineHeight: { xs: 1.3, md: 1.4 }, fontSize: { xs: "22px", md: "2rem" } }}
                        >
                            Airbnb Co-Hosting (Remote Coordination) Expert Management. Global Listings.
                            Local Execution.
                        </Typography>
                        <Typography paragraph>
                            At Home Away From Home Developments Inc. we specialize in Airbnb Co-Hosting Services that allow property owners across the globe to manage their short-term rentals with complete confidence—without being physically present.
                        </Typography>
                        <Typography paragraph>
                            Whether you own a vacation rental in Toronto, Dubai, Bali, or beyond, we remotely coordinate every aspect of your Airbnb listing to deliver a seamless hosting experience and maximize your returns.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
