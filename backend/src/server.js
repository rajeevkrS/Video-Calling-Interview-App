import express from "express";
import cors from "cors";
import { serve } from "inngest/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors());

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is running 1234" });
});

app.listen(ENV.PORT, () => {
  console.log("Server is running on port:", ENV.PORT);
  connectDB();
});
