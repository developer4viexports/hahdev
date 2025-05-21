import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServiceHero from '../../components/ServiceHero'
import TenantPlacementSection from '../../components/TenantPlacementSection'
import bg from '../../assets/images/TenantPlacement/hero.png'
import footerImg from '../../assets/images/TenantPlacement/tp2.jpg'


function TenantPlacement() {
    return (
        <>
            <Navbar />
            <ServiceHero heading={<>Tenant Placement<br /> </>} subheading="We match keys to doors and dreams to leases." bg={bg}
            />
            <TenantPlacementSection />
            <Footer bgImg={footerImg} />
        </>
    )
}

export default TenantPlacement