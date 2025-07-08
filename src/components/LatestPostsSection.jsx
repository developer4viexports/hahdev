import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogData";

export default function LatestPostsSection() {
  const navigate = useNavigate();

  // Get the latest 3 blog posts
  const latestPosts = blogData.slice(0, 3);

  return (
    <Box component="section" sx={{ backgroundColor: "#f9f9f9", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              fontSize: "0.875rem",
              color: "#666",
              textTransform: "none",
              mb: 1,
            }}
          >
            OUR BLOG
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
            Our Latest Posts
          </Typography>
        </Box>

        {/* Posts Grid */}
        <Grid container spacing={4}>
          {latestPosts.map((post) => (
            <Grid key={post.id} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 1,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Image with date badge */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "#000",
                      color: "#fff",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      fontSize: "0.75rem",
                    }}
                  >
                    {post.date}
                  </Box>
                </Box>

                {/* Post Content */}
                <CardContent sx={{ p: 2, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <Typography variant="caption" sx={{ color: "#999" }}>
                    {post.time}
                    <span style={{ margin: "0 6px" }}>•</span>
                    by: HAH Property Management
                  </Typography>

                  <Typography 
                    variant={latestPosts.indexOf(post) === 0 ? "body1" : "h6"} 
                    sx={{ 
                      fontWeight: 600, 
                      mt: 1, 
                      mb: 2,
                      fontSize: latestPosts.indexOf(post) === 0 ? "1rem" : "1.25rem"
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                    {post.excerpt}
                  </Typography>

                  <Box
                    onClick={() => navigate("/blog")}
                    sx={{
                      mt: "auto",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                      cursor: "pointer",
                      fontWeight: 500,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    <Typography variant="body2">READ MORE</Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bold", ml: 1 }}>
                      →
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* SEE MORE Button */}
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/blog")}
            sx={{
              borderRadius: 2,
              backgroundColor: "#000",
              color: "#fff",
              px: 4,
              py: 1.2,
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            SEE MORE
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
