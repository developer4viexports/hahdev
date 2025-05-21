import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import LockIcon from '@mui/icons-material/Lock';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SpaIcon from '@mui/icons-material/Spa';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HandymanIcon from '@mui/icons-material/Handyman';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PoolIcon from '@mui/icons-material/Pool';
import FenceIcon from '@mui/icons-material/Fence';
import ChairIcon from '@mui/icons-material/Chair';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const services = [
    {
        icon: <MonetizationOnIcon fontSize="large" />,
        title: "Rent Collection",
        desc:
            "Eliminate the stress of late payments with our streamlined rent collection system. Receive your payments promptly through direct deposit, ensuring a smooth and reliable transaction process.",
    },
    {
        icon: <ReceiptLongIcon fontSize="large" />,
        title: "Financial Record Keeping",
        desc:
            "Stay organized and prepared with detailed monthly and year-end financial statements. Our meticulous record-keeping ensures you’re ready for tax season and always informed about your property’s financial health.",
    },
    {
        icon: <PlumbingIcon fontSize="large" />,
        title: "Plumbing Services",
        desc:
            "From routine maintenance to emergency repairs, our comprehensive plumbing services keep your property’s systems running efficiently. We handle everything from installations to urgent issues with professionalism and care.",
    },
    {
        icon: <LockIcon fontSize="large" />,
        title: "Locksmith Services",
        desc:
            "Locked out or need a security upgrade? Our prompt locksmith services include key replacements, lockouts, and enhanced security solutions to keep your property secure.",
    },
    {
        icon: <BrokenImageIcon fontSize="large" />,
        title: "Glass Repair",
        desc:
            "Cracked or broken glass? We provide fast and efficient repair solutions for windows, doors, and other glass fixtures, ensuring your property remains safe and visually appealing.",
    },
    {
        icon: <CleaningServicesIcon fontSize="large" />,
        title: "Cleaning Services",
        desc:
            "Keep your property spotless with our reliable cleaning services. We tailor our solutions to meet the unique needs of your property, ensuring cleanliness and comfort for residents and visitors.",
    },
    {
        icon: <SpaIcon fontSize="large" />,
        title: "Lawn Care & Landscaping",
        desc:
            "We keep your outdoor spaces lush, clean, and beautifully maintained to boost curb appeal and create a welcoming first impression.",
    },
    {
        icon: <AcUnitIcon fontSize="large" />,
        title: "Snow Removal",
        desc:
            "Stay safe and accessible during winter with our professional snow removal services. We clear driveways, sidewalks, parking lots, and commercial properties using the right tools for the job.",
    },
    {
        icon: <HandymanIcon fontSize="large" />,
        title: "Handyman / General Maintenance",
        desc:
            "We provide reliable handyman and general maintenance services to keep your property functional, well-maintained, and always guest-ready.",
    },
    {
        icon: <HomeRepairServiceIcon fontSize="large" />,
        title: "Renovation & Internal Repairs",
        desc:
            "We offer expert renovation and internal repair services to upgrade, restore, and maintain your property’s comfort, value, and appeal.",
    },
    {
        icon: <FormatPaintIcon fontSize="large" />,
        title: "Painting Services",
        desc:
            "Our expert painting services cover interior and exterior projects, using premium materials to give your property a fresh look and long-lasting finish.",
    },
    {
        icon: <ElectricalServicesIcon fontSize="large" />,
        title: "Electrical Services",
        desc:
            "Protect your property with our comprehensive electrical services. We offer emergency repairs, energy-efficient upgrades, and regular safety inspections to ensure the well-being of your property and its occupants.",
    },
    {
        icon: <PoolIcon fontSize="large" />,
        title: "Pool Maintenance",
        desc:
            "We offer regular pool cleaning, chemical balancing, and equipment inspections to keep your pool safe, sparkling, and guest-ready. Our maintenance ensures a flawless swimming experience with minimal downtime.",
    },
    {
        icon: <FenceIcon fontSize="large" />,
        title: "Fencing",
        desc:
            "Fencing installation and repairs to enhance property security, privacy, and curb appeal. Our services ensure durable, well-crafted fencing solutions tailored to your needs.",
    },
    {
        icon: <ChairIcon fontSize="large" />,
        title: "Staging",
        desc:
            "We professionally stage your property to enhance its appeal, creating inviting spaces that attract more guests and higher bookings. Our strategic styling turns every listing into a standout experience.",
    },
    {
        icon: <HowToRegIcon fontSize="large" />,
        title: "Safety & Compliance",
        desc:
            "We ensure your property meets all safety regulations and compliance standards through regular inspections and updates. Our service protects your investment, your guests, and your peace of mind.",
    },
];

export default function MaintenanceServices() {
    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "24px", md: "3rem" } }}
                >
                    Top Property Management & Maintenance 
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    paragraph
                    sx={{ maxWidth: 800, mx: "auto" }}
                >
                    Managing a property requires expertise, attention to detail, and a trusted partner who truly understands the complexities involved. Home Away From Home Developments Inc. is proud to be recognized as the leading provider of property management and maintenance services. Our dedicated team ensures your property stays in prime condition, delivering an outstanding experience for tenants while giving property owners complete peace of mind.
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    paragraph
                    sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
                >
                    Let Home Away From Home Developments Inc. manage your property 24/7—protect your investment and enjoy hassle-free passive income. With us handling everything, you can relax and truly unwind.
                </Typography>

                <Grid container spacing={4}>
                    {services.map((svc) => (
                        <Grid item xs={12} sm={6} md={4} key={svc.title}>
                            <Box
                                sx={{
                                    backgroundColor: "#333",
                                    borderRadius: 2,
                                    p: 3,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        borderRadius: "50%",
                                        p: 2,
                                        mb: 2,
                                    }}
                                >
                                    {svc.icon}
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                                    {svc.title}
                                </Typography>
                                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                                    {svc.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
