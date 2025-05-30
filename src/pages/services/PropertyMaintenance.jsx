import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MaintenanceServices from '../../components/MaintenanceServices'
import ServiceHero from '../../components/ServiceHero'
import bg from '../../assets/images/PropertyMaintenance/hero.png';
import footerImg from '../../assets/images/PropertyMaintenance/footer.jpg'

function PropertyMaintenance() {
    return (
        <>
            <Navbar />
            <ServiceHero heading={<> Property Maintenance<br /> </>} subheading="We fix more than homes—we protect your peace." bg={bg} background='#4C4A45'
            />
            <MaintenanceServices />
            <Footer bgImg={footerImg} />
        </>
    )
}

export default PropertyMaintenance