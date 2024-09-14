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
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const BACKEND_URL = "http://localhost:4000";
  const { data: session } = useSession();
  const router = useRouter();

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

    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: value ? "" : prevErrors[name],
    }));
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string>,
    key: string
  ) => {
    const value = event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [key]: value ? "" : prevErrors[key],
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleContinue = async () => {
    if (validateStep()) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        const response = await axios.post(`${BACKEND_URL}/add/camera`, {
          data: formData,
          userId: session?.user.id,
        });
        console.log(response);
        if (response.status === 201) {
          router.push(`/user-dashboard`);
        }
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
                      <Typography color="error">{errors.type}</Typography>
                    </FormControl>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      error={!!errors.range}
                    >
                      <InputLabel id="Camera Range">Camera Range</InputLabel>
                      <Select
                        labelId="camera-range-label"
                        name="type"
                        value={formData.range}
                        onChange={(event) => handleSelectChange(event, "range")}
                        label="Camera Range"
                      >
                        <MenuItem value="10-20 meter">10-20 Meter</MenuItem>
                        <MenuItem value="20-30 meter">20-30 Meter</MenuItem>
                        <MenuItem value="30-40 meter">30-40 Meter</MenuItem>
                        <MenuItem value="40-50 meter">40-50 Meter</MenuItem>
                        <MenuItem value="Above 50 meter">
                          Above 50 Meter
                        </MenuItem>
                      </Select>
                      <Typography color="error">{errors.range}</Typography>
                    </FormControl>
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
