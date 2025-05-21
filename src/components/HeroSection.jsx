import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import bg from "../assets/images/hero.png";
import axios from "axios";
 import { ToastContainer, toast } from 'react-toastify';

function HeroSection() {
  const [rentalType, setRentalType] = useState("STR");
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [duration, setDuration] = useState("");
  const [guests, setGuests] = useState("");
  const [bedroom, setBedroom] = useState("");

  const handleRentalTypeChange = (event, newValue) => {
    if (newValue !== null) {
      setRentalType(newValue);
      // Reset form fields when switching tabs
      setLocation("");
      setCheckIn("");
      setCheckOut("");
      setMoveIn("");
      setDuration("");
      setGuests("");
    }
  };

  const handleSearch = () => {
    let params;
    if (rentalType === "STR") {
      params = new URLSearchParams({
        numberOfGuests: guests.toString(),
        city: location,
        start: checkIn,
        end: checkOut,
        page: "1",
      });
    } 
    const url = `https://book.thehah.ca/search?${params.toString()}`;
    window.open(url, "_blank");
  };


const handleSubmit = async () => {
  try {
    const payload = {
      numberOfGuests: guests,
      city:            location,
      bedroom:         bedroom,
      duration:        duration,
    };
    const response = await axios.post(
      "https://hah-backend-p9sa.onrender.com/api/query",
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("response ",response  )
if(response.data.success){
  toast.success("Request Send Successfully");
}
    console.log("Server response:", response.data);
    // e.g. show a success message to the user
  } catch (error) {
    console.error("Error sending enquiry:", error);
    // e.g. show an error toast
  }
};


  const locations = [
    "Any Location",
    "Niagara Falls",
    "St. Catharines",
    "Thorold",
    "Welland",
  ];

  const durations = [
    "3 Months",
    "6 Months",
    "1 Year",
    "2 Years",
    "3+ Years",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "70vh", md: "100vh" },
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        borderBottomRightRadius: "12%",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", px: { xs: 0, sm: 4, md: 6 }, py: { xs: 4, md: 6 } }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 3,
            mb: 3,
            fontSize: { xs: "2.5rem", sm: "3.2rem", md: "4.5rem" },
            lineHeight: 1.2,
          }}
        >
          BE OUR GUEST
        </Typography>

        {/* Subheading and Tabs Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mb: 5,
            gap: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              px: 3,
              py: 1,
              backgroundColor: "rgba(27, 28, 30, 0.85)",
              borderRadius: 2,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
              fontWeight: 500,
            }}
          >
            LIVE LIKE A KING IN OUR BEST HOUSES
          </Typography>

          {/* Rental type tabs */}
          <Box sx={{ p: 1.5, borderRadius: 2 }}>
            <Tabs
              value={rentalType}
              onChange={handleRentalTypeChange}
              centered
              sx={{
                "& .MuiTab-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  minWidth: "150px",
                  textTransform: "none",
                  mx: 1,
                  py: 1.5,
                  borderRadius: "10px",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  },
                },
                "& .Mui-selected": {
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              <Tab label="Short Term Rental" value="STR" />
              <Tab label="Long Term Rental" value="LTR" />
            </Tabs>
          </Box>
        </Box>

        {/* Search form */}
        <Paper
          elevation={5}
          sx={{
            width: { xs: "95%", sm: "95%", md: "950px" },
            mx: "auto",
            py: { xs: 2, sm: 4, md: 2 },
            px: { xs: 2, sm: 3, md: 2 },
            borderRadius: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 2 },
            bgcolor: "rgba(255, 255, 255, 0.94)",
            alignItems: { sm: "center" },
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {rentalType === "STR" ? (
              // STR Form (Existing)
              <Box
                sx={{
                  display: { xs: "grid", sm: "flex" },
                  gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(5, 1fr)" },
                  flexDirection: { sm: "row" },
                  gap: { xs: 1, sm: 1 },
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <FormControl
                    variant="standard"
                    sx={{
                      "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                      width: "100%",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderRadius: "6px",
                      backgroundColor: "rgba(245, 245, 245, 0.6)",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "text.secondary",
                        pl: 1,
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      }}
                    >
                      Location
                    </InputLabel>
                    <Select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      label="Location"
                      sx={{
                        "&:before, &:after": { borderBottom: "none" },
                        "& .MuiSelect-select": {
                          paddingBottom: "6px",
                          paddingLeft: "12px",
                          paddingTop: "8px",
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        },
                        borderRadius: "6px",
                        py: 1,
                        px: 1,
                        width: "100%",
                      }}
                    >
                      <MenuItem value="">
                        <em>Select a location</em>
                      </MenuItem>
                      {locations.map((loc) => (
                        <MenuItem key={loc} value={loc}>
                          {loc}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

    <Box sx={{ width: "100%" }}>
      <TextField
        label="Guests"
        type="number"
        variant="standard"
        value={guests}
        onChange={(e) => {
          // mirror whatever the user types, including "" or "0"
          setGuests(e.target.value);
        }}
        onBlur={() => {
          // enforce minimum of 1 when they leave the field
          if (!guests || Number(guests) < 1) {
            setGuests("1");
          }
        }}
        InputProps={{
          inputProps: { min: 1 },
          sx: {
            "& input[type=number]": {
              MozAppearance: "textfield",
              fontSize: { xs: "0.85rem", sm: "1rem" },
            },
            "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: "auto",
            },
            backgroundColor: "rgba(245, 245, 245, 0.6)",
            borderRadius: "6px",
            py: 1,
            px: 2,
            width: "100%",
          },
        }}
        InputLabelProps={{
          shrink: true,
          sx: { fontSize: { xs: "0.85rem", sm: "0.95rem" }, pl: 1 },
        }}
        sx={{
          "& .MuiInput-underline:before, & .MuiInput-underline:after": {
            borderBottom: "none",
          },
          width: "100%",
          boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
          borderRadius: "6px",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
          },
        }}
      />
    </Box>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    label="Check In"
                    type="date"
                    variant="standard"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                      sx: { fontSize: { xs: "0.85rem", sm: "0.95rem" }, pl: 1 },
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: "rgba(245, 245, 245, 0.6)",
                        borderRadius: "6px",
                        py: 1,
                        px: 2,
                        width: "100%",
                        "&::-webkit-calendar-picker-indicator": {
                          filter: "invert(0.5)",
                          cursor: "pointer",
                        },
                        "& input": {
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        },
                      },
                      placeholder: "dd/mm/yyyy",
                    }}
                    sx={{
                      "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                      width: "100%",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderRadius: "6px",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                      },
                      "& input:invalid + fieldset": {
                        borderColor: "grey",
                      },
                      "& input:valid + fieldset": {
                        borderColor: "grey",
                      },
                      "& input:invalid": {
                        color: "grey",
                      },
                      "& input:valid": {
                        color: "black",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <TextField
                    label="Check Out"
                    type="date"
                    variant="standard"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                      sx: { fontSize: { xs: "0.85rem", sm: "0.95rem" }, pl: 1 },
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: "rgba(245, 245, 245, 0.6)",
                        borderRadius: "6px",
                        py: 1,
                        px: 2,
                        width: "100%",
                        "&::-webkit-calendar-picker-indicator": {
                          filter: "invert(0.5)",
                          cursor: "pointer",
                        },
                        "& input": {
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        },
                      },
                      placeholder: "dd/mm/yyyy",
                    }}
                    sx={{
                      "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                      width: "100%",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderRadius: "6px",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                      },
                      "& input:invalid + fieldset": {
                        borderColor: "grey",
                      },
                      "& input:valid + fieldset": {
                        borderColor: "grey",
                      },
                      "& input:invalid": {
                        color: "grey",
                      },
                      "& input:valid": {
                        color: "black",
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={handleSearch}
                    variant="contained"
                    size="large"
                    startIcon={<SearchIcon />}
                    sx={{
                      bgcolor: "#000",
                      "&:hover": {
                        bgcolor: "#333",
                        transform: "scale(1.03)",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                      },
                      height: "60px",
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      width: "100%",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      justifyContent: "center",
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            ) : (
              // LTR Form
              <Box
                sx={{
                  display: { xs: "grid", sm: "flex" },
                  gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(5, 1fr)" },
                  flexDirection: { sm: "row" },
                  gap: { xs: 1, sm: 1 },
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <FormControl
                    variant="standard"
                    sx={{
                      "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                      width: "100%",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderRadius: "6px",
                      backgroundColor: "rgba(245, 245, 245, 0.6)",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "text.secondary",
                        pl: 1,
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      }}
                    >
                      Location
                    </InputLabel>
                    <Select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      label="Location"
                      sx={{
                        "&:before, &:after": { borderBottom: "none" },
                        "& .MuiSelect-select": {
                          paddingBottom: "6px",
                          paddingLeft: "12px",
                          paddingTop: "8px",
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        },
                        borderRadius: "6px",
                        py: 1,
                        px: 1,
                        width: "100%",
                      }}
                    >
                      <MenuItem value="">
                        <em>Select a location</em>
                      </MenuItem>
                      {locations.map((loc) => (
                        <MenuItem key={loc} value={loc}>
                          {loc}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>


                {/* <Box sx={{ width: "100%" }}>
                  <FormControl
                    variant="standard"
                    sx={{
                      "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                      width: "100%",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderRadius: "6px",
                      backgroundColor: "rgba(245, 245, 245, 0.6)",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "text.secondary",
                        pl: 1,
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      }}
                    >
                      No. of Bedroom
                    </InputLabel>
                    <Select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      label="Duration"
                      sx={{
                        "&:before, &:after": { borderBottom: "none" },
                        "& .MuiSelect-select": {
                          paddingBottom: "6px",
                          paddingLeft: "12px",
                          paddingTop: "8px",
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        },
                        borderRadius: "6px",
                        py: 1,
                        px: 1,
                        width: "100%",
                      }}
                    >
                      <MenuItem value="">
                        <em>Select duration</em>
                      </MenuItem>
                      {durations.map((dur) => (
                        <MenuItem key={dur} value={dur}>
                          {dur}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box> */}


<Box sx={{ width: "100%" }}>
  <TextField
    label="No. of Bedroom"
    type="number"
    variant="standard"
    value={bedroom}
    onChange={e => setBedroom(e.target.value)}
    onBlur={() => {
      if (!bedroom || Number(bedroom) < 1) {
        setBedroom("1");
      }
    }}
    InputProps={{
      inputProps: { min: 1 },
      sx: {
        "& input[type=number]": {
          MozAppearance: "textfield",
          fontSize: { xs: "0.85rem", sm: "1rem" },
        },
        "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
          WebkitAppearance: "auto",
        },
        backgroundColor: "rgba(245, 245, 245, 0.6)",
        borderRadius: "6px",
        py: 1,
        px: 2,
        width: "100%",
      },
    }}
    InputLabelProps={{
      shrink: true,
      sx: { fontSize: { xs: "0.85rem", sm: "0.95rem" }, pl: 1 },
    }}
    sx={{
      "& .MuiInput-underline:before, & .MuiInput-underline:after": {
        borderBottom: "none",
      },
      width: "100%",
      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      borderRadius: "6px",
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
      },
    }}
  />
</Box>

<Box sx={{ width: "100%" }}>
  <TextField
    label="No. of People"
    type="number"
    variant="standard"
    value={guests}
    onChange={e => setGuests(e.target.value)}
    onBlur={() => {
      if (!guests || Number(guests) < 1) {
        setGuests("1");
      }
    }}
    InputProps={{
      inputProps: { min: 1 },
      sx: {
        "& input[type=number]": {
          MozAppearance: "textfield",
          fontSize: { xs: "0.85rem", sm: "1rem" },
        },
        "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
          WebkitAppearance: "auto",
        },
        backgroundColor: "rgba(245, 245, 245, 0.6)",
        borderRadius: "6px",
        py: 1,
        px: 2,
        width: "100%",
      },
    }}
    InputLabelProps={{
      shrink: true,
      sx: { fontSize: { xs: "0.85rem", sm: "0.95rem" }, pl: 1 },
    }}
    sx={{
      "& .MuiInput-underline:before, & .MuiInput-underline:after": {
        borderBottom: "none",
      },
      width: "100%",
      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      borderRadius: "6px",
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
      },
    }}
  />
</Box>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    label="Rent Expectation"
                    type="number"
                    variant="standard"
                    value={moveIn}
                    onChange={(e) => setMoveIn(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                      sx: { fontSize: { xs: "0.85rem", sm: "0.95rem" }, pl: 1 },
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: "rgba(245, 245, 245, 0.6)",
                        borderRadius: "6px",
                        py: 1,
                        px: 2,
                        width: "100%",
                        "&::-webkit-calendar-picker-indicator": {
                          filter: "invert(0.5)",
                          cursor: "pointer",
                        },
                        "& input": {
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        },
                      },
                      // placeholder: "dd/mm/yyyy",
                    }}
                    sx={{
                      "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                      width: "100%",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderRadius: "6px",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                      },
                      "& input:invalid + fieldset": {
                        borderColor: "grey",
                      },
                      "& input:valid + fieldset": {
                        borderColor: "grey",
                      },
                      "& input:invalid": {
                        color: "grey",
                      },
                      "& input:valid": {
                        color: "black",
                      },
                    }}
                  />
                </Box>



                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    size="large"
                    // startIcon={<SearchIcon />}
                    sx={{
                      bgcolor: "#000",
                      "&:hover": {
                        bgcolor: "#333",
                        transform: "scale(1.03)",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                      },
                      height: "60px",
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      width: "100%",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      justifyContent: "center",
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            )}

            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "center",
                width: "100%",
                mt: 2,
              }}
            >
              <Button
                onClick={handleSubmit}
                variant="contained"
                size="large"
                // startIcon={<SearchIcon />}
                sx={{
                  bgcolor: "#000",
                  "&:hover": {
                    bgcolor: "#333",
                    transform: "scale(1.03)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                  },
                  height: "60px",
                  borderRadius: "50px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  width: "60%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  justifyContent: "center",
                  px: 4,
                  py: 1.5,
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default HeroSection;