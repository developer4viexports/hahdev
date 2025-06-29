import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Divider,
    useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import blogData from "../data/blogData";

export default function BlogSection() {
    const isMobile = useMediaQuery("(max-width:900px)");
    const BLOGS_PER_PAGE = 9;
    const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

    const handleSeeMore = () => {
        setVisibleCount((prev) => prev + BLOGS_PER_PAGE);
    };

    const visibleBlogs = blogData.slice(0, visibleCount);

    return (
        <Box component="section" sx={{ background: "#000", py: { xs: 4, md: 8 } }}>
            <Container>
                <Typography
                    component="h1"
                    variant="h4"
                    color="#fff"
                    mb={4}
                    fontWeight={700}
                    textAlign="center"
                >
                    Latest Blog Posts
                </Typography>

                {visibleBlogs.map((post, idx) => (
                    <React.Fragment key={post.id}>
                        {idx !== 0 && <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: "#222" }} />}

                        <article
                            itemScope
                            itemType="https://schema.org/BlogPosting"
                        >
                            <Grid
                                container
                                spacing={4}
                                alignItems="center"
                                direction={isMobile ? "column" : "row"}
                                sx={{
                                    mb: { xs: 3, md: 6 },
                                    p: { xs: 2, md: 0 },
                                    borderRadius: 2,
                                    background: "#111",
                                    boxShadow: 2,
                                }}
                            >
                                <Grid item xs={12} md={4}>
                                    <Box
                                        component="img"
                                        src={post.image}
                                        alt={post.title}
                                        itemProp="image"
                                        sx={{
                                            width: "100%",
                                            borderRadius: 2,
                                            boxShadow: 2,
                                            maxHeight: 220,
                                            objectFit: "cover",
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={8}>
                                    <header>
                                        <Typography
                                            variant="h6"
                                            component={RouterLink}
                                            to={`/view-blog/${post.id}`}
                                            itemProp="headline"
                                            sx={{
                                                fontWeight: 600,
                                                color: "#42a5f5",
                                                textDecoration: "none",
                                                "&:hover": { textDecoration: "underline" }
                                            }}
                                        >
                                            {post.title}
                                        </Typography>
                                    </header>

                                    <Typography variant="body2" color="#aaa" mb={1}>
                                        <time dateTime={post.date} itemProp="datePublished">
                                            {post.time} • {post.date}
                                        </time>
                                    </Typography>

                                    <Typography variant="body1" color="#ccc" mb={2} itemProp="description">
                                        {post.excerpt}
                                    </Typography>

                                    <Button
                                        component={RouterLink}
                                        to={`/view-blog/${post.id}`}
                                        variant="contained"
                                        sx={{
                                            color: "#fff",
                                            background: "linear-gradient(90deg, #1e88e5 0%, #42a5f5 100%)",
                                            textTransform: "none",
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            px: 3,
                                            py: 1,
                                            boxShadow: 1,
                                            "&:hover": {
                                                background: "linear-gradient(90deg, #1565c0 0%, #1e88e5 100%)",
                                            },
                                        }}
                                    >
                                        READ MORE &rarr;
                                    </Button>
                                </Grid>
                            </Grid>
                        </article>
                    </React.Fragment>
                ))}

                {visibleCount < blogData.length && (
                    <Box textAlign="center" mt={6}>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={handleSeeMore}
                            sx={{
                                borderColor: "#42a5f5",
                                color: "#42a5f5",
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 4,
                                py: 1,
                                "&:hover": {
                                    background: "#1e88e5",
                                    color: "#fff",
                                    borderColor: "#1e88e5",
                                },
                            }}
                        >
                            SEE MORE
                        </Button>
                    </Box>
                )}
            </Container>
        </Box>
    );
}
