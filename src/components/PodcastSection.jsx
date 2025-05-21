import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/podcast.png'

// Replace with your actual podcast thumbnails
const podcasts = [
  {
    title: "Podcast Episode 1",
    image: img1,
  },
  {
    title: "Podcast Episode 2",
    image: img1,
  },
  {
    title: "Podcast Episode 3",
    image: img1,
  },
];

function PrevArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: { xs: 8, md: 16 },
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "#fff",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
        zIndex: 1,
        width: { xs: 32, md: 48 },
        height: { xs: 32, md: 48 },
      }}
    >
      <ChevronLeftIcon sx={{ fontSize: { xs: 20, md: 32 } }} />
    </IconButton>
  );
}

function NextArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: { xs: 8, md: 16 },
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "#fff",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
        zIndex: 1,
        width: { xs: 32, md: 48 },
        height: { xs: 32, md: 48 },
      }}
    >
      <ChevronRightIcon sx={{ fontSize: { xs: 20, md: 32 } }} />
    </IconButton>
  );
}

export default function PodcastSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
  };

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: { xs: 3, md: 6 },
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            lineHeight: 1.2,
          }}
        >
          Watch the podcasts to know more <br/>about his inspiring journey
        </Typography>

        <Box sx={{ position: "relative", px: { xs: 2, md: 0 } }}>
          <Slider {...settings}>
            {podcasts.map((pod, idx) => (
              <Box key={idx} sx={{ outline: "none" }}>
                <Box
                  component="img"
                  src={pod.image}
                  alt={pod.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    mx: "auto",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
