import express from "express";
import dotenv from "dotenv";
import { db } from "./db";
import cors from "cors";

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
        number: parseInt(data.number),
        companyName: data.company,
        type: data.type,
        model: data.model,
        serialNo: data.serialNo,
        range: data.range,
        location: data.location,
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
        number: parseInt(data.number),
        companyName: data.company,
        type: data.type,
        model: data.model,
        serialNo: data.serialNo,
        range: data.range,
        location: data.location,
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
