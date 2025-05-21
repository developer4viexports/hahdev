import React from 'react'
import Footer from '../components/Footer2'
import ContactSection from '../components/ContactSection'
import ContactFormSection from '../components/ContactFormSection'
import Navbar2 from '../components/Navbar2'


function ContactUs() {
    return (
        <>
            <Navbar2 />
            <ContactSection />
            <ContactFormSection/>
            <Footer />
           
        </>
    )
}

export default ContactUs