import React from "react";
import { Box, Container, Typography, Rating, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
// import "slick-carousel/slick.css";
// import "slick-carousel/slick-theme.css";
import img1 from "../assets/images/Reviews (1).png";
import img2 from "../assets/images/Reviews (2).png";
import img3 from "../assets/images/Reviews (3).png";
import img4 from "../assets/images/Reviews (4).png";
import img5 from "../assets/images/Reviews (5).png";
import img6 from "../assets/images/Reviews (6).png";

// Example custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 2,
        backgroundColor: "rgba(255,255,255,0.1)",
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.2)",
        },
      }}
    >
      &gt;
    </Box>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 2,
        backgroundColor: "rgba(255,255,255,0.1)",
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.2)",
        },
      }}
    >
      &lt;
    </Box>
  );
}

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    rating: 5,
    review:
      "Working with Home Away From Home Developments Inc. has been a game-changer. Our Niagara Falls property started earning \$1200+ per night, and they took care of everything — cleaning, staging, and guest support. Total peace of mind.",
    avatar: img1,
  },
  {
    id: 2,
    name: "Michael T.",
    rating: 5,
    review:
      "They staged our home so beautifully that it started getting bookings instantly. We barely have to do anything now — Home Away From Home Developments Inc. takes care of the day-to-day like clockwork.",
    avatar: img2,
  },
  {
    id: 3,
    name: " Sarah K.",
    rating: 5,
    review:
      "One of the best Airbnbs we've stayed in! Super clean, beautifully staged, and the team was responsive throughout. We were a group of 14 and had more than enough space.",
    avatar: img3,
  },
  {
    id: 4,
    name: "Anjali M.",
    rating: 5,
    review:
      "This place was perfect for our family reunion. Spacious, stylish, and sparkling clean. The check-in process was smooth and we had everything we needed. Will definitely book again.",
    avatar: img4,
  },
  {
    id: 5,
    name: "Stéphanie",
    rating: 5,
    review:
      "Apartment perfectly as advertised. Very clean accommodation, carefully decorated, like at home! Quiet neighborhood a few minutes from the falls by car, it's ideal! No regrets about our choice and thank you to our host.",
    avatar: img5,
  },
  {
    id: 6,
    name: "James D.",
    rating: 4.5,
    review:
      "The photos were amazing, but the actual stay was even better. It felt like a boutique hotel, but with the comfort of home. Highly recommend any property managed by Home Away From Home Developments Inc..",
    avatar: img6,
  },
];

export default function TestimonialsCarousel() {
   const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const isSmUp = useMediaQuery(theme.breakpoints.up("xs"));
  
    const settings = {
      infinite: true,
      speed: 400,
      slidesToShow: isMdUp ? 1 : isSmUp ? 1 : 1,
      slidesToScroll: 1,
      arrows: isMdUp, // Show arrows only on desktop
      dots: !isMdUp, // Show dots on mobile
      centerMode: !isMdUp, // Center items in mobile view
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
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: { xs: 4, md: 2 },
            pl: { xs: 4, md: 9 },
            fontSize: { xs: "1.8rem", md: "2rem" },
          }}
        >
          What our customers say
        </Typography>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((item) => (
            <Box key={item.id}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                {/* IMAGE ON THE LEFT */}
                <Box
                  component="img"
                  src={item.avatar}
                  alt={item.name}
                  sx={{
                    width: { xs: "85%", sm: "50%", md: "30%" },
                    height: { xs: "auto", md: 350 },
                    objectFit: "cover",
                    borderBottomRightRadius: 40,
                    maxWidth: "100%", // Ensure no overflow on smaller screens
                  }}
                />

                {/* TEXT ON THE RIGHT */}
                <Box
                  sx={{
                    width: { xs: "90%", md: "50%" }, // Slightly narrower on mobile
                    textAlign: "left",
                  }}
                >
                  {/* Star rating + numeric rating */}
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "80%", md: "50%" }, // Breakpoint widths
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Rating
                      name="rating"
                      value={item.rating}
                      precision={0.5}
                      readOnly
                      sx={{ color: "#f5c518" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "#f5c518",
                        color: "#000",
                        px: 1,
                        borderRadius: 1,
                        fontWeight: "bold",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.rating.toFixed(1)}
                    </Typography>
                  </Box>

                  {/* Reviewer Name */}
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 1, fontSize: "1rem" }}
                  >
                    {item.name}
                  </Typography>

                  {/* Review Content */}
                  <Typography
                    variant="body2"
                    sx={{ lineHeight: 1.6, fontSize: "1rem" }}
                  >
                    {item.review}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
