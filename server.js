import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load local environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// 🍃 MongoDB Database Connection Setup
if (!MONGODB_URI) {
  console.error("❌ ERROR: MONGODB_URI environment variable is missing in .env file!");
  console.log("ℹ️ Server starting in DEMO MODE without database storage.");
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("🍃 MongoDB Atlas database connected successfully!"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

// 🏛️ Define Mongoose Schemas & Models
const AdmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: String, required: true },
  phone: { type: String, required: true },
  class: { type: String, required: true },
  village: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Admission = mongoose.model("Admission", AdmissionSchema);
const Contact = mongoose.model("Contact", ContactSchema);

// 🌐 API Routes

// Status check endpoint
app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

// Save Admission Inquiry
app.post("/api/admissions", async (req, res) => {
  const { name, parent, phone, class: className, village } = req.body;

  if (!name || !parent || !phone || !className) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    if (mongoose.connection.readyState !== 1) {
      throw new Error("Database not connected");
    }

    const newInquiry = new Admission({ name, parent, phone, class: className, village });
    const saved = await newInquiry.save();
    console.log("💾 Admission Inquiry saved successfully to MongoDB:", saved.name);
    res.status(201).json({ success: true, id: saved._id });
  } catch (error) {
    console.error("Error saving admission enquiry to database:", error.message);
    res.status(500).json({ error: "Server Database error saving inquiry" });
  }
});

// Save Contact Message
app.post("/api/contacts", async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    if (mongoose.connection.readyState !== 1) {
      throw new Error("Database not connected");
    }

    const newMessage = new Contact({ name, phone, message });
    const saved = await newMessage.save();
    console.log("💾 Contact Message saved successfully to MongoDB:", saved.name);
    res.status(201).json({ success: true, id: saved._id });
  } catch (error) {
    console.error("Error saving contact message to database:", error.message);
    res.status(500).json({ error: "Server Database error saving message" });
  }
});

// Launch server listener
app.listen(PORT, () => {
  console.log(`🚀 S.R.R. Scholar Convent Express Server running on port ${PORT}`);
  console.log(`🔗 API endpoints active: http://localhost:${PORT}/api`);
});
