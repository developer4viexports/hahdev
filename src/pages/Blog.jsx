// src/pages/Blog.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import DyanmicHero from '../components/DyanmicHero';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';

import heroBg from '../assets/images/blogs/properties footer 1.png';
import bg from "../assets/images/blogs/Rectangle 124.png";

function Blog() {
  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Blog – Insights, Tips & Property Updates</title>
        <meta
          name="description"
          content="Explore expert insights, tips, and updates in the world of property management, rentals, and hosting. Stay informed with our blog."
        />
        <meta name="keywords" content="property blog, rental management tips, Airbnb hosting, real estate updates, landlord advice" />
        <link rel="canonical" href="https://thehah.ca/blog" />

        {/* Open Graph */}
        <meta property="og:title" content="Blog – Insights, Tips & Property Updates" />
        <meta property="og:description" content="Read property management tips, Airbnb strategies, and real estate news from our team." />
        <meta property="og:image" content="https://thehah.ca/images/og-blog.jpg" />
        <meta property="og:url" content="https://thehah.ca/blog" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog – Insights, Tips & Property Updates" />
        <meta name="twitter:description" content="Stay up to date with rental market trends, investment strategies, and hosting know-how." />
        <meta name="twitter:image" content="https://thehah.ca/images/og-blog.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Home Away From Home Blog",
            "url": "https://thehah.ca/blog",
            "description": "Insights, updates, and expert tips about real estate, rental management, and hosting from Home Away From Home Developments Inc.",
            "publisher": {
              "@type": "Organization",
              "name": "Home Away From Home Developments Inc.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thehah.ca/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <DyanmicHero heading={'Insights & Updates'} heroImg={heroBg} />
      <BlogSection />
      <Footer bgImg={bg} />
    </>
  );
}

export default Blog;
