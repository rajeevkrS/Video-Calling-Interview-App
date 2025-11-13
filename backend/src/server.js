import express from "express";
import cors from "cors";
import path from "path";
import { serve } from "inngest/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors());

// Get __dirname in ES modules context for static file serving for production
const __dirname = path.resolve();

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/hello", (req, res) => {
  res.status(200).json({ msg: "Hello Server is running" });
});

app.get("/dev", (req, res) => {
  res.status(200).json({ msg: "Dev Server" });
});

// make ready for deployment
if (ENV.NODE_ENV === "production") {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // AFTER defining routes: Anything that doesn't match the above, send back index.html so react-router renders the route in the frontend
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log("Server is running on port:", ENV.PORT);
  connectDB();
});
