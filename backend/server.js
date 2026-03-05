import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routes from "./routes/lostFoundRoutes.js";

dotenv.config();

const app = express();

// CORS FIX
app.use(cors({
  origin: "https://campus-lost-found-frontend-tle2.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Mongo Connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
})
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log("DB Connection Error:", err));

// Routes
app.use("/api", routes);

// Health Check
app.get("/", (req, res) => {
  res.send("Lost & Found Backend Running");
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});