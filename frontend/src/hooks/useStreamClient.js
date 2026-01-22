import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

// This custom hook sets up and manages Stream video call + chat for a session.
function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;

    const initCall = async () => {
      if (!session?.callId) return;
      if (!isHost && !isParticipant) return;
      if (session.status === "completed") return;

      try {
        const { token, userId, userName, userImage } =
          await sessionApi.getStreamToken();

        // Creates Stream video client & Authenticates user
        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token,
        );

        setStreamClient(client);

        // Join video call
        videoCall = client.call("default", session.callId);

        // prevent duplicate joins
        if (videoCall.state.callingState === "joined") {
          setCall(videoCall);
          return;
        }

        await videoCall.join({ create: true });
        setCall(videoCall);

        // Initialize Stream Chat
        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        // Connect user to chat
        await chatClientInstance.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token,
        );

        setChatClient(chatClientInstance);

        // Create & watch chat channel
        const chatChannel = chatClientInstance.channel(
          "messaging",
          session.callId,
        );

        await chatChannel.watch();

        setChannel(chatChannel);
      } catch (error) {
        toast.error("Failed to join video call!");
        console.error("Error init call: ", error);
      } finally {
        setIsInitializingCall(false);
      }
    };

    // Prevents running before session data is ready
    if (session && !loadingSession) initCall();

    // cleanup - performance reason
    return () => {
      // iife func
      (async () => {
        try {
          if (videoCall) await videoCall.leave();
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          await disconnectStreamClient();
        } catch (error) {
          console.error("Cleanup error: ", error);
        }
      })();
    };
  }, [session, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;
