// src/pages/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import DyanmicHero from '../components/DyanmicHero';
import Footer from '../components/Footer';
import OurMission from '../components/OurMission';
import OwnerInfo from '../components/OwnerInfo';
import PodcastSection from '../components/PodcastSection';

import bg from '../assets/images/About/hero.png';
import img from '../assets/images/About/footer.png';
import owner from '../assets/images/owner2.png';

function About() {
    return (
        <>
            {/* SEO Metadata */}
            <Helmet>
                <title>About Us – Home Away From Home Developments Inc.</title>
                <meta
                    name="description"
                    content="Learn about our mission to provide stress-free rental management across Ontario. Meet the founder and discover our story."
                />
                <meta name="keywords" content="property management, about us, rental company, real estate, Ontario rentals" />
                <link rel="canonical" href="https://thehah.ca/about" />

                {/* Open Graph */}
                <meta property="og:title" content="About – Home Away From Home Developments Inc." />
                <meta property="og:description" content="Learn about our rental management journey, mission, and founder's vision." />
                <meta property="og:image" content="https://thehah.ca/images/og-about.jpg" />
                <meta property="og:url" content="https://thehah.ca/about" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About – Home Away From Home Developments Inc." />
                <meta name="twitter:description" content="Our mission is to simplify rental property ownership through expert management." />
                <meta name="twitter:image" content="https://thehah.ca/images/og-about.jpg" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Home Away From Home Developments Inc.",
                        "url": "https://thehah.ca/",
                        "logo": "https://thehah.ca/logo.png",
                        "image": "https://thehah.ca/images/og-about.jpg",
                        "description": "We specialize in stress-free rental property management across Ontario. Learn more about our mission and team.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Ontario",
                            "addressCountry": "CA"
                        },
                        "founder": {
                            "@type": "Person",
                            "name": "Your Founder Name" // Replace with actual name
                        }
                    })}
                </script>
            </Helmet>

            {/* Page Content */}
            <Navbar />
            <DyanmicHero heading={'About'} subheading={'Home Away From Home Developments inc.'} heroImg={bg} />
            <OurMission />
            <OwnerInfo owner={owner} />
            <PodcastSection />
            <Footer bgImg={img} />
        </>
    );
}

export default About;
