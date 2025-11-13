import { Inngest, inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

// Initialize Inngest with a unique ID
export const inngest = new Inngest({ id: "talent-iq" });

// Function to sync user data from Clerk to our database
const syncUser = inngest.createFunction(
  {
    id: "sync-user",
  },

  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: image_url,
    };

    await User.create(newUser);
  }
);

// Function to delete user data from our database when a user is deleted in Clerk
const deleteUserfromDB = inngest.createFunction(
  {
    id: "delete-user-user-db",
  },

  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();

    const { id } = event.data;

    await User.deleteMany({ clerkId: id });

    await User.create(newUser);
  }
);

export const functions = [syncUser, deleteUserfromDB];
