import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PeopleIcon from "@mui/icons-material/People";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image imports
import img1  from '../assets/images/properties/property_1 (1).png';
import img2  from '../assets/images/properties/property_1 (2).png';
import img3  from '../assets/images/properties/property_1 (3).png';
import img4  from '../assets/images/properties/property_2 (1).png';
import img5  from '../assets/images/properties/property_2 (2).png';
import img6  from '../assets/images/properties/property_2 (3).png';
import img7  from '../assets/images/properties/property_3 (1).png';
import img8  from '../assets/images/properties/property_3 (2).png';
import img9  from '../assets/images/properties/property_3 (3).png';
import img10 from '../assets/images/properties/property_4 (1).png';
import img11 from '../assets/images/properties/property_4 (2).png';
import img12 from '../assets/images/properties/property_4 (3).png';
import img13 from '../assets/images/properties/property_5 (1).png';
import img14 from '../assets/images/properties/property_5 (2).png';
import img15 from '../assets/images/properties/property_5 (3).png';
import img16 from '../assets/images/properties/property_6 (1).png';
import img17 from '../assets/images/properties/property_6 (2).png';
import img18 from '../assets/images/properties/property_6 (3).png';
import img19 from '../assets/images/properties/property_7 (1).png';
import img20 from '../assets/images/properties/property_7 (2).png';
import img21 from '../assets/images/properties/property_7 (3).png';
import img22 from '../assets/images/properties/property_8 (1).png';
import img23 from '../assets/images/properties/property_8 (2).png';
import img24 from '../assets/images/properties/property_8 (3).png';
import img25 from '../assets/images/properties/property_9 (1).png';
import img26 from '../assets/images/properties/property_9 (2).png';
import img27 from '../assets/images/properties/property_9 (3).png';

// Properties data with individual links
const properties = [
  {
    title: "Cozy 2BR Retreat | Family Friendly Close to Falls",
    link:  "https://book.thehah.ca/listings/323648",
    images: [img1, img2, img3],
    guests: 4,
    bedrooms: 2,
    area: 460,
    bathrooms: 2,
  },
  {
    title: "NEW Stylish 1BR w/ BBQ | Close to Falls | Sleeps 4!",
    link:  "https://book.thehah.ca/listings/323650",
    images: [img4, img5, img6],
    guests: 4,
    bedrooms: 1,
    area: 460,
    bathrooms: 1,
  },
  {
    title: "Tranquil 2BR Retreat Near Niagara Falls",
    link:  "https://book.thehah.ca/listings/323651",
    images: [img7, img8, img9],
    guests: 4,
    bedrooms: 2,
    area: 460,
    bathrooms: 2,
  },
  {
    title: "NEW Stylish 2BR Suite | 7 Mins to Falls | Sleeps 6",
    link:  "https://book.thehah.ca/listings/323785",
    images: [img10, img11, img12],
    guests: 6,
    bedrooms: 2,
    area: 460,
    bathrooms: 2,
  },
  {
    title: "Stylish *NEW* 2BR Suite | 2.5 Baths | Close to Falls",
    link:  "https://book.thehah.ca/listings/325716",
    images: [img13, img14, img15],
    guests: 6,
    bedrooms: 2,
    area: 460,
    bathrooms: 3,
  },
  {
    title: "Luxe 1BR Condo Suite | 4 Mins to the Falls/Casino",
    link:  "https://book.thehah.ca/listings/326283",
    images: [img16, img17, img18],
    guests: 4,
    bedrooms: 1,
    area: 460,
    bathrooms: 1,
  },
  {
    title: "Luxury Haven | W/ BBQ | Only 7 Minutes to Falls",
    link:  "https://book.thehah.ca/listings/329718",
    images: [img19, img20, img21],
    guests: 6,
    bedrooms: 2,
    area: 460,
    bathrooms: 2,
  },
  {
    title: "2BR Family Retreat w/ BBQ | 4 Mins to Niagara Falls",
    link:  "https://book.thehah.ca/listings/329740",
    images: [img22, img23, img24],
    guests: 4,
    bedrooms: 2,
    area: 460,
    bathrooms: 2,
  },
  {
    title: "Tranquil Retreat | 5BR, 3-Bath Falls Escape",
    link:  "https://book.thehah.ca/listings/331678",
    images: [img25, img26, img27],
    guests: 10,
    bedrooms: 5,
    area: 460,
    bathrooms: 3,
  },
];

export default function PropertySection() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ backgroundColor: "#000", py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {properties.map((prop, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              {/* Wrap each card in a link */}
              <a
                href={prop.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Card sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }}>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      color: "#fff",
                      zIndex: 1,
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>

                  <Slider {...sliderSettings}>
                    {prop.images.map((src, i) => (
                      <CardMedia
                        key={i}
                        component="img"
                        image={src}
                        alt={prop.title}
                        sx={{ width: "100%", aspectRatio: "4/3" }}
                      />
                    ))}
                  </Slider>

                  <CardContent sx={{ backgroundColor: "#fff" }}>
                    <Typography variant="h6" gutterBottom>
                      {prop.title}
                    </Typography>

                    <Grid container spacing={1} sx={{ pt: 1 }}>
                      <Grid item xs={6} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <PeopleIcon fontSize="small" />
                        <Typography variant="body2">{prop.guests} guests</Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <BedIcon fontSize="small" />
                        <Typography variant="body2">{prop.bedrooms} bedrooms</Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <SquareFootIcon fontSize="small" />
                        <Typography variant="body2">{prop.area} m²</Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <BathtubIcon fontSize="small" />
                        <Typography variant="body2">{prop.bathrooms} bathrooms</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <a href="https://book.thehah.ca/all-listings" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: 2,
                px: 4,
                py: 1,
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              SEE MORE
            </Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
}
