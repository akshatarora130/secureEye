import express from "express";
import dotenv from "dotenv";
import { db } from "./db";

const prisma = db;

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add/camera", async (req, res) => {
  const {
    name,
    number,
    companyName,
    type,
    model,
    serialNo,
    range,
    location,
    sharing,
    userId,
  } = req.body;

  try {
    const camera = await prisma.camera.create({
      data: {
        name,
        number,
        companyName,
        type,
        model,
        serialNo,
        range,
        location,
        sharing,
        userId,
      },
    });

    res.status(201).json({ camera });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating camera" });
  }
});

app.post("/edit/camera", async (req, res) => {
  const {
    id,
    name,
    number,
    companyName,
    type,
    model,
    serialNo,
    range,
    location,
    sharing,
  } = req.body;

  try {
    const updatedCamera = await prisma.camera.update({
      where: { id },
      data: {
        name,
        number,
        companyName,
        type,
        model,
        serialNo,
        range,
        location,
        sharing,
      },
    });

    res.status(200).json({ camera: updatedCamera });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating camera" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
