import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

// Middleware to protect routes and ensure only authenticated users can access
export const protectRoute = [
  // Middleware to ensure the user is authenticated with clerk
  requireAuth(),

  // Middleware to fetch and attach user data to the request object
  async (req, res, next) => {
    try {
      // Get Clerk user ID from the authenticated request
      const clerkId = req.auth().userId;

      if (!clerkId)
        return res.status(401).json({ msg: "Unauthorized- invalid token!" });

      // find user in db by clerk ID
      const user = await User.findOne({ clerkId });

      if (!user) return res.status(404).json({ msg: "User not found!" });

      // Attach user data to the request object
      req.user = user;

      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware: ", error);
    }
  },
];
