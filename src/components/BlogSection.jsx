import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Divider,
} from "@mui/material";
// Your images for each service
import img1 from "../assets/images/Blog_1.png";
import img2 from "../assets/images/Blog_2.png";
import img3 from "../assets/images/Blog_3.png";
import img4 from "../assets/images/Blog_4.png";
import img5 from "../assets/images/Blog_5.png";

// Sample blog data
const posts = [
    {
        title: "Why Ontario is a Hotspot for STR & Investment Properties",
        time: "4 Min",
        date: "August 19, 2022",
        image: img1, // Ensure the file is in the public folder
        link: "/blog/ontario-hotspot-str-investment",
    },
    {
        title: "The Importance of Professional Property Management for Hosts",
        time: "4 Min",
        date: "August 19, 2022",
        image: img2, // Ensure the file is in the public folder
        link: "/blog/professional-property-management",
    },
    {
        title: "Short‑Term vs. Long‑Term Rentals: Which One is More Profitable?",
        time: "4 Min",
        date: "August 19, 2022",
        image: img3, // Ensure the file is in the public folder
        link: "/blog/short-vs-long-term-rentals",
    },
    {
        title: "Airbnb Hosting – The Ultimate Guide",
        time: "4 Min",
        date: "August 19, 2022",
        image: img4, // Ensure the file is in the public folder
        link: "/blog/airbnb-hosting-guide",
    },
    {
        title: "Mistakes New Airbnb Hosts Make & How to Avoid them",
        time: "4 Min",
        date: "August 19, 2022",
        image: img5, // Ensure the file is in the public folder
        link: "/blog/airbnb-host-mistakes",
    },
];


export default function BlogSection() {
    return (
        <Box sx={{ backgroundColor: "#000", py: { xs: 4, md: 8 } }}>
            <Container maxWidth="lg">
                {posts.map((post, idx) => (
                    <Box key={idx} sx={{ width: "100%" }}>
                        {/* Divider between posts (not before the first) */}
                        {idx > 0 && <Divider sx={{ borderColor: "#333" }} />}

                        <Grid
                            container
                            alignItems="flex-start"
                            spacing={2}
                            sx={{ py: 2, flexDirection: { xs: "column", md: "row" } }}
                        >
                            {/* Image */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    component="img"
                                    src={post.image}
                                    alt={post.title}
                                    sx={{ width: "100%", height: "auto", borderRadius: 1 }}
                                />
                            </Grid>

                            {/* Content: title/date at top-start, Read More at bottom-start */}
                            <Grid
                                item
                                xs={12}
                                md={8}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%",
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{ color: "#fff", fontWeight: 500, mb: 1 }}
                                    >
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#aaa", mb: 1 }}>
                                        {post.time} &bull; {post.date}
                                    </Typography>
                                </Box>

                                <Button
                                    href={post.link}
                                    variant="text"
                                    sx={{
                                        color: "#fff",
                                        textTransform: "none",
                                        p: 0,
                                        fontSize: "0.875rem",
                                        fontWeight: 500,
                                        alignSelf: "flex-start",
                                        "&:hover": { backgroundColor: "transparent", color: "#ddd" },
                                    }}
                                >
                                    READ MORE &rarr;
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                ))}

                {/* See More Button */}
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            borderRadius: 1,
                            px: 4,
                            py: 1,
                            "&:hover": { backgroundColor: "#f0f0f0" },
                        }}
                    >
                        SEE MORE
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
