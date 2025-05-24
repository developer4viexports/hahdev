import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@mui/material";
import placementImage from "../assets/images/TenantPlacement/tp1.jpg";

export default function TenantPlacementSection() {
    const steps = [
        {
            title: "Strategic Property Advertising",
            text: "We don't just list—we market. Using targeted advertising strategies and high-quality professional photography, we make your property stand out. Our listings are crafted to reach the right audience and attract serious inquiries fast.",
        },
        {
            title: "Rigorous Tenant Screening",
            text: "We go beyond basic checks. Our screening process includes: Background checks, Credit evaluations, Employment verification, Rental history reviews. This thorough vetting ensures your property is entrusted to responsible tenants who will treat it with respect.",
        },
        {
            title: "Legally Compliant Lease Execution",
            text: "Protection starts with the paperwork. Our expert team, including licensed paralegals, prepares and executes detailed tenancy agreements tailored to rental laws. Every agreement includes professionally drafted appendices to safeguard your rights as a landlord.",
        },
    ];

    const benefits = [
        "Faster occupancy with qualified tenants",
        "Reduced turnover and property wear",
        "Fully compliant and enforceable lease documentation",
        "Total peace of mind",
    ];

    return (
        <Box sx={{ backgroundColor: "#f9f9f9", py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                {/* Top intro */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: "1.60rem", md: "2.5rem" },
                    }}
                >
                    Maximize Income. Minimize Vacancy. Leave the Stress to Us.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        fontSize: { xs: "0.95rem", md: "1.125rem" },
                        lineHeight: 1.6,
                        color: "#333",
                    }}
                >
                    At Home Away from Home Developments Inc. we offer end-to-end Tenant
                    Placement Services that ensure your property is rented to dependable,
                    high-quality tenants. Our proven, professional approach is designed to
                    reduce vacancy periods, protect your investment, and maximize your
                    rental income.
                </Typography>

                {/* Steps & Image */}
                <Grid container spacing={4} alignItems="stretch">
                    {/* Left column */}
                    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, mb: 2 }}
                        >
                            What’s Included in Our Tenant Placement Service?
                        </Typography>

                        <List disablePadding sx={{ flexGrow: 1 }}>
                            {steps.map((step, idx) => (
                                <ListItem key={idx} sx={{ alignItems: "flex-start", py: 1 }}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                {`${idx + 1}. ${step.title}`}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body2" sx={{ color: "#555" }}>
                                                {step.text}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>

                        {/* <Divider sx={{ my: 4 }} /> */}

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 2, mt: 2 }}
                        >
                            Why Choose Home Away From Home Developments Inc. for Tenant Placement?
                        </Typography>
                        <List sx={{ pl: 2 }}>
                            {benefits.map((b, i) => (
                                <ListItem key={i} sx={{ display: "list-item", py: 0.5 }}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body1" sx={{ color: "#333" }}>
                                               <b>-</b> {b}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Right column: full-height image */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            alignItems: "stretch",
                        }}
                    >
                        <Box
                            component="img"
                            src={placementImage}
                            alt="Tenant Placement"
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 2,
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
