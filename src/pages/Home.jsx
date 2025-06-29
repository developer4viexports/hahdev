// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ServicesCopy from '../components/ServicesCopy';
import LatestProperties from '../components/LatestProperties';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import LatestPostsSection from '../components/LatestPostsSection';
import OwnerInfo from '../components/OwnerInfo';
import Footer from '../components/Footer';

import bg from "../assets/images/footerImg.png";
import img1 from '../assets/images/hbout.png';
import owner from '../assets/images/owner.png';

function Home() {
  const data = {
    heading: "Welcome to The Home Away From Home Developments Inc.!",
    sub1: "At The Home Away From Home Developments Inc. we offer expert Short-Term & Long-Term Rental Management services to maximize your income effortlessly. We handle everything from cleaning and guest bookings to tenant screening and maintenance.",
    sub2: "For Short-Term Rentals, our team ensures optimized listings, smooth guest experiences, and professional cleaning to keep your property fully booked. Properties near wineries, hiking trails, and shopping centers benefit from our strategic management.",
    sub3: "For Long-Term Rentals, we take care of tenant relations, rent collection, and property upkeep to provide a reliable income stream. Our goal is to make property ownership stress-free and profitable.",
    sub4: "Let The Home Away From Home Developments Inc. manage your rental, so you can relax and focus on what matters most."
  };

  return (
    <>
      {/* SEO Helmet Tags */}
      <Helmet>
        <title>Home Away From Home Developments Inc. – STR & LTR Property Management</title>
        <meta
          name="description"
          content="Maximize your rental income with our expert Short-Term and Long-Term property management services across Ontario."
        />
        <meta name="keywords" content="property management, short term rental, long term rental, Airbnb co-hosting, Ontario rentals" />
        <link rel="canonical" href="https://thehah.ca/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Home Away From Home Developments Inc." />
        <meta
          property="og:description"
          content="Maximize your rental income with our expert Short-Term and Long-Term property management services across Ontario."
        />
        <meta property="og:image" content="https://thehah.ca/images/social-home-banner.jpg" />
        <meta property="og:url" content="https://thehah.ca/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Away From Home Developments Inc." />
        <meta
          name="twitter:description"
          content="Maximize your rental income with our expert Short-Term and Long-Term property management services across Ontario."
        />
        <meta name="twitter:image" content="https://thehah.ca/images/social-home-banner.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Home Away From Home Developments Inc.",
            "url": "https://thehah.ca/",
            "logo": "https://thehah.ca/logo.png",
            "image": "https://thehah.ca/images/social-home-banner.jpg",
            "description": "Expert property management services including short-term and long-term rentals in Ontario.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ontario",
              "addressCountry": "CA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 705 465 8787",
              "contactType": "Customer Service"
            }
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <HeroSection />
      <AboutUs data={data} image={img1} />
      <Services />
      <ServicesCopy />
      <LatestProperties />
      <TestimonialsCarousel />
      <LatestPostsSection />
      <OwnerInfo owner={owner} />
      <Footer bgImg={bg} />
    </>
  );
}

export default Home;
