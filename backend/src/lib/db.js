import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log("✅DB Connected:", conn.connection.host);
  } catch (error) {
    console.log("❎DB Connection Error: ", error);
    process.exit(1); // 0 means success, 1 means failure
  }
};
