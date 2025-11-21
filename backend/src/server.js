import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

const app = express();

await connectDB();

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware()); // this adds auth field to req object: req.auth()

// Inngest endpoint to handle functions
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is running" });
});

app.listen(ENV.PORT, () => {
  console.log("Server is running on port:", ENV.PORT);
});
