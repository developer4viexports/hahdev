import React, { useState, useEffect } from "react";
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
  Button,
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

export default function Navbar() {
  const [bgColor, setBgColor] = useState("rgba(0,0,0,0.6)");
  const [textColor] = useState("#fff");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceSubLinks = [
    { text: "Short-Term Rental Management (STR)", to: "/service/strm", icon: <ChevronRightIcon /> },
    { text: "Long-Term Rental Management (LTR)", to: "/service/ltrm", icon: <ChevronRightIcon /> },
    { text: "Property Maintenance", to: "/service/property-maintenance", icon: <ChevronRightIcon /> },
    { text: "Airbnb Co-Hosting", to: "/service/airbnb-co-hosting", icon: <ChevronRightIcon /> },
    { text: "Tenant Placement", to: "/service/tenant-placement", icon: <ChevronRightIcon /> },
  ];

  const navLinks = [
    { text: "Home", icon: <HomeIcon />, to: "/" },
    { text: "Services", icon: <BusinessIcon />, dropdown: true },
    { text: "Our Properties", icon: <StorefrontIcon />, to: "/properties" },
    { text: "Blog", icon: <BookIcon />, to: "/blog" },
    { text: "About", icon: <InfoIcon />, to: "/about" },
    { text: "Contact", icon: <LocalPhoneIcon />, to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setBgColor(
        window.scrollY >= window.innerHeight * 0.9 ? "#000" : "rgba(0,0,0,0.6)"
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleServiceMenuOpen = (e) => setServiceAnchorEl(e.currentTarget);
  const handleServiceMenuClose = () => setServiceAnchorEl(null);
  const toggleServices = () => setServicesOpen(prev => !prev);

  return (
    <>
      <AppBar
        elevation={0}
        sx={{ backgroundColor: { xs: "#000", md: bgColor }, transition: "background-color 0.3s", position: { xs: "static", md: "fixed" } }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 15 }, py: 2, color: textColor }}>
          <Box component={RouterLink} to="/">
            <Box component="img" src={logo} alt="Logo" sx={{ height: 50 }} />
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
            {navLinks.map(item =>
              item.dropdown ? (
                <React.Fragment key="services">
                  <Typography
                    onMouseEnter={handleServiceMenuOpen}
                    onClick={handleServiceMenuOpen}
                    sx={{ cursor: "pointer", color: "inherit" }}
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
                        sx={{ padding: "10px" }}
                      >
                        {link.text}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Typography
                  key={item.text}
                  component={RouterLink}
                  to={item.to}
                  sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                >
                  {item.text}
                </Typography>
              )
            )}
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: textColor }}
            onClick={toggleDrawer(true)}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
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

            {/* Home */}
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to="/"
                onClick={toggleDrawer(false)}
                sx={{
                  py: 1.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                  "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" primaryTypographyProps={{ fontSize: "1rem" }} />
              </ListItemButton>
            </ListItem>

            {/* Services collapse */}
            <ListItemButton
              onClick={toggleServices}
              sx={{
                py: 1.5,
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Services" primaryTypographyProps={{ fontSize: "1rem" }} />
              {servicesOpen ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
            </ListItemButton>
            <Collapse in={servicesOpen} timeout="auto" unmountOnExit sx={{ transition: "all 0.3s ease" }}>
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

            <Divider sx={{ bgcolor: "#444", my: 1 }} />

            {/* Other links */}
            {navLinks.filter(item => !item.dropdown && item.text !== 'Home').map(item => (
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
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}