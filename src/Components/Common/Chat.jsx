import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../App";
import api from "../Config/axios";

function Chat() {
  const [messages, setMessages] = useState([]); // Array to store chat messages
  const [newMessage, setNewMessage] = useState(""); // Input field value
  const { chats, userData } = useContext(DataContext); // Get current user data
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      if (chats.length === 0) return; // Prevent unnecessary calls
      try {
        const receiverEmail = chats[0]?.email || chats?.user?.email;
        if (!receiverEmail) return; // Prevent errors

        const resp = await api.get(
          `/chats/get-messages?receiverEmail=${receiverEmail}`
        );
        if (resp.data !== "No messages found!") {
          setMessages(resp.data);
        }
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    // Initial Fetch
    fetchMessages();

    // **Set Interval for Auto-Refresh**
    intervalRef.current = setInterval(fetchMessages, 5000); // Fetch every 5 seconds instead of 2

    // **Cleanup interval on component unmount**
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [chats, userData.email]);

  // ** Handle Sending a New Message **
  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const messageObject = {
        sender: userData.email,
        receiver: chats[0]?.email || chats?.user?.email,
        content: newMessage,
      };

      // Optimistic UI update (show message immediately)
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...messageObject, timestamp: new Date().toISOString() },
      ]);

      try {
        await api.post("/chats/send-message", messageObject);
        setNewMessage(""); // Clear the input field after successful send
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };
  return (
    <div className="absolute right-16 top-36 chat-box w-[75vw] h-[600px] bg-white border-2 border-orange-100 rounded-3xl shadow-md flex flex-col">
      {/* Header */}
      <div className="chat-header flex items-center gap-4 p-4 border-b border-gray-200">
        <img
          src={
            chats[0]?.profile_pic ||
            chats[0]?.user?.profile_pic ||
            chats?.user?.profile_pic
          }
          alt={`${
            chats[0]?.fname || chats?.user?.fname + " " + chats[0]?.lname
          }'s profile`}
          className="w-10 h-10 rounded-full"
        />
        <p className="font-Manrope text-[16px] font-medium">
          {chats[0]?.fname ||
          (chats?.user?.fname && chats[0]?.lname) ||
          chats?.user?.lname
            ? `${
                chats[0]?.fname?.toUpperCase() ||
                chats?.user?.fname?.toUpperCase()
              } ${
                chats[0]?.lname?.toUpperCase() ||
                chats?.user?.lname?.toUpperCase()
              }`
            : chats[0]?.user && chats[0]?.user?.fname && chats[0]?.user?.lname
            ? `${chats[0]?.user?.fname?.toUpperCase()} ${chats[0]?.user?.lname?.toUpperCase()}`
            : chats[0]?.fname
            ? chats[0]?.fname?.toUpperCase()
            : chats[0]?.user?.fname?.toUpperCase() || ""}
        </p>
      </div>

      {/* Message Body */}
      <div className="chat-body flex-1 p-4 overflow-y-auto flex flex-col">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              key={index}
              className={`message mb-2 p-4 rounded-xl w-[50%] max-w-[60%] ${
                message.sender === userData.email
                  ? "bg-blue-100 text-blue-900 self-end"
                  : "bg-gray-100 text-gray-800 self-start"
              }`}
            >
              <p className="font-Manrope text-[14px]">{message.content}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(message.timestamp).toLocaleTimeString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No messages yet</p>
        )}
      </div>

      {/* Input Box */}
      <div className="chat-input p-4 border-t border-gray-200 flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
          className="flex-1 border border-orange-400 rounded-full p-2 outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-orange-400 rounded-full text-white p-4 py-2 w-[100px] h-[45px] flex justify-center items-center hover:bg-orange-600 transition"
        >
          <img src="./send.png" className="w-[30px] h-[30px]" alt="Send" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
