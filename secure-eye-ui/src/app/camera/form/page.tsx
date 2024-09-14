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
  const [errors, setErrors] = useState<any>({});

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

  const validateStep = () => {
    let newErrors: any = {};
    switch (currentStep) {
      case 0:
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.number) newErrors.number = "Contact number is required";
        break;
      case 1:
        if (!formData.company) newErrors.company = "Camera company is required";
        if (!formData.model) newErrors.model = "Camera model is required";
        if (!formData.serialNo)
          newErrors.serialNo = "Serial number is required";
        if (!formData.type) newErrors.type = "Camera type is required";
        if (!formData.range) newErrors.range = "Camera range is required";
        break;
      case 2:
        if (!formData.location) newErrors.location = "Location is required";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    if (validateStep()) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        console.log(formData);
        alert("Form completed successfully!");
      }
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
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                    <TextField
                      label="Contact Number"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      type="tel"
                      error={!!errors.number}
                      helperText={errors.number}
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
                      error={!!errors.company}
                      helperText={errors.company}
                    />
                    <TextField
                      label="Camera Model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      error={!!errors.model}
                      helperText={errors.model}
                    />
                    <TextField
                      label="Serial Number"
                      name="serialNo"
                      value={formData.serialNo}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      error={!!errors.serialNo}
                      helperText={errors.serialNo}
                    />
                    <FormControl
                      fullWidth
                      variant="outlined"
                      error={!!errors.type}
                    >
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
                        <MenuItem value="IP Camera">IP Camera</MenuItem>
                      </Select>
                      <Typography color="error">{errors.type}</Typography>
                    </FormControl>
                    <TextField
                      label="Camera Range"
                      name="range"
                      value={formData.range}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      error={!!errors.range}
                      helperText={errors.range}
                    />
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Location and Sharing
                    </h3>
                    <TextField
                      label="Location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      error={!!errors.location}
                      helperText={errors.location}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.sharing}
                          onChange={handleCheckboxChange}
                          name="sharing"
                        />
                      }
                      label="Allow sharing with other agencies"
                    />
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Final Step
                    </h3>
                    <p className="text-black mb-4">
                      Please review all the details before submitting the form.
                    </p>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={handleContinue}
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between p-6">
            <Button
              onClick={handleBack}
              disabled={currentStep === 0}
              variant="outlined"
              color="primary"
            >
              Back
            </Button>
            <Button
              onClick={handleContinue}
              disabled={Object.keys(errors).length > 0}
              variant="contained"
              color="primary"
            >
              {currentStep === totalSteps - 1 ? "Finish" : "Continue"}
            </Button>
          </div>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}
