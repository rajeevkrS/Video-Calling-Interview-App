import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

// Initialize Stream Chat client
const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_SECRET_KEY;

// Check if API key and Secret key are available for initialization
if (!apiKey || !apiSecret) {
  console.error(" Stream API key or Secret key is missing!");
}

// Create and export the Stream Chat client instance
export const chatClinet = StreamChat.getInstance(apiKey, apiSecret);

// Function to upsert (create or update) a user in Stream
export const upsertStreamUser = async (userData) => {
  try {
    // upsertUsers method to create or update user
    await chatClinet.upsertUsers([userData]);
    console.log("Stream user upseted successfully: ", userData);
  } catch (error) {
    console.error("Error upsert Stream user: ", error);
  }
};

// Function to delete a user from Stream
export const deleteStreamUser = async (userId) => {
  try {
    // deleteUser method to remove user
    await chatClinet.deleteUser([userId]);
    console.log("Stream user deleted successfully: ", userId);
  } catch (error) {
    console.error("Error deleting the Stream user: ", error);
  }
};
