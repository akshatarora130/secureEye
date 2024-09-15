import express from "express";
import dotenv from "dotenv";
import { db } from "./db";
import cors from "cors";
import crypto from "crypto";

const prisma = db;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add/camera", async (req, res) => {
  try {
    const { data, userId } = req.body;
    console.log(data);
    const camera = await prisma.camera.create({
      data: {
        name: data.name,
        number: data.number,
        companyName: data.company,
        type: data.type,
        model: data.model,
        serialNo: data.serialNo,
        range: data.range,
        latitude: data.latitude,
        longitude: data.longitude,
        sharing: data.sharing,
        user: {
          connect: { id: userId },
        },
      },
    });

    res.status(201).json({ camera });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating camera" });
  }
});

app.post("/edit/camera", async (req, res) => {
  const { data, id } = req.body;

  try {
    const updatedCamera = await prisma.camera.update({
      where: { id },
      data: {
        name: data.name,
        number: data.number,
        companyName: data.company,
        type: data.type,
        model: data.model,
        serialNo: data.serialNo,
        range: data.range,
        latitude: data.latitude,
        longitude: data.longitude,
        sharing: data.sharing,
        user: {
          connect: { id: data.userId },
        },
      },
    });

    res.status(200).json({ camera: updatedCamera });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating camera" });
  }
});

app.delete("/delete/camera", async (req, res) => {
  try {
    const { id } = req.body;

    if(!id) {
      return res.status(400).json({ message: "Camera ID is required" });
    }

    await prisma.camera.delete({
      where: { id },
    });

    res.status(200).json({ message: "Camera deleted" });
  } catch (err) { 
    console.error(err);
    res.status(500).json({ message: "Error deleting camera" });
  }
});

app.get("/all/camera", async (req, res) => {
  const { userId } = req.body;
  try {
    const cameras = await prisma.camera.findMany({
      where: { id: userId },
      include: {
        user: true,
      },
    });

    res.status(200).json({ cameras });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting cameras" });
  }
});

app.post("/admin/generatePasskey", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Generate a random alphanumeric passkey
    const passkey = crypto
      .randomBytes(3)
      .toString("hex")
      .toUpperCase()
      .slice(0, 6);

    // Create admin with the generated passkey
    const newAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        passkey,
      },
    });

    // Return the created admin with the passkey
    res.status(201).json({ admin: newAdmin, passkey });
  } catch (error) {
    console.error("Error generating passkey:", error); // More detailed error logging
    res
      .status(500)
      .json({ message: "Failed to generate passkey", error: error }); // Send detailed error
  }
});

app.post("/admin/login", async (req, res) => {
  try {
    const { passkey } = req.body;

    // Find admin by passkey
    const admin = await prisma.admin.findUnique({
      where: { passkey },
    });

    if (!admin) {
      return res.status(401).json({ message: "Invalid passkey" });
    }

    // If admin found, return success response
    res.status(200).json({ message: "Login successful", admin });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Failed to login", error: error });
  }
});

app.post("/camera/verify", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Camera ID is required" });
    }

    const camera = await prisma.camera.update({
      where: { id },
      data: {
        isVerified: true,
      },
    });

    res.status(200).json({ camera });
  } catch (error) {
    console.error("Error verifying camera:", error);
    res.status(500).json({ message: "Failed to verify camera", error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
