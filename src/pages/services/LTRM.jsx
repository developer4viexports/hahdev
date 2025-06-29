import React from 'react'
import Navbar from '../../components/Navbar'
import ServiceHero from '../../components/ServiceHero'
import AboutUs from '../../components/AboutUs'
import ServicesAccordion from '../../components/ServicesAccordion'
import WhyChooseUs from '../../components/WhyChooseUs'
import Footer from '../../components/Footer'
import bg from '../../assets/images/ltr/hero.png';
import strm1 from '../../assets/images/ltr/ltr1.png'
import accordionImg from '../../assets/images/ltr/ltr2.jpg'
import wcuImag from '../../assets/images/ltr/ltr3.jpg'
import footerImg from '../../assets/images/ltr/ltr4.jpg'
import { Helmet } from 'react-helmet-async';


function LTRM() {
    const services = [
        {
            id: "panel1",
            title: "Tenant Acquisition & Screening",
            details:
                "Tenant Acquisition & Screening We don’t just find tenants—we handpick reliable individuals using an extensive screening process.This includes credit checks, employment verification, rental history reviews, and personal references to ensure only the most trustworthy occupants live in your property.",
        },
        {
            id: "panel2",
            title: "Lease Management & Compliance",
            details:
                "Lease Management & Compliance Our team handles the full lifecycle of lease agreements—from custom drafting and renewals to compliance with the latest legal regulations. Every lease is carefully constructed to safeguard your property rights and minimize legal risk.",
        },
        {
            id: "panel3",
            title: "Rent Collection & Financial Tracking",
            details:
                "Rent Collection & Financial Tracking Enjoy predictable cash flow with our automated rent collection system. We manage late payments, send reminders, resolve disputes professionally, and provide you with monthly financial statements for complete transparency.",
        },
        {
            id: "panel4",
            title: "Property Maintenance & Repairs",
            details:
                "Property Maintenance & Repairs We schedule routine inspections, oversee preventive maintenance, and offer 24/7 emergency repair services. This ensures your property remains in excellent condition, tenants are satisfied, and costly damage is avoided",
        },
        {
            id: "panel5",
            title: "Compliance & Licensing",
            details:
                "Tenant Relations & Conflict Resolution We proactively foster positive tenant relationships through responsive communication and structured support. When issues arise, our team resolves them promptly and professionally to preserve peace and tenant satisfaction.",
        },
        {
            id: "panel6",
            title: "Legal Support & Evictions",
            details:
                "Legal Support & Evictions Our legal partners are well-versed in landlord-tenant law, ensuring that lease enforcement, legal notices, and if necessary, evictions are handled with precision, care, and full compliance.",
        },
    ];
    const data = {
        heading: "Long-Term Rental Management (STR)",
        sub1: "Long-Term Rental (LTR) Management – Reliable Income, Stress-Free Ownership ",
        sub2: "Long-term rentals (LTR) provide steady income, lower turnover, and reduced maintenance costs, making them an ideal choice for property owners seeking consistent cash flow and long-term tenant relationships.",
        sub3: "At  Home Away from Home Developments Inc. , we handle everything from tenant screening and lease management to rent collection and property maintenance, ensuring your investment remains profitable and hassle-free.  ",
    }
    const points = [
        { title: "Steady Rental Income", text: " Reliable rent collection and tenant stability" },
        { title: "Minimal Vacancies", text: " Tenant retention strategies reduce turnover" },
        { title: "Full-Service Management", text: "We handle everything from A to Z" },
        { title: "Legal & Compliance Expertise", text: "Keeping your rental stress-free" },
    ];
    return (
        <>
            <Helmet>
                <title>Long-Term Rental Management (LTRM) | Home Away From Home</title>
                <meta name="description" content="Reliable long-term rental solutions including tenant screening, lease management, rent collection, and property upkeep." />
                <meta name="keywords" content="LTRM, long term rental, property leasing, rent management, tenant screening" />
                <link rel="canonical" href="https://thehah.ca/service/ltrm" />
            </Helmet>

            <Navbar />
            <ServiceHero heading={<> Long-Term Rental<br /> Management </>} subheading="Where Long-Term Tenants Meet Long-Term Peace of Mind." bg={bg} background='#1B1C1B'
            />
            <AboutUs data={data} direction={'row-reverse'} image={strm1} />
            <ServicesAccordion services={services} sectionKey='LTR' accordioanImg={accordionImg} />
            <WhyChooseUs points={points} wcuImag={wcuImag} />
            <Footer bgImg={footerImg} />
        </>
    )
}

export default LTRM