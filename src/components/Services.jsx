import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// Slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your images for each service
import img1 from "../assets/images/hservice1.png";
import img2 from "../assets/images/hservice2.png";
import img3 from "../assets/images/hservice3.png";
import img4 from "../assets/images/hservice4.png";
import img5 from "../assets/images/hservice5.png";

const services = [
  {
    img: img1,
    title: "Short-Term Rental Management (STR)",
    desc:
      "Secure consistent income without the day-to-day hassle. Our expert STR service optimizes listings, handles guest communication and housekeeping, and maximizes your Airbnb and VRBO revenue.",
    path: "/service/strm",
  },
  {
    img: img2,
    title: "Long-Term Property Management (LTR)",
    desc:
      "From tenant screening and lease management to rent collection and regular inspections, our comprehensive long-term management ensures your property is always in good hands and your returns are stress-free.",
    path: "/service/ltrm",
  },
  {
    img: img3,
    title: "Property Maintenance",
    desc:
      "Enjoy worry-free ownership with our all-in-one maintenance services. We coordinate repairs, conduct preventative checks, and handle 24/7 handyman support to protect your property’s value.",
    path: "/service/property-maintenance",
  },
  {
    img: img4,
    title: "Airbnb Co-Hosting",
    desc:
      "Expand your Airbnb success anywhere. We manage guest communication, pricing, calendar syncing, and coordinate local teams to provide seamless co-hosting and five-star guest experiences.",
    path: "/service/airbnb-co-hosting",
  },
  {
    img: img5,
    title: "Tenant Placement",
    desc:
      "Our professional tenant placement service reduces vacancy periods, conducts thorough screenings, and secures dependable, high-quality tenants to maximize your rental income.",
    path: "/service/tenant-placement",
  },
];

export default function Services() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("xs"));

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: isMdUp ? 5 : isSmUp ? 2 : 1,
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
    <Box
      component="section"
      sx={{
        display: { xs: "none", md: "block" }, // show on desktop; hide on xs-
        backgroundColor: "#000",
        color: "#fff",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Title & Subtitle */}
        <Box textAlign="left" mb={{ xs: 4, md: 6 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Our Services
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ maxWidth: 600, fontSize: { xs: "1rem", sm: "1.125rem" } }}
          >
            Seamless Property Management with Home Away From Home Developments Inc.
            <br />
            Serving the Niagara and GTA with top-tier management solutions!
          </Typography>
        </Box>

        {/* react-slick carousel */}
        <Slider {...settings}>
          {services.map((svc) => (
            <Box
              key={svc.title}
              component={RouterLink}
              to={svc.path}
              sx={{
                textDecoration: "none",
                px: 1,
                width: isMdUp ? `calc((100% / 4) - 16px)` : "70%",
                height: { xs: 400, md: 400 },
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transition: "transform .3s ease, z-index .3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  zIndex: 2,
                  ".overlay": { opacity: 1 },
                },
              }}
            >
              {/* Background Image */}
              <Box
                component="img"
                src={svc.img}
                alt={svc.title}
                sx={{ width: "100%", height: "100%", objectFit: "cover", scale: 1.3 }}
              />

              {/* Text Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))",
                  color: "#fff",
                  p: 3,
                  opacity: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  transition: "opacity .3s ease",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {svc.title}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                  {svc.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
