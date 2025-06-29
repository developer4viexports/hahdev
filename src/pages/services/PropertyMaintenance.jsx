import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MaintenanceServices from '../../components/MaintenanceServices'
import ServiceHero from '../../components/ServiceHero'
import { Helmet } from 'react-helmet-async';
import bg from '../../assets/images/PropertyMaintenance/hero.png';
import footerImg from '../../assets/images/PropertyMaintenance/footer.jpg'

function PropertyMaintenance() {
    return (
        <>
            <Helmet>
                <title>Property Maintenance | Home Away From Home</title>
                <meta name="description" content="Professional property maintenance services including repairs, inspections, and ongoing care to protect your investment and keep tenants happy." />
                <meta name="keywords" content="property maintenance, rental upkeep, real estate repairs, home maintenance" />
                <link rel="canonical" href="https://thehah.ca/service/property-maintenance" />
            </Helmet>
            <Navbar />
            <ServiceHero heading={<> Property Maintenance<br /> </>} subheading="We fix more than homes—we protect your peace." bg={bg} background='#4C4A45' />
            <MaintenanceServices />
            <Footer bgImg={footerImg} />
        </>
    )
}

export default PropertyMaintenance
