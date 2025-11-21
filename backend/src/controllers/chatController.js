import { chatClinet } from "../lib/stream.js";

// Controller to generate and return a Stream token for the authenticated user
export async function getStreamToken(req, res) {
  try {
    // Generate a Stream token for the authenticated user using their Clerk ID (not mongoDB ID) for Stream => it should match the ID we have in the stream dashborad
    const token = chatClinet.createToken(req.user.clerkId);

    // Return the token along with user details
    res.status(200).json({
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image,
    });
  } catch (error) {
    console.error("Error generating Stream token: ", error);
    res.status(500).json({ msg: "Server error generating Stream token" });
  }
}
