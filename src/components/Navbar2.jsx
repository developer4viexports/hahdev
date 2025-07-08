import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    ListSubheader,
    Menu,
    MenuItem,
    Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BookIcon from "@mui/icons-material/Book";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/images/HAH_White_logo.png";

export default function Navbar2() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const textColor = "#fff";

    const toggleDrawer = (open) => () => setDrawerOpen(open);
    const handleServiceMenuOpen = (e) => setServiceAnchorEl(e.currentTarget);
    const handleServiceMenuClose = () => setServiceAnchorEl(null);
    const toggleMobileServices = () => setMobileServicesOpen(prev => !prev);

    const serviceSubLinks = [
        { text: "Short-Term Rental Management (STR)", to: "/service/strm", icon: <ChevronRightIcon /> },
        { text: "Long-Term Rental Management (LTR)", to: "/service/ltrm", icon: <ChevronRightIcon /> },
        { text: "Property Maintenance", to: "/service/property-maintenance", icon: <ChevronRightIcon /> },
        { text: "Airbnb Co-Hosting", to: "/service/airbnb-co-hosting", icon: <ChevronRightIcon /> },
        { text: "Tenant Placement", to: "/service/tenant-placement", icon: <ChevronRightIcon /> },
    ];

    // Update navLinks: comment out dropdown for "Our Properties" and add external link instead
    const navLinks = [
        { text: "Home", icon: <HomeIcon />, to: "/" },
        { text: "Services", icon: <BusinessIcon />, dropdown: true },
        // { text: "Our Properties", icon: <StorefrontIcon />, to: "/properties", dropdown: true }, // Commented dropdown
        { text: "Our Properties", icon: <StorefrontIcon />, external: true, to: "https://book.thehah.ca/all-listings" }, // External link
        { text: "Blog", icon: <BookIcon />, to: "/blog" },
        { text: "About", icon: <InfoIcon />, to: "/about" },
        { text: "Contact", icon: <LocalPhoneIcon />, to: "/contact" },
    ];

    return (
        <>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: "#000" }}>
                <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4, md: 15 }, py: 2, color: textColor }}>
                    <Box component={RouterLink} to="/" sx={{ display: "inline-block" }}>
                        <Box component="img" src={logo} alt="Logo" sx={{ height: 50 }} />
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: { xs: 2, sm: 3, md: 5 }, alignItems: 'center' }}>
                        {navLinks.map(item =>
                            // Commented out dropdown for Properties
                            // item.dropdown && item.text === "Our Properties" ? (
                            //     <React.Fragment key="properties-menu">
                            //         <Typography
                            //             onMouseEnter={handlePropertiesMenuOpen}
                            //             onClick={handlePropertiesMenuOpen}
                            //             sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                            //         >
                            //             {item.text}
                            //         </Typography>
                            //         <Menu
                            //             anchorEl={propertiesAnchorEl}
                            //             open={Boolean(propertiesAnchorEl)}
                            //             onClose={handlePropertiesMenuClose}
                            //             MenuListProps={{ onMouseLeave: handlePropertiesMenuClose }}
                            //         >
                            //             {propertiesSubLinks.map(link => (
                            //                 <MenuItem
                            //                     key={link.text}
                            //                     component={RouterLink}
                            //                     to={link.to}
                            //                     onClick={handlePropertiesMenuClose}
                            //                 >
                            //                     {link.text}
                            //                 </MenuItem>
                            //             ))}
                            //         </Menu>
                            //     </React.Fragment>
                            // ) :
                            item.dropdown ? (
                                <React.Fragment key="services-menu">
                                    <Typography
                                        onMouseEnter={handleServiceMenuOpen}
                                        onClick={handleServiceMenuOpen}
                                        sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                                    >
                                        {item.text}
                                    </Typography>
                                    <Menu
                                        anchorEl={serviceAnchorEl}
                                        open={Boolean(serviceAnchorEl)}
                                        onClose={handleServiceMenuClose}
                                        MenuListProps={{ onMouseLeave: handleServiceMenuClose }}
                                    >
                                        {serviceSubLinks.map(link => (
                                            <MenuItem
                                                key={link.text}
                                                component={RouterLink}
                                                to={link.to}
                                                onClick={handleServiceMenuClose}
                                            >
                                                {link.text}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </React.Fragment>
                            ) : item.external ? (
                                <Typography
                                    key={item.text}
                                    component="a"
                                    href={item.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="body1"
                                    sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                                >
                                    {item.text}
                                </Typography>
                            ) : (
                                <Typography
                                    key={item.text}
                                    component={RouterLink}
                                    to={item.to}
                                    variant="body1"
                                    sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                                >
                                    {item.text}
                                </Typography>
                            )
                        )}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        sx={{ display: { xs: "block", md: "none" }, color: textColor }}
                        onClick={toggleDrawer(true)}
                        aria-label="Open navigation menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: { xs: "80%", sm: 300 },
                        maxWidth: "100%",
                        bgcolor: "rgba(0,0,0,0.9)",
                        color: "#fff",
                        transition: "transform 0.3s ease-in-out",
                    }
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    {/* Header with logo and close button */}
                    <Box sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "#111" }}>
                        <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} />
                        <IconButton onClick={toggleDrawer(false)} aria-label="Close navigation menu">
                            <CloseIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Box>

                    <Divider sx={{ bgcolor: "#444" }} />

                    {/* Navigation list */}
                    <List sx={{ flexGrow: 1, bgcolor: "transparent" }}>
                        <ListSubheader sx={{ bgcolor: "transparent", color: "#ccc", fontSize: "1.1rem", fontWeight: 500 }}>
                            Menu
                        </ListSubheader>

                        {navLinks.map(item =>
                            // Commented out dropdown for Properties in mobile drawer
                            // item.dropdown && item.text === "Our Properties" ? (
                            //     <React.Fragment key="mobile-properties">
                            //         <ListItemButton
                            //             onClick={toggleMobileProperties}
                            //             sx={{
                            //                 py: 1.5,
                            //                 "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                            //                 "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                            //             }}
                            //         >
                            //             <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                            //                 <StorefrontIcon />
                            //             </ListItemIcon>
                            //             <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: "1rem" }} />
                            //             {mobilePropertiesOpen ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
                            //         </ListItemButton>
                            //         <Collapse in={mobilePropertiesOpen} timeout="auto" unmountOnExit sx={{ transition: "all 0.3s ease" }}>
                            //             <List component="div" disablePadding>
                            //                 {propertiesSubLinks.map(link => (
                            //                     <ListItem key={link.text} disablePadding>
                            //                         <ListItemButton
                            //                             component={RouterLink}
                            //                             to={link.to}
                            //                             onClick={toggleDrawer(false)}
                            //                             sx={{
                            //                                 py: 1,
                            //                                 pl: 6,
                            //                                 "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                            //                                 "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                            //                             }}
                            //                         >
                            //                             <ListItemIcon sx={{ color: "#ccc", minWidth: 30 }}>
                            //                                 {link.icon}
                            //                             </ListItemIcon>
                            //                             <ListItemText
                            //                                 primary={link.text}
                            //                                 primaryTypographyProps={{ fontSize: "0.95rem", color: "#ddd" }}
                            //                             />
                            //                         </ListItemButton>
                            //                     </ListItem>
                            //                 ))}
                            //             </List>
                            //         </Collapse>
                            //     </React.Fragment>
                            // ) :
                            item.dropdown ? (
                                <React.Fragment key="mobile-services">
                                    <ListItemButton
                                        onClick={toggleMobileServices}
                                        sx={{
                                            py: 1.5,
                                            "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                                            "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                                            <BusinessIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: "1rem" }} />
                                        {mobileServicesOpen ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
                                    </ListItemButton>
                                    <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit sx={{ transition: "all 0.3s ease" }}>
                                        <List component="div" disablePadding>
                                            {serviceSubLinks.map(link => (
                                                <ListItem key={link.text} disablePadding>
                                                    <ListItemButton
                                                        component={RouterLink}
                                                        to={link.to}
                                                        onClick={toggleDrawer(false)}
                                                        sx={{
                                                            py: 1,
                                                            pl: 6,
                                                            "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                                                            "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                                                        }}
                                                    >
                                                        <ListItemIcon sx={{ color: "#ccc", minWidth: 30 }}>
                                                            {link.icon}
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={link.text}
                                                            primaryTypographyProps={{ fontSize: "0.95rem", color: "#ddd" }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                </React.Fragment>
                            ) : item.external ? (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href={item.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={toggleDrawer(false)}
                                        sx={{
                                            py: 1.5,
                                            "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                                            "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: "1rem" }} />
                                    </ListItemButton>
                                </ListItem>
                            ) : (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton
                                        component={RouterLink}
                                        to={item.to}
                                        onClick={toggleDrawer(false)}
                                        sx={{
                                            py: 1.5,
                                            "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                                            "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: "1rem" }} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )}

                        <Divider sx={{ bgcolor: "#444", my: 1 }} />

                        {/* Careers */}
                        <ListItem disablePadding>
                            <ListItemButton
                                component={RouterLink}
                                to="/career"
                                onClick={toggleDrawer(false)}
                                sx={{
                                    py: 1.5,
                                    "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                                    "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                                }}
                            >
                                <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                                    <BusinessIcon />
                                </ListItemIcon>
                                <ListItemText primary="Careers" primaryTypographyProps={{ fontSize: "1rem" }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}