import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    // check if DB_URL is defined
    if (!ENV.DB_URL) {
      throw new Error("DB_URL is not defined in environment variables");
    }

    // connect to MongoDB
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log("✅DB Connected:", conn.connection.host);
  } catch (error) {
    console.log("❎DB Connection Error: ", error);
    process.exit(1); // 0 means success, 1 means failure
  }
};
