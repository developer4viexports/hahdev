import React from 'react'
import Navbar from '../components/Navbar'
import DyanmicHero from '../components/DyanmicHero'
import Footer from '../components/Footer'
import PropertySection from '../components/PropertySection'
import heroImg from '../assets/images/properties/hero.png'
import footerImg from '../assets/images/properties/footer.png';

function OurProperties() {
  return (
    <>
      <Navbar />
      <DyanmicHero heading="All Properties" heroImg={heroImg} />
      <PropertySection />
      <Footer bgImg = {footerImg}/>
    </>
  )
}

export default OurProperties;