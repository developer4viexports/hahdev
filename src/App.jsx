// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import OurProperties from "./pages/OurProperties";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";

// Individual service pages
import STRM from "./pages/services/STRM";
import LTRM from "./pages/services/LTRM";
import PropertyMaintenance from "./pages/services/PropertyMaintenance";
import AirBnbCoHosting from "./pages/services/AirBnbCoHosting";
import TenantPlacement from "./pages/services/TenantPlacement";
import ViewBlog from "./components/ViewBlog";

export default function App() {
  return (
    <Router>
      {/* This component handles window.scrollTo(0,0) on every route change */}
      <ScrollToTop />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<OurProperties />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/view-blog/:id" element={<ViewBlog />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />

        {/* Service sub-pages */}
        <Route path="/service/strm" element={<STRM />} />
        <Route path="/service/ltrm" element={<LTRM />} />
        <Route path="/service/property-maintenance" element={<PropertyMaintenance />} />
        <Route path="/service/airbnb-co-hosting" element={<AirBnbCoHosting />} />
        <Route path="/service/tenant-placement" element={<TenantPlacement />} />

        {/* Catch-all → redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
