import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load local environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:4173", "*"] }));
app.use(express.json());

// ─── MongoDB Connection ────────────────────────────────────────────────────────
let dbConnected = false;

if (!MONGODB_URI || MONGODB_URI === "YOUR_MONGODB_ATLAS_CONNECTION_STRING") {
  console.error("❌  MONGODB_URI is not set in .env file!");
  console.log("ℹ️   Server running in OFFLINE MODE — data will NOT be saved to MongoDB.");
  console.log("ℹ️   Set MONGODB_URI in .env and restart the server.\n");
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      dbConnected = true;
      console.log("🍃 MongoDB Atlas connected successfully!");
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed:", err.message);
      console.log("ℹ️   Check your MONGODB_URI in .env and make sure your IP is whitelisted in Atlas.");
    });
}

// ─── Mongoose Schemas & Models ─────────────────────────────────────────────────

const AdmissionSchema = new mongoose.Schema({
  studentName:  { type: String, required: true, trim: true },
  parentName:   { type: String, required: true, trim: true },
  phone:        { type: String, required: true, trim: true },
  className:    { type: String, required: true, trim: true },
  village:      { type: String, default: "", trim: true },
  createdAt:    { type: Date, default: Date.now }
});

const ContactSchema = new mongoose.Schema({
  name:       { type: String, required: true, trim: true },
  phone:      { type: String, required: true, trim: true },
  message:    { type: String, required: true, trim: true },
  createdAt:  { type: Date, default: Date.now }
});

const Admission = mongoose.model("Admission", AdmissionSchema);
const Contact   = mongoose.model("Contact",   ContactSchema);

// ─── Helper ────────────────────────────────────────────────────────────────────
function isDbReady() {
  return mongoose.connection.readyState === 1;
}

// ═══════════════════════════════════════════════════════════════════════════════
//  API ROUTES
// ═══════════════════════════════════════════════════════════════════════════════

// ── Status Check ───────────────────────────────────────────────────────────────
app.get("/api/status", (req, res) => {
  res.json({
    status:   "online",
    database: isDbReady() ? "connected" : "disconnected",
    message:  isDbReady()
      ? "✅ Server & MongoDB are both online. Data will be saved."
      : "⚠️ Server online but MongoDB is not connected. Check MONGODB_URI in .env"
  });
});

// ── Save Admission Inquiry ─────────────────────────────────────────────────────
app.post("/api/admissions", async (req, res) => {
  const { name, parent, phone, class: className, village } = req.body;

  // Validate required fields
  if (!name || !parent || !phone || !className) {
    return res.status(400).json({
      error: "Missing required fields: name, parent, phone, class are all required."
    });
  }

  if (!isDbReady()) {
    return res.status(503).json({
      error: "Database not connected. Check MONGODB_URI in .env file and restart the server."
    });
  }

  try {
    const entry = new Admission({
      studentName: name,
      parentName:  parent,
      phone,
      className,
      village: village || ""
    });
    const saved = await entry.save();
    console.log(`💾 [ADMISSION] Saved → Student: "${saved.studentName}" | Phone: ${saved.phone} | Class: ${saved.className}`);
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    console.error("❌ Error saving admission:", err.message);
    res.status(500).json({ error: "Failed to save admission inquiry. Please try again." });
  }
});

// ── Save Contact Message ───────────────────────────────────────────────────────
app.post("/api/contacts", async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({
      error: "Missing required fields: name, phone, and message are all required."
    });
  }

  if (!isDbReady()) {
    return res.status(503).json({
      error: "Database not connected. Check MONGODB_URI in .env file and restart the server."
    });
  }

  try {
    const entry = new Contact({ name, phone, message });
    const saved = await entry.save();
    console.log(`💾 [CONTACT] Saved → Name: "${saved.name}" | Phone: ${saved.phone}`);
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    console.error("❌ Error saving contact message:", err.message);
    res.status(500).json({ error: "Failed to save contact message. Please try again." });
  }
});

// ── Admin: View All Admissions ─────────────────────────────────────────────────
app.get("/api/admin/admissions", async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database not connected." });
  }
  try {
    const all = await Admission.find().sort({ createdAt: -1 });
    res.json({ count: all.length, data: all });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch admissions." });
  }
});

// ── Admin: View All Contacts ───────────────────────────────────────────────────
app.get("/api/admin/contacts", async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database not connected." });
  }
  try {
    const all = await Contact.find().sort({ createdAt: -1 });
    res.json({ count: all.length, data: all });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts." });
  }
});

// ── Admin: Delete a single submission ─────────────────────────────────────────
app.delete("/api/admin/admissions/:id", async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: "Database not connected." });
  try {
    await Admission.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete." });
  }
});

app.delete("/api/admin/contacts/:id", async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: "Database not connected." });
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete." });
  }
});

// ─── Start Server ──────────────────────────────────────────────────────────────
const server = app.listen(PORT, () => {
  console.log("\n════════════════════════════════════════════════════");
  console.log(`🚀  SRR Convent Express Server running on port ${PORT}`);
  console.log(`🔗  Status:    http://localhost:${PORT}/api/status`);
  console.log(`📋  Admissions: http://localhost:${PORT}/api/admin/admissions`);
  console.log(`📋  Contacts:   http://localhost:${PORT}/api/admin/contacts`);
  console.log("════════════════════════════════════════════════════\n");
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\n🛑 Shutting down server...");
  await mongoose.connection.close();
  server.close(() => {
    console.log("✅ Server stopped cleanly.");
    process.exit(0);
  });
});
