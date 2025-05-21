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
import img1 from "../assets/images/service1.jpg";
import img2 from "../assets/images/service2.jpg";
import img3 from "../assets/images/service3.jpg";

// Sample blog post data
const posts = [
  {
    id: 1,
    title: "Why Niagara Falls is a Hotspot for STR & Investment Properties",
    date: "June 20, 2022",
    author: "admin",
    commentsCount: 1,
    image: img1,
  },
  {
    id: 2,
    title: "The Importance of Professional Property Management for Hosts",
    date: "June 20, 2022",
    author: "admin",
    commentsCount: 1,
    image: img2,
  },
  {
    id: 3,
    title: "Short-Term vs. Long-Term Rentals: Which One is More Profitable?",
    date: "June 20, 2022",
    author: "admin",
    commentsCount: 1,
    image: img3,
  },
];

export default function LatestPostsSection() {
  return (
    <Box component="section" sx={{ backgroundColor: "#f9f9f9", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Overline + Heading */}
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
          {posts.map((post) => (
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
                {/* Image + Date Badge */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  {/* Date Badge in top-right corner */}
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
                    }}
                  >
                    {post.date}
                  </Box>
                </Box>

                {/* Card Content */}
                <CardContent sx={{ p: 2, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  {/* Meta: Comments, author */}
                  <Typography variant="caption" sx={{ color: "#999" }}>
                    {post.commentsCount} Comments
                    <span style={{ margin: "0 6px" }}>•</span>
                    by: {post.author}
                  </Typography>

                  {/* Post Title */}
                  <Typography variant="h6" sx={{ fontWeight: 600, mt: 1, mb: 2 }}>
                    {post.title}
                  </Typography>

                  {/* Read More Link */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      color: "#000",
                      fontSize: "0.875rem",
                      mt: "auto",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      READ MORE
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
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
