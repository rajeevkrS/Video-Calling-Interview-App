import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is running 1234" });
});

app.listen(ENV.PORT, () => {
  console.log("Server is running on port:, ", ENV.PORT);
  connectDB();
});
