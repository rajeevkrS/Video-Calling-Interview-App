import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

// Initialize Inngest with a unique ID
export const inngest = new Inngest({ id: "talent-iq" });

// Function to sync user data from Clerk to our database
const syncUser = inngest.createFunction(
  // Function ID
  { id: "sync-user" },

  // Event trigger
  { event: "clerk/user.created" },

  // Handler to process the event
  async ({ event }) => {
    await connectDB();

    // Extract user data from the event payload
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;

    // Create a new user object to be stored in our database
    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: image_url,
    };

    // Save the new user to the database
    await User.create(newUser);

    // Also upsert the user in Stream
    await upsertStreamUser({
      id: newUser.clerkId.toString(),
      name: newUser.name,
      image: newUser.profileImage,
    });
  }
);

// Function to delete user data from our database when a user is deleted in Clerk
const deleteUserfromDB = inngest.createFunction(
  // Function ID
  { id: "delete-user-user-db" },

  // Event trigger
  { event: "clerk/user.deleted" },

  // Handler to process the event
  async ({ event }) => {
    await connectDB();

    // Extract user ID from the event payload
    const { id } = event.data;

    // Delete the user from our database
    await User.deleteMany({ clerkId: id });

    // Also delete the user from Stream
    await deleteStreamUser(id.toString());
  }
);

export const functions = [syncUser, deleteUserfromDB];
