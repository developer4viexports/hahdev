import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    Box,
    Container,
    Typography,
    Button,
    Divider,
    Chip,
} from "@mui/material";
import blogData from "../data/blogData";
import Navbar from "./Navbar";
import Footer from "./Footer";

function renderContent(contentArr) {
    return contentArr.map((item, idx) => {
        if (item.type === "heading") {
            return (
                <Typography
                    key={idx}
                    variant="h5"
                    fontWeight={600}
                    mt={4}
                    mb={1}
                    component="h2"
                >
                    {item.text}
                </Typography>
            );
        }
        return (
            <Typography key={idx} variant="body1" paragraph sx={{ color: "#333" }}>
                {item.text}
            </Typography>
        );
    });
}

export default function ViewBlog() {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === id);

    if (!blog) {
        return (
            <>
                <Navbar />
                <Container sx={{ py: 8 }}>
                    <Typography variant="h4" color="error" gutterBottom>
                        Blog Not Found
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        The blog post you are looking for does not exist.
                    </Typography>
                    <Button component={RouterLink} to="/blog" variant="contained" sx={{ mt: 3 }}>
                        Back to Blog
                    </Button>
                </Container>
                <Footer />
            </>
        );
    }

    return (
        <>
            {/* SEO Helmet for this blog post */}
            <Helmet>
                <title>{blog.title} – Home Away From Home Blog</title>
                <meta name="description" content={blog.excerpt} />
                <meta name="keywords" content="rental tips, property management, vacation rentals, Airbnb co-hosting, real estate blog" />
                <link rel="canonical" href={`https://YOUR_DOMAIN/view-blog/${id}`} />

                {/* Open Graph */}
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://YOUR_DOMAIN/view-blog/${id}`} />
                <meta property="og:image" content={blog.image} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.excerpt} />
                <meta name="twitter:image" content={blog.image} />

                {/* JSON-LD Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://YOUR_DOMAIN/view-blog/${id}`
                        },
                        "headline": blog.title,
                        "description": blog.excerpt,
                        "image": blog.image,
                        "author": {
                            "@type": "Person",
                            "name": "Admin"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Home Away From Home Developments Inc.",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://YOUR_DOMAIN/logo.png"
                            }
                        },
                        "datePublished": blog.date
                    })}
                </script>
            </Helmet>

            <Navbar />
            <Box sx={{ background: "#f8fafc", py: { xs: 4, md: 8 }, minHeight: "100vh" }}>
                <Container maxWidth="md">
                    <Button
                        component={RouterLink}
                        to="/blog"
                        variant="outlined"
                        sx={{
                            mb: 3,
                            borderColor: "#1e88e5",
                            color: "#1e88e5",
                            fontWeight: 600,
                            borderRadius: 2,
                            px: 3,
                            py: 1,
                            "&:hover": {
                                background: "#1e88e5",
                                color: "#fff",
                            },
                        }}
                    >
                        ← Back to Blog
                    </Button>

                    <Box
                        component="img"
                        src={blog.image}
                        alt={blog.title}
                        sx={{
                            width: "100%",
                            aspectRatio: "16/9",
                            borderRadius: 3,
                            boxShadow: 3,
                            objectFit: "cover",
                            mb: 4,
                        }}
                    />

                    <Typography variant="h3" fontWeight={700} gutterBottom sx={{ color: "#1e293b" }}>
                        {blog.title}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <Chip label="By Admin" size="small" sx={{ bgcolor: "#e3f2fd", color: "#1976d2" }} />
                        <Typography variant="body2" color="text.secondary">
                            {blog.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            • {blog.time} read
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 3 }} />
                    <Box component="article">{renderContent(blog.content)}</Box>
                    <Divider sx={{ mt: 6, mb: 3 }} />

                    <Box textAlign="center">
                        <Button
                            component={RouterLink}
                            to="/blog"
                            variant="outlined"
                            sx={{
                                borderColor: "#1e88e5",
                                color: "#1e88e5",
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 4,
                                py: 1,
                                "&:hover": {
                                    background: "#1e88e5",
                                    color: "#fff",
                                },
                            }}
                        >
                            Back to Blog
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
