import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ServicesAccordion({ services, sectionKey, accordioanImg }) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${accordioanImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 6, md: 12 },
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.5)",
        }}
      />
      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "#fff", mb: 4, fontSize:{xs:"30px",md:"3rem"}}}
        >
          Our {sectionKey} Management Services
        </Typography>

        {services.map((svc) => (
          <Accordion
            key={svc.id}
            expanded={expanded === svc.id}
            onChange={handleChange(svc.id)}
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              border: "1px solid #fff",
              borderRadius: 2,
              mb: 2,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === svc.id ? (
                  <RemoveIcon sx={{ color: "#fff" }} />
                ) : (
                  <AddIcon sx={{ color: "#fff" }} />
                )
              }
              sx={{ px: 2, py: 1 }}
            >
              <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                {svc.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, pb: 2 }}>
              <Typography sx={{ color: "#fff", lineHeight: 1.6 }}>
                {svc.details}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
