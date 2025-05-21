import React from 'react'
import Navbar from '../components/Navbar'
import DyanmicHero from '../components/DyanmicHero'
import Footer from '../components/Footer'
import BlogSection from '../components/BlogSection';
import heroBg from '../assets/images/blogs/properties footer 1.png'
import bg from "../assets/images/blogs/Rectangle 124.png";


function Blog() {
  return (
    <>
      <Navbar />
      <DyanmicHero heading={'Insights & Updates'} heroImg={heroBg} />
      <BlogSection />
      <Footer bgImg={bg}/>
    </>
  )
}

export default Blog