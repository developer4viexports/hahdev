import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    Tabs,
    Tab,
} from "@mui/material";
// import bg from "../assets/images/hero.png";


function ServiceHero({ heading, subheading, bg, background }) {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: { xs: "30vh", md: "100vh" },
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                borderBottomRightRadius: "10%",
            }}
        >
            {/* Semi-transparent overlay for better text contrast */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    // backgroundColor: "rgba(0,0,0,0.4)",
                }}
            />

            {/* Main Content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    px: 2,
                }}
            >
                {/* Main Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 2,
                        mb: 1,
                        fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                    }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: 400,
                        textTransform: "uppercase",
                        letterSpacing: 2,
                        mb: 1,
                        background: background,
                        // background: "#1B1C1E",
                        padding: "4px 2px",
                        // Responsive font sizes
                        fontSize: {
                            xs: "0.7rem",
                            sm: "1rem",
                            md: "2rem",
                        },
                    }}
                >
                    {subheading}
                </Typography>
            </Box>
        </Box>
    )
}

export default ServiceHero;