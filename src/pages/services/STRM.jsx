import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AboutUs from '../../components/AboutUs'
import ServiceHero from '../../components/ServiceHero'
import ServicesAccordion from '../../components/ServicesAccordion'
import WhyChooseUs from '../../components/WhyChooseUs'
import { Helmet } from 'react-helmet-async'

import strm1 from '../../assets/images/str/str1.png'
import bg from '../../assets/images/str/hero.png'
import accordionImg from '../../assets/images/str/str2.jpg'
import wcuImag from '../../assets/images/str/str3.jpg'
import footerImg from '../../assets/images/str/str4.jpg'

function STRM() {
    const data = {
        heading: "Short-Term Rental Management (STR)",
        sub1: "Running a successful Airbnb isn’t just about listing a property—it’s about delivering a seamless guest experience every single time. From last-minute bookings to urgent repairs, managing a short-term rental demands constant attention, quick decision-making, and round-the-clock availability.",
        sub2: "At Home Away From Home Developments Inc. we offer fully hands-on Airbnb management—handling all operational tasks with precision and care. From guest messaging, check-ins, and on-ground coordination to professional cleaning, restocking, maintenance, and emergency support, we’re actively involved in every detail.",
        sub3: "Our experienced team ensures your property is always guest-ready, your reviews stay 5-star, and your revenue stays consistent—so you can enjoy the rewards without ever needing to step in.",
    }

    const services = [
        {
            id: "panel1",
            title: "Property Listing & Optimization",
            details: "We create eye-catching listings with high-quality photography, captivating copywriting, and strategically chosen titles. Combined with optimized pricing and platform integration, we position your property for higher visibility and better conversions.",
        },
        {
            id: "panel2",
            title: "Guest Communication & Booking Management",
            details: "From the first inquiry to the final review, we manage all guest interactions with professionalism and warmth. Our team is available around the clock to answer questions, confirm bookings, coordinate check-ins, and ensure a frictionless guest experience.",
        },
        {
            id: "panel3",
            title: "Housekeeping & Maintenance",
            details: "First impressions matter. Our professional cleaning crews ensure spotless turnovers between stays, while our maintenance team provides routine inspections and urgent fixes to keep your property fresh, functional, and guest-ready at all times.",
        },
        {
            id: "panel4",
            title: "Dynamic Pricing & Revenue Management",
            details: "Our system continuously monitors market demand, local events, seasonal trends, and competitor rates to automatically adjust your pricing. This ensures you’re earning the maximum possible income without sacrificing occupancy.",
        },
        {
            id: "panel5",
            title: "Compliance & Licensing",
            details: "We handle all aspects of legal compliance, including tax filings, municipal permits, health and safety standards, and licensing requirements. This keeps your rental operations smooth, lawful, and stress-free.",
        },
    ];

    const points = [
        { title: "Higher Revenue", text: "Proven strategies to maximize earnings." },
        { title: "Seamless Management", text: "We handle everything from bookings to maintenance." },
        { title: "5-Star Guest Experience", text: "Happy guests lead to better reviews and more bookings." },
        { title: "Local Expertise", text: "Deep knowledge of the market." },
    ];

    return (
        <>
            {/* SEO HEAD Tags */}
            <Helmet>
                <title>Short-Term Rental Management | Home Away From Home</title>
                <meta
                    name="description"
                    content="Get fully managed Airbnb services—guest messaging, professional cleaning, bookings, maintenance, and revenue optimization. Maximize your rental income today!"
                />
                <meta name="keywords" content="Short-Term Rental Management, Airbnb Management, Vacation Rental, Property Hosting, Guest Management" />
                <link rel="canonical" href="https://YOUR_DOMAIN/service/strm" />

                {/* Open Graph */}
                <meta property="og:title" content="Short-Term Rental Management | Home Away From Home" />
                <meta property="og:description" content="Professional Airbnb hosting with full-service guest handling, pricing, and cleaning. We help your property stay booked and reviewed." />
                <meta property="og:image" content="https://YOUR_DOMAIN/path-to-og-image.jpg" />
                <meta property="og:url" content="https://YOUR_DOMAIN/service/strm" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Short-Term Rental Management | Home Away From Home" />
                <meta name="twitter:description" content="Let us manage your Airbnb or short-term rental—cleaning, guest check-in, maintenance, and more!" />
                <meta name="twitter:image" content="https://YOUR_DOMAIN/path-to-og-image.jpg" />

                {/* Schema JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Short-Term Rental Management",
                        "provider": {
                            "@type": "Organization",
                            "name": "Home Away From Home Developments Inc.",
                            "url": "https://YOUR_DOMAIN"
                        },
                        "serviceType": "Airbnb & Vacation Rental Hosting",
                        "areaServed": {
                            "@type": "Country",
                            "name": "Canada"
                        },
                        "description": "Complete Airbnb & vacation rental management including guest communication, dynamic pricing, professional cleaning, and maintenance.",
                        "url": "https://YOUR_DOMAIN/service/strm"
                    })}
                </script>
            </Helmet>

            {/* Page Components */}
            <Navbar />
            <ServiceHero heading={<> Short-Term Rental<br /> Management </>} subheading="Fast bookings. Flawless stays. Full control." bg={bg} background="#0D294C" />
            <AboutUs data={data} direction={'row-reverse'} image={strm1} />
            <ServicesAccordion services={services} sectionKey='STR' accordioanImg={accordionImg} />
            <WhyChooseUs points={points} wcuImag={wcuImag} />
            <Footer bgImg={footerImg} />
        </>
    );
}

export default STRM;
