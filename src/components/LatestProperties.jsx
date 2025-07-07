import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/service1.jpg";
import img2 from "../assets/images/service2.jpg";
import img3 from "../assets/images/service3.jpg";
import img4 from "../assets/images/service4.jpg";

export default function LatestProperties() {
  const [selectedCity, setSelectedCity] = React.useState("");

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("xs"));

  const properties = [
    // {
    //   id: 1,
    //   title: "Cozy 2BR Retreat | Family Friendly Close to Falls",
    //   rating: 4.5,
    //   image: img1,
    //   subtext: "Near Niagara Falls | 5 min walk",
    // },
    {
      id: 2,
      title: "Spacious 3BR Loft Downtown",
      rating: 4.8,
      image: img2,
      subtext: "City center convenience, 2 baths",
    },
    {
      id: 3,
      title: "Modern 1BR with Skyline Views, Perfect for Couples",
      rating: 4.7,
      image: img3,
      subtext: "Romantic getaway | Panoramic views",
    },
    {
      id: 4,
      title: "Stylish 2BR Condo Near Falls with Pool",
      rating: 4.6,
      image: img4,
      subtext: "Modern amenities, free parking",
    },
    {
      id: 5,
      title: "Lakefront Cottage Escape with Private Dock",
      rating: 4.9,
      image: img1,
      subtext: "Fishing, kayaking, scenic sunsets",
    },
  ];

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: isMdUp ? 4 : isSmUp ? 2 : 1,
    slidesToScroll: 1,
    arrows: isMdUp,
    dots: !isMdUp,
    centerMode: !isMdUp,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2, arrows: false, dots: true },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1, arrows: false, dots: true },
      },
    ],
  };

  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#fff", color: "#000", paddingBottom: 8 }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          py: { xs: 4, md: 6 },
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{ fontSize: "0.875rem", textTransform: "none", color: "#666" }}
          >
            CHECKOUT OUR NEW
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mt: 1,
              mb: 1,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Latest Listed Properties
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#555", maxWidth: 500, mb: 3 }}
          >
            Discover our latest listings for your next home
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "nowrap", md: "wrap" },
            overflowX: { xs: "auto", md: "visible" },
            gap: 1,
            width: { xs: "100%", md: "auto" },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            whiteSpace: "nowrap",
          }}
        >
          <Button
            component="a"
            href="https://book.thehah.ca/all-listings"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              textDecoration: "none",
              borderRadius: 4,
              backgroundColor: "#000",
              color: "#fff",
              px: { xs: 2, sm: 3 },
              flexShrink: 0,
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Explore listings
          </Button>

          <Button
            component="a"
            href="https://book.thehah.ca/all-listings"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              textDecoration: "none",
              borderRadius: 4,
              borderColor: "#000",
              color: "#000",
              px: { xs: 2, sm: 3 },
              flexShrink: 0,
              "&:hover": {
                borderColor: "#000",
                backgroundColor: "rgba(0,0,0,0.05)",
              },
            }}
          >
            Top locations
          </Button>

          <Button
            component="a"
            href="https://book.thehah.ca/all-listings"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              textDecoration: "none",
              borderRadius: 4,
              borderColor: "#000",
              color: "#000",
              px: { xs: 2, sm: 3 },
              flexShrink: 0,
              "&:hover": {
                borderColor: "#000",
                backgroundColor: "rgba(0,0,0,0.05)",
              },
            }}
          >
            See all
          </Button>
        </Box>
      </Container>

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {properties.map((prop) => (
            <Box
              key={prop.id}
              component="a"
              href="https://book.thehah.ca/all-listings"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "#000",
                  color: "#fff",
                  boxShadow: "none",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  border: "15px solid black",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={prop.image}
                    alt={prop.title}
                    sx={{
                      height: 180,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Chip
                    label={`${prop.rating}★`}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "#f5c518",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  />
                </Box>
                <CardContent sx={{ backgroundColor: "#000", flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, fontSize: "1rem", mb: 0.5 }}
                  >
                    {prop.title.length > 25
                      ? `${prop.title.slice(0, 25)}...`
                      : prop.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccc" }}>
                    {prop.subtext}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}