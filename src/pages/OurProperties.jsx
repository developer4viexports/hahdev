// src/pages/OurProperties.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import DyanmicHero from '../components/DyanmicHero';
import Footer from '../components/Footer';
import PropertySection from '../components/PropertySection';

import heroImg from '../assets/images/properties/hero.png';
import footerImg from '../assets/images/properties/footer.png';

function OurProperties() {
  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>View Available Rental Properties – Home Away From Home</title>
        <meta
          name="description"
          content="Browse our curated list of short-term and long-term rental properties across Ontario, managed for comfort and reliability."
        />
        <meta name="keywords" content="rental properties, Ontario rentals, STR, LTR, property listings, real estate management" />
        <link rel="canonical" href="https://thehah.ca/properties" />

        {/* Open Graph */}
        <meta property="og:title" content="View Available Rental Properties – Home Away From Home" />
        <meta property="og:description" content="Browse our curated list of short-term and long-term rental properties across Ontario." />
        <meta property="og:image" content="https://thehah.ca/images/og-properties.jpg" />
        <meta property="og:url" content="https://thehah.ca/properties" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="View Available Rental Properties – Home Away From Home" />
        <meta name="twitter:description" content="Explore Ontario’s best rental homes with stress-free management and hosting." />
        <meta name="twitter:image" content="https://thehah.ca/images/og-properties.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Available Properties",
            "description": "List of short-term and long-term rental properties managed by Home Away From Home Developments Inc.",
            "url": "https://thehah.ca/properties",
            "mainEntity": {
              "@type": "RealEstateAgent",
              "name": "Home Away From Home Developments Inc.",
              "url": "https://thehah.ca/",
              "logo": "https://thehah.ca/logo.png"
            }
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <DyanmicHero heading="All Properties" heroImg={heroImg} />
      <PropertySection />
      <Footer bgImg={footerImg} />
    </>
  );
}

export default OurProperties;
