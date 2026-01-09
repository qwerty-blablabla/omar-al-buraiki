/* eslint-env node */
import process from "node:process";
import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to the config file
const configPath = path.join(__dirname, "config", "navbar.json");

// Ensure config directory exists
const configDir = path.dirname(configPath);
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

// Ensure config file exists with default values
if (!fs.existsSync(configPath)) {
  const defaultConfig = {
    items: [
      { id: "home", label: "Home", path: "/", visible: true },
      {
        id: "publications",
        label: "Publications",
        path: "/publications",
        visible: true,
      },
      {
        id: "research",
        label: "Research Projects",
        path: "/research",
        visible: true,
      },
      { id: "members", label: "Members", path: "/members", visible: true },
      {
        id: "students",
        label: "Prospective Students",
        path: "#",
        visible: false,
      },
      {
        id: "software",
        label: "Software and Datasets",
        path: "#",
        visible: false,
      },
      { id: "youtube", label: "YouTube", path: "#", visible: false },
    ],
  };

  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
}

// GET /api/navbar-config
app.get("/api/navbar-config", (req, res) => {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    res.json(config);
  } catch (error) {
    console.error("Error reading navbar config:", error);
    res.status(500).json({ error: "Failed to read navbar configuration" });
  }
});

// POST /api/navbar-config
app.post("/api/navbar-config", (req, res) => {
  try {
    // Validate the request body
    if (!req.body || !req.body.items || !Array.isArray(req.body.items)) {
      return res.status(400).json({ error: "Invalid configuration format" });
    }

    // Validate each item
    for (const item of req.body.items) {
      if (!item.id || !item.label || typeof item.visible !== "boolean") {
        return res.status(400).json({ error: "Invalid item format" });
      }
    }

    // Write the configuration to file
    fs.writeFileSync(configPath, JSON.stringify(req.body, null, 2));

    console.log("Navbar configuration updated:", req.body);
    res.json({ success: true, message: "Configuration updated successfully" });
  } catch (error) {
    console.error("Error updating navbar config:", error);
    res.status(500).json({ error: "Failed to update navbar configuration" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, _next) => {
  void _next;
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints available at:`);
  console.log(`  GET  http://localhost:${PORT}/api/navbar-config`);
  console.log(`  POST http://localhost:${PORT}/api/navbar-config`);
  console.log(`  GET  http://localhost:${PORT}/api/health`);
});
