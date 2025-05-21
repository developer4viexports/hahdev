import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import ServicesCopy from '../components/ServicesCopy'
import LatestProperties from '../components/LatestProperties'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import LatestPostsSection from '../components/LatestPostsSection'
import OwnerInfo from '../components/OwnerInfo'
import Footer from '../components/Footer';
import bg from "../assets/images/footerImg.png";
import img1 from '../assets/images/hbout.png'
import owner from '../assets/images/owner.png'



function Home() {
  const data = {
    heading: "Welcome to The Home Away From Home Developments Inc.!",
    sub1: "At The Home Away From Home Developments Inc. we offer expert Short-Term & Long-Term Rental Management services to maximize your income effortlessly. We handle everything from cleaning and guest bookings to tenant screening and maintenance.",
    sub2: "For Short-Term Rentals, our team ensures optimized listings, smooth guest experiences, and professional cleaning to keep your property fully booked. Properties near wineries, hiking trails, and shopping centers benefit from our strategic management.",
    sub3: "For Long-Term Rentals, we take care of tenant relations, rent collection, and property upkeep to provide a reliable income stream. Our goal is to make property ownership stress-free and profitable.",
    sub4: " Let The Home Away From Home Developments Inc. manage your rental, so you can relax and focus on what matters most."
  }
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs data={data} image={img1} />
      <Services />
      <ServicesCopy />
      <LatestProperties />
      <TestimonialsCarousel />
      <LatestPostsSection />
      {/* <AboutSection/> */}
      <OwnerInfo owner={owner} />
      <Footer bgImg={bg} />
    </>
  )
}

export default Home