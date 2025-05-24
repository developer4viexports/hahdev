// import React from "react";
// import { Box, Container, Typography, IconButton } from "@mui/material";
// import Slider from "react-slick";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from '../assets/images/podcast.png'

// // Replace with your actual podcast thumbnails
// const podcasts = [
//   {
//     title: "Podcast Episode 1",
//     image: img1,
//   },
//   {
//     title: "Podcast Episode 2",
//     image: img1,
//   },
//   {
//     title: "Podcast Episode 3",
//     image: img1,
//   },
// ];

// function PrevArrow({ onClick }) {
//   return (
//     <IconButton
//       onClick={onClick}
//       sx={{
//         position: "absolute",
//         top: "50%",
//         left: { xs: 8, md: 16 },
//         transform: "translateY(-50%)",
//         backgroundColor: "rgba(0,0,0,0.6)",
//         color: "#fff",
//         "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
//         zIndex: 1,
//         width: { xs: 32, md: 48 },
//         height: { xs: 32, md: 48 },
//       }}
//     >
//       <ChevronLeftIcon sx={{ fontSize: { xs: 20, md: 32 } }} />
//     </IconButton>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <IconButton
//       onClick={onClick}
//       sx={{
//         position: "absolute",
//         top: "50%",
//         right: { xs: 8, md: 16 },
//         transform: "translateY(-50%)",
//         backgroundColor: "rgba(0,0,0,0.6)",
//         color: "#fff",
//         "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
//         zIndex: 1,
//         width: { xs: 32, md: 48 },
//         height: { xs: 32, md: 48 },
//       }}
//     >
//       <ChevronRightIcon sx={{ fontSize: { xs: 20, md: 32 } }} />
//     </IconButton>
//   );
// }

// export default function PodcastSection() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     adaptiveHeight: true,
//   };

//   return (
//     <Box sx={{ backgroundColor: "#f9f9f9", py: { xs: 4, md: 8 } }}>
//       <Container maxWidth="lg" sx={{ textAlign: "center" }}>
//         <Typography
//           variant="h4"
//           component="h2"
//           sx={{
//             fontWeight: 700,
//             mb: { xs: 3, md: 6 },
//             fontSize: { xs: "1.5rem", md: "2.5rem" },
//             lineHeight: 1.2,
//           }}
//         >
//           Watch the podcasts to know more <br/>about his inspiring journey
//         </Typography>

//         <Box sx={{ position: "relative", px: { xs: 2, md: 0 } }}>
//           <Slider {...settings}>
//             {podcasts.map((pod, idx) => (
//               <Box key={idx} sx={{ outline: "none" }}>
//                 <Box
//                   component="img"
//                   src={pod.image}
//                   alt={pod.title}
//                   sx={{
//                     width: "100%",
//                     height: "auto",
//                     borderRadius: 2,
//                     mx: "auto",
//                     display: "block",
//                   }}
//                 />
//               </Box>
//             ))}
//           </Slider>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
import React from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import shahLogo from '../assets/images/shahLogo.png';

const PodcastSection = () => {
  return (
    <Box sx={{
      bgcolor: '#f5f5f5',
    }}>
      <Container
        sx={{
          bgcolor: '#f5f5f5',
          py: 2,
          px: { xs: 2, sm: 6, },
          // minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          {/* Left Side - Logo and Signature */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: 400,
                mx: 'auto',
              }}
            >
              <Box
                component="img"
                src={shahLogo}
                alt="Shah Logo"
                sx={{
                  width: { xs: '40%', sm: '100%', md: "100%" },
                  maxWidth: 300,
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Text and Link */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Explore More from<br />
                Prajwal Shah
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Stay connected, learn, and grow with me across different platforms.
                Whether you're looking to book a personal session, dive into my blueprint
                for hustlers, or follow my latest conversations—everything you need is
                just a click away.
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                startIcon={<LinkIcon />}
                sx={{ mt: 2, bgcolor: 'black', color: 'white', '&:hover': { bgcolor: '#333' } }}
                href="https://linktr.ee/PrajwalShah"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linktree/PrajwalShah
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PodcastSection;
