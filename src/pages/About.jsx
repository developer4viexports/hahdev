import React from 'react'
import Navbar from '../components/Navbar'
import DyanmicHero from '../components/DyanmicHero'
import Footer from '../components/Footer'
import OurMission from '../components/OurMission'
import OwnerInfo from '../components/OwnerInfo'
import PodcastSection from '../components/PodcastSection'
import bg from '../assets/images/About/hero.png';
import img from '../assets/images/About/footer.png'
import owner from '../assets/images/owner2.png'


function About() {
    return (
        <>
            <Navbar />
            <DyanmicHero heading={'About '} subheading={'Home Away From Home Developments inc.'} heroImg={bg} />
            <OurMission />
            <OwnerInfo owner={owner} />
            <PodcastSection />
            <Footer bgImg={img} />
        </>
    )
}

export default About