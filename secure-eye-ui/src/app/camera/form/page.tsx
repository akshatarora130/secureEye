"use client";

import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { MapPin, Camera, User, Settings } from "lucide-react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

const totalSteps = 4;

const reversedTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#000000",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#CCCCCC",
            },
            "&:hover fieldset": {
              borderColor: "#000000",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#000000",
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#333333",
          "&.Mui-checked": {
            color: "#000000",
          },
        },
      },
    },
  },
});

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    company: "",
    model: "",
    serialNo: "",
    type: "",
    range: "",
    location: "",
    sharing: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string>,
    key: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: event.target.value,
    }));
  };

  const handleContinue = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      console.log(formData);
      alert("Form completed successfully!");
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const stepIcons = [
    <User key="user" className="w-6 h-6" />,
    <Camera key="camera" className="w-6 h-6" />,
    <MapPin key="map" className="w-6 h-6" />,
    <Settings key="settings" className="w-6 h-6" />,
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  return (
    <ThemeProvider theme={reversedTheme}>
      <div className="flex items-center justify-center min-h-screen bg-black py-10 px-4">
        <motion.div
          className="w-full max-w-xl bg-white shadow-2xl rounded-lg overflow-hidden border border-[#CCCCCC] relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)", // Glowing white border
          }}
        >
          <div className="bg-black text-white p-6">
            <h2 className="text-3xl font-bold text-center">
              Camera Registration
            </h2>
          </div>
          <div className="p-8">
            <div className="flex justify-between mb-12">
              {stepIcons.map((icon, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-center w-14 h-14 rounded-full ${
                    index <= currentStep
                      ? "bg-black text-white"
                      : "bg-[#EEEEEE] text-black"
                  } transition-all duration-300 ease-in-out`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                {...fadeInUp}
                className="min-h-[250px]"
              >
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      User Information
                    </h3>
                    <TextField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      label="Contact Number"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      type="tel"
                    />
                  </div>
                )}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Camera Details
                    </h3>
                    <TextField
                      label="Camera Company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      label="Camera Model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      label="Serial Number"
                      name="serialNo"
                      value={formData.serialNo}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="camera-type-label">
                        Camera Type
                      </InputLabel>
                      <Select
                        labelId="camera-type-label"
                        name="type"
                        value={formData.type}
                        onChange={(event) => handleSelectChange(event, "type")}
                        label="Camera Type"
                      >
                        <MenuItem value="Simple Camera">Simple Camera</MenuItem>
                        <MenuItem value="Night Vision Camera">
                          Night Vision Camera
                        </MenuItem>
                        <MenuItem value="360° Panoramic Camera">
                          360° Panoramic Camera
                        </MenuItem>
                        <MenuItem value="Infrared Camera">
                          Infrared Camera
                        </MenuItem>
                        <MenuItem value="Wide-Angle Camera">
                          Wide-Angle Camera
                        </MenuItem>
                        <MenuItem value="Smart Camera">Smart Camera</MenuItem>
                        <MenuItem value="4K Ultra HD Camera">
                          4K Ultra HD Camera
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="camera-range-label">
                        Camera Range
                      </InputLabel>
                      <Select
                        labelId="camera-range-label"
                        name="range"
                        value={formData.range}
                        onChange={(event) => handleSelectChange(event, "range")}
                        label="Camera Range"
                      >
                        <MenuItem value="10-20 meters">10-20 meters</MenuItem>
                        <MenuItem value="20-30 meters">20-30 meters</MenuItem>
                        <MenuItem value="30-40 meters">30-40 meters</MenuItem>
                        <MenuItem value="40-50 meters">40-50 meters</MenuItem>
                        <MenuItem value="above 50">Above 50 meters</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Set Location
                    </h3>
                    <TextField
                      label="Location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Settings
                    </h3>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="sharing"
                          checked={formData.sharing}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Allow sharing "
                    />
                    <Typography variant="body2" color="textSecondary">
                      Note: Enabling this option will allow your camera
                      recordings to be visible to the authorities. Please ensure
                      you are comfortable with this before proceeding.
                    </Typography>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <Button
                onClick={handleBack}
                variant="outlined"
                className="text-black border-black hover:bg-[#333333] hover:text-white"
              >
                Back
              </Button>
              <Button onClick={handleContinue} variant="contained">
                {currentStep === totalSteps - 1 ? "Finish" : "Continue"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}
