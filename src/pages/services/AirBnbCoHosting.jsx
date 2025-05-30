import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CoHostingSection from '../../components/CoHostingSection'
import ServiceHero from '../../components/ServiceHero'
import WhatWeOfferSection from '../../components/WhatWeOfferSection'
import GlobalIntroSection from '../../components/GlobalIntroSection'
import bg from '../../assets/images/AirBnbCoHosting/hero.png'
import coHosting from '../../assets/images/AirBnbCoHosting/ach1.jpg'
import wosImg from '../../assets/images/AirBnbCoHosting/ach2.jpg';
import footerImg from '../../assets/images/AirBnbCoHosting/ach3.jpg'

function AirBnbCoHosting() {
    return (
        <>
            <Navbar />
            <ServiceHero heading={<>AirBnb Co-Hosting<br /> </>} subheading="We host the hustle. You just collect the wins." bg={bg} background='#2F546F'
            />
            <CoHostingSection coHosting={coHosting} />
            <WhatWeOfferSection wosImg={wosImg} />
            <GlobalIntroSection />
            <Footer bgImg={footerImg} />
        </>
    )
}

export default AirBnbCoHosting