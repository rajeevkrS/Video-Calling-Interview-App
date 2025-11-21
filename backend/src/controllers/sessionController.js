import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";

// Create a new session
export async function createSession(req, res) {
  try {
    // Extract problem and difficulty from request body
    const { problem, difficulty } = req.body;

    // Get user ID from the authenticated request
    const userId = req.user._id;

    // Get clerk ID from the authenticated request
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty) {
      return res
        .status(400)
        .json({ message: "Problem and difficulty are required!" });
    }

    // Generate a unique call id for stream video call
    const callId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substring(7)}`;

    // Create new session in the database
    const session = await Session({
      problem,
      difficulty,
      host: userId,
      callId,
    });

    // Create stream video call
    // getOrCreate() method to create or get existing video call
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty, sessionId: session._id.toString() },
      },
    });

    // Create chat message channel for the session
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();

    // // Save session to the database
    // await session.save();

    res.status(201).json({ session });
  } catch (error) {
    console.error("Error creating session: ", error.message);
    res.status(500).json({ message: "Server error while creating session" });
  }
}

// Get active sessions
export async function getActiveSessions(req, res) {
  try {
    // Fetch active sessions from the database and populate host details from User model like name, email
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.error("Error fetching active sessions: ", error.message);
    res
      .status(500)
      .json({ message: "Server error while fetching active sessions" });
  }
}

// Get my recent sessions
export async function getMyRecentSessions(req, res) {
  try {
    // Get user ID from the authenticated request
    const userId = req.user._id;

    // get completed sessions where user is either host or participant
    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.error("Error fetching recent sessions: ", error.message);
    res
      .status(500)
      .json({ message: "Server error while fetching recent sessions" });
  }
}

// Get session by ID
export async function getSessionById(req, res) {
  try {
    // Extract session ID from request parameters
    const { id } = req.params;

    // Fetch session by ID and populate host and participant details
    const session = await Session.findById(id)
      .populate("host", "name email")
      .populate("participant", "name email");

    if (!session) {
      return res.status(404).json({ message: "Session not found!" });
    }

    res.status(200).json({ session });
  } catch (error) {
    console.error("Error fetching session by ID: ", error.message);
    res
      .status(500)
      .json({ message: "Server error while fetching session by ID" });
  }
}

// Join a session method
export async function joinSession(req, res) {
  try {
    // Extract session ID from request parameters
    const { id } = req.params;

    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    // Find session by ID
    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // check if session is already full- has a participant
    if (session.participant) {
      return res.status(404).json({ message: "Session is full" });
    }

    // Add participant to stream video call
    session.participant = userId;

    await session.save();

    // Add user to chat channel members
    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    res.status(200).json({ session });
  } catch (error) {
    console.error("Error joining session: ", error.message);
    res.status(500).json({ message: "Server error while joining session" });
  }
}

// End a session method
export async function endSession(req, res) {
  try {
    // Extract session ID from request parameters
    const { id } = req.params;

    const userId = req.user._id;

    // Find session by ID
    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // check if user is host of the session
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only host can end the session" });
    }

    // check if session is already completed
    if (session.status == "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    // Mark session as completed
    session.status = "completed";

    await session.save();

    // Delete stream video call
    const call = streamClient.video.call("default", session.callId);
    await call.delete({ hard: true });

    // Delete chat messaging channel
    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete();

    res.status(200).json({ message: "Session ended successfully", session });
  } catch (error) {
    console.error("Error ending session: ", error.message);
    res.status(500).json({ message: "Server error while ending session" });
  }
}
