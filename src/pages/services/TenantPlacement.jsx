import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServiceHero from '../../components/ServiceHero'
import TenantPlacementSection from '../../components/TenantPlacementSection'
import { Helmet } from 'react-helmet-async';
import bg from '../../assets/images/TenantPlacement/hero.png'
import footerImg from '../../assets/images/TenantPlacement/tp2.jpg'

function TenantPlacement() {
    return (
        <>
            <Helmet>
                <title>Tenant Placement Services | Home Away From Home</title>
                <meta name="description" content="Find quality tenants faster with our professional tenant placement services. We handle marketing, screening, and leasing to ensure reliable occupancy." />
                <meta name="keywords" content="tenant placement, rental leasing, tenant screening, lease services, property management" />
                <link rel="canonical" href="https://thehah.ca/service/tenant-placement" />
            </Helmet>
            <Navbar />
            <ServiceHero heading={<>Tenant Placement<br /> </>} subheading="We match keys to doors and dreams to leases." bg={bg} background='#754F55' />
            <TenantPlacementSection />
            <Footer bgImg={footerImg} />
        </>
    )
}

export default TenantPlacement